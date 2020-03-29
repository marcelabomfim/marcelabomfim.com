import data from 'assets/dataEN.json';

export default {
  // menu
  'menu.about': 'About me',
  'menu.portfolio': 'Portfolio',
  'menu.contact': 'Contact',
  'menu.close': 'Close menu',
  'menu.open': 'Open menu',
  'menu.message': '<a>Open source</a> personal portfolio',

  // locale
  'locale.change': 'Change language',
  'locale.toEN': 'Change language to English',
  'locale.toPT': 'Change language to Portuguese',

  // hero
  'hero.developer': 'Front-End Developer',

  // about
  'about.hello': 'Hey',
  'about.iam': 'I am Marcela Bomfim',
  'about.imgAlt': 'Pleasure, Marcela Bomfim!',
  'about.text': data.about,

  // skills
  'skills.title': 'Skills',
  'skills.solid': 'Solid knowledge in:',
  'skills.experience': 'I have experience with:',
  'skills.english': 'English level:',

  // experience
  'experience.title': 'Professional Experiences',
  'experience.academic': 'Academic',
  'experience.techs': 'Technologies and Skills:',
  'experience.experienceList': JSON.stringify(data.experiences),
  'experience.academicList': JSON.stringify(data.academic)
};
