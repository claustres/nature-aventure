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
    "revision": "67ab8117d1a656c1016401e87b140315"
  },
  {
    "url": "accueil.png",
    "revision": "ea485b60f473575d5e47c0d1b51562e4"
  },
  {
    "url": "adherer/index.html",
    "revision": "d115e3d3b78b71e5d7d0024b03280378"
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
    "url": "assets/js/11.ab2b1dd4.js",
    "revision": "569f4a7a43582c72b03270881204396f"
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
    "url": "assets/js/7.65550ec4.js",
    "revision": "7a5249c07430dc6291a6ef0222e7d318"
  },
  {
    "url": "assets/js/8.32b40d5e.js",
    "revision": "4d31909524fc9160f093eb59b7c7da85"
  },
  {
    "url": "assets/js/9.f5f7adfb.js",
    "revision": "06284aa0046189aa1879def16772b362"
  },
  {
    "url": "assets/js/app.abef03e2.js",
    "revision": "19f04e81d05b19a94855a7327f2f1f1a"
  },
  {
    "url": "club/index.html",
    "revision": "f9b7a23fb692a09ead1d2754df77ac5b"
  },
  {
    "url": "contact/index.html",
    "revision": "0bdeb0b7de2eef411d8ed3c5770b0ec9"
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
    "revision": "4265c7fd59edc6b6cff3153e52b0219b"
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
    "revision": "2a49e29eb58c8e7ca0e1c61748b59dca"
  },
  {
    "url": "sorties/index.html",
    "revision": "014c0c8238bbcf774c334ccb62b474f9"
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
