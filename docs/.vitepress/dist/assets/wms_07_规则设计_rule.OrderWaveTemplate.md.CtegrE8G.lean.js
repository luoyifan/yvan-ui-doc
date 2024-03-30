import{_ as s,c as i,J as t,w as o,m as e,a as l,a6 as c,G as n,o as d}from"./chunks/framework.BbZoItmV.js";const x=JSON.parse('{"title":"订单波次模板","description":"","frontmatter":{"title":"订单波次模板","desc":"订单波次模板","name":"OrderWaveTemplate","type":"rule","navIgnore":false,"version":4,"tags":["wms/rule/OrderWaveTemplate"]},"headers":[],"relativePath":"wms/07_规则设计/rule.OrderWaveTemplate.md","filePath":"wms/07_规则设计/rule.OrderWaveTemplate.md"}'),p={name:"wms/07_规则设计/rule.OrderWaveTemplate.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[l("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),u=e("p",null,"订单波次模板",-1),h=e("p",null,"版本: 4",-1),m=c("",3),T=e("h3",{id:"出口参数",tabindex:"-1"},[l("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(b,y,P,f,O,S){const r=n("YvCallOut"),a=n("YvBeanSchema");return d(),i("div",null,[_,t(r,{type:"rule",title:"OrderWaveTemplate"},{default:o(()=>[u,h]),_:1}),m,t(a,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : {
    "order_type" : {
      "valueType" : "dict",
      "title" : "订单类型"
    },
    "order_biz_type" : {
      "valueType" : "dict",
      "title" : "订单业务类型"
    }
  }
}
}
`}),T,t(a,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "createWaveNum" : {
      "valueType" : "int",
      "title" : "每次组建波次的条目数"
    },
    "hangType" : {
      "valueType" : "dict",
      "title" : "挂起类型",
      "dict" : "HANG_TYPE"
    },
    "argPriority" : {
      "valueType" : "dict",
      "title" : "分配优先级",
      "dict" : "ARG_PRIORITY"
    },
    "steps" : {
      "valueType" : "object",
      "title" : "出库步骤",
      "properties" : {
        "waveMode" : {
          "valueType" : "dict",
          "title" : "波次创建模式",
          "dict" : "OUT_STEPS_TYPE"
        },
        "allocMode" : {
          "valueType" : "dict",
          "title" : "分配模式",
          "dict" : "OUT_STEPS_TYPE"
        },
        "taskMode" : {
          "valueType" : "dict",
          "title" : "任务下发模式",
          "dict" : "OUT_STEPS_TYPE"
        }
      }
    }
  }
}
}
`})])}const k=s(p,[["render",v]]);export{x as __pageData,k as default};
