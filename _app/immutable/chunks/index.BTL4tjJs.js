import{_ as r}from"./preload-helper.BQ24v_F8.js";async function e(a,o=!0){const{PolygonDrawer:t}=await r(()=>import("./PolygonDrawer.BdUKuk0V.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await r(()=>import("./TriangleDrawer.GGrCfp_U.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8]),import.meta.url);await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PolygonDrawer.BdUKuk0V.js","./PolygonDrawerBase.BI2ZU7yO.js","./2.CJVAocmz.js","./index.DVx-03h4.js","./index.CLjUf3Ti.js","./preload-helper.BQ24v_F8.js","./messages.BLPPyppd.js","./runtime.CSTc6qgx.js","../assets/2.QBwkNtc4.css","./TriangleDrawer.GGrCfp_U.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
