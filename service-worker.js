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
    "revision": "3bc2e6074c4c2e0a2dfaa4cebf080fe7"
  },
  {
    "url": "accueil.png",
    "revision": "ea485b60f473575d5e47c0d1b51562e4"
  },
  {
    "url": "assets/css/4.styles.bacde6a8.css",
    "revision": "069d79588b48e09902be67641999cdc9"
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
    "url": "assets/js/app.5cb1a3ba.js",
    "revision": "df3db21a9420864295b4bcb0811d9026"
  },
  {
    "url": "club/index.html",
    "revision": "268482d42fe92197855b1ec87db19945"
  },
  {
    "url": "contact/index.html",
    "revision": "14429d72d4872d5dc7916c1af95451fe"
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
    "revision": "b3a7e45a2b205570fa93758cbe63f7f5"
  },
  {
    "url": "logo.png",
    "revision": "8fa61a585ef63d97b0004c98b906d15b"
  },
  {
    "url": "pratique/index.html",
    "revision": "d3c612898ce49d10fa23312016a07849"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
