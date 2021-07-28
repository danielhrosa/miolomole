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
        source: '/o-sonho-da-buyua-wasu-versao-audiovisual',
        destination: '/livros/o-sonho-da-buya-wasu/audioacessivel',
        permanent: true,
      },
      {
        source: '/o-sonho-da-buyuassu-cancao-da-cobra-grande',
        destination: '/livros/o-sonho-da-buya-wasu/musicas',
        permanent: true,
      },
      {
        source: '/o-sonho-da-buyuassu-canção-da-cobra-grande',
        destination: '/livros/o-sonho-da-buya-wasu/musicas',
        permanent: true,
      },
      {
        source: '/o-sonho-da-buyuassu-canc%cc%a7a%cc%83o-da-cobra-grande',
        destination: '/livros/o-sonho-da-buya-wasu/musicas',
        permanent: true,
      },
      {
        source: '/bhadra-musica',
        destination: '/livros/bhadra-o-principe-e-o-conselheiro/musicas',
        permanent: true,
      },
      {
        source: '/o-seu-menino-musica',
        destination: '/livros/o-seu-menino/musicas',
        permanent: true,
      },
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
      {
        source: '/o-amor-e-lilas-audiovisual',
        destination: '/livros/o-amor-e-lilas/audioacessivel',
        permanent: true,
      },
      {
        source: '/demonho-versao-audioacessivel',
        destination: '/livros/demonho/audioacessivel',
        permanent: true,
      },
      {
        source: '/folhinhas-versao-audiovisual',
        destination: '/livros/folhinhas/audioacessivel',
        permanent: true,
      },
      {
        source: '/garoto-avatar-versao-audiovisual-acessivel',
        destination: '/livros/garoto-avatar/audioacessivel',
        permanent: true,
      },
      {
        source: '/girafa-versao-audiovisual',
        destination: '/livros/girafa/audioacessivel',
        permanent: true,
      },
      {
        source: '/lourenco-um-bicho-quase-papao-audiovisual',
        destination: '/livros/lourenco-um-bicho-quase-papao/audioacessivel',
        permanent: true,
      },
      {
        source: '/o-medo-que-a-gente-tem-versao-audiovisual',
        destination: '/livros/o-medo-que-a-gente-tem/audioacessivel',
        permanent: true,
      },
      {
        source: '/namarama-audiovisual',
        destination: '/livros/namarama/audioacessivel',
        permanent: true,
      },
      {
        source: '/a-nuvem-versao-audiovisual',
        destination: '/livros/a-nuvem/audioacessivel',
        permanent: true,
      },
      {
        source: '/as-aventuras-de-ralf-e-carlos-versao-audiovisual',
        destination: '/livros/as-aventuras-de-ralf-e-carlos-no-mundo-da-lua/audioacessivel',
        permanent: true,
      },
      {
        source: '/o-seu-menino-versao-audiovisual',
        destination: '/livros/o-seu-menino/audioacessivel',
        permanent: true,
      },
      {
        source: '/tigres-do-rio-versao-audioacessivel',
        destination: '/livros/tigres-do-rio/audioacessivel',
        permanent: true,
      },
      {
        source: '/bhadra-versao-audiovisual-acessivel',
        destination: '/livros/bhadra-o-principe-e-o-conselheiro/audioacessivel',
        permanent: true,
      },
    ]
  },
});