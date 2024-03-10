import{_ as o}from"./preload-helper.D7itGvJr.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater.DkxeqH59.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/RotateUpdater.DkxeqH59.js","_app/immutable/chunks/2.CGOALmsE.js","_app/immutable/chunks/index.DVx-03h4.js","_app/immutable/chunks/index.CLjUf3Ti.js","_app/immutable/chunks/preload-helper.D7itGvJr.js","_app/immutable/chunks/messages.BLPPyppd.js","_app/immutable/chunks/runtime.CSTc6qgx.js","_app/immutable/assets/2.QBwkNtc4.css","_app/immutable/chunks/ValueWithRandom.N4yBSaLf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
