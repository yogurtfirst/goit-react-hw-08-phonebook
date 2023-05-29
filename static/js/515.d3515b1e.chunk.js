"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[515],{1515:function(e,n,i){i.r(n),i.d(n,{default:function(){return I}});var r,t,l,a=i(9439),s=i(1148),o=i(5794),d=i(7806),u=i(4224),c=i(2791),p=i(9434),m=i(1063),h=i(168),v=i(225),f=i(1087),x=v.Z.form(r||(r=(0,h.Z)(["\n    max-width: 440px;\n    margin: 40px auto;\n    padding: 20px;\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n    border-radius: 6px;\n"]))),b=v.Z.h2(t||(t=(0,h.Z)(["\n    font-size: 24px;\n    text-align: center;\n    margin-bottom: 20px;\n"]))),g=(0,v.Z)(f.rU)(l||(l=(0,h.Z)(["\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: blue;\n    text-align: center;\n    cursor: pointer;\n    text-decoration: underline;\n"]))),y=i(3329),Z=function(){var e=(0,p.I0)(),n=(0,c.useState)(!1),i=(0,a.Z)(n,2),r=i[0],t=i[1];return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(x,{onSubmit:function(n){n.preventDefault();var i={email:n.currentTarget.email.value,name:n.currentTarget.name.value,password:n.currentTarget.password.value};e((0,m.y1)(i))},children:[(0,y.jsxs)(b,{rmTitle:!0,children:["Sign up ",(0,y.jsx)("br",{}),"It's quick and easy."]}),(0,y.jsx)("label",{htmlFor:"email",children:"Email"}),(0,y.jsx)(s.I,{border:"1px solid grey",mb:"2",focusBorderColor:"pink.400",pr:"1.5rem",placeholder:"Enter email",type:"email",name:"email",id:"email",isRequired:!0}),(0,y.jsx)("label",{htmlFor:"name",children:"User Name"}),(0,y.jsx)(s.I,{focusBorderColor:"pink.400",pr:"1.5rem",mb:"2",placeholder:"Enter username",type:"text",name:"name",id:"name",isRequired:!0}),(0,y.jsx)("label",{htmlFor:"password",children:"Password"}),(0,y.jsxs)(o.B,{size:"md",children:[(0,y.jsx)(s.I,{border:"1px solid grey",focusBorderColor:"pink.400",pr:"1.5rem",type:r?"text":"password",placeholder:"Enter password",name:"password",id:"password",isRequired:!0}),(0,y.jsx)(d.x,{width:"4.5rem",children:(0,y.jsx)(u.z,{fontFamily:"Raleway",h:"1.75rem",size:"sm",onClick:function(){return t(!r)},children:r?"Hide":"Show"})})]}),(0,y.jsx)(u.z,{colorScheme:"blue",variant:"outline",display:"block",m:"12px auto",type:"submit",fontFamily:"Raleway",children:"Register Now"}),(0,y.jsx)(g,{to:"/login",children:"Already have an account?"})]})})},I=function(){return(0,y.jsx)("main",{children:(0,y.jsx)(Z,{})})}},5794:function(e,n,i){i.d(n,{B:function(){return g},m:function(){return b}});var r=i(1413),t=i(4925),l=i(9439),a=i(9886),s=i(2791);var o=i(7872),d=i(9219),u=i(2996),c=i(8161),p=i(6992);var m=i(3329),h=["children","className"],v=(0,a.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),f=(0,l.Z)(v,2),x=f[0],b=f[1],g=(0,o.G)((function(e,n){var i=(0,d.jC)("Input",e),l=(0,u.Lr)(e),a=l.children,o=l.className,v=(0,t.Z)(l,h),f=(0,p.cx)("chakra-input__group",o),b={},g=function(e){return s.Children.toArray(e).filter((function(e){return(0,s.isValidElement)(e)}))}(a),y=i.field;g.forEach((function(e){var n,r;i&&(y&&"InputLeftElement"===e.type.id&&(b.paddingStart=null!=(n=y.height)?n:y.h),y&&"InputRightElement"===e.type.id&&(b.paddingEnd=null!=(r=y.height)?r:y.h),"InputRightAddon"===e.type.id&&(b.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(b.borderStartRadius=0))}));var Z=g.map((function(n){var i,r,t=function(e){var n=Object.assign({},e);for(var i in n)void 0===n[i]&&delete n[i];return n}({size:(null==(i=n.props)?void 0:i.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?(0,s.cloneElement)(n,t):(0,s.cloneElement)(n,Object.assign(t,b,n.props))}));return(0,m.jsx)(c.m.div,(0,r.Z)((0,r.Z)({className:f,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0},v),{},{children:(0,m.jsx)(x,{value:i,children:Z})}))}));g.displayName="InputGroup"},1148:function(e,n,i){i.d(n,{I:function(){return N}});var r=i(1413),t=i(4925),l=i(9439),a=i(9886),s=i(4591),o=i(7872),d=i(9219),u=i(2996),c=i(8161),p=i(6992),m=i(2791),h=i(3329),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],x=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,l.Z)(x,2),g=b[0],y=b[1],Z=(0,a.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(Z,2),j=I[0],R=I[1];var k=(0,o.G)((function(e,n){var i=(0,d.jC)("Form",e),a=function(e){var n=e.id,i=e.isRequired,a=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,t.Z)(e,v),c=(0,m.useId)(),h=n||"field-".concat(c),f="".concat(h,"-label"),x="".concat(h,"-feedback"),b="".concat(h,"-helptext"),g=(0,m.useState)(!1),y=(0,l.Z)(g,2),Z=y[0],I=y[1],j=(0,m.useState)(!1),R=(0,l.Z)(j,2),k=R[0],_=R[1],F=(0,m.useState)(!1),w=(0,l.Z)(F,2),C=w[0],N=w[1],S=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&_(!0)}))})}),[b]),q=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(C),"data-disabled":(0,p.PB)(o),"data-invalid":(0,p.PB)(a),"data-readonly":(0,p.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,C,a,d,f]),E=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[x]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!a,isReadOnly:!!d,isDisabled:!!o,isFocused:!!C,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},hasFeedbackText:Z,setHasFeedbackText:I,hasHelpText:k,setHasHelpText:_,id:h,labelId:f,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:S,getErrorMessageProps:E,getRootProps:P,getLabelProps:q,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),o=a.getRootProps,x=(a.htmlProps,(0,t.Z)(a,f)),b=(0,p.cx)("chakra-form-control",e.className);return(0,h.jsx)(j,{value:x,children:(0,h.jsx)(g,{value:i,children:(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},o({},n)),{},{className:b,__css:i.container}))})})}));k.displayName="FormControl",(0,o.G)((function(e,n){var i=R(),t=y(),l=(0,p.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:t.helperText,className:l}))})).displayName="FormHelperText";var _=["isDisabled","isInvalid","isReadOnly","isRequired"],F=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function w(e){var n=function(e){var n,i,l,a=R(),s=e.id,o=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,m=e.isInvalid,h=e.isReadOnly,v=e.isDisabled,f=e.onFocus,x=e.onBlur,b=(0,t.Z)(e,F),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&g.push(a.feedbackId);(null==a?void 0:a.hasHelpText)&&g.push(a.helpTextId);return(0,r.Z)((0,r.Z)({},b),{},{"aria-describedby":g.join(" ")||void 0,id:null!=s?s:null==a?void 0:a.id,isDisabled:null!=(n=null!=o?o:v)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(i=null!=d?d:h)?i:null==a?void 0:a.isReadOnly,isRequired:null!=(l=null!=u?u:c)?l:null==a?void 0:a.isRequired,isInvalid:null!=m?m:null==a?void 0:a.isInvalid,onFocus:(0,p.v0)(null==a?void 0:a.onFocus,f),onBlur:(0,p.v0)(null==a?void 0:a.onBlur,x)})}(e),i=n.isDisabled,l=n.isInvalid,a=n.isReadOnly,s=n.isRequired,o=(0,t.Z)(n,_);return(0,r.Z)((0,r.Z)({},o),{},{disabled:i,readOnly:a,required:s,"aria-invalid":(0,p.Qm)(l),"aria-required":(0,p.Qm)(s),"aria-readonly":(0,p.Qm)(a)})}var C=["htmlSize"],N=(0,o.G)((function(e,n){var i=e.htmlSize,l=(0,t.Z)(e,C),a=(0,d.jC)("Input",l),s=w((0,u.Lr)(l)),o=(0,p.cx)("chakra-input",e.className);return(0,h.jsx)(c.m.input,(0,r.Z)((0,r.Z)({size:i},s),{},{__css:a.field,ref:n,className:o}))}));N.displayName="Input",N.id="Input"},7806:function(e,n,i){i.d(n,{x:function(){return x}});var r=i(4942),t=i(1413),l=i(4925),a=i(5794),s=i(8161),o=i(7872),d=i(6992),u=i(3329),c=["placement"],p=["className"],m=["className"],h=(0,s.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),v=(0,o.G)((function(e,n){var i,s,o,d=e.placement,p=void 0===d?"left":d,m=(0,l.Z)(e,c),v=(0,a.m)(),f=v.field,x="left"===p?"insetStart":"insetEnd",b=(0,t.Z)((i={},(0,r.Z)(i,x,"0"),(0,r.Z)(i,"width",null!=(s=null==f?void 0:f.height)?s:null==f?void 0:f.h),(0,r.Z)(i,"height",null!=(o=null==f?void 0:f.height)?o:null==f?void 0:f.h),(0,r.Z)(i,"fontSize",null==f?void 0:f.fontSize),i),v.element);return(0,u.jsx)(h,(0,t.Z)({ref:n,__css:b},m))}));v.id="InputElement",v.displayName="InputElement";var f=(0,o.G)((function(e,n){var i=e.className,r=(0,l.Z)(e,p),a=(0,d.cx)("chakra-input__left-element",i);return(0,u.jsx)(v,(0,t.Z)({ref:n,placement:"left",className:a},r))}));f.id="InputLeftElement",f.displayName="InputLeftElement";var x=(0,o.G)((function(e,n){var i=e.className,r=(0,l.Z)(e,m),a=(0,d.cx)("chakra-input__right-element",i);return(0,u.jsx)(v,(0,t.Z)({ref:n,placement:"right",className:a},r))}));x.id="InputRightElement",x.displayName="InputRightElement"}}]);
//# sourceMappingURL=515.d3515b1e.chunk.js.map