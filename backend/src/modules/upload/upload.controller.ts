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

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    let data;

    if (file.mimetype === 'text/csv') {
      data = await this.parseCSV(file.buffer);
    } else if (
      file.mimetype ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      data = await this.parseXLSX(file.buffer);
    }

    console.log(data);
  }

  async parseCSV(fileBuffer: Buffer): Promise<any> {
    const fileString = fileBuffer.toString('utf-8');
    const data = await csvtojson().fromString(fileString);

    return data;
  }

  async parseXLSX(fileBuffer: Buffer) {
    console.log('BUFFER: ', fileBuffer);

    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const header = workbook.SheetNames[0];
    const ws = workbook.Sheets[header];
    const data = xlsx.utils.sheet_to_json(ws);

    return data;
  }
}
