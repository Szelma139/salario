(this["webpackJsonpsalary-comparer"]=this["webpackJsonpsalary-comparer"]||[]).push([[0],{41:function(e,a,t){e.exports=t(56)},46:function(e,a,t){},47:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),o=t.n(l),c=(t(46),t(24)),i=(t(47),t(80)),m=t(92),u=t(87),s=t(84),p=t(57),b=t(82),d=t(34),g=t.n(d),f=function(e){return r.a.createElement("a",{href:e.repository,style:{float:"right",position:"absolute",right:0,top:0}},r.a.createElement("img",{src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149",width:"149",height:"149","data-recalc-dims":"1",alt:"Fork me on GitHub"}))},h=t(31),E=t.n(h),v=function(e){var a=Object(n.useRef)(null);return Object(n.useEffect)((function(){new E.a(a.current,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}),[]),r.a.createElement("canvas",{id:"diagram",width:"400",height:"400",ref:a})},y=t(18),k=t(11),O=t(85),j=t(86),x=t(90),P=t(89),U=Object(i.a)({root:{width:250},input:{width:80}}),C=function(e){var a=e.update,t=e.min,n=e.max,l=e.label,o=e.step,c=e.value,i=U();return r.a.createElement("div",{className:i.root},l&&r.a.createElement(p.a,{id:"input-slider",gutterBottom:!0},l),r.a.createElement(b.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(x.a,{value:"number"===typeof c?c:t,onChange:function(e,t){a(t)},"aria-labelledby":"input-slider",max:n,min:t})),r.a.createElement(b.a,{item:!0},r.a.createElement(P.a,{className:i.input,value:c,margin:"dense",onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){c<t?a(t):c>n&&a(n)},inputProps:{step:o,min:t,max:n,type:"number","aria-labelledby":"input-slider"}}))))},w=t(83),N=t(88),B=Object(i.a)((function(e){return{root:{marginTop:"15px"},formControl:{}}})),K=function(e){var a=e.checkboxes,t=e.label,n=e.update,l=B(),o=function(e){return function(a){n(e,a.target.checked)}},c=a.map((function(e){var a=e.label,t=e.name,n=e.checked;return r.a.createElement("div",{key:t},r.a.createElement(w.a,{control:r.a.createElement(N.a,{checked:n,onChange:o(t),value:t,color:"primary"}),label:a}))}));return r.a.createElement("div",{className:l.root},r.a.createElement(O.a,{component:"legend"},t),c)},S=[{label:"UoP",name:"uop"},{label:"UoP - KUP 10%",name:"uop-kup-10"},{label:"UoP - KUP 20%",name:"uop-kup-20"},{label:"UoP - KUP 30%",name:"uop-kup-30"},{label:"UoP - KUP 40%",name:"uop-kup-40"},{label:"UoP - KUP 50%",name:"uop-kup-50"},{label:"UoP - KUP 60%",name:"uop-kup-60"},{label:"UoP - KUP 70%",name:"uop-kup-70"},{label:"UoP - KUP 80%",name:"uop-kup-80"},{label:"B2B(19%) - low ZUS",name:"b2b-low"},{label:"B2B(19%) - high ZUS",name:"b2b-high"}],z=function(e){var a=Object(n.useState)({from:50,to:3e4,types:{uop:!0}}),t=Object(c.a)(a,2),l=t[0],o=t[1],i=function(e,a){var t=Object(k.a)(Object(k.a)({},l),{},Object(y.a)({},e,a));t.to<t.from&&"from"===e&&(t.to=t.from),t.from>t.to&&"to"===e&&(t.from=t.to),["from","to"].forEach((function(e){t[e]>3e4&&(t[e]=3e4),t[e]<50&&(t[e]=50)})),o(t)},m={update:i.bind(void 0,"from"),min:50,max:3e4,step:1,value:l.from},u={update:i.bind(void 0,"to"),min:50,max:3e4,step:1,value:l.to},s={label:"Choose types of employment",checkboxes:S.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{checked:l.types[e.name]||!1})})),update:function(e,a){o(Object(k.a)(Object(k.a)({},l),{},{types:Object(k.a)(Object(k.a)({},l.types),{},Object(y.a)({},e,a))}))}};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O.a,{component:"legend"},"Choose gross ranges"),r.a.createElement(C,m),r.a.createElement(C,u)),r.a.createElement(K,s),r.a.createElement(j.a,{variant:"outlined",color:"primary",onClick:function(){console.log("state",l)}},"Compare"))},A=Object(i.a)((function(e){return{grid:{padding:"20px"},filters:{padding:"10px",paddingLeft:"15px"},filtersHidden:{width:0,display:"none"},dataFetchedDate:{fontSize:"10px"}}})),D=function(){var e=A(),a=Object(n.useState)(!0),t=Object(c.a)(a,2),l=t[0],o=t[1],i={filters:{xs:12,sm:12,md:3,lg:3,xl:2,className:l?e.filters:e.filtersHidden},diagram:{xs:12,sm:12,md:9,lg:9,xl:10}};return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(s.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){o(!l)}},r.a.createElement(g.a,null)),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p.a,{variant:"h6",className:e.title},"Salary Comparer")),r.a.createElement("div",{className:e.dataFetchedDate},"Data from 01.01.2019")),r.a.createElement(f,{repository:"https://github.com/krzys1u/salaryComparer"}))),r.a.createElement(b.a,{container:!0,className:e.grid},r.a.createElement(b.a,Object.assign({item:!0},i.filters),r.a.createElement(z,null)),r.a.createElement(b.a,Object.assign({item:!0},i.diagram),r.a.createElement(v,null))))};o.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.582cb2d7.chunk.js.map