import{_ as i,c as o,J as n,w as r,m as e,a as l,a6 as c,G as t,o as p}from"./chunks/framework.BbZoItmV.js";const k=JSON.parse('{"title":"库存分配","description":"","frontmatter":{"title":"库存分配","desc":"库存分配","name":"InvAllocate","type":"rule","navIgnore":false,"version":1,"tags":["wms/rule/InvAllocate"]},"headers":[],"relativePath":"wms/07_规则设计/rule.InvAllocate.md","filePath":"wms/07_规则设计/rule.InvAllocate.md"}'),d={name:"wms/07_规则设计/rule.InvAllocate.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[l("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),u=e("p",null,"库存分配",-1),h=e("p",null,"版本: 1",-1),v=c("",3),m=e("h3",{id:"出口参数",tabindex:"-1"},[l("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function b(T,y,A,f,g,C){const s=t("YvCallOut"),a=t("YvBeanSchema");return p(),o("div",null,[_,n(s,{type:"rule",title:"InvAllocate"},{default:r(()=>[u,h]),_:1}),v,n(a,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
`}),m,n(a,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "whereSql" : {
      "valueType" : "string",
      "title" : "库存过滤条件"
    },
    "orderSql" : {
      "valueType" : "string",
      "title" : "库存排序条件"
    },
    "allocMode" : {
      "valueType" : "dict",
      "title" : "分配模式",
      "dict" : "ALLOC_MODE"
    },
    "invAllocMode" : {
      "valueType" : "dict",
      "title" : "库存匹配模式",
      "dict" : "INV_ALLOC_MODE"
    },
    "targetPackLevel" : {
      "valueType" : "dict",
      "title" : "目标包装级别",
      "dict" : "PACK_LEVEL"
    },
    "packLevel" : {
      "valueType" : "dict",
      "title" : "包装级别",
      "dict" : "PACK_LEVEL"
    },
    "autoRep" : {
      "valueType" : "boolean",
      "title" : "是否自动补货"
    },
    "isSplit" : {
      "valueType" : "boolean",
      "title" : "是否允许拆分"
    },
    "isOnWay" : {
      "valueType" : "boolean",
      "title" : "是否在途优先"
    },
    "orderType" : {
      "valueType" : "dict",
      "title" : "订单类型",
      "dict" : "ORDER_TYPE"
    }
  }
}
}
`})])}const x=i(d,[["render",b]]);export{k as __pageData,x as default};
