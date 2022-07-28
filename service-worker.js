/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-48e32ed0'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/react-instagram/index.html",
    "revision": "4558a3b12ab1c74179b423584c677e76"
  }, {
    "url": "/react-instagram/src_pages_Detail_js.app.bundle.js",
    "revision": "0da8e4418b3d27a5c740fc8be4403fa0"
  }, {
    "url": "/react-instagram/src_pages_Favs_js.app.bundle.js",
    "revision": "5e3970ca089f020fb3bd678c308dea9d"
  }, {
    "url": "/react-instagram/src_pages_Home_js.app.bundle.js",
    "revision": "9c369937cbe12b1a5e8e8062911e6ddc"
  }, {
    "url": "/react-instagram/src_pages_User_js.app.bundle.js",
    "revision": "bdc142353dc88a8de6111e2ebae00d35"
  }, {
    "url": "/react-instagram/vendors-node_modules_apollo_react-hoc_lib_react-hoc_esm_js.app.bundle.js",
    "revision": "f22a26d3f1d092e5ca6cbefc139f2292"
  }, {
    "url": "/react-instagram/vendors-node_modules_react-helmet_es_Helmet_js.app.bundle.js",
    "revision": "adbed990c13fbdd227ea89c49e9eb3ee"
  }], {});
  workbox.registerRoute(/https:\/\/(res.cloudinary.com|images.unsplash.com)/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: []
  }), 'GET');
  workbox.registerRoute(/https:\/\/petgram-server-aecs-anibal-corral.vercel.app/, new workbox.NetworkFirst({
    "cacheName": "api",
    plugins: []
  }), 'GET');

}));
