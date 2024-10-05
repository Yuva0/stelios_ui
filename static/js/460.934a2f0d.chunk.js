"use strict";(self.webpackChunkstelios_ui=self.webpackChunkstelios_ui||[]).push([[460],{75460:(e,a,n)=>{n.r(a),n.d(a,{default:()=>p});var i=n(65043),o=n(821),r=n(47987),t=n(66436),l=n(50275),s=n(70579);const c=t.Tc,p=()=>{const e=(0,r.lW)(),a=e.width<768,n=e.width<480,t=(0,o.DP)().theme.colorPalette,l=Array.from({length:3},(()=>i.createRef())),p=Array.from({length:8},(()=>i.createRef())),[j,T]=i.useState("usage"),[y,b]=i.useState(0),[w,I]=i.useState(0),k="light"===t.primary.appearance?"black":"white";return i.useEffect((()=>{const e=()=>{if("usage"===j)for(let n=0;n<l.length;n++){var e;if((null===(e=l[n].current)||void 0===e?void 0:e.getBoundingClientRect().top)>0)return void b(n)}else if("props"===j)for(let n=0;n<p.length;n++){var a;if((null===(a=p[n].current)||void 0===a?void 0:a.getBoundingClientRect().top)>0)return void I(n)}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[l,p,j]),(0,s.jsxs)("div",{style:{margin:"1.5rem 0 4rem 0",width:n?"100%":a?"calc(100% - 12rem)":"calc(100% - 22rem)"},children:[(0,s.jsx)(r.z_,{name:c.title,path:c.path}),(0,s.jsxs)("div",{style:{padding:"1rem"},children:[(0,s.jsx)(r.A8,{title:c.title,description:c.description}),(0,s.jsxs)(o.tU,{color:"primary",style:{marginTop:"2rem"},value:j,onChange:e=>T(e),children:[(0,r.p2)(),(0,s.jsxs)(o.T2,{children:[(0,s.jsx)("div",{style:{height:"1px",width:"100%",backgroundColor:t.primary.accentScale[9],marginTop:"1rem"}}),(0,s.jsxs)(o.Kp,{value:"usage",children:[(0,s.jsx)(r.hX,{label:c.usage.installation.label,text:c.usage.installation.description}),(0,s.jsx)(r.hX,{label:c.usage.sizes.label,description:c.usage.sizes.description,code:d,text:g}),(0,s.jsx)(r.hX,{label:c.usage.variants.label,description:c.usage.variants.description,code:m,text:u}),(0,s.jsx)(r.hX,{label:c.usage.icons.label,description:c.usage.icons.description,code:v,text:x}),(0,s.jsx)(r.hX,{label:c.usage.clickable.label,description:c.usage.clickable.description,code:f,text:h}),!a&&(0,r.Mt)([c.usage.installation.label,c.usage.sizes.label,c.usage.variants.label],y,l)]}),(0,s.jsxs)(o.Kp,{value:"props",children:[(0,s.jsx)(o.EY,{preciseColor:k,size:"large",style:{marginTop:"2rem"},children:c.props._label}),(0,s.jsx)(r.f5,{propName:c.props.variant.name,description:c.props.variant.description,type:c.props.variant.type,defaultValue:c.props.variant.default,marginTop:"1rem"}),(0,s.jsx)(r.f5,{propName:c.props.size.name,description:c.props.size.description,type:c.props.size.type,defaultValue:c.props.size.default,marginTop:"1rem"}),(0,s.jsx)(r.f5,{propName:c.props.color.name,description:c.props.color.description,type:c.props.color.type,defaultValue:c.props.color.default,marginTop:"1rem"}),(0,s.jsx)(r.f5,{propName:c.props.leadingIcon.name,description:c.props.leadingIcon.description,type:c.props.leadingIcon.type,defaultValue:c.props.leadingIcon.default,marginTop:"1rem"}),(0,s.jsx)(r.f5,{propName:c.props.trailingIcon.name,description:c.props.trailingIcon.description,type:c.props.trailingIcon.type,defaultValue:c.props.trailingIcon.default}),(0,s.jsx)(r.f5,{propName:c.props.clickable.name,description:c.props.clickable.description,type:c.props.clickable.type,defaultValue:c.props.clickable.default}),(0,s.jsx)(r.f5,{propName:c.props.onClick.name,description:c.props.onClick.description,type:c.props.onClick.type,defaultValue:c.props.onClick.default}),!a&&(0,r.Mt)([c.props.variant.name,c.props.size.name,c.props.color.name,c.props.leadingIcon.name,c.props.trailingIcon.name,c.props.clickable.name,c.props.onClick.name],w,p)]})]})]})]})]})},d=(0,s.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(o.vw,{size:"small",variant:"contained",color:"component",children:"Tag"}),(0,s.jsx)(o.vw,{size:"medium",variant:"contained",color:"component",children:"Tag"}),(0,s.jsx)(o.vw,{size:"large",variant:"contained",color:"component",children:"Tag"})]}),g='<Tag size="small" variant="contained" color="component">Tag</Tag>\n<Tag size="medium" variant="contained" color="component">Tag</Tag>\n<Tag size="large" variant="contained" color="component">Tag</Tag>\n',m=(0,s.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(o.vw,{variant:"contained",color:"component",children:"Tag"}),(0,s.jsx)(o.vw,{variant:"outlined",color:"component",children:"Tag"})]}),u='<Avatar variant="contained" src={IMG_SRC} alt="human profile" type="image"/>\n<Avatar variant="outlined" src={IMG_SRC} alt="human profile" type="image"/>',v=(0,s.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(o.vw,{variant:"contained",color:"component",leadingIcon:(0,s.jsx)(l.A,{}),children:"Tag"}),(0,s.jsx)(o.vw,{variant:"contained",color:"component",trailingIcon:(0,s.jsx)(l.A,{}),children:"Tag"}),(0,s.jsx)(o.vw,{variant:"contained",color:"component",leadingIcon:(0,s.jsx)(l.A,{}),trailingIcon:(0,s.jsx)(l.A,{}),children:"Tag"})]}),x='<Tag variant="contained" color="component" leadingIcon={<IconAward/>}>Tag</Tag>\n<Tag variant="contained" color="component" trailingIcon={<IconAward/>}>Tag</Tag>\n<Tag variant="contained" color="component" leadingIcon={<IconAward/>} trailingIcon={<IconAward/>}>Tag</Tag>',f=(0,s.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(o.vw,{variant:"contained",color:"component",children:"Clickable Tag"}),(0,s.jsx)(o.vw,{variant:"contained",color:"component",disableClick:!0,children:"Non-Clickable Tag"})]}),h='<Tag variant="contained" color="component">Tag</Tag>\n<Tag variant="contained" color="component" disableClick>Tag</Tag>'}}]);
//# sourceMappingURL=460.934a2f0d.chunk.js.map