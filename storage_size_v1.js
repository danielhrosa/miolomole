const fs = require("fs");
const axios = require("axios");

const INPUT_FILE = "s3_old_links.json";
const OUTPUT_FILE = "s3_links_with_sizes.json";

let totalSize = 0;
let fileCount = 0;
let filesWithSizes = [];

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
  const urls = [];

  function extractUrls(obj) {
    if (typeof obj === "string" && obj.startsWith("https://s3-")) {
      urls.push(obj);
    } else if (Array.isArray(obj)) {
      obj.forEach(extractUrls);
    } else if (typeof obj === "object" && obj !== null) {
      Object.values(obj).forEach(extractUrls);
    }
  }

  Object.values(data).forEach(extractUrls);

  console.log(`🔍 Encontradas ${urls.length} URLs.`);

  for (const url of urls) {
    const size = await getFileSize(url);
    if (size !== null) {
      filesWithSizes.push({ url, size, formattedSize: formatSize(size) });
    }
  }

  filesWithSizes.sort((a, b) => b.size - a.size);

  const outputData = { ...data };

  function injectSizes(obj) {
    if (typeof obj === "string" && obj.startsWith("https://s3-")) {
      const fileInfo = filesWithSizes.find((f) => f.url === obj);
      return fileInfo ? { url: obj, size: fileInfo.size, formattedSize: fileInfo.formattedSize } : obj;
    } else if (Array.isArray(obj)) {
      return obj.map(injectSizes);
    } else if (typeof obj === "object" && obj !== null) {
      const newObj = {};
      for (const [key, value] of Object.entries(obj)) {
        newObj[key] = injectSizes(value);
      }
      return newObj;
    }
    return obj;
  }

  const updatedData = injectSizes(outputData);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(updatedData, null, 2));
  console.log(`📂 Arquivo salvo como ${OUTPUT_FILE}`);

  console.log(`\n📊 Total de arquivos: ${fileCount}`);
  console.log(`📦 Tamanho total: ${formatSize(totalSize)}`);
}

processFiles();
