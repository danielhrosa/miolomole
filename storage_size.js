const fs = require("fs");
const axios = require("axios");

const INPUT_FILE = "s3_old_links.json";
const OUTPUT_FILE = "s3_links_with_sizes.json";

let totalSize = 0;
let fileCount = 0;

async function getFileSize(url) {
  try {
    const response = await axios.head(url, { timeout: 5000 });
    const size = parseInt(response.headers["content-length"] || "0", 10);

    console.log(`✅ ${url} - ${formatSize(size)}`);

    totalSize += size;
    fileCount++;

    return size;
  } catch (error) {
    console.warn(`❌ Erro ao obter tamanho de: ${url}`);
    return null;
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

async function processFiles() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`❌ Arquivo ${INPUT_FILE} não encontrado.`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(INPUT_FILE, "utf-8"));

  let urls = [];

  function extractUrls(obj, path = []) {
    if (typeof obj === "string" && obj.startsWith("https://s3-")) {
      urls.push({ url: obj, path });
    } else if (Array.isArray(obj)) {
      obj.forEach((item, index) => extractUrls(item, [...path, index]));
    } else if (typeof obj === "object" && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => extractUrls(value, [...path, key]));
    }
  }

  extractUrls(data);

  console.log(`🔍 Encontradas ${urls.length} URLs.`);

  for (const file of urls) {
    const size = await getFileSize(file.url);
    if (size !== null) {
      file.size = size;
      file.formattedSize = formatSize(size);
    }
  }

  function insertSizes(obj, path = []) {
    if (typeof obj === "string" && obj.startsWith("https://s3-")) {
      const fileData = urls.find((f) => f.url === obj);
      return fileData ? { url: obj, size: fileData.size, formattedSize: fileData.formattedSize } : obj;
    } else if (Array.isArray(obj)) {
      return obj.map((item, index) => insertSizes(item, [...path, index]))
                .sort((a, b) => (b.size || 0) - (a.size || 0));
    } else if (typeof obj === "object" && obj !== null) {
      const newObj = {};
      for (const [key, value] of Object.entries(obj)) {
        newObj[key] = insertSizes(value, [...path, key]);
      }
      return newObj;
    }
    return obj;
  }

  const updatedData = insertSizes(data);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(updatedData, null, 2));
  console.log(`📂 Arquivo salvo como ${OUTPUT_FILE}`);

  console.log(`\n📊 Total de arquivos: ${fileCount}`);
  console.log(`📦 Tamanho total: ${formatSize(totalSize)}`);
}

processFiles();
