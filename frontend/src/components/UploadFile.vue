<template>
  <div class="border border-dashed border-gray-400 rounded-lg p-14 mb-14">
    <div class="flex items-center justify-center mb-4">
      <label for="fileInput" class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12a1 1 0 0 1-1-1V3H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8a1 1 0 0 1-1-1z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M15 10a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
      <input
        type="file"
        id="fileInput"
        class="hidden"
        accept=".csv,.xlsx"
        @change="handleFileUpload"
      />
      <span class="ml-2">Clique ou arraste arquivos aqui</span>
    </div>
    <div class="text-sm text-gray-500 mb-4">
      Tamanho máximo: 10MB. Tipos de arquivo suportados: CSV, XLSX
    </div>
    <div class="text-gray-500">
      Faça o upload do seu arquivo para análise de métricas do seu negócio
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      console.log('Arquivo selecionado:', file)
    }
  }
}
</script>
