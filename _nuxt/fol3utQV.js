import k from"./DCKUiXTZ.js";import v from"./BhFPDwoD.js";import w from"./nv4b1B5H.js";import{u as I}from"./DBRVnC5c.js";import{d as A,Y as S,I as g,M as c,c as a,e as r,f as o,h as i,F as C,Z as B,k as e,w as u,p as L,j as N,s as V,$ as b,X as F,l as P}from"./abIoSecz.js";import"./BcWussCh.js";const T=t=>(L("data-v-5f11de6d"),t=t(),N(),t),X={key:0,class:"articles-list"},Y={class:"featured"},$={class:"layout"},j={key:1,class:"tour"},q=T(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=S(async()=>I(_.path,async()=>await V(b(_.path)).sort({date:-1}).find(),"$bOdvH1XU7i")),s=await s,l(),s),n=g(()=>m.value||[]);return(E,H)=>{var d;const p=k,f=v,h=w;return(d=c(n))!=null&&d.length?(a(),r("div",X,[o("div",Y,[i(p,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",$,[(a(!0),r(C,null,B(c(n).slice(1),(y,x)=>(a(),F(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",j,[q,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),J=P(D,[["__scopeId","data-v-5f11de6d"]]);export{J as default};
