module.exports = {
  dest: 'vuepress',
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
  theme: 'vue',
  themeConfig: {
    repo: 'claustres/nature-aventure',
    editLinks: false,
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
  }
}
