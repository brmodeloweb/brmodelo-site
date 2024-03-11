import{_ as o}from"./preload-helper.BQ24v_F8.js";class a{constructor(){this.distance=200}load(t){t&&t.distance!==void 0&&(this.distance=t.distance)}}async function c(e,t=!0){await e.addInteractor("externalBounce",async n=>{const{Bouncer:r}=await o(()=>import("./Bouncer.DD0zOok8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new r(n)},t)}export{a as Bounce,c as loadExternalBounceInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Bouncer.DD0zOok8.js","./2.CJVAocmz.js","./index.DVx-03h4.js","./index.CLjUf3Ti.js","./preload-helper.BQ24v_F8.js","./messages.BLPPyppd.js","./runtime.CSTc6qgx.js","../assets/2.QBwkNtc4.css","./Ranges.BatH8d6J.js","./ExternalInteractorBase.CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
