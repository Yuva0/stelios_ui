"use strict";(self.webpackChunkstelios_ui=self.webpackChunkstelios_ui||[]).push([[466],{70466:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var r=i(65043),s=i(821),n=i(47987),o=i(66436),l=i(70579);const a=o.p_,c=()=>{const e=(0,n.lW)(),t=e.width<768,i=e.width<480,o=(0,s.DP)().theme.colorPalette,c=Array.from({length:3},(()=>r.createRef())),h=Array.from({length:16},(()=>r.createRef())),[x,g]=r.useState("usage"),[f,v]=r.useState(0),[j,y]=r.useState(0),L="light"===o.primary.appearance?"black":"white";return r.useEffect((()=>{const e=()=>{if("usage"===x)for(let i=0;i<c.length;i++){var e;if((null===(e=c[i].current)||void 0===e?void 0:e.getBoundingClientRect().top)>0)return void v(i)}else if("props"===x)for(let i=0;i<h.length;i++){var t;if((null===(t=h[i].current)||void 0===t?void 0:t.getBoundingClientRect().top)>0)return void y(i)}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[c,h,x]),(0,l.jsxs)("div",{style:{margin:"1.5rem 0 4rem 0",width:i?"100%":t?"calc(100% - 12rem)":"calc(100% - 22rem)"},children:[(0,l.jsx)(n.z_,{name:a.title,path:a.path}),(0,l.jsxs)("div",{style:{padding:"1rem"},children:[(0,l.jsx)(n.A8,{title:a.title,description:a.description}),(0,l.jsxs)(s.tU,{color:"primary",style:{marginTop:"2rem"},value:x,onChange:e=>g(e),children:[(0,n.p2)(),(0,l.jsxs)(s.T2,{children:[(0,l.jsx)("div",{style:{height:"1px",width:"100%",backgroundColor:o.primary.accentScale[9],marginTop:"1rem"}}),(0,l.jsxs)(s.Kp,{value:"usage",children:[(0,l.jsx)(n.hX,{ref:c[0],label:a.usage.installation.label,text:a.usage.installation.description}),(0,l.jsx)(n.hX,{ref:c[1],label:a.usage.variants.label,description:a.usage.variants.description,code:p,text:d}),(0,l.jsx)(n.hX,{ref:c[2],label:a.usage.sizes.label,description:a.usage.sizes.description,code:m,text:u}),!t&&(0,n.Mt)([a.usage.installation.label,a.usage.variants.label,a.usage.sizes.label],f,c)]}),(0,l.jsxs)(s.Kp,{value:"props",children:[(0,l.jsx)(s.EY,{preciseColor:L,size:"large",style:{marginTop:"2rem"},children:a.props._label}),(0,l.jsx)(n.f5,{ref:h[0],propName:a.props.variant.name,description:a.props.variant.description,type:a.props.variant.type,defaultValue:a.props.variant.default,marginTop:"1rem"}),(0,l.jsx)(n.f5,{ref:h[1],propName:a.props.color.name,description:a.props.color.description,type:a.props.color.type,defaultValue:a.props.color.default}),(0,l.jsx)(n.f5,{ref:h[2],propName:a.props.children.name,description:a.props.children.description,type:a.props.children.type,defaultValue:a.props.children.default}),!t&&(0,n.Mt)([a.props.variant.name,a.props.color.name,a.props.children.name],j,h)]})]})]})]})]})},p=(0,l.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,l.jsx)(s.B8,{color:"component",variant:"ordered",title:a.code.title,children:a.code.items.map(((e,t)=>(0,l.jsx)(s.ck,{children:e},t)))}),(0,l.jsx)(s.B8,{color:"component",variant:"unordered",title:a.code.title,children:a.code.items.map(((e,t)=>(0,l.jsx)(s.ck,{children:e},t)))}),(0,l.jsx)(s.B8,{color:"component",variant:"none",title:a.code.title,children:a.code.items.map(((e,t)=>(0,l.jsx)(s.ck,{children:e},t)))})]}),d=`<List color="component" variant="ordered" title="${a.code.title}">\n${a.code.items.map(((e,t)=>`<ListItem key={${t}}>${e}</ListItem>`))}\n</List>\n\n<List color="component" variant="unordered" title="${a.code.title}">\n${a.code.items.map(((e,t)=>`<ListItem key={${t}}>${e}</ListItem>`))}\n</List>;\n\n<List color="component" variant="none" title="${a.code.title}">\n${a.code.items.map(((e,t)=>`<ListItem key={${t}}>${e}</ListItem>`))}\n</List>\n`,m=(0,l.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,l.jsx)(s.B8,{color:"component",size:"small",title:a.code.title,children:a.code.items.map(((e,t)=>(0,l.jsx)(s.ck,{children:e},t)))}),(0,l.jsx)(s.B8,{color:"component",size:"medium",title:a.code.title,children:a.code.items.map(((e,t)=>(0,l.jsx)(s.ck,{children:e},t)))}),(0,l.jsx)(s.B8,{color:"component",size:"large",title:a.code.title,children:a.code.items.map(((e,t)=>(0,l.jsx)(s.ck,{children:e},t)))})]}),u=`<List color="component" size="small" title="${a.code.title}">\n${a.code.items.map(((e,t)=>` <ListItem key={${t}}>${e}</ListItem>`))}\n</List>\n\n<List color="component" size="medium" title="${a.code.title}">\n${a.code.items.map(((e,t)=>` <ListItem key={${t}}>${e}</ListItem>`))}\n</List>;\n\n<List color="component" size="large" title="${a.code.title}">\n${a.code.items.map(((e,t)=>` <ListItem key={${t}}>${e}</ListItem>`))}\n</List>\n`}}]);
//# sourceMappingURL=466.2a1096bc.chunk.js.map