import{_ as i}from"./preload-helper.D7itGvJr.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance.CsVcrxCQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/LinkInstance.CsVcrxCQ.js","_app/immutable/chunks/2.CGOALmsE.js","_app/immutable/chunks/index.DVx-03h4.js","_app/immutable/chunks/index.CLjUf3Ti.js","_app/immutable/chunks/preload-helper.D7itGvJr.js","_app/immutable/chunks/messages.BLPPyppd.js","_app/immutable/chunks/runtime.CSTc6qgx.js","_app/immutable/assets/2.QBwkNtc4.css","_app/immutable/chunks/CanvasUtils.BWIqgnG1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
