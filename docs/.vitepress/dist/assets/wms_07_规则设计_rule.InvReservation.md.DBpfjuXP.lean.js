import{_ as i,c as r,J as t,w as l,m as e,a as s,a6 as c,G as n,o as d}from"./chunks/framework.BbZoItmV.js";const N=JSON.parse('{"title":"库存预占","description":"","frontmatter":{"title":"库存预占","desc":"库存预占","name":"InvReservation","type":"rule","navIgnore":false,"version":2,"tags":["wms/rule/InvReservation"]},"headers":[],"relativePath":"wms/07_规则设计/rule.InvReservation.md","filePath":"wms/07_规则设计/rule.InvReservation.md"}'),p={name:"wms/07_规则设计/rule.InvReservation.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[s("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),h=e("p",null,"库存预占",-1),v=e("p",null,"版本: 2",-1),u=c("",3),m=e("h3",{id:"出口参数",tabindex:"-1"},[s("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function b(T,f,I,x,V,y){const o=n("YvCallOut"),a=n("YvBeanSchema");return d(),r("div",null,[_,t(o,{type:"rule",title:"InvReservation"},{default:l(()=>[h,v]),_:1}),u,t(a,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
`}),m,t(a,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "allocLevel" : {
      "valueType" : "dict",
      "title" : "分配占用维度",
      "dict" : "INV_LEVEL"
    },
    "preAllocLevel" : {
      "valueType" : "dict",
      "title" : "预分配占用维度",
      "dict" : "INV_LEVEL"
    },
    "invOccupationType" : {
      "valueType" : "dict",
      "title" : "库存占用类型",
      "dict" : "INV_OCCUPATION_TYPE"
    }
  }
}
}
`})])}const P=i(p,[["render",b]]);export{N as __pageData,P as default};
