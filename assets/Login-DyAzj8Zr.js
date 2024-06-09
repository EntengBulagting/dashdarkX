import{r as l,j as e,a9 as d,a8 as n,ad as s,a7 as r,aA as x,ao as c,ai as g,I as j,aG as u,aH as f}from"./index-CbgFMfDu.js";import{F as w,C as y}from"./FormControlLabel-6195rDj1.js";const S=()=>{const[t,p]=l.useState({email:"",password:""}),[a,m]=l.useState(!1),i=o=>{p({...t,[o.target.name]:o.target.value})},h=o=>{o.preventDefault(),console.log(t)};return e.jsxs(e.Fragment,{children:[e.jsx(d,{align:"center",variant:"h3",fontWeight:600,children:"LogIn"}),e.jsxs(n,{direction:{xs:"column",sm:"row"},mt:4,spacing:2,width:1,children:[e.jsx(s,{variant:"contained",color:"primary",fullWidth:!0,startIcon:e.jsx(r,{icon:"uim:google"}),children:"Login with Google"}),e.jsx(s,{variant:"contained",color:"secondary",fullWidth:!0,startIcon:e.jsx(r,{icon:"uim:apple"}),children:"Login with Apple"})]}),e.jsx(x,{sx:{my:3},children:"or Login with"}),e.jsxs(n,{onSubmit:h,component:"form",direction:"column",gap:2,children:[e.jsx(c,{id:"email",name:"email",type:"email",value:t.email,onChange:i,variant:"filled",placeholder:"Your Email",autoComplete:"email",fullWidth:!0,autoFocus:!0,required:!0}),e.jsx(c,{id:"password",name:"password",type:a?"text":"password",value:t.password,onChange:i,variant:"filled",placeholder:"Your Password",autoComplete:"password",fullWidth:!0,autoFocus:!0,required:!0,InputProps:{endAdornment:e.jsx(g,{position:"end",sx:{opacity:t.password?1:0},children:e.jsx(j,{"aria-label":"toggle password visibility",onClick:()=>m(!a),edge:"end",children:e.jsx(r,{icon:a?"ion:eye":"ion:eye-off"})})})}}),e.jsxs(n,{mt:-1.5,alignItems:"center",justifyContent:"space-between",children:[e.jsx(w,{control:e.jsx(y,{color:"primary"}),label:"Remember me"}),e.jsx(u,{href:"#!",fontSize:"body2.fontSize",letterSpacing:.5,children:"Forgot password?"})]}),e.jsx(s,{type:"submit",variant:"contained",size:"medium",fullWidth:!0,children:"Submit"}),e.jsxs(d,{my:3,color:"text.secondary",variant:"body2",align:"center",letterSpacing:.5,children:["Don't have an account? ",e.jsx(u,{href:f.signup,children:"Signup"})]})]})]})};export{S as default};
