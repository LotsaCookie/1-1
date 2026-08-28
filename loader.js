// Lightweight loader for cloud-only pages
// Exposes a clear list of server defaults that other scripts (index.html, main.js) can use.
(function(){
  window.opiumCloudDefaults = window.opiumCloudDefaults || [location.origin, 'https://nowgg.fun', 'https://cloud.opium.example'];
  // helper to get first reachable server (not performing network probe here)
  window.getOpiumCloudDefaults = function(){ return window.opiumCloudDefaults.slice(); };

  // Ensure websocket URLs are upgraded to secure wss:// when page is served over HTTPS.
  // Accepts ws://, wss://, http(s)://, or path/id and returns a safe ws(s) URL or original input.
  window.ensureWss = function(raw) {
    try {
      if (!raw) return raw;
      if (typeof raw !== 'string') return raw;
      // ws:// -> wss:// on secure pages
      if (raw.startsWith('ws://') && location.protocol === 'https:') return raw.replace(/^ws:\/\//i, 'wss://');
      // leave wss:// alone
      if (raw.startsWith('wss://')) return raw;
      // http(s) -> ws(s) with matching security
      if (raw.startsWith('http://') || raw.startsWith('https://')) {
        try {
          const u = new URL(raw);
          const scheme = (location.protocol === 'https:' || u.protocol === 'https:') ? 'wss://' : 'ws://';
          return scheme + u.host + u.pathname + (u.search || '');
        } catch (e) {
          return raw;
        }
      }
      // Path-like or host-only value: prefer active cloud defaults as base
      if (raw.includes('/') || raw.indexOf(':') === -1) return raw;
      return raw;
    } catch (e) {
      return raw;
    }
  };
})();
