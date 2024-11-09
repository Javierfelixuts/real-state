import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
      
    {
      text: 'Home',
      href: getPermalink('/#home'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },

  ],

};

export const footerData = {
  links: [
    
    {
      title: 'Company',
      links: [
        { text: 'Home', href: '#home' },
        { text: 'About', href: '#about' },
        { text: 'Services', href: '#services' },
        { text: 'projects', href: '#projects' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="src/assets/images/real-estate.png" alt="onWidget logo" loading="lazy"></img>
    <a class="text-blue-600 underline dark:text-muted" href="https://real-state.com/">REAL STATE </a> · All rights reserved.
  `,
};
