module.exports = {
  dest: 'site',
  base: '/nature-aventure/',
  title: 'Club Nature-Aventure',
  description: 'Activités de pleine nature à Castelnaudary',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  serviceWorker: true,
  theme: 'nature-aventure',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'Le Club',
        link: '/club/',
      },
      {
        text: 'En pratique',
        link: '/pratique/'
      },
      {
        text: 'Nous contacter',
        link: '/contact/'
      }
    ]
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: 'Nouveau contenu disponible',
        buttonText: 'Rafraîchir'
      }
    }
  }
}
