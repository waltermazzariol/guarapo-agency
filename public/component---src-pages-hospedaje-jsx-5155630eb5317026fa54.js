"use strict";(self.webpackChunkonepage_starter=self.webpackChunkonepage_starter||[]).push([[605],{1937:function(e,t,a){var n=a(7294),r=a(207),l=a(9470),c=a.n(l),m=a(1555);function s(e){let{title:t,subtitle:a,slogan:l}=e;return n.createElement(m.Z,{lg:12,className:"mb-5 mt-5"},n.createElement(c(),{up:!0},n.createElement("h3",{className:"text-center"},t),n.createElement("center",null,n.createElement(r.Z,null)),n.createElement("p",{className:"mt-4 text-center"},a)))}s.defaultProps={title:"Title",subtitle:"",slogan:""},t.Z=s},8839:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(4803),l=a.n(r),c=a(682),m=a(207),s=a.p+"static/bg_hero-67555ac5534f6ce090e7b5d78b9de209.jpg";var i=function(e){return n.createElement(c.Z,{as:"header",fluid:!0,className:"cover",style:{background:"linear-gradient(to right bottom, rgba(0,0,0,0), rgba(0,0,0,0)), url("+s+") 40% 0",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},n.createElement("div",{className:"cover-wrapper"},n.createElement("div",{className:"cover-item text-center"},n.createElement(l(),{down:!0},e.data?n.createElement("h1",{className:"cover-title",dangerouslySetInnerHTML:{__html:e.data.title}}):"",e.data?n.createElement(m.Z,null):"",e.data?n.createElement("div",{className:"cover-subtitle pt-3"},e.data.subtitle):""))))}},8511:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),r=a(4410),l=a(5314),c=a(1754),m=a(4902),s=a(9470),i=a.n(s);var o=function(e){return n.createElement("ul",null,e.data.map((e=>n.createElement("li",{key:e.text},n.createElement("i",{className:"far fa-dot-circle"}),e.text))))},u=a(4854);var d=function(e){let{data:t}=e;return n.createElement("div",{className:"price-wrapper mb-5"},n.createElement(i(),null,t.map(((e,t)=>n.createElement("div",{key:t,className:"item "},n.createElement("h4",{className:""},e.name),n.createElement("div",{className:"item-price"},n.createElement("span",{className:"item-title text-left"},e.price),n.createElement("span",{className:"text-left"},e.time)),n.createElement(o,{data:e.list}),n.createElement(u.Link,{className:"item-btn btn btn--primary",to:e.button_url,target:"_blank",rel:"noopener noreferrer"}," ",e.button_text))))))},E=a(8839),p=a(6565),g=a(5006),b=a(1937);var f=function(e){const t=e.data.allDataJson.edges[0].node,a=e.data.dataJson;return n.createElement(m.Z,{nav:t.navigation},n.createElement(c.Z,{page:"hospedaje",metas:t.general}),n.createElement(E.Z,{data:t.cover}),n.createElement(g.Z,{className:"price bg-gray"},n.createElement(b.Z,{title:t.packages.title}),n.createElement(d,{data:t.packages.items})),n.createElement(g.Z,{anchor:"contact",className:"contact bg-dark",fluid:!0,noGutters:!0},n.createElement(p.Z,{data:a.contact})),n.createElement(r.Z,null,n.createElement(l.Z,{data:a.tags})))}}}]);
//# sourceMappingURL=component---src-pages-hospedaje-jsx-5155630eb5317026fa54.js.map