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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "28796adca2d536f50e4f5986f6395389"
  },
  {
    "url": "accueil.png",
    "revision": "ea485b60f473575d5e47c0d1b51562e4"
  },
  {
    "url": "adherer/index.html",
    "revision": "c0a01d4755e0b39a20c6616661be3d8e"
  },
  {
    "url": "assets/css/0.styles.d794acf3.css",
    "revision": "869917cb3eaf4477cb9fe365d48ddd99"
  },
  {
    "url": "assets/img/bureau.3131cbce.png",
    "revision": "3131cbce2ff61bfc97c9cfc2f722c343"
  },
  {
    "url": "assets/img/referents.fe4ca207.png",
    "revision": "fe4ca207b022f6c371583cd0f0e55944"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3368921d.js",
    "revision": "6ca808a9b27aac05c979d5f0e21fbafa"
  },
  {
    "url": "assets/js/11.29c79a8f.js",
    "revision": "50a18f3f2024e83af34c121dd0cec15f"
  },
  {
    "url": "assets/js/12.7cf1ce61.js",
    "revision": "359e7a1e30a1f93840d24f8876bcc243"
  },
  {
    "url": "assets/js/2.4a1785bf.js",
    "revision": "b558d8fba5ba8744debc5df85054f7df"
  },
  {
    "url": "assets/js/3.89e1f2c5.js",
    "revision": "4cf5ce2ad72ef2997d86cfe08649b6ac"
  },
  {
    "url": "assets/js/4.d8088cac.js",
    "revision": "b004e79dcf84889fe516f7e3b6c3e3e3"
  },
  {
    "url": "assets/js/5.2a0fc649.js",
    "revision": "cbb5994c52d57c32cf3af808e7d85f98"
  },
  {
    "url": "assets/js/6.2ede514f.js",
    "revision": "8cc548dc2d0519abf3c7541d3a97c112"
  },
  {
    "url": "assets/js/7.c65143d0.js",
    "revision": "1cea520da50a4eae70286c9890eaf3a4"
  },
  {
    "url": "assets/js/8.9e237b52.js",
    "revision": "93a9fcce89f7aab469462adb34e5c8d0"
  },
  {
    "url": "assets/js/9.96e92b4d.js",
    "revision": "43ec196d1ee168927baab54a96677b2d"
  },
  {
    "url": "assets/js/app.dbb18433.js",
    "revision": "1f63cb513538782da7ddfd95cc41771c"
  },
  {
    "url": "club/index.html",
    "revision": "aa9207120416192b6c931f9b3dd38383"
  },
  {
    "url": "contact/index.html",
    "revision": "386a63924939ae8e749428a3e55b8a4f"
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
    "revision": "b90fd07fe94b854f1e2a0666c360ae67"
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
    "url": "planning/index.html",
    "revision": "5dd2af5c23b1e5520c73e6c259a56df4"
  },
  {
    "url": "pratique/index.html",
    "revision": "9400b9c46d7af07384b9a55f77cfaadb"
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
