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
    "revision": "a7ef4803f610c04f771d90eb623a4ed1"
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
    "url": "assets/js/app.3c4dede7.js",
    "revision": "b66f3c52047065f655bf02c1884e60a2"
  },
  {
    "url": "club/index.html",
    "revision": "2b52ab06b398f915e98eeb55055cebb0"
  },
  {
    "url": "contact/index.html",
    "revision": "a14800e74b8396620f4345bafca0a370"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "d7e3ea7e905f00054c4bb7e25313c4ae"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "6f8a4ba926f2528df66bf4ae7e94dc49"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "33aa490c22cbb429ea52ca93ba7b0869"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "ce0a1320098b71782705269e4ca07bc5"
  },
  {
    "url": "index.html",
    "revision": "517e6ed7a31925123bbb3291ac09b14b"
  },
  {
    "url": "logo-black.png",
    "revision": "8fa61a585ef63d97b0004c98b906d15b"
  },
  {
    "url": "logo-white.png",
    "revision": "0128bfa2b16b2b4bb4228b59be58a573"
  },
  {
    "url": "logo.png",
    "revision": "94dcef73c750ead0ac560e5a5434ee07"
  },
  {
    "url": "pratique/index.html",
    "revision": "de0be184da31bbd845bb081e87f6074e"
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
