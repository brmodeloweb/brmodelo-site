import{_ as t}from"./preload-helper.BQ24v_F8.js";import{b as u,O as o}from"./2.CJVAocmz.js";import{O as l}from"./OptionsColor.COyEG7Rt.js";class n{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(e){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const r=u(this.color)?void 0:this.color;this.color=o(e.color,i=>l.create(r,i))}e.size!==void 0&&(this.size=e.size)}}}class c extends n{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class h extends n{load(e){super.load(e),e&&(this.divs=o(e.divs,r=>{const i=new c;return i.load(r),i}))}}async function m(s,e=!0){await s.addInteractor("externalBubble",async r=>{const{Bubbler:i}=await t(()=>import("./Bubbler.BAJimmp_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new i(r)},e)}export{h as Bubble,n as BubbleBase,c as BubbleDiv,m as loadExternalBubbleInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Bubbler.BAJimmp_.js","./2.CJVAocmz.js","./index.DVx-03h4.js","./index.CLjUf3Ti.js","./preload-helper.BQ24v_F8.js","./messages.BLPPyppd.js","./runtime.CSTc6qgx.js","../assets/2.QBwkNtc4.css","./ExternalInteractorBase.CIi3zRdK.js","./Ranges.BatH8d6J.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
