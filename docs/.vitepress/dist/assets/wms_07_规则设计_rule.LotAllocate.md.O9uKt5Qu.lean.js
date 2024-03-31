import{_ as l,E as n,c as r,J as t,w as i,m as e,a as o,a6 as c,o as d}from"./chunks/framework.DZm5WilM.js";const w=JSON.parse('{"title":"批次分配","description":"","frontmatter":{"title":"批次分配","desc":"批次分配","name":"LotAllocate","type":"rule","navIgnore":false,"version":1,"tags":["wms/rule/LotAllocate"]},"headers":[],"relativePath":"wms/07_规则设计/rule.LotAllocate.md","filePath":"wms/07_规则设计/rule.LotAllocate.md"}'),p={name:"wms/07_规则设计/rule.LotAllocate.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[o("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),h=e("p",null,"批次分配",-1),u=e("p",null,"版本: 1",-1),m=c("",3),v=e("h3",{id:"出口参数",tabindex:"-1"},[o("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function b(f,g,x,T,y,A){const s=n("YvCallOut"),a=n("YvBeanSchema");return d(),r("div",null,[_,t(s,{type:"rule",title:"LotAllocate"},{default:i(()=>[h,u]),_:1}),m,t(a,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
`}),v,t(a,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "orderBy" : {
      "valueType" : "string",
      "title" : "排序条件"
    },
    "whereBy" : {
      "valueType" : "string",
      "title" : "过滤条件"
    }
  }
}
}
`})])}const C=l(p,[["render",b]]);export{w as __pageData,C as default};
