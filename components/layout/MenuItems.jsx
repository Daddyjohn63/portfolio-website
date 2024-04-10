export const headerMenuItems = [
  {
    id: 1,
    label: 'home',
    link: '/'
  },
  {
    id: 2,
    label: 'about',
    link: '/about',
    submenu: true,
    subMenuItems: [
      {
        id: 20,
        label: 'History',
        link: '/about/history'
      },
      {
        id: 22,
        label: 'My CV',
        link: '/about/my-cv'
      }
    ]
  },
  {
    id: 3,
    label: 'services',
    link: '/services',
    submenu: true,
    subMenuItems: [
      {
        id: 30,
        label: 'Development',
        link: '/services/development'
      },
      { id: 31, label: 'Hosting', link: 'services/hosting' }
    ]
  },
  {
    id: 4,
    label: 'portfolio',
    link: '/portfolio'
  },

  {
    id: 5,
    label: 'blog',
    link: '/blog'
  },
  {
    id: 6,
    label: 'contact',
    link: '/contact'
  }
];
