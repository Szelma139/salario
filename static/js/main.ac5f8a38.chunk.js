(this.webpackJsonpsalario=this.webpackJsonpsalario||[]).push([[0],{18:function(e,t){e.exports={FIREBASE_URL:"https://salario-a6a4b.firebaseio.com",API_URL:"salary-comparer.vercel.app",SALARY_MIN:2e3,SALARY_MAX:3e4,SALARY_STEP:250,SALARY_SLIDER_STEP:1e3,CREATIVE_RIGHTS_STEPS:[0,20,30,40,50,60,70,80]}},63:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(47),r=c.n(s),i=c(105),o=c(40),j=c(48),b=c(16),l=(c(63),c(32)),h=c(24),u=c(10),d=c(102),O=c(111),m=c(110),x=c(98),p=c(101),f=c(106),g=c(1),v=Object(x.a)((function(e){return{root:{marginTop:"15px"},formControl:{}}})),k=function(e){var t=e.checkboxes,c=e.label,n=e.update,a=v(),s=function(e){return function(t){n(e,t.target.checked)}},r=t.map((function(e){var t=e.label,c=e.name,n=e.checked;return Object(g.jsx)("div",{children:Object(g.jsx)(p.a,{control:Object(g.jsx)(f.a,{checked:n,onChange:s(c),value:c,color:"primary"}),label:t})},c)}));return Object(g.jsxs)("div",{className:a.root,children:[Object(g.jsx)(d.a,{component:"legend",children:c}),r]})},w=function(e){return function(t){e.displayName||e.name;return Object(n.useEffect)((function(){return function(){}}),[]),Object(g.jsx)(e,Object(u.a)({},t))}},y=c(103),_=c(108),z=void 0,C=Object(x.a)({root:{},input:{width:80}}),A=function(e){return Math.floor(e/160)},N=function(e){var t=e.update,c=e.min,n=e.max,a=e.step,s=e.from,r=e.to,i=C(),o=function(e,c){c.persist(),t(e,""===c.target.value?"":Number(c.target.value))},j=function(e){var a="from"===e?s:r;a<c?t(e,c):a>n&&t(e,n)};return Object(g.jsx)("div",{children:Object(g.jsxs)(y.a,{container:!0,spacing:2,alignItems:"center",children:[Object(g.jsx)(y.a,{item:!0,xs:5,children:Object(g.jsx)(_.a,{className:i.input,value:s,margin:"dense",onChange:o.bind(z,"from"),onBlur:j.bind(z,"from"),inputProps:{step:a,min:c,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(g.jsx)(y.a,{item:!0,xs:2,children:"-"}),Object(g.jsx)(y.a,{item:!0,xs:5,children:Object(g.jsx)(_.a,{className:i.input,value:r,margin:"dense",onChange:o.bind(z,"to"),onBlur:j.bind(z,"to"),inputProps:{step:a,min:c,max:n,type:"number","aria-labelledby":"input-slider"}})}),Object(g.jsxs)(y.a,{item:!0,xs:5,className:"filters__perHourValue",children:[A(s)," per hour"]}),Object(g.jsx)(y.a,{item:!0,xs:2}),Object(g.jsxs)(y.a,{item:!0,xs:5,className:"filters__perHourValue",children:[A(r)," per hour"]})]})})},S=c(18),M=[].concat(Object(l.a)(S.CREATIVE_RIGHTS_STEPS.map((function(e){return{label:"UoP - CR ".concat(e,"%"),name:"uop-".concat(e)}}))),[{label:"B2B(19%) - low ZUS",name:"b2b-low-zus"},{label:"B2B(19%) - high ZUS",name:"b2b-high-zus"}]),E=[{label:"Min",name:"nettoMin"},{label:"Max",name:"nettoMax"},{label:"Average",name:"nettoAverage"}],L=S.SALARY_MIN,R=S.SALARY_MAX,T=S.SALARY_STEP,B=w((function(e){var t=e.submitAction,c=e.values,a=Object(n.useState)({from:c.from,to:c.to,types:c.types,measures:c.measures}),s=Object(b.a)(a,2),r=s[0],i=s[1],o=Object(n.useState)(!0),j=Object(b.a)(o,2),x=j[0],p=j[1],f=Object(n.useCallback)((function(e,t){var c=Object(u.a)(Object(u.a)({},r),{},Object(h.a)({},e,t));c.to<c.from&&"from"===e&&(c.to=c.from),c.from>c.to&&"to"===e&&(c.from=c.to),i(c),p(!0)}),[i,p,r]),v=Object(n.useCallback)((function(e,t){i(Object(u.a)(Object(u.a)({},r),{},{types:Object(u.a)(Object(u.a)({},r.types),{},Object(h.a)({},e,t))})),p(!0)}),[p,r,i]),w=Object(n.useCallback)((function(e,t){i(Object(u.a)(Object(u.a)({},r),{},{measures:Object(u.a)(Object(u.a)({},r.measures),{},Object(h.a)({},e,t))})),p(!0)}),[p,r,i]),y=Object(n.useCallback)((function(){t(r),p(!1)}),[t,p,r]),_={update:f,min:L,max:R,step:T,from:r.from,to:r.to},z={label:"Choose types of employment",checkboxes:M.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{checked:r.types[e.name]||!1})})),update:v},C={label:"Choose measures",checkboxes:E.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{checked:r.measures[e.name]||!1})})),update:w},A=Object(n.useCallback)((function(e,t){i(Object(u.a)(Object(u.a)({},r),{},{from:Math.min.apply(Math,Object(l.a)(t)),to:Math.max.apply(Math,Object(l.a)(t))}))}),[i,r]);return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(d.a,{component:"legend",children:"Choose gross ranges"}),Object(g.jsx)(m.a,{value:[r.from,r.to],valueLabelDisplay:"auto",onChange:A,onChangeCommitted:function(){p(!0)},"aria-labelledby":"input-slider",min:L,max:R,step:T}),Object(g.jsx)(N,Object(u.a)({},_))]}),Object(g.jsx)(k,Object(u.a)({},z)),Object(g.jsx)(k,Object(u.a)({},C)),Object(g.jsx)(O.a,{variant:"outlined",color:"primary",onClick:y,disabled:!x,children:"Compare"})]})})),I=c(25),P=c.n(I),H=c(38),Y=c(109),D=function(e){return Object(g.jsx)("a",{href:e.repository,style:{float:"right",position:"absolute",right:0,top:0},children:Object(g.jsx)("img",{src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149",width:"149",height:"149","data-recalc-dims":"1",alt:"Fork me on GitHub"})})},W=function(e){return"".concat(e.getDate(),".").concat(e.getMonth()+1,".").concat(e.getFullYear())},V=function(){var e=Object(H.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout((function(){e({json:function(){return{version:1,updated:W(new Date((new Date).getTime()))}}})}),2e3)}));case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=w((function(e){var t=e.toogleSidebar,c=a.a.useState(!0),s=Object(b.a)(c,2),r=s[0],i=s[1],o=Object(Y.a)(["metadata"],V,{enabled:r}),j=o.loading,l=o.data;return Object(n.useEffect)((function(){!j&&l&&i(!1)}),[l,j]),Object(g.jsxs)("header",{className:"appHeader",children:[Object(g.jsx)("button",{className:"sidebarToggle",onClick:function(){return t()},children:Object(g.jsx)("svg",{className:"sidebarToggleIcon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(g.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("h6",{className:"appName",children:"Salario"})}),Object(g.jsxs)("div",{className:"dataGeneratedTime",children:["Data generated at ",l&&l.updated?l.updated:""]})]}),Object(g.jsx)(D,{repository:"https://github.com/krzys1u/salaryComparer"})]})})),U=c(104),F=function(){return Object(g.jsx)("div",{style:{width:400,height:400},children:Object(g.jsx)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("g",{className:"loader__icon",children:Object(g.jsxs)("g",{children:[Object(g.jsx)("g",{children:Object(g.jsx)("g",{className:"loader__icon--animation",children:Object(g.jsx)("path",{strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#3f51b5",fill:"none",d:"M71.172 23.77H36.885c-7.243 0-13.115 5.872-13.115 13.115v0C23.77 44.128 29.642 50 36.885 50h26.23c7.243 0 13.115 5.872 13.115 13.115v0c0 7.243-5.872 13.115-13.115 13.115H23.77",className:"loader__icon--letter"})})}),Object(g.jsx)("g",{children:Object(g.jsx)("g",{className:"loader__icon--animation",children:Object(g.jsx)("path",{className:"loader__icon--pipe",d:"M41.631 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})}),Object(g.jsx)("g",{children:Object(g.jsx)("g",{className:"loader__icon--animation",children:Object(g.jsx)("path",{className:"loader__icon--pipe",d:"M56.746 10v80",strokeMiterlimit:"10",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"8",stroke:"#849b87",fill:"none"})})})]})})})})},X=w((function(){return Object(U.a)()?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)(F,{})}):null})),Z=function(){return Object(g.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsxs)("g",{children:[Object(g.jsx)("path",{d:"m494.5 60.514h-113.627c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h113.627c1.378 0 2.5 1.122 2.5 2.5v45.527h-482v-45.527c0-1.378 1.122-2.5 2.5-2.5h328.85c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-328.85c-9.649 0-17.5 7.851-17.5 17.5v355.973c0 9.649 7.851 17.5 17.5 17.5h399.347c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-399.347c-1.378 0-2.5-1.122-2.5-2.5v-295.446h482v97.409c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-157.936c0-9.65-7.851-17.5-17.5-17.5z"}),Object(g.jsx)("path",{d:"m504.5 262.972c-4.142 0-7.5 3.358-7.5 7.5v163.515c0 1.378-1.122 2.5-2.5 2.5h-43.13c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h43.13c9.649 0 17.5-7.851 17.5-17.5v-163.515c0-4.142-3.358-7.5-7.5-7.5z"}),Object(g.jsx)("path",{d:"m47.433 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(g.jsx)("path",{d:"m70.076 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(g.jsx)("path",{d:"m92.719 92.027c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h.113c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(g.jsx)("path",{d:"m464.567 107.027c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-13.956c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(g.jsx)("path",{d:"m336.078 240.496c0-44.155-35.923-80.078-80.078-80.078s-80.078 35.923-80.078 80.078 35.923 80.078 80.078 80.078 80.078-35.923 80.078-80.078zm-80.078 65.078c-35.884 0-65.078-29.194-65.078-65.078s29.194-65.078 65.078-65.078 65.078 29.194 65.078 65.078-29.194 65.078-65.078 65.078z"}),Object(g.jsx)("path",{d:"m229.518 330.68c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h52.965c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(g.jsx)("path",{d:"m328.26 388.997c0-4.142-3.358-7.5-7.5-7.5h-187.453c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h187.453c4.142 0 7.5-3.358 7.5-7.5z"}),Object(g.jsx)("path",{d:"m378.693 381.497h-27.484c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h27.484c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(g.jsx)("path",{d:"m133.307 404.334c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h59.876c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"}),Object(g.jsx)("path",{d:"m221.632 419.334h157.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-157.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"}),Object(g.jsx)("path",{d:"m283.801 212.695c-2.929-2.929-7.678-2.929-10.606 0l-17.195 17.195-17.195-17.195c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l17.195 17.195-17.195 17.195c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l17.195-17.194 17.195 17.195c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-17.195-17.195 17.195-17.195c2.929-2.929 2.929-7.678 0-10.607z"})]})})},q=c(73),J=function(e){var t=e.label,c=e.code,n=e.icon,a=e.button;return Object(g.jsx)("div",{className:"info__wrapper",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(q.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(g.jsx)("div",{className:"image__wrapper",children:n}),c&&c.length?Object(g.jsx)("code",{children:c}):"",a?Object(g.jsx)("div",{className:"buttons",children:a}):""]})})},K=w((function(e){var t=e.error,c=e.onClick;return Object(g.jsx)(J,{label:"Something went wrong...",code:t.message,icon:Object(g.jsx)(Z,{}),button:Object(g.jsx)(O.a,{variant:"outlined",color:"primary",onClick:c,children:"Try again"})})})),Q=c(53),$=c.n(Q),ee=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){new $.a(t.current,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}),[]),Object(g.jsx)("canvas",{id:"diagram",width:"400",height:"400",ref:t})},te=function(){return Object(g.jsx)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsxs)("g",{children:[Object(g.jsx)("g",{children:Object(g.jsxs)("g",{children:[Object(g.jsxs)("g",{children:[Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m313.604 170.975h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m395.052 132.478h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(g.jsxs)("g",{children:[Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m313.604 296.662h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m395.052 258.164h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]}),Object(g.jsxs)("g",{children:[Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m313.604 422.349h-81.447c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h81.447c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"})}),Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m395.052 383.851h-162.895c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h162.895c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"})})]})]})}),Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m320.852 70.651h-129.704c-12.328 0-22.358-10.029-22.358-22.357v-25.936c.001-12.328 10.03-22.358 22.358-22.358h129.703c12.328 0 22.358 10.03 22.358 22.358v25.936c0 12.328-10.029 22.357-22.357 22.357zm-129.704-55.651c-4.057 0-7.358 3.301-7.358 7.358v25.936c0 4.057 3.301 7.357 7.358 7.357h129.703c4.057 0 7.358-3.301 7.358-7.357v-25.936c0-4.058-3.301-7.358-7.358-7.358z"})}),Object(g.jsxs)("g",{children:[Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m162.917 181.028h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.332c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.102-9.033 20.135-20.136 20.135zm-33.333-58.604c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m162.917 306.715h-33.333c-11.103 0-20.136-9.033-20.136-20.136v-33.333c0-11.103 9.033-20.136 20.136-20.136h33.333c11.103 0 20.136 9.033 20.136 20.136v33.333c0 11.103-9.033 20.136-20.136 20.136zm-33.333-58.605c-2.832 0-5.136 2.304-5.136 5.136v33.333c0 2.832 2.304 5.136 5.136 5.136h33.333c2.832 0 5.136-2.304 5.136-5.136v-33.333c0-2.832-2.304-5.136-5.136-5.136z"})}),Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m162.917 432.402h-33.333c-11.103 0-20.136-9.033-20.136-20.137v-33.332c0-11.104 9.033-20.137 20.136-20.137h33.333c11.103 0 20.136 9.033 20.136 20.137v33.332c0 11.104-9.033 20.137-20.136 20.137zm-33.333-58.605c-2.832 0-5.136 2.305-5.136 5.137v33.332c0 2.832 2.304 5.137 5.136 5.137h33.333c2.832 0 5.136-2.305 5.136-5.137v-33.332c0-2.832-2.304-5.137-5.136-5.137z"})})]}),Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"m415.551 512h-319.102c-17.916 0-32.491-14.575-32.491-32.491v-419.193c0-17.915 14.576-32.49 32.491-32.49h44.945c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5h-44.945c-9.645 0-17.491 7.846-17.491 17.49v419.192c0 9.645 7.847 17.491 17.491 17.491h319.102c9.645 0 17.491-7.847 17.491-17.491v-419.192c0-9.645-7.847-17.49-17.491-17.49h-44.945c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h44.945c17.916 0 32.491 14.575 32.491 32.49v419.192c0 17.917-14.576 32.492-32.491 32.492z"})})]})})},ce=w((function(){return Object(g.jsx)(J,{label:"No filters selected",icon:Object(g.jsx)(te,{})})})),ne=function(){var e=Object(H.a)(P.a.mark((function e(t){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(b.a)(t.queryKey,2),c[1].filters,e.next=3,new Promise((function(e,t){setTimeout((function(){t(new Error("xyz"))}),2e3)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=w((function(e){var t=e.filters,c=function(e){var t=e.types,c=e.measures;return!Object.keys(t).filter((function(e){return!!t[e]})).length||!Object.keys(c).filter((function(e){return!!c[e]})).length}(t),a=Object(Y.a)(["data",t.types,t.from,t.to],ne,{enabled:!c}),s=a.isError,r=a.error,i=a.refetch,o=a.data,j=Object(n.useCallback)((function(){i({throwOnError:!1})}),[i]);return c?Object(g.jsx)(ce,{}):s&&r?Object(g.jsx)(K,{error:r,onClick:j}):Object(g.jsx)(ee,{data:o})})),se=w((function(){var e=Object(n.useState)({types:{"uop-0":!0},measures:{nettoMin:!0},from:S.SALARY_MIN,to:S.SALARY_MAX}),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(window.innerWidth<=640),r=Object(b.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(!0),l=Object(b.a)(j,2),h=l[0],u=l[1],d=Object(n.useCallback)((function(){i&&u(!1)}),[i]),O=Object(n.useCallback)((function(e){d(),a(e)}),[a,d]),m=Object(n.useCallback)((function(){u(!h)}),[h]);return Object(n.useEffect)((function(){var e=function(){var e=window.innerWidth<=640;i!==e&&o(e)};return document.addEventListener("resize",e),function(){return document.removeEventListener("click",e)}}),[]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(X,{}),Object(g.jsx)(G,{toogleSidebar:m}),Object(g.jsxs)("section",{className:"content",children:[h&&Object(g.jsx)("aside",{className:"sidebar",children:Object(g.jsx)(B,{submitAction:O,values:c})}),Object(g.jsx)("section",{className:"workspace ".concat(h?"":"nosidebar"),children:Object(g.jsx)(ae,{filters:c})})]})]})})),re=new i.a({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:!1}}});function ie(){return Object(g.jsxs)(o.a,{client:re,children:[Object(g.jsx)(se,{}),Object(g.jsx)(j.ReactQueryDevtools,{initialIsOpen:!1})]})}r.a.render(Object(g.jsx)(ie,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.ac5f8a38.chunk.js.map