'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b44aecaa83b757690a218decf7e1228b",
"assets/AssetManifest.json": "e8a029425db1225e5c6049eb96dcda72",
"assets/assets/images/Leichtathletik.jpg": "ef6f701e89bea303d30010f2ab965181",
"assets/assets/images/Schwimmen%25201%2520(Level%25201).jpg": "774e287e95cd0b568832940cd5279f65",
"assets/assets/images/Schwimmen%25201%2520(Level%25202).jpg": "48405bde4260caafcb8919d7d1e0460a",
"assets/assets/images/Schwimmen%25201%2520(Level%25203).jpg": "df1618877d51e9012e4c1659594bdd63",
"assets/assets/images/Schwimmen%25201%2520(Level%25204).jpg": "ace5cf7bf5aacecf7421fe4dc3b6eef0",
"assets/assets/images/Schwimmen%25201%2520(Level%25205).jpg": "884b43d42e667cc90d3e8babed306e72",
"assets/assets/images/Schwimmen%25202%2520(Level%25201).jpg": "899ac0e94d963ab66e61935e9e7c28e3",
"assets/assets/images/Schwimmen%25202%2520(Level%25202).jpg": "2cb58f72a4b8c8256fb296f3d7a43e08",
"assets/assets/images/Schwimmen%25202%2520(Level%25203).jpg": "86efd74d81d4defbb91aafbb215b9ec7",
"assets/assets/images/Schwimmen%25202%2520(Level%25204).jpg": "4e53af5ebad55e4dd85e3c7a0a63c1df",
"assets/assets/images/Schwimmen%25202%2520(Level%25205).jpg": "b6a86379bbc6c15bd818b355da368bd9",
"assets/assets/images/Schwimmen.jpg": "c9d9515219392c533590e8767f2ddcc5",
"assets/assets/images/TESTPREP.jpg": "f55fbc0f24654706127a07359d7488e4",
"assets/assets/images/Turnen.jpg": "c8d6dec0c5bfcbb40edaf9659e8b9515",
"assets/assets/images/WarmUP.jpeg": "bad56e45298ba1d50005ac77a5c32ffe",
"assets/Eignungstest/Bilder/Keystorefile.png": "36f6278547e26079a59a47e22321decb",
"assets/Eignungstest/Bilder/Logo.png": "d704b603636f575524a2e9936fd43975",
"assets/Eignungstest/Bilder/Playstorebild%201.png": "f84f24301addbd99bf325bf5cc0fd038",
"assets/Eignungstest/Bilder/Playstorebild%202.png": "3eb522d699e254fcfc22c4001add1fc2",
"assets/Eignungstest/Bilder/Playstorebild%203.png": "a312f8ce1c3f204338f121d80e9d2ac0",
"assets/Eignungstest/Bilder/Screenshot%202022-10-12%20082623.png": "d80e894e519a3a87afb20f18cc68f8d4",
"assets/Eignungstest/Fragen.docx": "a5e090a5d8ac626fc30457fe8653b350",
"assets/Eignungstest/Gespr%C3%A4ch.docx": "dee69003b3a4272f4d41a031e5880cfc",
"assets/Eignungstest/Info.docx": "fbf4098cb4da9f1cd727738e22597423",
"assets/Eignungstest/Konkurrenz.docx": "acf2eb61ad67f3a6e05954780d1e1a6d",
"assets/Eignungstest/Themen.docx": "17f76cf1434eb68e8e9e26344d2e593f",
"assets/Eignungstest/Was%20funktioniert%20sich%20nicht.docx": "caa288eaed1e1168cce871c71cdd97e3",
"assets/Eignungstest/Wie%20geht%20es%20jetzt%20weiter.docx": "9226e2e66721951e99813c7aa89bb913",
"assets/Eignungstest/Wie%20soll%20die%20Dienstleistung%20aufgebaut%20sein.docx": "bf686e3fb5d8245f5d5cddfa3c30b931",
"assets/FontManifest.json": "fcfb7db811cffe848da300252809b5b8",
"assets/fonts/MaterialIcons-Regular.otf": "a74d3f64f72b7f30cb202bfd7929edf0",
"assets/NOTICES": "8e7e1e28cc0bd38eb339de30e5efe59f",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0127f6501ca5db714f5d292cbfa5f9f4",
"/": "0127f6501ca5db714f5d292cbfa5f9f4",
"main.dart.js": "99cc602fcf028d4a410a7c61fd8c2904",
"manifest.json": "8c4c28c09f415b173b3e1f563cbba17a",
"version.json": "dc5fd9c93d177fe018d89552eb92b954"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
