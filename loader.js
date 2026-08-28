// Lightweight loader for cloud-only pages
// Exposes a clear list of server defaults that other scripts (index.html, main.js) can use.
(function(){
  window.opiumCloudDefaults = window.opiumCloudDefaults || [location.origin, 'https://nowgg.fun', 'https://cloud.opium.example'];
  // helper to get first reachable server (not performing network probe here)
  window.getOpiumCloudDefaults = function(){ return window.opiumCloudDefaults.slice(); };
})();
