import{d as x,r as U,t as P,f as k,b as o,w as l,v as z,z as B,G as u,a as n,o as I,e as c,A as N}from"./vendor.DHu1fQkO.js";import{_ as j}from"./_plugin-vue_export-helper.DlAUqK2U.js";const A={class:"profile-edit"},D={class:"submit-button"},R=x({__name:"edit",setup(S){const i=B(),s=U(0),e=P({avatar:[],avatarUrl:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",username:"rollin",signature:"这个人很懒，什么都没留下",email:"18946025623@163.com",verifyCode:"",newPassword:"",confirmPassword:""}),v=d=>{d.content&&(e.avatarUrl=d.content)},f=()=>{s.value=60;const d=setInterval(()=>{s.value--,s.value<=0&&clearInterval(d)},1e3)},_=async()=>{if(!e.email){u("请输入邮箱");return}u("验证码已发送"),f()},V=async()=>{if(e.newPassword&&e.newPassword!==e.confirmPassword){u("两次输入的密码不一致");return}u("保存成功"),i.back()},w=()=>{i.back()};return(d,a)=>{const b=n("van-nav-bar"),y=n("van-image"),g=n("van-uploader"),C=n("van-cell"),r=n("van-field"),m=n("van-cell-group"),p=n("van-button");return I(),k("div",A,[o(b,{title:"编辑个人信息","left-text":"返回","left-arrow":"",onClickLeft:w}),o(m,{inset:"",title:"基本信息"},{default:l(()=>[o(C,{title:"头像",center:""},{"right-icon":l(()=>[o(g,{modelValue:e.avatar,"onUpdate:modelValue":a[0]||(a[0]=t=>e.avatar=t),"max-count":1,"after-read":v},{default:l(()=>[o(y,{round:"",width:"50px",height:"50px",src:e.avatarUrl},null,8,["src"])]),_:1},8,["modelValue"])]),_:1}),o(r,{modelValue:e.username,"onUpdate:modelValue":a[1]||(a[1]=t=>e.username=t),label:"用户名",placeholder:"请输入用户名"},null,8,["modelValue"]),o(r,{modelValue:e.signature,"onUpdate:modelValue":a[2]||(a[2]=t=>e.signature=t),label:"个性签名",type:"textarea",placeholder:"请输入个性签名",autosize:""},null,8,["modelValue"])]),_:1}),o(m,{inset:"",title:"密码修改",class:"password-group"},{default:l(()=>[o(r,{modelValue:e.newPassword,"onUpdate:modelValue":a[3]||(a[3]=t=>e.newPassword=t),label:"新密码",type:"password",placeholder:"请输入新密码"},null,8,["modelValue"]),o(r,{modelValue:e.confirmPassword,"onUpdate:modelValue":a[4]||(a[4]=t=>e.confirmPassword=t),label:"确认密码",type:"password",placeholder:"请再次输入新密码"},null,8,["modelValue"]),o(r,{modelValue:e.email,"onUpdate:modelValue":a[5]||(a[5]=t=>e.email=t),label:"邮箱",placeholder:"请输入邮箱"},{button:l(()=>[o(p,{size:"small",type:"primary",disabled:!!s.value,onClick:_},{default:l(()=>[c(N(s.value?`${s.value}s`:"获取验证码"),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"]),o(r,{modelValue:e.verifyCode,"onUpdate:modelValue":a[6]||(a[6]=t=>e.verifyCode=t),label:"验证码",placeholder:"请输入验证码"},null,8,["modelValue"])]),_:1}),z("div",D,[o(p,{block:"",type:"primary",onClick:V},{default:l(()=>a[7]||(a[7]=[c(" 保存 ")])),_:1})])])}}}),E=j(R,[["__scopeId","data-v-676247b6"]]);export{E as default};
