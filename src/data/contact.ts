export type ContactDTO = {
  name: string;
  link: string;
  logo: string;
};

export const contacts: ContactDTO[] = [
  {
    name: 'Github',
    link: 'https://github.com/hzc011213',
    logo: '/assets/logo/github.png',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/jimmy-hao-011213hzc/',
    logo: '/assets/logo/linkedin.png',
  },
  {
    name: 'Email',
    link: 'mailto:hzc011213@gmail.com',
    logo: '/assets/logo/mail.png',
  },
];
