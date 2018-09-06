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
    "revision": "162d97458ae75c1ff2468cf056173f9c"
  },
  {
    "url": "accueil.png",
    "revision": "ea485b60f473575d5e47c0d1b51562e4"
  },
  {
    "url": "assets/css/4.styles.81e09e6f.css",
    "revision": "208908e0a3845f82e23d55772a35d7c9"
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
    "url": "assets/js/0.3618e2b2.js",
    "revision": "aa3b95879875d4cc3b88530a6d0f917b"
  },
  {
    "url": "assets/js/1.3a2f6788.js",
    "revision": "b3dd3c6916565b511970544336d65e35"
  },
  {
    "url": "assets/js/2.1ced16ed.js",
    "revision": "f318da8fc641edaf1ca8099f8c8e0212"
  },
  {
    "url": "assets/js/3.476579bd.js",
    "revision": "f050ff5a55833208cb7078260e1ec85c"
  },
  {
    "url": "assets/js/app.c13d8f99.js",
    "revision": "12794888b5590a41c95e402820753bbc"
  },
  {
    "url": "club/index.html",
    "revision": "918c6a69821057d163229f02c10ef720"
  },
  {
    "url": "contact/index.html",
    "revision": "2dd4f72ab40f5f7fc98bc222a1272222"
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
    "revision": "99ca2be05fa7a12206b78e426b973d55"
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
    "revision": "75b0f18de42194efb843fadee163b89e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
