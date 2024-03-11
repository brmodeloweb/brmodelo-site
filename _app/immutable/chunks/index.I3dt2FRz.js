import{_ as n}from"./preload-helper.BQ24v_F8.js";import{A as o}from"./2.CJVAocmz.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function m(r,t=!0){await r.addInteractor("externalRemove",async e=>{const{Remover:a}=await n(()=>import("./Remover.lUzIKqf2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new a(e)},t)}export{s as Remove,m as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Remover.lUzIKqf2.js","./ExternalInteractorBase.CIi3zRdK.js","./2.CJVAocmz.js","./index.DVx-03h4.js","./index.CLjUf3Ti.js","./preload-helper.BQ24v_F8.js","./messages.BLPPyppd.js","./runtime.CSTc6qgx.js","../assets/2.QBwkNtc4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
