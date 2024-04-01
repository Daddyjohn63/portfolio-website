export const headerMenuItems = [
  {
    label: 'home',
    link: '/'
  },
  {
    label: 'about',
    link: '/about'
  },
  {
    label: 'services',
    link: '/services',
    submenu: true,
    subMenuItems: [
      { label: 'All', link: '/services' },
      { label: 'Development', link: '/services/development' },
      { label: 'Hosting', link: 'services/hosting' }
    ]
  },
  {
    label: 'portfolio',
    link: '/portfolio'
  },

  {
    label: 'contact',
    link: '/contact'
  }
];
