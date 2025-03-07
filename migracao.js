const mongoose = require("mongoose");
const fs = require("fs");

const MONGO_URI = "mongodb+srv://mioloMole:Eurek@3307@miolomole.vsyee.mongodb.net/mioloMole?retryWrites=true&w=majority"; // Altere para sua conexão
const S3_PREFIX = "https://s3-sa-east-1"; // Prefixo que queremos encontrar

// 🔹 Conectar ao MongoDB com Mongoose
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Conectado ao MongoDB");
  } catch (error) {
    console.error("❌ Erro ao conectar no MongoDB:", error);
    process.exit(1);
  }
}

// 🔹 Obter todas as coleções do banco
async function getCollections() {
  const collections = await mongoose.connection.db.listCollections().toArray();
  return collections.map((col) => col.name);
}

// 🔹 Função para buscar URLs nos documentos
function findS3Links(obj, path = []) {
  let results = {};

  if (typeof obj === "string" && obj.startsWith(S3_PREFIX)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      const found = findS3Links(item, [...path, index]);
      if (found) {
        if (!results[path.join(".")]) results[path.join(".")] = [];
        results[path.join(".")].push(found);
      }
    });
  } else if (typeof obj === "object" && obj !== null) {
    Object.entries(obj).forEach(([key, value]) => {
      const found = findS3Links(value, [...path, key]);
      if (found) {
        results[key] = found;
      }
    });
  }

  return Object.keys(results).length > 0 ? results : null;
}

let counter = 0
// 🔹 Percorrer todas as coleções e salvar as URLs encontradas
async function findAndSaveLinks() {
  const collections = await getCollections();
  let finalResults = {};

  for (const collectionName of collections) {
    // console.log(`🔍 Buscando em: ${collectionName}`);
    const Model = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false, collection: collectionName }));

    const documents = await Model.find({}).lean(); // Traz os documentos sem overhead do Mongoose

    documents.forEach((doc) => {
      const foundLinks = findS3Links(doc);
      if (foundLinks) {
        counter += 1
        console.log(`📦 ${counter} - ${collectionName} - '${doc._id}`);
        finalResults[doc._id] = foundLinks;
      }
    });
  }

  // 🔹 Salvar no JSON
  fs.writeFileSync("s3_old_links.json", JSON.stringify(finalResults, null, 2));
  console.log("✅ Arquivo salvo como s3_old_links.json");

  // 🔹 Fechar conexão com o banco
  mongoose.connection.close();
}

// 🔹 Executar tudo
(async () => {
  await connectDB();
  await findAndSaveLinks();
})();
