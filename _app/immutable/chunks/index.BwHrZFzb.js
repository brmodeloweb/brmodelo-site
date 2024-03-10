import{_ as r}from"./preload-helper.D7itGvJr.js";import{A as n}from"./2.CGOALmsE.js";class a{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=n(e))}}async function f(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await r(()=>import("./Pusher.DL97lrNP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return new u(e)},t)}export{a as Push,f as loadExternalPushInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/Pusher.DL97lrNP.js","_app/immutable/chunks/2.CGOALmsE.js","_app/immutable/chunks/index.DVx-03h4.js","_app/immutable/chunks/index.CLjUf3Ti.js","_app/immutable/chunks/preload-helper.D7itGvJr.js","_app/immutable/chunks/messages.BLPPyppd.js","_app/immutable/chunks/runtime.CSTc6qgx.js","_app/immutable/assets/2.QBwkNtc4.css","_app/immutable/chunks/ExternalInteractorBase.CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
