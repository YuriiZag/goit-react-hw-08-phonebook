"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[528],{6528:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r,o,i,a,c,l,u,s,d,h,f,x,p,m,g,b,w,v=t(9439),Z=t(2791),k=t(168),j=t(6444),y=j.ZP.label(r||(r=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n"])),(function(n){return n.theme.colors.white})),z=j.ZP.input(o||(o=(0,k.Z)(["\n  width: 150px;\n  font-weight: 500;\n  font-size: ","px;\n  background-color: transparent;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-bottom: 2px solid black;\n  :hover,\n  :focus {\n    border-color: ",";\n    outline: none;\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.red})),P=j.ZP.button(i||(i=(0,k.Z)(["\n  border: none;\n  color: white;\n  display: block;\n  background-color: ",";\n  border-radius: ","px;\n  :hover,\n  :focus {\n    text-decoration: underline 1px;\n    scale: 105%;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  }\n"])),(function(n){return n.theme.colors.headerBackground}),(function(n){return n.theme.radii.normal})),C=j.ZP.ul(a||(a=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n"]))),A=j.ZP.li(c||(c=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n"]))),B=j.ZP.span(l||(l=(0,k.Z)(["\n  font-weight: 500;\n"]))),F=j.ZP.span(u||(u=(0,k.Z)(["\n  margin-left: 10px;\n"]))),L=t(9434),S=t(367),E=t(184),_=function(){var n=(0,L.v9)((function(n){return n.filter.value})),e=(0,L.I0)();return(0,E.jsx)("div",{children:(0,E.jsx)("form",{autoComplete:"off",children:(0,E.jsxs)(y,{htmlFor:"filter",children:["Find contacts by name",(0,E.jsx)(z,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(n){e((0,S.V)(n.currentTarget.value))},value:n,required:!0})]})})})},q=function(n){return n.contacts},M=function(n){return n.filter.value},T=t(8700),I=t(3263),N=function(){var n=(0,L.I0)(),e=(0,L.v9)(q),t=e.contactsList,r=e.isLoading,o=e.error,i=(0,L.v9)(M);(0,Z.useEffect)((function(){console.log(I.Z.defaults.headers.common.Authorization),I.Z.defaults.headers.common.Authorization&&n((0,T.yF)())}),[n]);var a=function(e){n((0,T._f)(e.currentTarget.value))},c=function(){var n=i.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{}),r&&(0,E.jsx)("p",{children:"Loading..."}),null!==o&&(0,E.jsx)("p",{children:o}),!r&&(0,E.jsx)(C,{children:c.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,E.jsxs)(A,{children:[(0,E.jsxs)(B,{children:[e,":"]}),(0,E.jsx)(F,{children:t}),(0,E.jsx)(P,{type:"button",value:r,onClick:a,children:"delete"})]},r)}))})]})},J=j.ZP.div(s||(s=(0,k.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),$=j.ZP.div(d||(d=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: ","px ","px\n    ","px ","px;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n  background-color: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.colors.darkBackground})),D=t(4164),V=document.querySelector("#modalroot"),Y=function(n){var e=n.children,t=n.toggleModal;(0,Z.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}));return(0,D.createPortal)((0,E.jsx)(J,{onClick:function(n){1===n.target.children.length&&t()},children:(0,E.jsx)($,{children:e})}),V)},G=j.ZP.p(h||(h=(0,k.Z)(["\n  margin: 0px 0 30px 0;\n  font-size: 32px;\n  font-weight: 700;\n  color: ",";\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n"])),(function(n){return n.theme.colors.white})),H=j.ZP.form(f||(f=(0,k.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    gap: 30px;\n    align-items: center;\n    justify-content: center;\n"]))),K=j.ZP.label(x||(x=(0,k.Z)(["\n    font-weight: 500;\n    font-size: 20px;\n    \n"]))),O=j.ZP.input(p||(p=(0,k.Z)(["\n  font-weight: 500;\n  font-size: ","px;\n  background-color: transparent;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  :hover,\n  :focus {\n    border-color: ",";\n    outline: none;\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.red})),Q=j.ZP.button(m||(m=(0,k.Z)(["\n  width: 150px;\n  border: none;\n  color: white;\n  display: block;\n  font-weight: 500;\n  font-size: ","px;\n  background-color: ",";\n  border-radius: ","px;\n  :hover,\n  :focus {\n    text-decoration: underline 1px;\n    scale: 105%;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.headerBackground}),(function(n){return n.theme.radii.normal})),R=function(){var n=(0,L.v9)(q),e=(0,L.I0)();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(G,{children:"Phonebook"}),(0,E.jsxs)(H,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements,o=r.name,i=r.number;if(n.length>0){var a=n.map((function(n){return n.name.toLowerCase()}));console.log(a),a.includes(o.value.toLowerCase())?window.alert("".concat(o.value," is already in list.")):e((0,T.el)({name:o.value,number:i.value}))}else e((0,T.el)({name:o.value,number:i.value}));t.currentTarget.reset()},children:[(0,E.jsxs)(K,{htmlFor:"name",children:["Name:",(0,E.jsx)(O,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,E.jsxs)(K,{htmlFor:"number",children:["Phone number:",(0,E.jsx)(O,{name:"number",type:"tel",required:!0})]}),(0,E.jsx)(Q,{type:"submit",children:"Add contact"})]})]})},U=j.ZP.div(g||(g=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 90%;\n  background-image: repeating-linear-gradient(\n    to bottom,\n    ",",\n    "," 20px,\n    "," 20px,\n    "," 40px\n  ); ;\n"])),(function(n){return n.theme.colors.lightBackground}),(function(n){return n.theme.colors.lightBackground}),(function(n){return n.theme.colors.darkBackground}),(function(n){return n.theme.colors.darkBackground})),W=j.ZP.p(b||(b=(0,k.Z)(["\n  margin: 5px 0 30px 0;\n  font-size: ","px;\n  font-weight: 700;\n  color: ",";\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.white})),X=j.ZP.button(w||(w=(0,k.Z)(["\n  margin-bottom: 20px;\n  width: 150px;\n  height: 40px;\n  border: none;\n  color: white;\n  display: block;\n  font-weight: 500;\n  font-size: ","px;\n  background-color: ",";\n  border-radius: ","px;\n  :hover,\n  :focus {\n    text-decoration: underline 1px;\n    scale: 105%;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.headerBackground}),(function(n){return n.theme.radii.normal})),nn=function(){var n=(0,Z.useState)(!1),e=(0,v.Z)(n,2),t=e[0],r=e[1],o=function(n){r(!t)};return(0,E.jsxs)(U,{children:[(0,E.jsx)(W,{children:"Your contacts"}),(0,E.jsx)(X,{onClick:o,children:"Add contact"}),t&&(0,E.jsx)(Y,{toggleModal:o,children:(0,E.jsx)(R,{})}),(0,E.jsx)(N,{})]})}}}]);
//# sourceMappingURL=528.40447f8b.chunk.js.map