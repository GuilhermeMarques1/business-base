import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as csvtojson from 'csvtojson';
import * as xlsx from 'xlsx';
import { IFile } from 'src/types/IFile';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    let data: IFile[];

    if (file.mimetype === 'text/csv') {
      data = await this.parseCSV(file.buffer);
    } else if (
      file.mimetype ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      data = await this.parseXLSX(file.buffer);
    }

    const jsonData = this.calculateMRR(data);
    return jsonData;
  }

  async parseCSV(fileBuffer: Buffer): Promise<IFile[]> {
    const fileString = fileBuffer.toString('utf-8');
    const data = await csvtojson().fromString(fileString);

    return data as IFile[];
  }

  async parseXLSX(fileBuffer: Buffer): Promise<IFile[]> {
    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const header = workbook.SheetNames[0];
    const ws = workbook.Sheets[header];
    const data = xlsx.utils.sheet_to_json(ws);

    return data as IFile[];
  }

  calculateMRR(data: IFile[]) {
    const Months = {
      '1': 'jan',
      '2': 'fev',
      '3': 'mar',
      '4': 'abr',
      '5': 'maio',
      '6': 'jun',
      '7': 'jul',
      '8': 'ago',
      '9': 'set',
      '10': 'out',
      '11': 'nov',
      '12': 'dez',
    };
    const dataByMonth = {};
    let canceledUsers = 0;

    data.forEach((user) => {
      if (user.status != 'Ativa') canceledUsers++;

      if (user['quantidade cobranças'] == 0) return;
      user.valor = String(user.valor);

      let yearBeggining;
      let monthBeggining;
      if (String(user['data início']).includes('/')) {
        monthBeggining = String(user['data início']).split('/')[0];
        const yearFull = String(user['data início'].split('/')[2]);
        yearBeggining = '20' + yearFull.split(' ')[0];
      } else {
        const excelDateNumber = user['data início'];
        monthBeggining =
          new Date((excelDateNumber - 25569) * 86400 * 1000).getMonth() + 1;
        yearBeggining = new Date(
          (excelDateNumber - 25569) * 86400 * 1000,
        ).getFullYear();
      }
      dataByMonth[`${Months[String(monthBeggining)]} ${yearBeggining}`] =
        dataByMonth[`${Months[String(monthBeggining)]} ${yearBeggining}`]
          ? dataByMonth[`${Months[String(monthBeggining)]} ${yearBeggining}`] +
            parseFloat(user.valor.replace(',', '.'))
          : parseFloat(user.valor.replace(',', '.'));

      for (let i = 1; i <= Number(user['quantidade cobranças']); i++) {
        let month = String(Number(monthBeggining) + i);
        let year = yearBeggining;
        if (Number(month) > 12) {
          month = '1';
          year = Number(yearBeggining) + 1;
        }

        dataByMonth[`${Months[String(Number(month))]} ${year}`] = dataByMonth[
          `${Months[String(Number(month))]} ${year}`
        ]
          ? dataByMonth[`${Months[String(Number(month))]} ${year}`] +
            parseFloat(user.valor.replace(',', '.'))
          : parseFloat(user.valor.replace(',', '.'));
      }
    });

    const mesesOrdenaveis = Object.keys(dataByMonth).map((chave) => {
      const [mes, ano] = chave.split(' ');
      const mesNumerico = new Date(Date.parse(`${mes} 1, ${ano}`)).getMonth();
      return { chave, mesNumerico };
    });

    // Ordenando os meses
    mesesOrdenaveis.sort((a, b) => a.mesNumerico - b.mesNumerico);

    // Criando um novo objeto ordenado
    const objetoOrdenado = {};
    mesesOrdenaveis.forEach(({ chave }) => {
      objetoOrdenado[chave] = data[chave];
    });

    let total = 0;
    Object.keys(dataByMonth).forEach((data) => {
      objetoOrdenado[data] = dataByMonth[data];
      total += dataByMonth[data];
    });

    return {
      labels: Object.keys(objetoOrdenado),
      data: Object.values(objetoOrdenado),
      customers: data.length,
      total: Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(total),
      churn: ((canceledUsers / data.length) * 100).toFixed(2),
    };
  }
}
