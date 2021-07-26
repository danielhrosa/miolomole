const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  target: "serverless",
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/namarama-leao-cantando',
        destination: '/livros/namarama/musicas/leao-cantando',
        permanent: true,
      },
      {
        source: '/namarama-cantada',
        destination: '/livros/namarama/musicas/cantada',
        permanent: true,
      },
    ]
  },
});