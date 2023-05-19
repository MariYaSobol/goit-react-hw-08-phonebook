"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[818],{3818:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var a=n(9434),r=n(9439),o="ContactForm_contacts_input__D-q0d",i="ContactForm_inputs_bar__MIwDa",l="ContactForm_contacts_label__SDFUH",s="ContactForm_contacts_btn__fUU8D",u=n(2791),d=n(6052),c=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},p=function(e){return e.contacts.e},f=n(6382),v=n(3329);function h(){var e=(0,u.useState)(""),t=(0,r.Z)(e,2),n=t[0],m=t[1],p=(0,u.useState)(""),h=(0,r.Z)(p,2),b=h[0],x=h[1],g=(0,a.I0)(),y=(0,a.v9)(c),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":m(a);break;case"number":x(a);break;default:return}};return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y.some((function(e){return e.name===n}))?alert("".concat(n," is already in contacts.")):(g((0,d.uK)({id:(0,f.x0)(),name:n,number:b})),m(""),x(""))},children:[(0,v.jsxs)("div",{className:i,children:[(0,v.jsxs)("label",{className:l,children:[" \u0406\u043c'\u044f",(0,v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:j,className:o})]}),(0,v.jsxs)("label",{className:l,children:[" \u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,v.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:b,onChange:j,className:o})]})]}),(0,v.jsx)("button",{type:"submit",className:s,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})]})}var b=n(4808),x=n(176),g=n(9229),y=n(1413),j=n(4925),C=n(9886),_=n(4591),Z=n(7872),w=n(9219),S=n(2996),R=n(2503),k=n(6992),N=["id","isRequired","isInvalid","isDisabled","isReadOnly"],I=["getRootProps","htmlProps"],F=(0,C.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),z=(0,r.Z)(F,2),D=z[0],q=z[1],A=(0,C.k)({strict:!1,name:"FormControlContext"}),T=(0,r.Z)(A,2),G=T[0],P=T[1];var B=(0,Z.G)((function(e,t){var n=(0,w.jC)("Form",e),a=function(e){var t=e.id,n=e.isRequired,a=e.isInvalid,o=e.isDisabled,i=e.isReadOnly,l=(0,j.Z)(e,N),s=(0,u.useId)(),d=t||"field-".concat(s),c="".concat(d,"-label"),m="".concat(d,"-feedback"),p="".concat(d,"-helptext"),f=(0,u.useState)(!1),v=(0,r.Z)(f,2),h=v[0],b=v[1],x=(0,u.useState)(!1),g=(0,r.Z)(x,2),C=g[0],Z=g[1],w=(0,u.useState)(!1),S=(0,r.Z)(w,2),R=S[0],I=S[1],F=(0,u.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,y.Z)((0,y.Z)({id:p},e),{},{ref:(0,_.lq)(t,(function(e){e&&Z(!0)}))})}),[p]),z=(0,u.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,y.Z)((0,y.Z)({},e),{},{ref:t,"data-focus":(0,k.PB)(R),"data-disabled":(0,k.PB)(o),"data-invalid":(0,k.PB)(a),"data-readonly":(0,k.PB)(i),id:void 0!==e.id?e.id:c,htmlFor:void 0!==e.htmlFor?e.htmlFor:d})}),[d,o,R,a,i,c]),D=(0,u.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,y.Z)((0,y.Z)({id:m},e),{},{ref:(0,_.lq)(t,(function(e){e&&b(!0)})),"aria-live":"polite"})}),[m]),q=(0,u.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,y.Z)((0,y.Z)((0,y.Z)({},e),l),{},{ref:t,role:"group"})}),[l]),A=(0,u.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,y.Z)((0,y.Z)({},e),{},{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!a,isReadOnly:!!i,isDisabled:!!o,isFocused:!!R,onFocus:function(){return I(!0)},onBlur:function(){return I(!1)},hasFeedbackText:h,setHasFeedbackText:b,hasHelpText:C,setHasHelpText:Z,id:d,labelId:c,feedbackId:m,helpTextId:p,htmlProps:l,getHelpTextProps:F,getErrorMessageProps:D,getRootProps:q,getLabelProps:z,getRequiredIndicatorProps:A}}((0,S.Lr)(e)),o=a.getRootProps,i=(a.htmlProps,(0,j.Z)(a,I)),l=(0,k.cx)("chakra-form-control",e.className);return(0,v.jsx)(G,{value:i,children:(0,v.jsx)(D,{value:n,children:(0,v.jsx)(R.m.div,(0,y.Z)((0,y.Z)({},o({},t)),{},{className:l,__css:n.container}))})})}));B.displayName="FormControl",(0,Z.G)((function(e,t){var n=P(),a=q(),r=(0,k.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(R.m.div,(0,y.Z)((0,y.Z)({},null==n?void 0:n.getHelpTextProps(e,t)),{},{__css:a.helperText,className:r}))})).displayName="FormHelperText";var O=["isDisabled","isInvalid","isReadOnly","isRequired"],M=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function E(e){var t=function(e){var t,n,a,r=P(),o=e.id,i=e.disabled,l=e.readOnly,s=e.required,u=e.isRequired,d=e.isInvalid,c=e.isReadOnly,m=e.isDisabled,p=e.onFocus,f=e.onBlur,v=(0,j.Z)(e,M),h=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&h.push(r.feedbackId);(null==r?void 0:r.hasHelpText)&&h.push(r.helpTextId);return(0,y.Z)((0,y.Z)({},v),{},{"aria-describedby":h.join(" ")||void 0,id:null!=o?o:null==r?void 0:r.id,isDisabled:null!=(t=null!=i?i:m)?t:null==r?void 0:r.isDisabled,isReadOnly:null!=(n=null!=l?l:c)?n:null==r?void 0:r.isReadOnly,isRequired:null!=(a=null!=s?s:u)?a:null==r?void 0:r.isRequired,isInvalid:null!=d?d:null==r?void 0:r.isInvalid,onFocus:(0,k.v0)(null==r?void 0:r.onFocus,p),onBlur:(0,k.v0)(null==r?void 0:r.onBlur,f)})}(e),n=t.isDisabled,a=t.isInvalid,r=t.isReadOnly,o=t.isRequired,i=(0,j.Z)(t,O);return(0,y.Z)((0,y.Z)({},i),{},{disabled:n,readOnly:r,required:o,"aria-invalid":(0,k.Qm)(a),"aria-required":(0,k.Qm)(o),"aria-readonly":(0,k.Qm)(r)})}var L=["htmlSize"],H=(0,Z.G)((function(e,t){var n=e.htmlSize,a=(0,j.Z)(e,L),r=(0,w.jC)("Input",a),o=E((0,S.Lr)(a)),i=(0,k.cx)("chakra-input",e.className);return(0,v.jsx)(R.m.input,(0,y.Z)((0,y.Z)({size:n},o),{},{__css:r.field,ref:t,className:i}))}));H.displayName="Input",H.id="Input";var U=function(){var e=(0,a.I0)();return(0,v.jsxs)(x.k,{alignItems:"center",gap:"2",justifyContent:"center",children:[(0,v.jsx)(g.x,{fontSize:20,fontWeight:400,textAlign:"center",color:"#572470",as:"i",children:"\u0417\u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),(0,v.jsx)(H,{size:"sm",width:200,focusBorderColor:"pink.400",borderColor:"violet",type:"text",onChange:function(t){var n=t.target.value.toLowerCase();e((0,b.Tv)(n))}})]})},W=n(4164),K="Modal_Overlay__yoxbg",Q="Modal_Modal__I1UYJ",J="Modal_Input__MaMU+",Y="Modal_Label__vtDr2",X="Modal_ModalBtn__yjg4X",$=document.querySelector("#modal-root");function V(e){var t=e.onClose,n=e.userName,o=e.userNumber,i=e.userId,l=(0,u.useState)("".concat(n)),s=(0,r.Z)(l,2),c=s[0],m=s[1],p=(0,u.useState)("".concat(o)),f=(0,r.Z)(p,2),h=f[0],b=f[1],x=(0,u.useState)("".concat(i)),g=(0,r.Z)(x,2),y=g[0],j=g[1],C=(0,a.I0)(),_=function(e){"Escape"===e.code&&t()},Z=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":m(a);break;case"number":b(a);break;case"id":j(a);break;default:return}};return(0,u.useEffect)((function(){return window.addEventListener("keydown",_),function(){window.removeEventListener("keydown",_)}})),(0,W.createPortal)((0,v.jsx)("div",{className:K,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,v.jsxs)("form",{className:Q,onSubmit:function(e){e.preventDefault(),C((0,d.BY)({id:y,name:c,number:h})),t()},children:[(0,v.jsxs)("label",{className:Y,children:[" \u0406\u043c'\u044f",(0,v.jsx)("input",{className:J,value:c,name:"name",onChange:Z})]}),(0,v.jsxs)("label",{className:Y,children:[" \u041d\u043e\u043c\u0435\u0440",(0,v.jsx)("input",{className:J,value:h,name:"number",onChange:Z})]}),(0,v.jsx)("button",{className:X,type:"submit",children:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438"})]})}),$)}var ee=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],te=(0,Z.G)((function(e,t){var n=e.templateAreas,a=e.gap,r=e.rowGap,o=e.columnGap,i=e.column,l=e.row,s=e.autoFlow,u=e.autoRows,d=e.templateRows,c=e.autoColumns,m=e.templateColumns,p=(0,j.Z)(e,ee),f={display:"grid",gridTemplateAreas:n,gridGap:a,gridRowGap:r,gridColumnGap:o,gridAutoColumns:c,gridColumn:i,gridRow:l,gridAutoFlow:s,gridAutoRows:u,gridTemplateRows:d,gridTemplateColumns:m};return(0,v.jsx)(R.m.div,(0,y.Z)({ref:t,__css:f},p))}));te.displayName="Grid";var ne=n(2796);Object.freeze(["base","sm","md","lg","xl","2xl"]);var ae=["area","colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"];function re(e){return t=e,n=function(e){return"auto"===e?"auto":"span ".concat(e,"/span ").concat(e)},Array.isArray(t)?t.map((function(e){return null===e?null:n(e)})):(0,k.Kn)(t)?Object.keys(t).reduce((function(e,a){return e[a]=n(t[a]),e}),{}):null!=t?n(t):null;var t,n}var oe=(0,Z.G)((function(e,t){var n=e.area,a=e.colSpan,r=e.colStart,o=e.colEnd,i=e.rowEnd,l=e.rowSpan,s=e.rowStart,u=(0,j.Z)(e,ae),d=(0,ne.o)({gridArea:n,gridColumn:re(a),gridRow:re(l),gridColumnStart:r,gridColumnEnd:o,gridRowStart:s,gridRowEnd:i});return(0,v.jsx)(R.m.div,(0,y.Z)({ref:t,__css:d},u))}));oe.displayName="GridItem";var ie=n(4464),le=n(6337),se=["size","colorScheme","variant","className","spacing","isAttached","isDisabled","orientation"],ue={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},de={horizontal:function(e){return{"& > *:not(style) ~ *:not(style)":{marginStart:e}}},vertical:function(e){return{"& > *:not(style) ~ *:not(style)":{marginTop:e}}}},ce=(0,Z.G)((function(e,t){var n=e.size,a=e.colorScheme,r=e.variant,o=e.className,i=e.spacing,l=void 0===i?"0.5rem":i,s=e.isAttached,d=e.isDisabled,c=e.orientation,m=void 0===c?"horizontal":c,p=(0,j.Z)(e,se),f=(0,k.cx)("chakra-button__group",o),h=(0,u.useMemo)((function(){return{size:n,colorScheme:a,variant:r,isDisabled:d}}),[n,a,r,d]),b=(0,y.Z)({display:"inline-flex"},s?ue[m]:de[m](l)),x="vertical"===m;return(0,v.jsx)(le.D,{value:h,children:(0,v.jsx)(R.m.div,(0,y.Z)({ref:t,role:"group",__css:b,className:f,"data-attached":s?"":void 0,"data-orientation":m,flexDir:x?"column":void 0},p))})}));ce.displayName="ButtonGroup";var me=n(2435),pe=function(){var e=(0,a.I0)(),t=(0,a.v9)(c),n=(0,a.v9)((function(e){return e.filter.filter})).toLowerCase(),o=(0,u.useState)(!1),i=(0,r.Z)(o,2),l=i[0],s=i[1],m=(0,u.useState)(""),p=(0,r.Z)(m,2),f=p[0],h=p[1],b=(0,u.useState)(""),y=(0,r.Z)(b,2),j=y[0],C=y[1],_=(0,u.useState)(""),Z=(0,r.Z)(_,2),w=Z[0],S=Z[1],R=function(e,t,n){s(!l),h(e),C(t),S(n)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(te,{templateColumns:"repeat(2, 5fr)",gap:6,pt:10,pb:10,children:t.filter((function(e){return e.name.toLowerCase().includes(n)})).map((function(t){var n=t.id,a=t.name,r=t.number;return(0,v.jsx)(oe,{w:"100%",border:"1px",borderColor:"gray.200",p:5,children:(0,v.jsxs)(x.k,{children:[(0,v.jsxs)(g.x,{fontSize:"22",color:"#572470",children:[a,": ",r]},n),(0,v.jsx)(ie.L,{}),(0,v.jsxs)(ce,{gap:1,children:[(0,v.jsx)(me.z,{colorScheme:"purple",variant:"outline",onClick:function(){return R(a,r,n)},children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),(0,v.jsx)(me.z,{colorScheme:"purple",variant:"solid",onClick:function(){return function(t){e((0,d.GK)(t))}(n)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})]})},n)}))}),l&&(0,v.jsx)(V,{onClose:R,userName:f,userNumber:j,userId:w})]})};function fe(){var e=(0,a.I0)(),t=(0,a.v9)(c),n=(0,a.v9)(m),r=(0,a.v9)(p);return(0,u.useEffect)((function(){e((0,d.yF)())}),[e]),(0,v.jsxs)("div",{children:[(0,v.jsx)(g.x,{fontWeight:600,fontSize:36,textAlign:"center",color:"#572470",pt:5,pb:5,children:"\u0421\u0442\u0432\u043e\u0440\u0438 \u0441\u0432\u0456\u0439 \u0434\u043e\u0432\u0456\u0434\u043d\u0438\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}),(0,v.jsx)(h,{}),(0,v.jsx)(g.x,{fontWeight:600,fontSize:36,textAlign:"center",color:"#572470",pt:5,pb:5,children:"\u041c\u043e\u0457 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),t.length>1&&(0,v.jsx)(U,{}),n&&!r&&(0,v.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."}),t.length>0?(0,v.jsx)(pe,{}):(0,v.jsx)(g.x,{fontWeight:600,fontSize:36,textAlign:"center",color:"#572470",pt:5,pb:5,children:"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0438 \u0449\u043e \u043d\u0435\u043c\u0430\u0454 \u0436\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443"})]})}}}]);
//# sourceMappingURL=818.c5aedaff.chunk.js.map