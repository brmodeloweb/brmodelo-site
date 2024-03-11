import{_ as n}from"./preload-helper.BQ24v_F8.js";async function i(t,a=!0){await t.addInteractor("externalPause",async r=>{const{Pauser:e}=await n(()=>import("./Pauser.aQ5BXvkT.js"),__vite__mapDeps([0,1]),import.meta.url);return new e(r)},a)}export{i as loadExternalPauseInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Pauser.aQ5BXvkT.js","./ExternalInteractorBase.CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
