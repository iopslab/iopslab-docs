import{g as i,Z as e,$ as t,a0 as s,a5 as n,a6 as l,a7 as _,a8 as d,_ as c}from"./framework-64cb0dab.js";const p=["href"],u={class:"card-box"},g={class:"card-title"},f={class:"tag-list"},m={class:"card-subtitle"},v=i({__name:"Card",props:{title:{},link:{},subtitle:{},tags:{default:()=>[]},noMargin:{type:Boolean}},setup(h){return(a,k)=>(e(),t("a",{class:d(["card",{"no-margin":a.noMargin}]),href:a.link,target:"_blank"},[s("div",u,[s("div",g,n(a.title),1),s("div",f,[(e(!0),t(l,null,_(a.tags,(o,r)=>(e(),t("div",{key:r,class:"tag"},n(o),1))),128))])]),s("div",m,n(a.subtitle),1)],10,p))}});const b=c(v,[["__scopeId","data-v-dacf1591"],["__file","Card.vue"]]);export{b as default};