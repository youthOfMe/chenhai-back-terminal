import{d as E,u as S,a as U,b as k,r as C,c as f,e as i,o as $,f as B,g as t,w as a,h as m,i as F,E as g,j as H,l as P,p as R,k as T,m as w,_ as j}from"./index-94ead3f8.js";const q=()=>{let e="";const s=new Date().getHours();return s<=4?e="半夜":s<=6?e="凌晨":s<=9?e="早晨":s<=12?e="上午":s<=1?e="中午":s<=17?e="下午":s<=18?e="黄昏":s<=19?e="傍晚":e="晚上",e},v=e=>(R("data-v-44fb357f"),e=e(),T(),e),D={class:"login_container"},L=v(()=>w("h1",null,"Hello",-1)),z=v(()=>w("h2",null,"欢迎来到辰海烟雨管理终端",-1)),A=E({__name:"Index",setup(e){const s=S(),h=U(),x=k(),l=C({username:"admin",password:"123456"}),u=f(!1),_=f(),y={username:[{trigger:"change",validator:(r,o,n)=>{o.length>=5&&o.length<=18?n():n(new Error("账号长度要在5-18位之间"))}}],password:[{trigger:"change",validator:(r,o,n)=>{o.length>=5&&o.length<=18?n():n(new Error("密码长度要在6-18位之间"))}}]},V=async()=>{await _.value.validate(),u.value=!0;try{await s.fetchLogin(l);const r=h.query.redirect;x.push({path:r||"/"}),g({type:"success",title:`Hi, ${q()}好`,message:"您辛苦了, 管理员"})}catch(r){g({type:"error",message:r.message})}u.value=!1};return(r,o)=>{const n=i("el-col"),p=i("el-input"),c=i("el-form-item"),I=i("el-button"),N=i("el-form"),b=i("el-row");return $(),B("div",D,[t(b,null,{default:a(()=>[t(n,{span:12,xs:0}),t(n,{span:12,xs:24},{default:a(()=>[t(N,{class:"login_form",model:l,rules:y,ref_key:"loginForms",ref:_},{default:a(()=>[L,z,t(c,{prop:"account"},{default:a(()=>[t(p,{modelValue:l.username,"onUpdate:modelValue":o[0]||(o[0]=d=>l.username=d),"prefix-icon":m(H)},null,8,["modelValue","prefix-icon"])]),_:1}),t(c,{prop:"password"},{default:a(()=>[t(p,{type:"password","prefix-icon":m(P),modelValue:l.password,"onUpdate:modelValue":o[1]||(o[1]=d=>l.password=d),"show-password":""},null,8,["prefix-icon","modelValue"])]),_:1}),t(c,null,{default:a(()=>[t(I,{class:"login_btn",type:"primary",onClick:o[2]||(o[2]=d=>V()),loading:u.value},{default:a(()=>[F(" 登录 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})])}}});const M=j(A,[["__scopeId","data-v-44fb357f"]]);export{M as default};
