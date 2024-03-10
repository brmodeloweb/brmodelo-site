import{_ as e}from"./preload-helper.BQ24v_F8.js";import{O as r}from"./OptionsColor.COyEG7Rt.js";class s{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=r.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new s}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async t=>{const{Grabber:o}=await e(()=>import("./Grabber.CKx4YyPR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new o(t)},i)}export{f as Grab,s as GrabLinks,a as loadExternalGrabInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Grabber.CKx4YyPR.js","./CanvasUtils.jUD0xvCj.js","./2.CJVAocmz.js","./index.DVx-03h4.js","./index.CLjUf3Ti.js","./preload-helper.BQ24v_F8.js","./messages.BLPPyppd.js","./runtime.CSTc6qgx.js","../assets/2.QBwkNtc4.css","./ExternalInteractorBase.CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
