import{_ as t}from"./preload-helper.D7itGvJr.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index.sYCi7sfN.js"),__vite__mapDeps([0,1])),{loadCircleShape:i}=await t(()=>import("./index.DSQbhaev.js"),__vite__mapDeps([2,1])),{loadColorUpdater:r}=await t(()=>import("./index.BlEsKCZc.js"),__vite__mapDeps([3,1])),{loadOpacityUpdater:d}=await t(()=>import("./index.BqDHK5pQ.js"),__vite__mapDeps([4,1])),{loadOutModesUpdater:e}=await t(()=>import("./index.CEbAkDdJ.js"),__vite__mapDeps([5,1])),{loadSizeUpdater:l}=await t(()=>import("./index.DtX991iO.js"),__vite__mapDeps([6,1]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/index.sYCi7sfN.js","_app/immutable/chunks/preload-helper.D7itGvJr.js","_app/immutable/chunks/index.DSQbhaev.js","_app/immutable/chunks/index.BlEsKCZc.js","_app/immutable/chunks/index.BqDHK5pQ.js","_app/immutable/chunks/index.CEbAkDdJ.js","_app/immutable/chunks/index.DtX991iO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
