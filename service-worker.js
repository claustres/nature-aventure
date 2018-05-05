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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f7b01f161ea828b38020925e1d0ded91"
  },
  {
    "url": "accueil.png",
    "revision": "ea485b60f473575d5e47c0d1b51562e4"
  },
  {
    "url": "assets/css/4.styles.65802d7d.css",
    "revision": "448a7b1f9e0d941ce18cea854d42c138"
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
    "url": "assets/js/0.f235f54c.js",
    "revision": "fdbfaa9856ffa8f6b3ea50f53125fa2b"
  },
  {
    "url": "assets/js/1.ca5741c3.js",
    "revision": "b3dd3c6916565b511970544336d65e35"
  },
  {
    "url": "assets/js/2.464f84e1.js",
    "revision": "650cdbc948b7cede43feb21780efff9a"
  },
  {
    "url": "assets/js/3.4955aea2.js",
    "revision": "625279d0c201fe41940334a22e0b7621"
  },
  {
    "url": "assets/js/app.e4a542dc.js",
    "revision": "5e01eee804510aefdb51eb0b12ac30b1"
  },
  {
    "url": "club/index.html",
    "revision": "b5bfd377ee231b95ae382f78ea3e63ef"
  },
  {
    "url": "contact/index.html",
    "revision": "1c8acdb19ac139f2efd6d0febc1605cc"
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
    "revision": "bc323e0c37bc97215ec2b1cfe9d60270"
  },
  {
    "url": "logo.png",
    "revision": "8fa61a585ef63d97b0004c98b906d15b"
  },
  {
    "url": "pratique/index.html",
    "revision": "72e59d0ccd11dbab9cf1bda824889cc3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
