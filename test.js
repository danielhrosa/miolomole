const fs = require("fs");
const path = require("path");
const csvWriter = require("csv-writer");

const INPUT_FILE = "s3_links_with_sizes.json";
const OUTPUT_FILE = "file_sizes.csv";

// Função para extrair _key e size
function extractKeysAndSizes(obj, pathPrefix = "") {
  let entries = [];

  if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        entries = entries.concat(extractKeysAndSizes(item, `${pathPrefix}[${index}]`));
      });
    } else {
      for (const [key, value] of Object.entries(obj)) {
        entries = entries.concat(extractKeysAndSizes(value, pathPrefix ? `${pathPrefix}.${key}` : key));
      }
    }
  } else if (key === "size" && obj && typeof obj === "number") {
    entries.push({ key: pathPrefix, size: obj });
  }

  return entries;
}

// Função principal para gerar CSV
function generateCSV() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`❌ Arquivo ${INPUT_FILE} não encontrado.`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(INPUT_FILE, "utf-8"));

  // Extrair todos os pares _key e size
  const entries = extractKeysAndSizes(data);

  // Criando o escritor de CSV
  const writer = csvWriter.createObjectCsvWriter({
    path: OUTPUT_FILE,
    header: [
      { id: "key", title: "_key" },
      { id: "size", title: "size" },
    ],
  });

  writer.writeRecords(entries)
    .then(() => console.log(`📂 CSV gerado com sucesso: ${OUTPUT_FILE}`))
    .catch((err) => console.error(`❌ Erro ao gerar CSV: ${err}`));
}

// Executar a geração do CSV
generateCSV();
