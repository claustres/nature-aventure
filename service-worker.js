/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7c9ea021b8d0a67b0111a048934e9137"
  },
  {
    "url": "accueil.png",
    "revision": "ea485b60f473575d5e47c0d1b51562e4"
  },
  {
    "url": "assets/css/0.styles.da34b24d.css",
    "revision": "a2bc9578d98b2c884ba7bd12d179c79c"
  },
  {
    "url": "assets/img/bureau.f61d85a9.png",
    "revision": "f61d85a97600f181f0ec9e3f2fcdf535"
  },
  {
    "url": "assets/img/referents.dd4c2c67.png",
    "revision": "dd4c2c673d3b1066eee4be9f89e8cdc0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.67de3572.js",
    "revision": "ed338bb33461b3b1595f6d0fdff4994d"
  },
  {
    "url": "assets/js/3.5b488286.js",
    "revision": "6b2c7e46857c44e9b6c59ba0a07b4231"
  },
  {
    "url": "assets/js/4.0a410396.js",
    "revision": "8ca3bc04b45a942907891b615bcd7078"
  },
  {
    "url": "assets/js/5.85e055f5.js",
    "revision": "3dbd212a35711dc3424ff26a377a9924"
  },
  {
    "url": "assets/js/6.6bc736ab.js",
    "revision": "39eee713a901291fad4909ac378fc0e8"
  },
  {
    "url": "assets/js/7.dcfa5971.js",
    "revision": "257a2989706fc1ae2e2d604daf30ace0"
  },
  {
    "url": "assets/js/app.24d321b5.js",
    "revision": "83c53aff3c01dfedc0503da7c78813bb"
  },
  {
    "url": "club/index.html",
    "revision": "cb3491a67e077db25b3014b2fc6ab417"
  },
  {
    "url": "contact/index.html",
    "revision": "37465e1259be8d79ab8ab62cfcdc9875"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "8fa61a585ef63d97b0004c98b906d15b"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5e4894cb30a9890dd367791a4df92b56"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "0d081eedf7c002afe0e17cdfd569b672"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "05044e07a11af51dcfdccc74e494e0e4"
  },
  {
    "url": "index.html",
    "revision": "82b57107caee3458205a8441147a89e2"
  },
  {
    "url": "logo-white.png",
    "revision": "0128bfa2b16b2b4bb4228b59be58a573"
  },
  {
    "url": "logo.png",
    "revision": "8fa61a585ef63d97b0004c98b906d15b"
  },
  {
    "url": "pratique/index.html",
    "revision": "fcb57c0415e7d4db7d4fdfd712d32c93"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
