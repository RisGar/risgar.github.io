if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>r(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/b074331b.02b4c9f8.css",revision:null},{url:"client.17d98c6c.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"a6f3f41773cd374abbf6af0775cad519"},{url:"android-chrome-512x512.png",revision:"0188e6c34dd8f956805ce211e4149f51"},{url:"manifest.webmanifest",revision:"6770079a45f9ca4d620e94d88978ac0a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
