"use strict";(self.webpackChunkstelios_ui=self.webpackChunkstelios_ui||[]).push([[512],{55512:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var i=n(65043),a=n(821),o=n(47987),r=n(66436),s=n(50275),l=n(70579);const p=r.vK,c=()=>{const e=(0,o.lW)(),t=e.width<768,n=e.width<480,r=(0,a.DP)().theme.colorPalette,s=Array.from({length:4},(()=>i.createRef())),c=Array.from({length:7},(()=>i.createRef())),[d,f]=i.useState("usage"),[b,w]=i.useState(0),[j,y]=i.useState(0);i.useEffect((()=>{const e=()=>{if("usage"===d)for(let n=0;n<s.length;n++){var e;if((null===(e=s[n].current)||void 0===e?void 0:e.getBoundingClientRect().top)>0)return void w(n)}else if("props"===d)for(let n=0;n<c.length;n++){var t;if((null===(t=c[n].current)||void 0===t?void 0:t.getBoundingClientRect().top)>0)return void y(n)}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[s,c,d]);const N="light"===r.primary.appearance?"black":"white";return(0,l.jsxs)("div",{style:{margin:"1.5rem 0 4rem 0",width:n?"100%":t?"calc(100% - 12rem)":"calc(100% - 22rem)"},children:[(0,l.jsx)(o.z_,{name:p.title,path:p.path}),(0,l.jsxs)("div",{style:{padding:"1rem"},children:[(0,l.jsx)(o.A8,{title:p.title,description:p.description}),(0,l.jsxs)(a.tU,{color:"primary",style:{marginTop:"2rem"},value:d,onChange:e=>f(e),children:[(0,o.p2)(),(0,l.jsxs)(a.T2,{children:[(0,l.jsx)("div",{style:{height:"1px",width:"100%",backgroundColor:r.primary.accentScale[9],marginTop:"1rem"}}),(0,l.jsxs)(a.Kp,{value:"usage",children:[(0,l.jsx)(o.hX,{ref:s[0],label:p.usage.installation.label,text:p.usage.installation.description}),(0,l.jsx)(o.hX,{ref:s[1],label:p.usage.variants.label,description:p.usage.variants.description,code:m,text:g}),(0,l.jsx)(o.hX,{ref:s[2],label:p.usage.title.label,description:p.usage.title.description,code:u,text:v}),(0,l.jsx)(o.hX,{ref:s[3],label:p.usage.width.label,description:p.usage.width.description,code:h,text:x}),!t&&(0,o.Mt)([p.usage.installation.label,p.usage.variants.label,p.usage.title.label,p.usage.width.label],b,s)]}),(0,l.jsxs)(a.Kp,{value:"props",children:[(0,l.jsx)(a.EY,{preciseColor:N,size:"large",style:{marginTop:"2rem"},children:p.props._label}),(0,l.jsx)(o.f5,{ref:c[0],propName:p.props.variant.name,description:p.props.variant.description,type:p.props.variant.type,defaultValue:p.props.variant.default,marginTop:"1rem"}),(0,l.jsx)(o.f5,{ref:c[1],propName:p.props.title.name,description:p.props.title.description,type:p.props.title.type,defaultValue:p.props.title.default}),(0,l.jsx)(o.f5,{ref:c[2],propName:p.props.description.name,description:p.props.description.description,type:p.props.description.type,defaultValue:p.props.description.default}),(0,l.jsx)(o.f5,{ref:c[3],propName:p.props.titleIcon.name,description:p.props.titleIcon.description,type:p.props.titleIcon.type,defaultValue:p.props.titleIcon.default}),(0,l.jsx)(o.f5,{ref:c[4],propName:p.props.leadingIcon.name,description:p.props.leadingIcon.description,type:p.props.leadingIcon.type,defaultValue:p.props.leadingIcon.default}),(0,l.jsx)(o.f5,{ref:c[5],propName:p.props.width.name,description:p.props.width.description,type:p.props.width.type,defaultValue:p.props.width.default}),(0,l.jsx)(o.f5,{ref:c[6],propName:p.props.color.name,description:p.props.color.description,type:p.props.color.type,defaultValue:p.props.color.default}),!t&&(0,o.Mt)([p.props.variant.name,p.props.title.name,p.props.description.name,p.props.titleIcon.name,p.props.leadingIcon.name,p.props.width.name,p.props.color.name],j,c)]})]})]})]})]})},d="MERN Stack",f="The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.",m=(0,l.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center",maxWidth:"100%"},children:[(0,l.jsx)(a.lZ,{title:d,description:f,variant:"contained",color:"component"}),(0,l.jsx)(a.lZ,{title:d,description:f,variant:"outlined",color:"component"}),(0,l.jsx)(a.lZ,{title:d,description:f,variant:"outlined-soft",color:"component"}),(0,l.jsx)(a.lZ,{title:d,description:f,variant:"soft",color:"component"})]}),g='const title = "MERN Stack";\nconst description = "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.";\n<Banner title={title} description={description} variant="contained" color="component"/>\n<Banner title={title} description={description} variant="outlined" color="component"/>\n<Banner title={title} description={description} variant="outlined-soft" color="component"/>\n<Banner title={title} description={description} variant="soft" color="component"/>',u=(0,l.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center",maxWidth:"100%"},children:[(0,l.jsx)(a.lZ,{title:d,description:f,variant:"contained",color:"component",titleIcon:(0,l.jsx)(s.A,{})}),(0,l.jsx)(a.lZ,{title:d,description:f,variant:"outlined",color:"component",leadingIcon:(0,l.jsx)(s.A,{})})]}),v='const title = "MERN Stack";\nconst description = "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.";\n<Banner title={title} description={description} variant="contained" color="component" titleIcon={<IconAward/>}/>\n<Banner title={title} description={description} variant="outlined" color="component" leadingIcon={<IconAward/>}/>',h=(0,l.jsxs)("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center",maxWidth:"100%"},children:[(0,l.jsx)(a.lZ,{title:d,description:f,variant:"contained",color:"component",width:"400px"}),(0,l.jsx)(a.lZ,{title:d,description:f,variant:"contained",color:"component",width:"auto"})]}),x='const title = "MERN Stack";\nconst description = "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.";\n<Banner title={title} description={description} variant="contained" color="component" width="400px"/>\n<Banner title={title} description={description} variant="contained" color="component" width="auto"/>'}}]);
//# sourceMappingURL=512.de9e6436.chunk.js.map