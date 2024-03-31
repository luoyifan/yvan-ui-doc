import{_ as i,E as n,c as s,J as t,w as r,m as e,a as l,a6 as c,o as d}from"./chunks/framework.DZm5WilM.js";const x=JSON.parse('{"title":"波次模板","description":"","frontmatter":{"title":"波次模板","desc":"波次模板","name":"WaveTemplate","type":"rule","navIgnore":false,"version":4,"tags":["wms/rule/WaveTemplate"]},"headers":[],"relativePath":"wms/07_规则设计/rule.WaveTemplate.md","filePath":"wms/07_规则设计/rule.WaveTemplate.md"}'),p={name:"wms/07_规则设计/rule.WaveTemplate.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[l("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),T=e("p",null,"波次模板",-1),h=e("p",null,"版本: 4",-1),u=c("",3),m=e("h3",{id:"出口参数",tabindex:"-1"},[l("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(P,S,b,f,E,y){const o=n("YvCallOut"),a=n("YvBeanSchema");return d(),s("div",null,[_,t(o,{type:"rule",title:"WaveTemplate"},{default:r(()=>[T,h]),_:1}),u,t(a,{content:`{
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
    "pickMode" : {
      "valueType" : "dict",
      "title" : "拣货",
      "dict" : "OUT_STEPS_TYPE"
    },
    "sowBeforeCollectMode" : {
      "valueType" : "dict",
      "title" : "分播前集货",
      "dict" : "OUT_STEPS_TYPE"
    },
    "sowMode" : {
      "valueType" : "dict",
      "title" : "分播",
      "dict" : "OUT_STEPS_TYPE"
    },
    "reviewBeforeCollectMode" : {
      "valueType" : "dict",
      "title" : "复核前集货",
      "dict" : "OUT_STEPS_TYPE"
    },
    "reviewMode" : {
      "valueType" : "dict",
      "title" : "复核",
      "dict" : "OUT_STEPS_TYPE"
    },
    "shipBeforeCollectMode" : {
      "valueType" : "dict",
      "title" : "发运前集货",
      "dict" : "OUT_STEPS_TYPE"
    },
    "shipMode" : {
      "valueType" : "dict",
      "title" : "发运",
      "dict" : "OUT_STEPS_TYPE"
    }
  }
}
}
`})])}const C=i(p,[["render",v]]);export{x as __pageData,C as default};
