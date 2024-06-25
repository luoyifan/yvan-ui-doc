import{_ as i,c as o,J as n,w as r,m as e,a as l,a6 as c,G as a,o as p}from"./chunks/framework.BbZoItmV.js";const L=JSON.parse('{"title":"补货","description":"","frontmatter":{"title":"补货","desc":"补货","name":"Rep","type":"rule","navIgnore":false,"version":1,"tags":["wms/rule/Rep"]},"headers":[],"relativePath":"wms/07_规则设计/rule.Rep.md","filePath":"wms/07_规则设计/rule.Rep.md"}'),d={name:"wms/07_规则设计/rule.Rep.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[l("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),u=e("p",null,"补货",-1),h=e("p",null,"版本: 1",-1),m=c("",3),v=e("h3",{id:"出口参数",tabindex:"-1"},[l("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function b(T,y,f,g,x,C){const s=a("YvCallOut"),t=a("YvBeanSchema");return p(),o("div",null,[_,n(s,{type:"rule",title:"Rep"},{default:r(()=>[u,h]),_:1}),m,n(t,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
`}),v,n(t,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "whereSql" : {
      "valueType" : "string",
      "title" : "过滤条件"
    },
    "orderSql" : {
      "valueType" : "string",
      "title" : "排序条件"
    },
    "allocMode" : {
      "valueType" : "dict",
      "title" : "分配模式",
      "dict" : "ALLOC_MODE"
    },
    "invAllocMode" : {
      "valueType" : "dict",
      "dict" : "INV_ALLOC_MODE",
      "title" : "库存分配模式"
    },
    "packLevel" : {
      "valueType" : "dict",
      "title" : "包装级别",
      "dict" : "PACK_LEVEL"
    },
    "isOnWay" : {
      "valueType" : "boolean",
      "title" : "是否在途优先"
    },
    "invLevel" : {
      "valueType" : "dict",
      "title" : "库存占用级别",
      "dict" : "INV_LEVEL"
    },
    "isSplit" : {
      "valueType" : "boolean",
      "title" : "是否允许拆分"
    }
  }
}
}
`})])}const S=i(d,[["render",b]]);export{L as __pageData,S as default};
