import{O as p,g as n}from"./ograf-base-B5E01P61.js";const c=`.hello-world-lower-third {
  position: absolute;
  inset: 0;
  pointer-events: none;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.hello-world-lower-third__bar {
  position: absolute;
  left: 96px;
  bottom: 120px;
  padding: 28px 48px;
  min-width: 480px;
  background: linear-gradient(90deg, rgba(20, 24, 40, 0.92) 0%, rgba(20, 24, 40, 0.6) 100%);
  border-left: 6px solid #6ea8ff;
  color: #ffffff;
  opacity: 0;
  transform: translateX(-32px);
}

.hello-world-lower-third__title {
  display: block;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.hello-world-lower-third__subtitle {
  display: block;
  margin-top: 8px;
  font-size: 28px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
}
`,e="hello-world-lower-third",o={title:"Hello, World",subtitle:"OGraf demo lower-third"};function h(l){if(l&&typeof l=="object"){const t=l;return{title:typeof t.title=="string"?t.title:o.title,subtitle:typeof t.subtitle=="string"?t.subtitle:o.subtitle}}return{...o}}class u extends p{root=null;bar=null;titleEl=null;subtitleEl=null;data={...o};async load(t){this.data=h(t.data);const d=document.createElement("style");d.textContent=c;const s=document.createElement("div");s.className=e;const i=document.createElement("div");i.className=`${e}__bar`;const r=document.createElement("span");r.className=`${e}__title`;const a=document.createElement("span");a.className=`${e}__subtitle`,i.appendChild(r),i.appendChild(a),s.appendChild(i),this.appendChild(d),this.appendChild(s),this.root=s,this.bar=i,this.titleEl=r,this.subtitleEl=a,this.renderText()}async playAction(t){return this.bar&&(t.skipAnimation?n.set(this.bar,{opacity:1,x:0}):n.fromTo(this.bar,{opacity:0,x:-32},{opacity:1,x:0,duration:.6,ease:"power2.out"})),{statusCode:200,currentStep:1}}async stopAction(t){this.bar&&(t.skipAnimation?n.set(this.bar,{opacity:0,x:-32}):n.to(this.bar,{opacity:0,x:-32,duration:.4,ease:"power2.in"}))}async updateAction(t){this.data=h(t.data),this.renderText()}async dispose(){n.killTweensOf(this.bar),this.replaceChildren(),this.root=null,this.bar=null,this.titleEl=null,this.subtitleEl=null}renderText(){this.titleEl&&(this.titleEl.textContent=this.data.title),this.subtitleEl&&(this.subtitleEl.textContent=this.data.subtitle)}}customElements.get(e)||customElements.define(e,u);export{u as HelloWorldLowerThird};
