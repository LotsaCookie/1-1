window.dataLayer = window.dataLayer || [];
window.gtag = function(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1CC1LKMRS6');
(function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-1CC1LKMRS6';document.head.appendChild(s);})();

const sjEncode = (url) => frame.prefix + controller.config.codec.encode(url);

const SHORTCUTS = [
    {
        label: 'YouTube',
        url: 'https://youtube.com/'
    },
    {
        label: 'Geforce Now',
        url: 'https://play.geforcenow.com/mall/'
    },
    {
        label: 'Roblox',
        faviconHost: 'https://www.roblox.com/',
        url: 'https://nowgg.fun/apps/a/19900/b.html'
    },
    {
        label: 'TikTok',
        url: 'https://www.tiktok.com/foryou'
    },
    {
        label: 'Discord',
        url: 'https://discord.com/app'
    },
    {
        label: 'Kick',
        url: 'https://kick.com/'
    },
    {
        label: 'Twitch',
        url: 'https://twitch.tv'
    },
    {
        label: 'Instagram',
        url: 'https://instagram.com'
    },
    {
        label: "Movies",
        url: "https://goated.cx/",
        faviconUrl: "https://cdn-icons-png.flaticon.com/512/10351/10351880.png"
    },
    {
        label: "Music",
        url: "https://monochrome.tf/",
        faviconUrl: "https://cdn-icons-png.flaticon.com/512/461/461146.png"
    }
];
const ra = [{
    name: "Google",
    url: "https://www.google.com/search?q="
}, {
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/?q="
}, {
    name: "Bing",
    url: "https://www.bing.com/search?q="
}, {
    name: "Brave",
    url: "https://search.brave.com/search?q="
}, {
    name: "Yahoo",
    url: "https://search.yahoo.com/search?p="
}, {
    name: "Startpage",
    url: "https://www.startpage.com/sp/search?q="
}, {
    name: "Ecosia",
    url: "https://www.ecosia.org/search?q="
}, {
    name: "Ask",
    url: "https://www.ask.com/web?q="
}];
const SETTINGS = {
    'Privacy': {
        'Ad Block DNS': {
            type: 'toggle',
            default: true,
            callback: (val, init) => {
                //console.log(val)
                localStorage.ABDE = val
                if (!init) {
                    allowUnload = true;
                    location.reload()
                }
            }
        },
        'Clientsided Ad Block': {
            type: 'toggle',
            default: true,
            callback: (val) => {}
        },
    },
    'Proxy': {
        'Transport': {
            type: 'dropdown',
            default: {
                name: "libcurl",
                src: getAsset("curl/index.mjs")
            },
            options: [{
                name: "libcurl",
                src: getAsset("curl/index.mjs")
            }, {
                name: "epoxy",
                src: getAsset("pox/index.mjs")
            }],
            callback: async (val)=>{
                try {
                    if (localStorage.transport === val.src) return;
                    localStorage.transport = val.src;
                    const { default: TransportClient } = await import(val.src);
                    transport = new TransportClient({ wisp: window.wispServer });
                    await initTransport(transport);
                    controller.setTransport(transport);
                } catch {}
            }
        },
    },
    'Browsing': {
        'Search Engine': {
            type: 'dropdown',
            default: {
                name: 'Brave',
                url: 'https://search.brave.com/search?q='
            },
            options: ra,
            callback: (val) => {}
        },
    },
    'Appearance': {
        'Stars': {
            type: 'toggle',
            default: true,
            callback: (val) => {
                starsEnabled = val;
            }
        },
        'Shooting Stars': {
            type: 'toggle',
            default: true,
            callback: (val) => {
                shootingStarsEnabled = val;
            }
        },
    },
    'Advanced': {
        'Force Update/Clear Data': {
            type: 'button',
            label: 'Clear',
            action: async () => {
                if (!confirm('This will clear all data and force update the client. Are you sure?')) return;
                // cache
                try {
                    const names = await caches.keys();
                    await Promise.all(names.map(n => caches.delete(n)));
                } catch (e) {}
                // localStorage
                try { localStorage.clear(); } catch (e) {}
                // sessionStorage
                try { sessionStorage.clear(); } catch (e) {}
                // cookies
                try {
                    document.cookie.split(';').forEach(c => {
                        const name = c.split('=')[0].trim();
                        const domain = location.hostname;
                        const pathParts = location.pathname.split('/');
                        // delete for every path prefix
                        for (let i = pathParts.length; i >= 0; i--) {
                            const path = pathParts.slice(0, i).join('/') || '/';
                            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};domain=${domain}`;
                            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}`;
                        }
                    });
                } catch (e) {}
                // sw unregister
                try {
                    const regs = await navigator.serviceWorker.getRegistrations();
                    await Promise.all(regs.map(r => r.unregister()));
                } catch (e) {}
                // index db
                try {
                    const forceDelDb = (name) => new Promise((res) => {
                        const open = indexedDB.open(name);
                        open.onsuccess = () => { open.result.close(); deleteTs(); };
                        open.onerror = deleteTs;
                        const deleteTs = () => {
                            const req = indexedDB.deleteDatabase(name);
                            req.onsuccess = req.onerror = req.onblocked = res;
                        }
                    });

                    await forceDelDb('__scramjet_controller');

                    if (indexedDB.databases) {
                        const dbs = await indexedDB.databases();
                        await Promise.all(dbs.map(db => forceDelDb(db.name)));
                    }
                } catch (e) {}

                allowUnload = true
                alert("done! after the page reloads, please wait for the client to update and load")
                location.reload(1);
            }
        },
    },
};

const EXTENSIONS = [
    {
        name: "Youtube Ad Blocker",
        domain: [
            "youtube.com",
            "*.youtube.com"
        ],
        code: "(function() { 'use strict'; var cssArrObject = ['#masthead-ad', 'ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)', '.video-ads.ytp-ad-module', 'tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)', 'ytd-engagement-panel-section-list-renderer[target-id=\"engagement-panel-ads\"]', '#related #player-ads', '#related ytd-ad-slot-renderer', 'ytd-ad-slot-renderer', 'yt-mealbar-promo-renderer', 'ytd-popup-container:has(a[href=\"/premium\"])', 'ad-slot-renderer', 'ytm-companion-ad-renderer', '#related #-ad-']; function removeNonVideoAds(arry) { arry.forEach((selector, index) => { arry[index] = `${selector}{display:none!important}`; }); const premiumContainers = [...document.querySelectorAll('ytd-popup-container')]; const matchingContainers = premiumContainers.filter(container => container.querySelector('a[href=\"/premium\"]')); if (matchingContainers.length > 0) { matchingContainers.forEach(container => container.remove()); } const backdrops = document.querySelectorAll('tp-yt-iron-overlay-backdrop'); const targetBackdrop = Array.from(backdrops).find((backdrop) => backdrop.style.zIndex === '2201'); if (targetBackdrop) { targetBackdrop.className = ''; targetBackdrop.removeAttribute('opened'); } let style = document.createElement('style'); (document.head || document.body).appendChild(style); style.appendChild(document.createTextNode(arry.join(' '))); } function skipAd(video) { const adIndicator = document.querySelector('.ytp-ad-skip-button, .ytp-skip-ad-button, .ytp-ad-skip-button-modern, .video-ads.ytp-ad-module .ytp-ad-player-overlay, .ytp-ad-button-icon'); if (adIndicator && !window.location.href.includes('https://m.youtube.com/')) { video.muted = true; video.currentTime = video.duration - 0.1; } } function removeAdblockWarning() { var warningInterval = setInterval(function() { var popupExists = document.getElementsByClassName('style-scope ytd-popup-container').length > 0; var dismissButton = document.getElementById('dismiss-button'); var divider = document.getElementById('divider'); if (popupExists && dismissButton && divider) { setTimeout(function() { dismissButton.click(); const playButton = document.getElementsByClassName('ytp-play-button ytp-button')[0]; if (playButton) playButton.click(); clearInterval(warningInterval); }, Math.random() * 3000); } }, Math.random() * 500); } setInterval(() => { if (document.readyState !== 'loading') { removeNonVideoAds(cssArrObject); removeAdblockWarning(); var adsVideo = document.querySelector('.ad-showing video'); var mainVideo = document.querySelector('video'); if (mainVideo) { var playerStatus = { currentTime: mainVideo.currentTime, isPaused: mainVideo.paused, speed: mainVideo.playbackRate }; if (playerStatus.currentTime <= 5 && playerStatus.isPaused == true) { mainVideo.play().catch(error => { console.error('Failed to play video:', error); }); } } if (adsVideo) { skipAd(adsVideo); } } }, 500); })();",
    },
    {
        name: "Universal Ad Blocker",
        domain: "*",
        get enabled() { return SETTINGS['Privacy']?.['Clientsided Ad Block']?._value; },
        prompt: false,
        code: `(function() { 'use strict'; if (window.location.href.includes('youtube.com')) return; function blockAds() { const adSelectors = ['iframe[src*=\"doubleclick\"]', 'iframe[src*=\"googlesyndication\"]', 'iframe[src*=\"advertising\"]', 'div[id^=\"google_ads\"]', 'div[id^=\"ad-container\"]', 'div[class^=\"ad-container\"]', 'ins.adsbygoogle', '[data-ad-slot]', '[data-ad-client]', 'div[id*=\"-ad-\"][id*=\"banner\"]', 'div[class*=\"advertisement\"]']; adSelectors.forEach(selector => { try { const ads = document.querySelectorAll(selector); ads.forEach(ad => { if (ad.parentElement && !ad.closest('form') && !ad.id.includes('search') && !ad.className.includes('search')) { ad.style.display = 'none'; ad.remove(); } }); } catch(e) {} }); } setInterval(blockAds, 2000); const observer = new MutationObserver(() => blockAds()); observer.observe(document.body, { childList: true, subtree: true }); blockAds(); })();`,
    },
    {
        name: "nowgg.fun fat fat",
        domain: "*.ip.nowgg.fun",
        code: `window.alert=()=>{}`,
        prompt: false,
    }
]

const _extApproved = new Set();
const _extDismissed = new Set();

function _domainMatches(pattern, hostname) {
    if (pattern === '*') return true;
    if (pattern.startsWith('*.')) {
        const suffix = pattern.slice(1);
        return hostname === suffix.slice(1) || hostname.endsWith(suffix);
    }
    return hostname === pattern;
}

function _extMatchesDomain(ext, hostname) {
    const domains = Array.isArray(ext.domain) ? ext.domain : [ext.domain];
    return domains.some(p => _domainMatches(p, hostname));
}

function _runExtension(ext) {
    try { frame.element.contentWindow.eval(ext?.code?.toString()); } catch {}
}

function _showExtPrompt(ext, idx) {
    const pid = '_ep' + idx;
    if (document.getElementById(pid)) return;
    const popup = document.createElement('div');
    popup.id = pid;
    popup.className = 'ext-prompt';

    const eyebrow = document.createElement('div');
    eyebrow.className = 'ext-prompt-eyebrow';
    eyebrow.textContent = 'Extension available';
    const name = document.createElement('div');
    name.className = 'ext-prompt-name';
    name.textContent = ext.name;
    const question = document.createElement('div');
    question.className = 'ext-prompt-question';
    question.textContent = 'Run it on this site?';
    const btns = document.createElement('div');
    btns.className = 'ext-prompt-btns';
    const yes = document.createElement('button');
    yes.className = 'ext-prompt-btn yes';
    yes.textContent = 'Yes';
    const no = document.createElement('button');
    no.className = 'ext-prompt-btn no';
    no.textContent = 'No';

    const dismiss = () => {
        popup.classList.remove('open');
        popup.addEventListener('transitionend', () => popup.remove(), { once: true });
        setTimeout(() => popup.remove(), 350);
    };
    yes.onclick = () => { dismiss(); _extApproved.add(idx); _runExtension(ext); };
    no.onclick = () => { dismiss(); _extDismissed.add(idx); };

    btns.appendChild(yes);
    btns.appendChild(no);
    popup.appendChild(eyebrow);
    popup.appendChild(name);
    popup.appendChild(question);
    popup.appendChild(btns);
    (shadowRoot || document.body).appendChild(popup);

    requestAnimationFrame(() => popup.classList.add('open'));
}

function _checkExtensions(href) {
    let hostname;
    try { hostname = new URL(href).hostname; } catch (e) { return; }
    if (!hostname) return;
    EXTENSIONS.forEach((ext, i) => {
        if (ext.enabled === false) return;
        if (!_extMatchesDomain(ext, hostname)) return;
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
let starsEnabled = true;
let shootingStarsEnabled = true;
const saved = (() => {
    try {
        return JSON.parse(localStorage.getItem('SETTINGS') || '{}');
    } catch (e) {
        return {};
    }
})();

function saveSettings() {
    const out = {};
    Object.entries(SETTINGS).forEach(([cat, s]) => {
        out[cat] = {};
        Object.entries(s).forEach(([k, v]) => {
            out[cat][k] = v._value !== undefined ? v._value : v.default;
        });
    });
    localStorage.setItem('SETTINGS', JSON.stringify(out));
}

Object.entries(SETTINGS).forEach(([cat, settings]) => {
    Object.entries(settings).forEach(([key, s]) => {
        s._value = saved[cat]?.[key] !== undefined ? saved[cat][key] : s.default;
        if (s.callback) s.callback(s._value, true);
    });
});

const taglineEl = document.getElementById('tagline');
const taglineLink = document.createElement('a');
taglineLink.href = 'https://dsc.gg/opiumproxy';
taglineLink.target = '_blank';
taglineLink.rel = 'noopener noreferrer';
taglineLink.textContent = 'dsc.gg/opiumproxy';
taglineEl.appendChild(taglineLink);

const grid = document.getElementById('shortcuts');
SHORTCUTS.forEach(({
    label,
    url,
    faviconHost,
    faviconUrl
}) => {
    const el = document.createElement('div');
    el.className = 'shortcut';
    const img = document.createElement('img');
    img.className = 'shortcut-icon';
    img.src = faviconUrl || 'https://www.google.com/s2/favicons?domain=' + new URL(faviconHost || url).hostname + '&sz=128';
    img.onerror = () => {
        img.removeAttribute('src');
    };
    const span = document.createElement('span');
    span.textContent = label;
    el.appendChild(img);
    el.appendChild(span);
    el.onclick = () => navigate(url);
    grid.appendChild(el);
});

const sidebar = document.getElementById('settingsSidebar');
const tabsEl = document.getElementById('settingsTabs');
const panelsEl = document.getElementById('settingsPanels');
const categories = Object.keys(SETTINGS);
const sectionEls = [];

function setActive(cat) {
    sidebar.querySelectorAll('.sidebar-item').forEach(el => el.classList.toggle('active', el.dataset.cat === cat));
    tabsEl.querySelectorAll('.tab-item').forEach(el => el.classList.toggle('active', el.dataset.cat === cat));
}

let scrollLock = false;
let scrollLockTimer = null;

function scrollToCategory(cat) {
    setActive(cat);
    const target = panelsEl.querySelector(`[data-section="${cat}"]`);
    if (!target) return;
    scrollLock = true;
    clearTimeout(scrollLockTimer);
    const targetRect = target.getBoundingClientRect();
    const containerRect = panelsEl.getBoundingClientRect();
    panelsEl.scrollTo({ top: panelsEl.scrollTop + targetRect.top - containerRect.top, behavior: 'smooth' });
    scrollLockTimer = setTimeout(() => { scrollLock = false; }, 800);
}

panelsEl.addEventListener('scroll', () => {
    if (scrollLock) return;
    const containerTop = panelsEl.getBoundingClientRect().top;
    let active = categories[0];
    sectionEls.forEach(el => {
        if (el.getBoundingClientRect().top - containerTop < 4) active = el.dataset.section;
    });
    setActive(active);
});

categories.forEach((cat, i) => {
    const sItem = document.createElement('div');
    sItem.className = 'sidebar-item' + (i === 0 ? ' active' : '');
    sItem.textContent = cat;
    sItem.dataset.cat = cat;
    sItem.onclick = () => scrollToCategory(cat);
    sidebar.appendChild(sItem);

    const tItem = document.createElement('button');
    tItem.className = 'tab-item' + (i === 0 ? ' active' : '');
    tItem.textContent = cat;
    tItem.dataset.cat = cat;
    tItem.onclick = () => scrollToCategory(cat);
    tabsEl.appendChild(tItem);

    const section = document.createElement('div');
    section.className = 'settings-panel-section';
    section.dataset.section = cat;
    sectionEls.push(section);

    const lbl = document.createElement('div');
    lbl.className = 'category-label';
    lbl.textContent = cat;
    section.appendChild(lbl);

    const rows = document.createElement('div');
    rows.className = 'category-rows';

    Object.entries(SETTINGS[cat]).forEach(([key, s]) => {
        const row = document.createElement('div');
        row.className = 'setting-row';
        const label = document.createElement('span');
        label.className = 'setting-label';
        label.textContent = key;
        row.appendChild(label);

        if (s.type === 'toggle') {
            const btn = document.createElement('button');
            btn.className = 'toggle' + (s._value ? ' on' : '');
            btn.onclick = () => {
                btn.classList.toggle('on');
                s._value = btn.classList.contains('on');
                s.callback(s._value);
                saveSettings();
            };
            row.appendChild(btn);
        } else if (s.type === 'input') {
            const inp = document.createElement('input');
            inp.className = 'setting-input';
            inp.placeholder = key;
            inp.value = s._value || '';
            inp.onchange = () => {
                s._value = inp.value;
                s.callback(inp.value);
                saveSettings();
            };
            row.appendChild(inp);
        } else if (s.type === 'button') {
            const btn = document.createElement('button');
            btn.className = 'setting-action-btn';
            btn.textContent = s.label;
            btn.onclick = () => s.action();
            row.appendChild(btn);
        } else if (s.type === 'dropdown') {
            const sel = document.createElement('select');
            sel.className = 'setting-select';
            s.options.forEach(opt => {
                const o = document.createElement('option');
                o.textContent = opt.name;
                o.value = JSON.stringify(opt);
                if (opt.name === s._value?.name) o.selected = true;
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

const spacer = document.createElement('div');
spacer.className = 'settings-spacer';
panelsEl.appendChild(spacer);

function setVh() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setVh();
window.addEventListener('resize', setVh);

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let W, H;

function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const starObjs = Array.from({
    length: 180
}, () => {
    const base = Math.random() * 0.28 + 0.05;
    return {
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 0.85 + 0.2,
        base,
        alpha: base,
        blinking: Math.random() < 0.3,
        blinkPeak: 0,
        blinkDir: 1,
        blinkSpeed: 0.012 + Math.random() * 0.022,
        pauseMs: Math.random() * 6000
    };
});

let shoots = [];

const homeStateEls = ['panel', 'gamesScreen', 'gamePlayer', 'effectsScreen'].map(id => document.getElementById(id));

function isHomepage() {
    return !homeStateEls.some(el => el.classList.contains('open'));
}

function starsShouldRun() {
    return !document.hidden && document.hasFocus() && isHomepage();
}

const navActiveMap = [
    ['gamesScreen', 'navGames'],
    ['effectsScreen', 'navEffects'],
    ['settingsScreen', 'navSettings'],
];

function updateNavActive() {
    navActiveMap.forEach(([screenId, navId]) => {
        const screen = document.getElementById(screenId);
        const nav = document.getElementById(navId);
        if (screen && nav) nav.classList.toggle('active', screen.classList.contains('open'));
    });
}

const navActiveObserver = new MutationObserver(updateNavActive);
navActiveMap.forEach(([screenId]) => {
    const el = document.getElementById(screenId);
    if (el) navActiveObserver.observe(el, { attributes: true, attributeFilter: ['class'] });
});
updateNavActive();

let starsRafPending = false;
let last = 0;
let starsGen = 0;
let starsActive = null;

function stopStars() {
    starsGen++;
    starsRafPending = false;
    last = 0;
    shoots = [];
    if (W && H) ctx.clearRect(0, 0, W, H);
}

function startStars() {
    if (starsRafPending) return;
    starsRafPending = true;
    const gen = starsGen;
    requestAnimationFrame(ts => doFrame(ts, gen));
}

function updateStarsActive() {
    const should = starsShouldRun();
    if (should === starsActive) return;
    starsActive = should;
    if (should) startStars(); else stopStars();
}

function spawnShoot() {
    const startX = Math.random() * W * 1.4 - W * 0.2;
    const startY = Math.random() * H * 0.5;
    const angle = (Math.PI / 180) * (12 + Math.random() * 22);
    const speed = 7 + Math.random() * 8;
    shoots.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: 70 + Math.random() * 100,
        life: 1,
        decay: 0.016 + Math.random() * 0.014
    });
}

let nextShootAt = 0;

function scheduleShoot() {
    const now = Date.now();
    if (shootingStarsEnabled && starsShouldRun() && now >= nextShootAt) {
        spawnShoot();
        nextShootAt = now + 500 + Math.random() * 800;
    }
    setTimeout(scheduleShoot, 500 + Math.random() * 800);
}
scheduleShoot();

document.addEventListener('visibilitychange', updateStarsActive);
window.addEventListener('blur', updateStarsActive);
window.addEventListener('focus', updateStarsActive);
const starsObserver = new MutationObserver(updateStarsActive);
homeStateEls.forEach(el => starsObserver.observe(el, { attributes: true, attributeFilter: ['class'] }));
setInterval(updateStarsActive, 200);

const STARS_MAX_DT = 50;
const STARS_STALL_THRESHOLD = 500;

function doFrame(ts, gen) {
    if (gen !== starsGen) return;
    if (!starsRafPending || !starsShouldRun()) {
        stopStars();
        return;
    }
    if (!last) {
        last = ts;
        requestAnimationFrame(t => doFrame(t, gen));
        return;
    }
    const dtRaw = ts - last;
    if (dtRaw < 33) {
        requestAnimationFrame(t => doFrame(t, gen));
        return;
    }
    last = ts;
    if (dtRaw > STARS_STALL_THRESHOLD) {
        shoots = [];
        requestAnimationFrame(t => doFrame(t, gen));
        return;
    }
    const dt = Math.min(dtRaw, STARS_MAX_DT);
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
                s.pauseMs -= dt;
                if (s.pauseMs <= 0) s.blinking = true;
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
            const tailX = s.x - s.vx * (s.len / 10);
            const tailY = s.y - s.vy * (s.len / 10);
            const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
            grad.addColorStop(0, 'rgba(255,255,255,0)');
            grad.addColorStop(1, `rgba(255,255,255,${(s.life * 0.85).toFixed(3)})`);
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(s.x, s.y);
            ctx.strokeStyle = grad;
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
    return SETTINGS['Browsing']?.['Search Engine']?._value?.url || 'https://duckduckgo.com/?q=';
}

function resolveUrl(v) {
    if (!v) return null;
    if (v.startsWith('http://') || v.startsWith('https://')) return v;
    if (v.includes('.') && !v.includes(' ')) return 'https://' + v;
    return getSearchEngine() + encodeURIComponent(v);
}

function updateLockIcon(url) {
    const icon = document.getElementById('lockIcon');
    if (icon) icon.classList.toggle('secure', typeof url === 'string' && url.startsWith('https://'));
}

function navigate(url) {
    const u = resolveUrl(url || document.getElementById('searchInput').value.trim());
    if (!u) return;
    document.getElementById('panel').classList.add('open');
    document.getElementById('bottomNav').classList.add('hidden');
    document.getElementById('addrInput').value = u;
    updateLockIcon(u);
    frame.go(u);
    collapseSearch();
}

const searchWrap = document.getElementById('searchWrap');
const searchInput = document.getElementById('searchInput');
const acBox = document.getElementById('autocomplete');
let acSelected = -1;
let acItems = [];
let acTimer = null;

function expandSearch() {
    searchWrap.classList.add('expanded');
}

function collapseSearch() {
    searchWrap.classList.remove('expanded');
    searchWrap.classList.remove('has-ac');
    acBox.classList.remove('has-items');
    acBox.innerHTML = '';
    acItems = [];
    acSelected = -1;
}

searchInput.addEventListener('focus', expandSearch);

(shadowRoot || document).addEventListener('click', e => {
    if (!searchWrap.contains(e.target)) collapseSearch();
});

async function fetchAutocompletes(q) {
    if (!q) {
        acBox.innerHTML = '';
        acBox.classList.remove('has-items');
        searchWrap.classList.remove('has-ac');
        return;
    }
    try {
        const res = await fetch(sjEncode(`https://search.brave.com/api/suggest?q=${encodeURIComponent(q)}`));
        const data = await res.json();
        const suggestions = data[1] ? data[1].slice(0, 8) : [];
        renderSuggestions(suggestions);
    } catch (e) {
        acBox.innerHTML = '';
        acBox.classList.remove('has-items');
        searchWrap.classList.remove('has-ac');
    }
}

function renderSuggestions(list) {
    acBox.innerHTML = '';
    acItems = list;
    acSelected = -1;
    if (!list.length) {
        acBox.classList.remove('has-items');
        searchWrap.classList.remove('has-ac');
        return;
    }
    list.forEach((s) => {
        const el = document.createElement('div');
        el.className = 'ac-item';
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('viewBox', '0 0 24 24');
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', '11');
        c.setAttribute('cy', '11');
        c.setAttribute('r', '8');
        const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('d', 'm21 21-4.35-4.35');
        icon.appendChild(c);
        icon.appendChild(p);
        el.appendChild(icon);
        el.appendChild(document.createTextNode(s));
        el.onmousedown = (e) => {
            e.preventDefault();
            searchInput.value = s;
            navigate(s);
        };
        acBox.appendChild(el);
    });
    acBox.classList.add('has-items');
    searchWrap.classList.add('has-ac');
}

searchInput.addEventListener('input', () => {
    clearTimeout(acTimer);
    acSelected = -1;
    acTimer = setTimeout(() => fetchAutocompletes(searchInput.value.trim()), 180);
});

searchInput.addEventListener('keydown', e => {
    const items = acBox.querySelectorAll('.ac-item');
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        acSelected = Math.min(acSelected + 1, items.length - 1);
        items.forEach((el, i) => el.classList.toggle('selected', i === acSelected));
        if (acSelected >= 0) searchInput.value = acItems[acSelected];
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        acSelected = Math.max(acSelected - 1, -1);
        items.forEach((el, i) => el.classList.toggle('selected', i === acSelected));
        if (acSelected >= 0) searchInput.value = acItems[acSelected];
    } else if (e.key === 'Escape') {
        collapseSearch();
    } else if (e.key === 'Enter') {
        navigate();
    }
});

let homeClickCount = 0,
    homeResetTimer = null;

let gameCloseClickCount = 0,
    gameCloseResetTimer = null;

function resetGameCloseConfirm() {
    gameCloseClickCount = 0;
    clearTimeout(gameCloseResetTimer);
    const btn = document.getElementById('gamePlayerClose');
    const wrap = document.getElementById('gamePlayerCloseWrap');
    const bar = document.getElementById('gameCloseCountdown');
    if (btn) btn.classList.remove('confirm');
    if (wrap) wrap.classList.remove('confirming');
    if (bar) {
        bar.style.animation = 'none';
        bar.offsetHeight;
        bar.style.animation = '';
    }
}

function handleGamePlayerClose() {
    gameCloseClickCount++;
    if (gameCloseClickCount === 1) {
        const btn = document.getElementById('gamePlayerClose');
        const wrap = document.getElementById('gamePlayerCloseWrap');
        if (btn) btn.classList.add('confirm');
        if (wrap) wrap.classList.add('confirming');
        gameCloseResetTimer = setTimeout(resetGameCloseConfirm, 5000);
    } else {
        resetGameCloseConfirm();
        closeGamePlayer();
    }
}

function resetHomeConfirm() {
    homeClickCount = 0;
    clearTimeout(homeResetTimer);
    const btn = document.getElementById('homeBtn');
    const wrap = document.getElementById('homeBtnWrap');
    const bar = document.getElementById('homeCountdown');
    btn.classList.remove('confirm');
    wrap.classList.remove('confirming');
    bar.style.animation = 'none';
    bar.offsetHeight;
    bar.style.animation = '';
}

function handleHome() {
    homeClickCount++;
    if (homeClickCount === 1) {
        const btn = document.getElementById('homeBtn');
        const wrap = document.getElementById('homeBtnWrap');
        btn.classList.add('confirm');
        wrap.classList.add('confirming');
        homeResetTimer = setTimeout(resetHomeConfirm, 5000);
    } else {
        resetHomeConfirm();
        closePanel();
    }
}

function closePanel() {
    document.getElementById('panel').classList.remove('open');
    document.getElementById('bottomNav').classList.remove('hidden');
    document.getElementById('addrInput').value = '';
    updateLockIcon(null);
    try {
        frame.element.src = "about:blank"
    } catch {}
    if (document.fullscreenElement) document.exitFullscreen();
}

function goBack() {
    try {
        frame && frame.back();
    } catch (e) {}
}

function goForward() {
    try {
        frame && frame.forward();
    } catch (e) {}
}

function reload() {
    try {
        frame && frame.reload();
    } catch (e) {}
}

document.getElementById('addrInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') navigate(e.target.value.trim());
});

function toggleSettings() {
    document.getElementById('settingsScreen').classList.toggle('open');
}

const fsEnter = `<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>`;
const fsExit = `<path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"/>`;

function toggleFullscreen() {
    const iframeEl = document.getElementById('frame');
    if (!document.fullscreenElement) iframeEl.requestFullscreen();
    else document.exitFullscreen();
}
document.addEventListener('fullscreenchange', () => {
    document.getElementById('fsIcon').innerHTML = document.fullscreenElement ? fsExit : fsEnter;
});

frame = controller.createFrame(document.getElementById('frame'), {
    plugins: [
        new $scramjetUtils.HttpCachePlugin(),
        new $scramjetUtils.UrlWatcherPlugin((href) => {
            document.getElementById('addrInput').value = href;
            updateLockIcon(href);
            _checkExtensions(href);
        }),
    ],
});
frame.go("https://raw.githubusercontent.com/TongSherbet/storage/refs/heads/main/health.txt");
frame.element.addEventListener('load', function onLoad() {
    frame.element.src = "about:blank"
    frame.element.removeEventListener('load', onLoad);
});

const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
link.rel = 'icon';
link.href = 'data:,';
document.head.appendChild(link);

let _effectsVolume = 1;
let _currentAudio = null;
let _effectsSearchTimer = null;
let _effectsLoaded = false;
let _effectsPage = 1;
let _effectsKeyword = null;
let _effectsLoading = false;
let _effectsExhausted = false;

async function _getMyinstantsEffects(pageNum = 1, keyword = null) {
    const pageUrl = keyword ?
        `https://www.myinstants.com/en/search/?name=${encodeURIComponent(keyword)}&page=${pageNum}` :
        `https://www.myinstants.com/en/categories/sound%20effects/us/?page=${pageNum}`;
    const encodedPageUrl = sjEncode(pageUrl);
    const response = await fetch(encodedPageUrl);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const instants = doc.querySelectorAll('.instant');
    const effects = [];
    instants.forEach((instant) => {
        const titleEl = instant.querySelector('.instant-link');
        const buttonEl = instant.querySelector('.small-button');
        if (!titleEl || !buttonEl) return;
        const title = titleEl.textContent.trim();
        const onclickAttr = buttonEl.getAttribute('onclick');
        const srcMatch = onclickAttr?.match(/play\(['"]([^'"]+)['"]/);
        if (!srcMatch) return;
        const rawSrc = srcMatch[1];
        const fullSrc = `https://www.myinstants.com${rawSrc}`;
        const encodedSrc = sjEncode(fullSrc);
        effects.push({
            title,
            src: encodedSrc
        });
    });
    return effects;
}

const _sblSrc = (p) => sjEncode(p.startsWith('http') ? p : 'https://soundbuttonslab.com' + p);
async function _getSoundButtonsLabEffects(pageNum = 1, keyword = null) {
    const path = keyword ?
        `/api/v1/search-sound-button?q=${encodeURIComponent(keyword)}&page=${pageNum}` :
        `/api/v1/get-home-page-trending-soundboard-buttons?page=${pageNum}`;
    const res = await fetch(sjEncode('https://soundbuttonslab.com' + path));
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
    const json = await res.json();
    return keyword ?
        json.results.map((r) => ({
            title: r.title,
            src: _sblSrc(r.file)
        })) :
        json.results.data.map((r) => ({
            title: r.name,
            src: _sblSrc(r.audio)
        }));
}

async function getEffects(pageNum = 1, keyword = null) {
    const [myinstants, soundButtonsLab] = await Promise.all([
        _getMyinstantsEffects(pageNum, keyword).catch(() => []),
        _getSoundButtonsLabEffects(pageNum, keyword).catch(() => [])
    ]);
    return [...myinstants, ...soundButtonsLab];
}

function openEffects() {
    document.getElementById('effectsScreen').classList.add('open');
    if (!_effectsLoaded) _effectsReload(null);
}

function closeEffects() {
    document.getElementById('effectsScreen').classList.remove('open');
}

function _renderEffectSkeletons(grid, count) {
    grid.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const btn = document.createElement('div');
        btn.className = 'effect-btn skeleton';
        grid.appendChild(btn);
    }
}

function _fillingEffectSkeletonCount(grid) {
    const cardMinWidth = 100;
    const gap = 8;
    const cols = Math.max(1, Math.floor((grid.clientWidth + gap) / (cardMinWidth + gap)));
    const cardHeight = cardMinWidth;
    const rows = Math.max(1, Math.ceil((grid.clientHeight * 1.6) / (cardHeight + gap)));
    return cols * rows;
}

function _effectsReload(keyword) {
    _effectsPage = 1;
    _effectsKeyword = keyword || null;
    _effectsLoading = false;
    _effectsExhausted = false;
    const grid = document.getElementById('effectsGrid');
    _renderEffectSkeletons(grid, _fillingEffectSkeletonCount(grid));
    _loadEffectsPage();
}

async function _loadEffectsPage() {
    if (_effectsLoading || _effectsExhausted) return;
    _effectsLoading = true;
    const grid = document.getElementById('effectsGrid');
    const existing = grid.querySelector('.effects-loading');
    if (existing) existing.remove();
    const isFirstPage = _effectsPage === 1;
    let sentinel = null;
    if (!isFirstPage) {
        sentinel = document.createElement('div');
        sentinel.className = 'effects-loading';
        sentinel.textContent = 'loading…';
        grid.appendChild(sentinel);
    }
    try {
        const effects = await getEffects(_effectsPage, _effectsKeyword);
        if (sentinel) sentinel.remove();
        if (isFirstPage) grid.querySelectorAll('.effect-btn.skeleton').forEach(el => el.remove());
        if (!effects.length) {
            _effectsExhausted = true;
            if (_effectsPage === 1) {
                grid.innerHTML = '<div class="effects-loading">no results</div>';
            }
            _effectsLoading = false;
            return;
        }
        const ns = 'http://www.w3.org/2000/svg';
        effects.forEach(({
            title,
            src
        }) => {
            const btn = document.createElement('button');
            btn.className = 'effect-btn';
            const svg = document.createElementNS(ns, 'svg');
            svg.setAttribute('viewBox', '0 0 24 24');
            const poly = document.createElementNS(ns, 'polygon');
            poly.setAttribute('points', '11 5 6 9 2 9 2 15 6 15 11 19 11 5');
            const w1 = document.createElementNS(ns, 'path');
            w1.setAttribute('d', 'M15.54 8.46a5 5 0 0 1 0 7.07');
            const w2 = document.createElementNS(ns, 'path');
            w2.setAttribute('d', 'M19.07 4.93a10 10 0 0 1 0 14.14');
            svg.appendChild(poly);
            svg.appendChild(w1);
            svg.appendChild(w2);
            const span = document.createElement('span');
            span.textContent = title;
            const tl = title.length;
            const fs = tl <= 6 ? 14 : tl <= 12 ? 12 : tl <= 20 ? 11 : tl <= 30 ? 10 : 9;
            span.style.fontSize = fs + 'px';
            btn.appendChild(svg);
            btn.appendChild(span);
            btn.onclick = () => _playEffect(btn, src);
            grid.appendChild(btn);
        });
        _effectsPage++;
        _effectsLoaded = true;
        _effectsLoading = false;
        // auto-load another page if content doesn't fill the viewport
        if (grid.scrollHeight <= grid.clientHeight + 10) {
            _loadEffectsPage();
        }
    } catch (e) {
        if (sentinel) sentinel.remove();
        if (_effectsPage === 1) grid.innerHTML = '<div class="effects-loading">failed to load</div>';
        _effectsLoading = false;
    }
}

function _playEffect(btn, src) {
    if (_currentAudio) {
        _currentAudio.pause();
        _currentAudio.currentTime = 0;
        document.querySelectorAll('.effect-btn.playing').forEach(b => b.classList.remove('playing'));
        if (_currentAudio._effectBtn === btn) {
            _currentAudio = null;
            return;
        }
    }
    const audio = new Audio(src);
    audio.volume = _effectsVolume;
    audio._effectBtn = btn;
    audio.play().catch(() => {});
    btn.classList.add('playing');
    _currentAudio = audio;
    audio.onended = () => {
        btn.classList.remove('playing');
        if (_currentAudio === audio) _currentAudio = null;
    };
}

function _updateVolumeTrack() {
    const slider = document.getElementById('volumeSlider');
    const pct = parseFloat(slider.value) * 100;
    slider.style.background = `linear-gradient(to right, var(--accent) ${pct}%, rgba(255,255,255,0.12) ${pct}%)`;
}
_updateVolumeTrack();

document.getElementById('volumeSlider').addEventListener('input', function() {
    _effectsVolume = parseFloat(this.value);
    if (_currentAudio) _currentAudio.volume = _effectsVolume;
    _updateVolumeTrack();
});

document.getElementById('effectsGrid').addEventListener('scroll', function() {
    if (this.scrollHeight - this.scrollTop - this.clientHeight < 300) {
        _loadEffectsPage();
    }
});

document.getElementById('effectsSearch').addEventListener('input', function() {
    clearTimeout(_effectsSearchTimer);
    const val = this.value.trim();
    _effectsSearchTimer = setTimeout(() => _effectsReload(val || null), 350);
});

let _luminReady = false;
let _luminInitPromise = null;
let _gamesLoaded = false;
let _gamesLoading = false;
let _gamesKeyword = null;
let _gamesSearchTimer = null;

const GAMES_CHUNK = 24;

loadScript("https://cdn.jsdelivr.net/gh/luminsdk/script@latest/lumin.min.js")
function _initLumin() {
    if (_luminReady) return Promise.resolve();
    if (_luminInitPromise) return _luminInitPromise;
    _luminInitPromise = Lumin.init({
        headless: true
    }).then(() => {
        _luminReady = true;
    });
    return _luminInitPromise;
}

const GNM = {
    index: "https://cdn.jsdelivr.net/gh/freebuisness/assets@latest/zones.json",
    html: "https://cdn.jsdelivr.net/gh/freebuisness/html@main",
    covers: "https://cdn.jsdelivr.net/gh/freebuisness/covers@main"
};

const _gamesState = {
    all: null,
    fetchPromise: null,
    matches: null,
    cursor: 0,
    exhausted: false
};
function _normalizeGameName(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function _filterByName(list, keyword) {
    if (!keyword) return list;
    const k = _normalizeGameName(keyword);
    if (!k) return list;
    return list.filter(g => g.name && _normalizeGameName(g.name).includes(k));
}

function _resetSourceForReload(state, keyword) {
    state.cursor = 0;
    if (state.all) {
        state.matches = _filterByName(state.all, keyword);
        state.exhausted = state.matches.length === 0;
    } else {
        state.matches = null;
        state.exhausted = false;
    }
}

async function _fetchAllLuminGames() {
    await _initLumin();
    const games = [];
    let page = 1,
        pages = 1;
    do {
        const result = await Lumin.getGames({
            page,
            limit: 100
        });
        (result.games || []).forEach(g => games.push({
            source: 'lumin',
            name: g.name,
            id: g.id,
            image_token: g.image_token
        }));
        pages = result.pages || 1;
        page++;
    } while (page <= pages);
    return games;
}

async function _fetchAllGnmGames() {
    try {
        const games = await (await fetch(GNM.index)).json();
        return games.filter(g => g.url && g.url.startsWith("{HTML_URL}") && g.cover && !g.name.startsWith("[!]")).map(g => ({
            source: 'gnm',
            name: g.name,
            url: g.url,
            cover: g.cover
        }));
    } catch (e) {
        return [];
    }
}

async function _ensureGamesCatalog() {
    if (!_gamesState.all) {
        if (!_gamesState.fetchPromise) {
            _gamesState.fetchPromise = (async () => {
                const [lumin, gnm] = await Promise.all([
                    _fetchAllLuminGames().catch(() => []),
                    _fetchAllGnmGames()
                ]);
                const seenLuminIds = new Set();
                const dedupedLumin = lumin.filter(g => {
                    if (seenLuminIds.has(g.id)) return false;
                    seenLuminIds.add(g.id);
                    return true;
                });

                const all = [...dedupedLumin, ...gnm];

                const nameCounts = new Map();
                all.forEach(g => {
                    const key = _normalizeGameName(g.name);
                    nameCounts.set(key, (nameCounts.get(key) || 0) + 1);
                });
                all.forEach(g => {
                    const key = _normalizeGameName(g.name);
                    if (nameCounts.get(key) > 1) {
                        if (g.source === 'gnm') {
                            g.name = `${g.name} (gn-math)`;
                        } else if (g.source === 'lumin') {
                            const src = g.id && g.id.includes('/') ? g.id.split('/')[0] : g.source;
                            g.name = `${g.name} (${src})`;
                        }
                    }
                });

                all.sort((a, b) => a.name.localeCompare(b.name, undefined, {
                    sensitivity: 'base'
                }));
                _gamesState.all = all;
            })();
        }
        await _gamesState.fetchPromise;
    }
    _gamesState.matches = _filterByName(_gamesState.all, _gamesKeyword);
    _gamesState.exhausted = _gamesState.matches.length === 0;
}

function _appendGameCard(name, imgSrc, onclick) {
    const grid = document.getElementById('gamesGrid');
    const card = document.createElement('button');
    card.className = 'game-card';
    if (imgSrc) {
        const img = document.createElement('img');
        img.className = 'game-card-img';
        img.alt = name;
        img.loading = 'lazy';
        img.src = imgSrc;
        img.onerror = () => {
            const ph = document.createElement('div');
            ph.className = 'game-card-placeholder';
            img.replaceWith(ph);
        };
        card.appendChild(img);
    } else {
        const ph = document.createElement('div');
        ph.className = 'game-card-placeholder';
        card.appendChild(ph);
    }
    const nameEl = document.createElement('div');
    nameEl.className = 'game-card-name';
    nameEl.textContent = name;
    card.appendChild(nameEl);
    card.onclick = onclick;
    grid.appendChild(card);
}

async function _loadGamesChunk() {
    if (_gamesState.exhausted) return;
    if (_gamesState.matches === null) await _ensureGamesCatalog();
    if (_gamesState.exhausted) return;
    const slice = _gamesState.matches.slice(_gamesState.cursor, _gamesState.cursor + GAMES_CHUNK);
    _gamesState.cursor += slice.length;
    if (_gamesState.cursor >= _gamesState.matches.length) _gamesState.exhausted = true;

    const luminSlice = slice.filter(g => g.source === 'lumin');
    const imgUrls = await Promise.all(
        luminSlice.map(g => Lumin.getImageUrl(g.image_token).catch(() => null))
    );
    const luminImgMap = new Map(luminSlice.map((g, i) => [g, imgUrls[i]]));

    slice.forEach(g => {
        if (g.source === 'lumin') {
            _appendGameCard(g.name, luminImgMap.get(g), () => openGamePlayer(g.id));
        } else {
            const src = GNM.html + "/" + g.url.replace("{HTML_URL}/", "");
            _appendGameCard(g.name, g.cover.replace("{COVER_URL}", GNM.covers), () => openDirectGame('gnmath', g.name, src));
        }
    });
}

function _allGamesExhausted() {
    return _gamesState.exhausted;
}

function _updateGamesCount() {
    document.getElementById('gamesCount').textContent = _gamesState.matches ? _gamesState.matches.length.toLocaleString() + " Total" : '';
}

async function _loadMoreGames() {
    if (_gamesLoading || _allGamesExhausted()) return;
    _gamesLoading = true;
    const grid = document.getElementById('gamesGrid');

    await _loadGamesChunk();

    grid.querySelectorAll('.game-card.skeleton').forEach(el => el.remove());
    _updateGamesCount();
    _gamesLoaded = true;
    _gamesLoading = false;

    if (!grid.children.length) {
        grid.innerHTML = '<div class="games-loading">no results</div>';
        return;
    }

    const wrap = document.getElementById('gamesGridWrap');
    if (!_allGamesExhausted() && wrap.scrollHeight <= wrap.clientHeight + 10) {
        _loadMoreGames();
    }
}

function _renderGameSkeletons(grid, count) {
    grid.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const card = document.createElement('div');
        card.className = 'game-card skeleton';
        const ph = document.createElement('div');
        ph.className = 'game-card-placeholder';
        card.appendChild(ph);
        grid.appendChild(card);
    }
}

function _fillingSkeletonCount(wrap) {
    const cardMinWidth = 155;
    const gap = 8;
    const cols = Math.max(1, Math.floor((wrap.clientWidth + gap) / (cardMinWidth + gap)));
    const cardHeight = (cardMinWidth * 9 / 16) + 40;
    const rows = Math.max(1, Math.ceil((wrap.clientHeight * 1.6) / (cardHeight + gap)));
    return cols * rows;
}

function _gamesReload(keyword) {
    _gamesKeyword = keyword || null;

    _resetSourceForReload(_gamesState, _gamesKeyword);

    const grid = document.getElementById('gamesGrid');
    const wrap = document.getElementById('gamesGridWrap');
    _renderGameSkeletons(grid, _fillingSkeletonCount(wrap));
    wrap.scrollTop = 0;
    document.getElementById('gamesCount').textContent = '';
    _gamesLoading = false;
    _loadMoreGames();
}

function openGames() {
    document.getElementById('gamesScreen').classList.add('open');
    if (!_gamesLoaded) _gamesReload(null);
}

function closeGames() {
    document.getElementById('gamesScreen').classList.remove('open');
}

let _gamePlayerGen = 0;

function _openGamePlayerShell(label) {
    _gamePlayerGen++;
    const gen = _gamePlayerGen;
    const player = document.getElementById('gamePlayer');
    const gf = document.getElementById('gameFrame');
    const loading = document.getElementById('gamePlayerLoading');
    const idText = document.getElementById('gamePlayerId');
    idText.textContent = label;
    gf.style.display = 'none';
    gf.src = 'about:blank';
    loading.style.display = 'flex';
    loading.textContent = 'loading…';
    player.classList.add('open');
    return {
        gf,
        loading,
        gen
    };
}

function _dirOf(url) {
    const u = new URL(url);
    u.search = '';
    u.hash = '';
    u.pathname = u.pathname.substring(0, u.pathname.lastIndexOf('/') + 1);
    return u.toString();
}

function _withBaseHref(html, baseUrl) {
    if (/<base[^>]*>/i.test(html)) return html;
    if (/<head[^>]*>/i.test(html)) return html.replace(/<head([^>]*)>/i, `<head$1><base href="${baseUrl}">`);
    if (/<html[^>]*>/i.test(html)) return html.replace(/<html([^>]*)>/i, `<html$1><head><base href="${baseUrl}"></head>`);
    return `<base href="${baseUrl}">` + html;
}

function _gameAdBlockInit() {
    const orig = window.atob;
    window.atob = function(s) {
        const d = orig(s);
        return (typeof d === 'string' && d.includes('[AV][boot] ')) ? null : d;
    };

    const intId = setInterval(() => {
        try {
            document.getElementById("sidebarad1")?.remove()
            document.getElementById("sidebarad2")?.remove()
            clearInterval(intId)
        }catch{}
    }, 1000);
}

function _ADBLOCKIT(html) {
    const script = `<script>(${_gameAdBlockInit.toString()})();</script>`;
    if (/<head[^>]*>/i.test(html)) return html.replace(/<head([^>]*)>/i, `<head$1>${script}`);
    if (/<html[^>]*>/i.test(html)) return html.replace(/<html([^>]*)>/i, `<html$1><head>${script}</head>`);
    return script + html;
}

function _injectGameAdBlock(iframe) {
    try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;
        const s = doc.createElement('script');
        s.textContent = `(${_gameAdBlockInit.toString()})();`;
        doc.documentElement.appendChild(s);
    } catch (e) {}
}

document.getElementById('gameFrame').addEventListener('load', function() {
    _injectGameAdBlock(this);
});

async function openDirectGame(source, name, url) {
    const {
        gf,
        loading,
        gen
    } = _openGamePlayerShell(`${source}/${name}`);
    try {
        const res = await fetch(url);
        const html = await res.text();
        if (gen !== _gamePlayerGen) return;
        gf.onload = () => {
            if (gen !== _gamePlayerGen) return;
            loading.style.display = 'none';
            gf.style.display = 'block';
        };
        const doc = gf.contentDocument;
        doc.open();
        //console.log(_ADBLOCKIT(_withBaseHref(html, _dirOf(url))))
        doc.write(_ADBLOCKIT(_withBaseHref(html, _dirOf(url))));
        doc.close();
    } catch (e) {
        if (gen === _gamePlayerGen) loading.textContent = 'failed to load';
    }
}

async function openGamePlayer(gameId) {
    const {
        gf,
        loading,
        gen
    } = _openGamePlayerShell(gameId);
    try {
        await _initLumin();
        const {
            url
        } = await Lumin.getGameUrl(gameId);
        const res = await fetch(url);
        const html = await res.text();
        if (gen !== _gamePlayerGen) return;
        gf.onload = () => {
            if (gen !== _gamePlayerGen) return;
            loading.style.display = 'none';
            gf.style.display = 'block';
        };
        const doc = gf.contentDocument;
        doc.open();
        doc.write(_ADBLOCKIT(_withBaseHref(html, _dirOf(url))));
        doc.close();
    } catch (e) {
        if (gen === _gamePlayerGen) loading.textContent = 'failed to load';
    }
}

function closeGamePlayer() {
    resetGameCloseConfirm();
    const player = document.getElementById('gamePlayer');
    const gf = document.getElementById('gameFrame');
    const loading = document.getElementById('gamePlayerLoading');
    player.classList.remove('open');
    gf.src = 'about:blank';
    gf.style.display = 'none';
    loading.style.display = 'flex';
    loading.textContent = 'loading…';
    document.getElementById('gamePlayerId').textContent = '';
    try {
        Lumin.endGame();
    } catch (e) {}
}

function toggleGameFullscreen() {
    const gf = document.getElementById('gameFrame');
    if (!document.fullscreenElement) gf.requestFullscreen();
    else document.exitFullscreen();
}

document.addEventListener('fullscreenchange', function _gfsFc() {
    const icon = document.getElementById('gamePlayerFsIcon');
    if (!icon) return;
    icon.innerHTML = document.fullscreenElement ?
        '<path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"/>' :
        '<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>';
}, true);

document.getElementById('gamesGridWrap').addEventListener('scroll', function() {
    if (this.scrollHeight - this.scrollTop - this.clientHeight < 900) {
        _loadMoreGames();
    }
});

document.getElementById('gamesSearch').addEventListener('input', function() {
    clearTimeout(_gamesSearchTimer);
    const val = this.value.trim();
    _gamesSearchTimer = setTimeout(() => _gamesReload(val || null), 350);
});

// show ping to wisp (already measured by loader.js's getWisp during domain selection)
(() => {
    const el = document.getElementById('pingDisplay');
    if (el) el.textContent = typeof window.WispPing === 'number' ? `ping: ${window.WispPing}ms` : 'ping: --';
})();

// rmv the crap from the loader yeah idfk
document.body.firstElementChild?.remove();

// prevemt yeah extensions
let allowUnload = false;
window.addEventListener('keydown', (e) => {
    return

    if (e.ctrlKey && e.key.toLowerCase() === 'r') {
        allowUnload = true;
        setTimeout(() => { allowUnload = false; }, 1000);
    }
});
window.addEventListener('beforeunload', (e) => {
    if (allowUnload) return;
    e.preventDefault();
    e.returnValue = '';
});

// pls dont strip this...
function POPUNDER() {
  document.removeEventListener('click', POPUNDER);
  //return
  const newWindow = window.open("https://www.effectivecpmnetwork.com/zzgjdjqxv?key=57cf0a82f697f2b4f34dded2c545aaa0", '_blank');
  setTimeout(() => {
    if (newWindow) {
      window.blur();
      newWindow.focus();
    }
  }, 1);
}
document.addEventListener('click', POPUNDER);