import{_ as i}from"./preload-helper.BQ24v_F8.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater.B7UxK48T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater.B7UxK48T.js","./ValueWithRandom.DdieKi9k.js","./2.CJVAocmz.js","./index.DVx-03h4.js","./index.CLjUf3Ti.js","./preload-helper.BQ24v_F8.js","./messages.BLPPyppd.js","./runtime.CSTc6qgx.js","../assets/2.QBwkNtc4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
