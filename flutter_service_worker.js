'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a7cb285d580796f7ef9f6650eee564af",
"assets/AssetManifest.json": "3117bb585da378bf5a4b343071e777cc",
"assets/assets/images/AppIcon.jpg": "f87fa7270b94536f826e37dc9e21c7ea",
"assets/assets/images/Leichtathletik%25201%2520(Level%25201).jpg": "e2184c380962c84fc19e157de8764b08",
"assets/assets/images/Leichtathletik%25201%2520(Level%25202).jpg": "f15d28ecfd3656fa651e12879e916835",
"assets/assets/images/Leichtathletik%25201%2520(Level%25203).jpg": "8e7c333cf40c44b3486b1fc4f668a6e8",
"assets/assets/images/Leichtathletik%25201%2520(Level%25204).jpg": "a5109798ddd115f1d8a6e320f8b843a1",
"assets/assets/images/Leichtathletik%25201%2520(Level%25205).jpg": "44e6e363726e53f3650a22180ed68302",
"assets/assets/images/Leichtathletik%25202%2520(Level%25201).jpg": "3952b84668dbc028489519dcea053f7c",
"assets/assets/images/Leichtathletik%25202%2520(Level%25202).jpg": "d2fc819f5406576b2eb5aedfa7e2851c",
"assets/assets/images/Leichtathletik%25202%2520(Level%25203).jpg": "4f322c439d20a9fb00023f50ae35da80",
"assets/assets/images/Leichtathletik%25202%2520(Level%25204).jpg": "09d092791c679e66f6c2ac20e9420c48",
"assets/assets/images/Leichtathletik%25202%2520(Level%25205).jpg": "1307d4cb2a493eed318e7b4d413ff603",
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
"assets/assets/images/Turnen%25201%2520(Level%25201).jpg": "d1e542f6d784aedbdfcd09109535da2b",
"assets/assets/images/Turnen%25201%2520(Level%25202).jpg": "40df3b5a713fb03cab212725cffea9ec",
"assets/assets/images/Turnen%25201%2520(Level%25203).jpg": "baf89bd166443c62c4d4f5fc9739fd3a",
"assets/assets/images/Turnen%25201%2520(Level%25204).jpg": "9d97a229f5fe62ecd98dd86411e8589b",
"assets/assets/images/Turnen%25201%2520(Level%25205).jpg": "d6dddac6a092f212e7f927401ee719d3",
"assets/assets/images/Turnen%25202%2520(Level%25201).jpg": "136b2527b54c8abb99c15cfb13e6cd5c",
"assets/assets/images/Turnen%25202%2520(Level%25202).jpg": "481d3bec636bc02d182cedabffba6a15",
"assets/assets/images/Turnen%25202%2520(Level%25203).jpg": "00f0506aafc23d1b1110773144a0b688",
"assets/assets/images/Turnen%25202%2520(Level%25204).jpg": "d4324f240500c86ca18483bcffa530ad",
"assets/assets/images/Turnen%25202%2520(Level%25205).jpg": "f8a46f20edbb85efad5fdc1eaad11f9e",
"assets/assets/images/Turnen.jpg": "c8d6dec0c5bfcbb40edaf9659e8b9515",
"assets/assets/images/WarmUP.jpeg": "bad56e45298ba1d50005ac77a5c32ffe",
"assets/FontManifest.json": "fcfb7db811cffe848da300252809b5b8",
"assets/fonts/MaterialIcons-Regular.otf": "6e69108ef09c1801cfd4c3e0e9a5de48",
"assets/NOTICES": "22d4543353af5c1780c4046f57787c6c",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "75d29810174c7956c6f920001de62a44",
"/": "75d29810174c7956c6f920001de62a44",
"main.dart.js": "f084e55f7ebcd7c0c05004620885575f",
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
