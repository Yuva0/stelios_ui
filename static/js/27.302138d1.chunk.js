"use strict";(self.webpackChunkstelios_ui=self.webpackChunkstelios_ui||[]).push([[27],{14027:(e,o,t)=>{t.r(o),t.d(o,{default:()=>c});var l=t(65043),n=t(821),r=t(66436),a=t(47987),i=t(70579);const s=r.Oe,c=()=>{const e=(0,a.lW)(),o=e.width<768,t=e.width<480,r=(0,n.DP)().theme.colorPalette,c=Array.from({length:2},(()=>l.createRef())),p=Array.from({length:10},(()=>l.createRef())),[u,x]=l.useState("usage"),[b,h]=l.useState(0),[g,f]=l.useState(0),C="light"===r.primary.appearance?"black":"white";return l.useEffect((()=>{const e=()=>{if("usage"===u)for(let t=0;t<c.length;t++){var e;if((null===(e=c[t].current)||void 0===e?void 0:e.getBoundingClientRect().top)>0)return void h(t)}else if("props"===u)for(let t=0;t<p.length;t++){var o;if((null===(o=p[t].current)||void 0===o?void 0:o.getBoundingClientRect().top)>0)return void f(t)}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[c,p,u]),(0,i.jsxs)("div",{style:{margin:"1.5rem 0 4rem 0",width:t?"100%":o?"calc(100% - 12rem)":"calc(100% - 22rem)"},children:[(0,i.jsx)(a.z_,{name:s.title,path:s.path}),(0,i.jsxs)("div",{style:{padding:"1rem"},children:[(0,i.jsx)(a.A8,{title:s.title,description:s.description}),(0,i.jsxs)(n.tU,{color:"primary",style:{marginTop:"2rem"},value:u,onChange:e=>x(e),children:[(0,a.p2)(),(0,i.jsxs)(n.T2,{children:[(0,i.jsx)("div",{style:{height:"1px",width:"100%",backgroundColor:r.primary.accentScale[9],marginTop:"1rem"}}),(0,i.jsxs)(n.Kp,{value:"usage",children:[(0,i.jsx)(a.hX,{ref:c[0],label:s.usage.installation.label,text:s.usage.installation.description}),(0,i.jsx)(a.hX,{ref:c[1],label:s.usage.default.label,description:s.usage.default.description,code:d,text:m}),!o&&(0,a.Mt)([s.usage.installation.label,s.usage.default.label],b,c)]}),(0,i.jsxs)(n.Kp,{value:"props",children:[(0,i.jsx)(n.EY,{preciseColor:C,size:"large",style:{marginTop:"2rem"},children:s.props._label}),(0,i.jsx)(a.f5,{ref:p[0],propName:s.props.code.name,description:s.props.code.description,type:s.props.code.type,defaultValue:s.props.code.default}),!o&&(0,a.Mt)([s.props.code.name],g,p)]})]})]})]})]})},p=(0,i.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(n.ip,{color:"component",control:(0,i.jsx)(n.Sc,{}),label:"Option 1"}),(0,i.jsx)(n.ip,{color:"component",control:(0,i.jsx)(n.Sc,{}),label:"Option 2"}),(0,i.jsx)(n.ip,{color:"component",control:(0,i.jsx)(n.Sc,{}),label:"Option 3"})]}),d=(0,i.jsx)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%",overflow:"hidden"},children:(0,i.jsx)(n.OK,{color:"component",code:p,text:'<FormControlLabel control={<Checkbox />} label="Option 1" />\n<FormControlLabel control={<Checkbox />} label="Option 2" />\n<FormControlLabel control={<Checkbox />} label="Option 3" />',language:"jsx"})}),m='const TEXT_DEMO_1 = `<FormControlLabel control={<Checkbox />} label="Option 1" />\n<FormControlLabel control={<Checkbox />} label="Option 2" />\n<FormControlLabel control={<Checkbox />} label="Option 3" />`;\n\nconst CODE_DEMO_1 = (\n  <div\n    style={{\n    display: "flex",\n    gap: "2rem",\n    flexWrap: "wrap",\n    justifyContent: "center",\n    alignItems: "center",\n    }}\n  >\n    <FormControlLabel color="component" control={<Checkbox />} label="Option 1" />\n    <FormControlLabel color="component" control={<Checkbox />} label="Option 2" />\n    <FormControlLabel color="component" control={<Checkbox />} label="Option 3" />\n  </div>\n\n<CodePreview code={CODE_DEMO_1} text={TEXT_DEMO_1} language="jsx"/>'}}]);
//# sourceMappingURL=27.302138d1.chunk.js.map