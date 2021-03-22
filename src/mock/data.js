import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://habr.com/ru/post/511604/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Медиа Группы ПИК',
  //   info: '',
  //   info2: '',
  //   url: 'https://pik.media/',
  //   //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project2.jpg',
  //   title: 'Медиа НИУ ВШЭ',
  //   info: 'Выпуск бюллетеня Управления академического развития для сотрудников университета. В мои задачи входили интервью, согласование тем, редактура текстов, разработка инфосхем, рассылки и посты, работа с иллюстраторами и дизайнерами.',
  //   info2: '',
  //   url: 'https://okna.hse.ru/',
  //   // repo: 'https://okna.hse.ru/', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'С нуля и до деплоя',
    info: 'Как сделать и разместить статический сайт в облаке на технологиях Gatsby и Yandex.Cloud. Пошаговая инструкция деплоя сайта в облако, прикрутки к нему сертификата Let’s Encrypt, домена второго уровня и настройки API-шлюза.',
    info2: '',
    url: 'https://habr.com/ru/post/547134/',
//     repo: 'https://github.com/cobidev/react-simplefolio',// if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'svetafo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/silasvetafo/',
    },
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/silasveta',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/pub/svetlana-fomina/34/a05/902',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Svetafo/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
