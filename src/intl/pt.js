import data from 'assets/dataPT.json';

export default {
  // menu
  'menu.about': 'Sobre mim',
  'menu.portfolio': 'Portfolio',
  'menu.contact': 'Contato',
  'menu.close': 'Fechar menu',
  'menu.open': 'Abrir menu',
  'menu.message': 'Portfolio pessoal de <a>código aberto</a>',

  // locale
  'locale.change': 'Trocar idioma',
  'locale.toEN': 'Trocar idioma para Inglês',
  'locale.toPT': 'Trocar idioma para Português',

  // hero
  'hero.developer': 'Desenvolvedora Front-End',

  // about
  'about.hello': 'Olá',
  'about.iam': 'Eu sou a Marcela Bomfim',
  'about.imgAlt': 'Prazer, Marcela Bomfim!',
  'about.text': data.about,

  // skills
  'skills.title': 'Habilidades',
  'skills.solid': 'Sólidos conhecimentos em:',
  'skills.experience': 'Tenho experiência com:',
  'skills.english': 'Nível de Inglês:',

  // experience
  'experience.title': 'Experiências Profissionais',
  'experience.academic': 'Formação Acadêmica',
  'experience.techs': 'Tecnologias e Competências:',
  'experience.experienceList': JSON.stringify(data.experiences),
  'experience.academicList': JSON.stringify(data.academic),

  // portfolio
  'portfolio.visit': 'Visitar',
  'portfolio.list': JSON.stringify(data.portfolio),

  // contact
  'contact.title': 'Entre em Contato',
  'contact.subtitle': 'E aí, vamos bater um papo ?',
  'contact.text': 'Você pode entrar em contato comigo através das minhas redes sociais ou enviar um email para <a>{email}</a>, fácil né !?'
};
