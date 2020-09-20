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
    "revision": "f9692257e1ba6bd884797d093fb08ee1"
  },
  {
    "url": "accueil.png",
    "revision": "ea485b60f473575d5e47c0d1b51562e4"
  },
  {
    "url": "adherer/index.html",
    "revision": "cc63bbe6c853056018ac66f115ea33f4"
  },
  {
    "url": "assets/css/0.styles.d794acf3.css",
    "revision": "869917cb3eaf4477cb9fe365d48ddd99"
  },
  {
    "url": "assets/img/bureau.6a04430f.png",
    "revision": "6a04430f1822d897382bf5ed5b2b228a"
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
    "url": "assets/js/10.1c845e6f.js",
    "revision": "ee57ac17b43ced1c87fdfc37654a5b2a"
  },
  {
    "url": "assets/js/11.50069253.js",
    "revision": "3f7e9b1518476d95920c9bc3136bb6ea"
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
    "url": "assets/js/5.de22ee4a.js",
    "revision": "2c04c2037cc3820ceb0f8fee53839107"
  },
  {
    "url": "assets/js/6.2ede514f.js",
    "revision": "8cc548dc2d0519abf3c7541d3a97c112"
  },
  {
    "url": "assets/js/7.283119dc.js",
    "revision": "e52cbff9fc8ce126f49930430fbd8fcf"
  },
  {
    "url": "assets/js/8.6ed06bdc.js",
    "revision": "9b4964674257baf6f6977a8fd507d95d"
  },
  {
    "url": "assets/js/9.f5f7adfb.js",
    "revision": "06284aa0046189aa1879def16772b362"
  },
  {
    "url": "assets/js/app.9ddd7ec6.js",
    "revision": "2833ded910ba61b833adf84bb1cd081e"
  },
  {
    "url": "club/index.html",
    "revision": "8cfd5860b992a492bf8b47187fb9d270"
  },
  {
    "url": "contact/index.html",
    "revision": "c3f4579c9d9395c6b607e3f5dfd8d042"
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
    "revision": "b59949fc7e9cf2d29e48e031ca52f5c1"
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
    "revision": "449d7eda235760d0ab0cca1308025793"
  },
  {
    "url": "sorties/index.html",
    "revision": "062c9b60e09a201096347a4492dbe3a5"
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
