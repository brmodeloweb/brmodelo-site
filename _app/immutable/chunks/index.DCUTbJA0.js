import{_ as o}from"./preload-helper.D7itGvJr.js";import{A as r}from"./2.CGOALmsE.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function c(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await o(()=>import("./Remover.10uMlfuF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return new a(e)},t)}export{u as Remove,c as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/Remover.10uMlfuF.js","_app/immutable/chunks/ExternalInteractorBase.CIi3zRdK.js","_app/immutable/chunks/2.CGOALmsE.js","_app/immutable/chunks/index.DVx-03h4.js","_app/immutable/chunks/index.CLjUf3Ti.js","_app/immutable/chunks/preload-helper.D7itGvJr.js","_app/immutable/chunks/messages.BLPPyppd.js","_app/immutable/chunks/runtime.CSTc6qgx.js","_app/immutable/assets/2.QBwkNtc4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
