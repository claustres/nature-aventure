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
    "revision": "dfc86d0984312f63a2c7e4681826da60"
  },
  {
    "url": "accueil.png",
    "revision": "ea485b60f473575d5e47c0d1b51562e4"
  },
  {
    "url": "adherer/index.html",
    "revision": "995a7c8cbb8f615820daf102d357883d"
  },
  {
    "url": "assets/css/0.styles.f769e60d.css",
    "revision": "6d079eb24adec22d599ddb69f525f6dd"
  },
  {
    "url": "assets/img/bureau.ecc97aca.png",
    "revision": "ecc97acae1f152d7e8eb2146fcef9b1a"
  },
  {
    "url": "assets/img/referents.43e30a20.png",
    "revision": "43e30a20b300400c055e7689c607e523"
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
    "url": "assets/js/4.60b15819.js",
    "revision": "619d68cf13e9c4627de5e9521f272e86"
  },
  {
    "url": "assets/js/5.c8b3bd46.js",
    "revision": "c91e06e49fa96d786b59dbe6eb98e6bc"
  },
  {
    "url": "assets/js/6.ffd96c09.js",
    "revision": "823fe718f72e7d345df8a47adfcb2efa"
  },
  {
    "url": "assets/js/7.37d61da3.js",
    "revision": "0a06ddd67fe90c270cdec9d04edbee47"
  },
  {
    "url": "assets/js/8.2c6deea4.js",
    "revision": "14b09bbfc48ca25ea9900038f6e3c639"
  },
  {
    "url": "assets/js/app.db52eeba.js",
    "revision": "a1e61383938a22ed8c31a45ff16a7308"
  },
  {
    "url": "club/index.html",
    "revision": "128b095618332be6392e56563c22be72"
  },
  {
    "url": "contact/index.html",
    "revision": "9a59cf342e682db9ff3841a41e6b58c4"
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
    "revision": "2feab111d257134093d34659c9facb46"
  },
  {
    "url": "logo_aude.jpg",
    "revision": "e21e0b7de7e28ca43ee2cbd5656e6f33"
  },
  {
    "url": "logo_occitanie.jpg",
    "revision": "78d06b450431f5df986acd127dc79aaa"
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
    "url": "logo.jpg",
    "revision": "8880bcc9b874c2385629db3ccf1f1562"
  },
  {
    "url": "logo.png",
    "revision": "94dcef73c750ead0ac560e5a5434ee07"
  },
  {
    "url": "pratique/index.html",
    "revision": "d2926b3b498bc92233b058b833b2f9d4"
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
