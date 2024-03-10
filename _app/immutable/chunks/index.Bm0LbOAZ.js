import{_ as s}from"./preload-helper.D7itGvJr.js";class o{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}async function d(t,e=!0){await t.addInteractor("externalAttract",async i=>{const{Attractor:n}=await s(()=>import("./Attractor.MdcEP_2c.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));return new n(t,i)},e)}export{o as Attract,d as loadExternalAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/Attractor.MdcEP_2c.js","_app/immutable/chunks/Ranges.bKfBr80j.js","_app/immutable/chunks/2.CGOALmsE.js","_app/immutable/chunks/index.DVx-03h4.js","_app/immutable/chunks/index.CLjUf3Ti.js","_app/immutable/chunks/preload-helper.D7itGvJr.js","_app/immutable/chunks/messages.BLPPyppd.js","_app/immutable/chunks/runtime.CSTc6qgx.js","_app/immutable/assets/2.QBwkNtc4.css","_app/immutable/chunks/ExternalInteractorBase.CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
