import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'
import blog4 from '../images/blog4.png'
import postJumbotron1 from '../images/postJumbotron1.png'
import banner1 from '../images/banners/banner_1.png'
import banner2 from '../images/banners/banner_2.png'
import banner3 from '../images/banners/banner_3.png'
import banner4 from '../images/banners/banner_4.png'

export default {
  BANNERS: [
    banner1,
    banner2,
    banner3,
    banner4,
  ],
  SOCIAL_ITEMS: [
    { name: "YouTube", icon: 'YouTube', link: 'https://www.youtube.com/channel/UCcrIMy76NtYb8f0H3Vmwp5Q/' },
    { name: "Facebook", icon: 'Facebook', link: 'https://www.facebook.com/editoramiolomole' },
    { name: "Instagram", icon: 'Instagram', link: 'https://www.instagram.com/editoramiolomole/' },
  ],
ADDRESS: {
  ICON: 'Address',
  LABEL: 'Praça Cornélia, 89 - Vila Romana, São Paulo - SP, 05043-030',
  HREF: 'https://maps.google.com/?q=Praça+Cornélia,+89+-+Vila+Romana,+São+Paulo+-+SP,+05043-030',
},
  
  COPYRIGHT: 'Copyright © 2021 Editora Miolo Mole. Todos os direitos reservados',
  BLOG_ARTICLES: [
    {
      ID: 1,
      IMAGE: blog1,
      JUMBOTRON: postJumbotron1,
      TITLE: 'Lorem Ipsum Lorem Ipsum',
      SHORT_DESCRIPTION: 'Teste Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.',
      CREATED_AT: '01 de agosto de 2021',
      VIEWS: '343',
    },
    {
      ID: 2,
      IMAGE: blog2,
      JUMBOTRON: postJumbotron1,
      TITLE: 'Black',
      SHORT_DESCRIPTION: 'Teste Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.',
      CREATED_AT: '23 de dezembro de 2021',
      VIEWS: '877',
      COLOR: '#000000',
    },
    {
      ID: 3,
      IMAGE: blog3,
      JUMBOTRON: postJumbotron1,
      TITLE: 'Lorem Ipsum Lorem Ip',
      SHORT_DESCRIPTION: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.',
      CREATED_AT: '01 de janeiro de 2021',
      VIEWS: '343',
    },
    {
      ID: 4,
      IMAGE: blog4,
      JUMBOTRON: postJumbotron1,
      TITLE: 'Lorem Ipsum Lorem Ip',
      SHORT_DESCRIPTION: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.',
      CREATED_AT: '23 de julho de 2021',
      VIEWS: '877',
    },
  ],
  ABOUT_US:{
    SLIDER:{
      CARDS: [
        {
          NAME: 'André Calixto',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Músico e poeta, atua como instrumentista e pesquisador de instrumentos de sopro étnico. Membro da banda “Nômade Orquestra” e autor do livro de poemas O Apanhador de Letras.',
        },
        {
          NAME: 'Caeto',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Quadrinista e ilustrador, publicou as HQs “Memória de elefante” e “Dez anos para o fim domundo” pela Cia das Letras. Adaptou o conto “A Morte de Ivan Ilitch de Liev Tolstói para quadrinhos” pela Editora Peirópolis. Tem dez livros publicados como ilustrador.',
        },
        {
          NAME: 'Edson Ikê',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Ilustrador e artista gráfico. Atualmente faz ilustrações para livros didáticos (impresso e digitais), jornais, revistas e cartazes nos quais a xilogravura é a base estética de suas produções. Ilustrou os livros “Zumbi Assombra Quem?”, “No balanço da Maré” e “Sofi, a pipa bailarina”. A galeria de arte Smith & Lens (EUA/Mississipi) expôs suas gravuras em 2016. Foi indicado para os prêmios Esso e Abril Jornalismo pela matéria que ilustrou “África e Brasil: unidos pela história e cultura” pela revista Nova Escola pela editora Abril.',
        },
        {
          NAME: 'Fanta Konate',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'É cantora, bailarina e compositora. Natural da Guiné Conacri (África), filha do Mestre Djembefolá Famoudou Konatê. Completa 15 anos de carreira internacional e residência no Brasil. É fundadora do Instituto África Viva.',
        },
        {
          NAME: 'Guilherme Pires',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Artista plástico, realiza oficinas de criação de bonecos e já participou de diversas exposições. Domina técnicas mistas e trabalha com um grande diversidade de materiais: bisquit, argila, tecido, arame, entre outros.',
        },
        {
          NAME: 'Inaiá Vilas Boas',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Ilustradora de livros infantis e grafiteira. Atualmente trabalha com comunicação visual na área de arte final.',
        },
        {
          NAME: 'Lu Vitti',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Cantora e atriz. No início de sua carreira trabalhou com teatro de bonecos na Cia. Pia Fraus; e mais recentemente esteve em cartaz com a peça musical infantil “A Cachorrada”. Tem parcerias musicais com Bocato, Rubem Farias, Filó Machado, entre outros. Seu primeiro álbum, “Lu Vitti”, foi lançado em 2016 no Sesc Pompeia com a participação de Angela Rorô.',
        },
        {
          NAME: 'Luis Kinugawa',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Musicoterapeuta e Percussionista especializado em ritmos do Oeste Africano (Guiné, Senegal). Pesquisou por dois anos na África, o tambor Djembê e a tradição Mandingue. Atualmente, coordena o “Canal África Viva” , dirige a “ Troupe Djembedon”, que acompanha a bailarina e cantora africana, Fanta Konatê',
        },
        {
          NAME: 'Moara Brasil',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Artista visual paraense. Atualmente está se dedicando à pesquisa do movimento de retomada da identidade indígena dos povos do Tapajós – mais precisamente da comunidade de Cucurunã (Santarém/Baixo Amazonas) – onde vivem os seus parentes. Hoje Moara integra a associação multiétnica WIKA KWARA (Belém/PA). Participou da Expo coletiva “Re-antropofagia”, com curadoria de Denilson Baniwa e Pedro Gradella (2019/Niterói- Centro de Artes da UFF).',
        },
        {
          NAME: 'Thaís Arcângelo',
          PICTURE: 'https://via.placeholder.com/440x440',
          DESCRIPTION: 'Artista plástica, desenvolveu projetos em arte-educação com crianças na área de desenho animado e vídeo, atualmente trabalha como educadora e realiza trabalhos paralelos com ilustração, pintura mural e serigrafia.',
        },
      ]
    },
  },
}
