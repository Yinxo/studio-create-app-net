import{O as y,g as c}from"./ograf-base-B5E01P61.js";const _=`.fiindo-produkt-video {
  position: absolute;
  inset: 0;
  pointer-events: none;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.fiindo-produkt-video__logo {
  position: absolute;
  left: 60px;
  bottom: 100px;
  width: 150px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff;
  font-weight: 900;
  font-size: 34px;
  letter-spacing: -0.5px;
  transform-origin: left center;
  opacity: 0;
  filter:
    drop-shadow(0 4px 14px rgba(0, 0, 0, 0.55))
    drop-shadow(0 0 22px rgba(47, 185, 209, 0.55))
    drop-shadow(0 0 48px rgba(47, 185, 209, 0.25));
}

.fiindo-produkt-video__separator {
  position: absolute;
  left: 240px;
  bottom: calc(100px + 17.28px);
  width: 3px;
  height: 61.44px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    #2fb9d1 18%,
    #2fb9d1 82%,
    transparent 100%
  );
  box-shadow: 0 0 14px #2fb9d1, 0 0 28px rgba(47, 185, 209, 0.55);
  border-radius: 2px;
  opacity: 0;
}

.fiindo-produkt-video__bar {
  position: absolute;
  left: 267px;
  right: 0;
  bottom: 100px;
  height: 96px;
  padding-left: 28px;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: linear-gradient(
    95deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.97) 35%,
    rgba(232, 244, 248, 0.92) 60%,
    rgba(232, 244, 248, 0.55) 80%,
    rgba(232, 244, 248, 0) 100%
  );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 rgba(24, 49, 63, 0.08);
  filter:
    drop-shadow(0 14px 28px rgba(0, 0, 0, 0.42))
    drop-shadow(0 0 48px rgba(47, 185, 209, 0.22));
  clip-path: inset(0 100% 0 0);
}

.fiindo-produkt-video__title {
  color: #18313f;
  font-weight: 900;
  font-size: 32px;
  line-height: 1.05;
  letter-spacing: -0.5px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}

.fiindo-produkt-video__description {
  color: #5a6e7a;
  font-weight: 500;
  font-size: 19px;
  line-height: 1.35;
  max-width: 1100px;
  opacity: 0;
}
`,d="fiindo-produkt-video",l=.5,u=.3,g={entries:[]};function h(n){if(n&&typeof n=="object"){const t=n;if(Array.isArray(t.entries))return{entries:t.entries.filter(w)}}return{...g}}function w(n){if(!n||typeof n!="object")return!1;const t=n;return typeof t.name=="string"&&typeof t.role=="string"&&typeof t.duration=="number"}class v extends y{data={...g};dom=null;timeline=null;currentStep=0;async load(t){this.data=h(t.data),this.buildDom(),this.rebuildTimeline()}async playAction(t){const e=this.data.entries.length;if(e===0)return{statusCode:200,currentStep:this.currentStep};if(typeof t.goto=="number")this.currentStep=m(t.goto,e);else{const o=typeof t.delta=="number"?t.delta:1;this.currentStep=m(this.currentStep+o,e)}const i=this.timeline;if(!i)return{statusCode:200,currentStep:this.currentStep};const s=f(this.currentStep);return t.skipAnimation?(i.seek(s,!1),i.pause()):i.play(s,!1),{statusCode:200,currentStep:this.currentStep}}async stopAction(t){!this.timeline||!this.dom||(t.skipAnimation?this.resetTargets():c.to([this.dom.bar,this.dom.logo,this.dom.separator,this.dom.title,this.dom.description],{opacity:0,duration:u,ease:"power2.in"}))}async updateAction(t){this.data=h(t.data),this.rebuildTimeline()}async goToTime(t){if(!this.timeline)return;const e=t.timestamp/1e3;this.timeline.pause().seek(e,!1)}async dispose(){this.timeline&&(this.timeline.kill(),this.timeline=null),this.replaceChildren(),this.dom=null,this.currentStep=0}buildDom(){const t=document.createElement("style");t.textContent=_;const e=document.createElement("div");e.className=d;const i=document.createElement("div");i.className=`${d}__logo`,i.textContent="fiindo";const s=document.createElement("div");s.className=`${d}__separator`;const o=document.createElement("div");o.className=`${d}__bar`;const a=document.createElement("span");a.className=`${d}__title`;const p=document.createElement("span");p.className=`${d}__description`,o.appendChild(a),o.appendChild(p),e.appendChild(i),e.appendChild(s),e.appendChild(o),this.appendChild(t),this.appendChild(e),this.dom={root:e,logo:i,separator:s,bar:o,title:a,description:p}}rebuildTimeline(){if(!this.dom)return;this.timeline&&(this.timeline.kill(),this.timeline=null);const t=c.timeline({paused:!0}),{logo:e,separator:i,bar:s,title:o,description:a}=this.dom;this.data.entries.forEach((p,b)=>{const r=f(b);t.addLabel(r),t.call(()=>{o.textContent=p.name,a.textContent=p.role},void 0,r),t.set([e,i,o,a],{opacity:0},r),t.set(e,{x:-12,scale:.88},r),t.set(s,{clipPath:"inset(0 100% 0 0)"},r),t.to(e,{opacity:1,x:0,scale:1,duration:l,ease:"power2.out"},r),t.to(i,{opacity:1,duration:l*.7,ease:"power1.out"},`${r}+=${l*.25}`),t.to(s,{clipPath:"inset(0 0% 0 0)",duration:l*.9,ease:"power3.out"},`${r}+=${l*.3}`),t.to([o,a],{opacity:1,duration:l*.6,ease:"power1.out",stagger:.05},`${r}+=${l*.55}`);const x=Math.max(0,p.duration/1e3);t.to({},{duration:x}),t.to([o,a,s,i,e],{opacity:0,duration:u,ease:"power2.in"})}),this.timeline=t}resetTargets(){this.dom&&(c.set([this.dom.logo,this.dom.separator,this.dom.title,this.dom.description],{opacity:0}),c.set(this.dom.bar,{clipPath:"inset(0 100% 0 0)"}))}}function f(n){return`step-${n}`}function m(n,t){return t<=0||n<0?0:n>=t?t-1:n}customElements.get(d)||customElements.define(d,v);export{v as FiindoProduktVideo};
