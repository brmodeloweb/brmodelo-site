import{_ as r}from"./preload-helper.BQ24v_F8.js";class o{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}async function d(t,e=!0){await t.addInteractor("externalAttract",async i=>{const{Attractor:n}=await r(()=>import("./Attractor.DyOEncr-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new n(t,i)},e)}export{o as Attract,d as loadExternalAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Attractor.DyOEncr-.js","./Ranges.BatH8d6J.js","./2.CJVAocmz.js","./index.DVx-03h4.js","./index.CLjUf3Ti.js","./preload-helper.BQ24v_F8.js","./messages.BLPPyppd.js","./runtime.CSTc6qgx.js","../assets/2.QBwkNtc4.css","./ExternalInteractorBase.CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
