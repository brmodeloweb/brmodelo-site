import{_ as n}from"./preload-helper.D7itGvJr.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer.C8CO_1iR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer.emby770M.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/chunks/PolygonDrawer.C8CO_1iR.js","_app/immutable/chunks/PolygonDrawerBase.BwLDQx0c.js","_app/immutable/chunks/2.CGOALmsE.js","_app/immutable/chunks/index.DVx-03h4.js","_app/immutable/chunks/index.CLjUf3Ti.js","_app/immutable/chunks/preload-helper.D7itGvJr.js","_app/immutable/chunks/messages.BLPPyppd.js","_app/immutable/chunks/runtime.CSTc6qgx.js","_app/immutable/assets/2.QBwkNtc4.css","_app/immutable/chunks/TriangleDrawer.emby770M.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
