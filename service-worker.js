if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const a=e=>c(e,n),s={module:{uri:n},exports:f,require:a};i[n]=Promise.all(r.map((e=>s[e]||a(e)))).then((e=>(d(...e),f)))}}define(["./workbox-c8e7de95"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"icon.47a26986.png",revision:"b0a871321648d9e614a0e29d70c517e4"},{url:"index.1d13f1ab.js",revision:"0cf4a5df627b5aab8659e068e11eeca7"},{url:"index.b65a202b.css",revision:"a0f97f36bfc76dc6d9ca70d703df0409"},{url:"index.html",revision:"d9eba47a314d675d02fa504bd4e46f3c"},{url:"mikv.2040b203.png",revision:"438440a9a1ee639471aacad592c66a16"},{url:"mikv.2640db02.png",revision:"db77de908b3e3664dbe2a17c6a3ee5da"},{url:"mikv.31f09605.png",revision:"5d874458cc01030e9eb3c3aa6d818c91"},{url:"mikv.6f1b8cf6.png",revision:"e36145263d9e6db0c571b223516ff074"},{url:"mikv.77ac4d2d.png",revision:"96a3e50c20443035f77927cbf6b97043"},{url:"mikv.978ef8e2.png",revision:"5de477fadc2aa1f8c36653fcd4d0a981"},{url:"mikv.a19bd1a5.png",revision:"289a946104423502061707b5520300de"},{url:"mikv.bf9e4c84.webmanifest",revision:"6c4360342601f82674805ae4fc17561d"},{url:"mikv.cac25f10.png",revision:"25da6f3c1136a1622dc2d095e240125b"},{url:"mikv.e4ff54ab.png",revision:"a082c9c3a5c4d83295add3037c4cef51"},{url:"mikv.f668ee2f.png",revision:"afc70d1ef571f4934d0bf1e8070f7a5d"},{url:"Screen404.b7045180.js",revision:"7cef764214f4b470e58a536410c21518"},{url:"ScreenDashboard.c154735c.js",revision:"e4d0ab3dc82e9801f73b58791acb0211"},{url:"ScreenHome.1ce6fe87.js",revision:"8476419ea17e8a6fdbb3135d14b9c267"},{url:"ScreenHome.77b20b9f.js",revision:"56b9c81cdec16de12f3f2d0641c9a584"}],{})}));
//# sourceMappingURL=service-worker.js.map
