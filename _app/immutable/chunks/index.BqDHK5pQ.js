import{_ as i}from"./preload-helper.D7itGvJr.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater.ZGlrKF4u.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(r)},a)}export{p as loadOpacityUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/OpacityUpdater.ZGlrKF4u.js","_app/immutable/chunks/2.CGOALmsE.js","_app/immutable/chunks/index.DVx-03h4.js","_app/immutable/chunks/index.CLjUf3Ti.js","_app/immutable/chunks/preload-helper.D7itGvJr.js","_app/immutable/chunks/messages.BLPPyppd.js","_app/immutable/chunks/runtime.CSTc6qgx.js","_app/immutable/assets/2.QBwkNtc4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
