"use strict";(self.webpackChunkstelios_ui=self.webpackChunkstelios_ui||[]).push([[46],{50046:(e,o,p)=>{p.r(o),p.d(o,{default:()=>i});var t=p(65043),r=p(821),a=p(47987),l=p(66436),s=p(70579);const n=l.nx,i=()=>{const e=(0,a.lW)(),o=e.width<768,p=e.width<480,l=(0,r.DP)().theme.colorPalette,i=Array.from({length:3},(()=>t.createRef())),c=Array.from({length:8},(()=>t.createRef())),[f,v]=t.useState("usage"),[g,x]=t.useState(0),[j,y]=t.useState(0),b="light"===l.primary.appearance?"black":"white";return t.useEffect((()=>{const e=()=>{if("usage"===f)for(let p=0;p<i.length;p++){var e;if((null===(e=i[p].current)||void 0===e?void 0:e.getBoundingClientRect().top)>0)return void x(p)}else if("props"===f)for(let p=0;p<c.length;p++){var o;if((null===(o=c[p].current)||void 0===o?void 0:o.getBoundingClientRect().top)>0)return void y(p)}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[i,c,f]),(0,s.jsxs)("div",{style:{margin:"1.5rem 0 4rem 0",width:p?"100%":o?"calc(100% - 12rem)":"calc(100% - 22rem)"},children:[(0,s.jsx)(a.z_,{name:n.title,path:n.path}),(0,s.jsxs)("div",{style:{padding:"1rem"},children:[(0,s.jsx)(a.A8,{title:n.title,description:n.description}),(0,s.jsxs)(r.tU,{color:"primary",style:{marginTop:"2rem"},value:f,onChange:e=>v(e),children:[(0,a.p2)(),(0,s.jsxs)(r.T2,{children:[(0,s.jsx)("div",{style:{height:"1px",width:"100%",backgroundColor:l.primary.accentScale[9],marginTop:"1rem"}}),(0,s.jsxs)(r.Kp,{value:"usage",children:[(0,s.jsx)(a.hX,{ref:i[0],label:n.usage.installation.label,text:n.usage.installation.description}),(0,s.jsx)(a.hX,{ref:i[1],label:n.usage.variants.label,description:n.usage.variants.description,code:d,text:u}),(0,s.jsx)(a.hX,{ref:i[2],label:n.usage.sizes.label,description:n.usage.sizes.description,code:h,text:m}),!o&&(0,a.Mt)([n.usage.installation.label,n.usage.variants.label,n.usage.sizes.label],g,i)]}),(0,s.jsxs)(r.Kp,{value:"props",children:[(0,s.jsx)(r.EY,{preciseColor:b,size:"large",style:{marginTop:"2rem"},children:n.props._label}),(0,s.jsx)(a.f5,{ref:c[0],propName:n.props.variant.name,description:n.props.variant.description,type:n.props.variant.type,defaultValue:n.props.variant.default,marginTop:"1rem"}),(0,s.jsx)(a.f5,{ref:c[1],propName:n.props.size.name,description:n.props.size.description,type:n.props.size.type,defaultValue:n.props.size.default}),(0,s.jsx)(a.f5,{ref:c[2],propName:n.props.label.name,description:n.props.label.description,type:n.props.label.type,defaultValue:n.props.label.default}),(0,s.jsx)(a.f5,{ref:c[3],propName:n.props.open.name,description:n.props.open.description,type:n.props.open.type,defaultValue:n.props.open.default}),(0,s.jsx)(a.f5,{ref:c[4],propName:n.props.placeholder.name,description:n.props.placeholder.description,type:n.props.placeholder.type,defaultValue:n.props.placeholder.default}),(0,s.jsx)(a.f5,{ref:c[5],propName:n.props.options.name,description:n.props.options.description,type:n.props.options.type,defaultValue:n.props.options.default,wordSpacing:"4px"}),(0,s.jsx)(a.f5,{ref:c[6],propName:n.props.color.name,description:n.props.color.description,type:n.props.color.type,defaultValue:n.props.color.default,marginTop:"1rem"}),(0,s.jsx)(a.f5,{ref:c[7],propName:n.props.onClick.name,description:n.props.onClick.description,type:n.props.onClick.type,defaultValue:n.props.onClick.default}),!o&&(0,a.Mt)([n.props.variant.name,n.props.size.name,n.props.label.name,n.props.open.name,n.props.placeholder.name,n.props.options.name,n.props.color.name,n.props.onClick.name],j,c)]})]})]})]})]})},c=[{value:"1",title:"Option 1"},{value:"2",title:"Option 2"},{value:"3",title:"Option 3"}],d=(0,s.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(r.jT,{color:"component",variant:"contained",placeholder:"Search here",options:c}),(0,s.jsx)(r.jT,{color:"component",variant:"outlined",placeholder:"Search here",options:c}),(0,s.jsx)(r.jT,{color:"component",variant:"soft",placeholder:"Search here",options:c})]}),u='const options = [\n  { value: "1", title: "Option 1" },\n  { value: "2", title: "Option 2" },\n  { value: "3", title: "Option 3" },\n]\n\n<Autocomplete variant="contained" placeholder="Search here" options={options}/>\n<Autocomplete variant="outlined" placeholder="Search here" options={options}/>\n<Autocomplete variant="soft" placeholder="Search here" options={options}/>\n',h=(0,s.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(r.jT,{color:"component",size:"small",placeholder:"Search here",options:c}),(0,s.jsx)(r.jT,{color:"component",size:"medium",placeholder:"Search here",options:c}),(0,s.jsx)(r.jT,{color:"component",size:"large",placeholder:"Search here",options:c})]}),m='const options = [\n  { value: "1", title: "Option 1" },\n  { value: "2", title: "Option 2" },\n  { value: "3", title: "Option 3" },\n]\n\n<Autocomplete size="small" placeholder="Search here" options={options}/>\n<Autocomplete size="medium" placeholder="Search here" options={options}/>\n<Autocomplete size="large" placeholder="Search here" options={options}/>\n'}}]);
//# sourceMappingURL=46.13bd1fdf.chunk.js.map