import{_ as l,E as t,c,J as n,w as r,m as e,a as s,a6 as o,o as p}from"./chunks/framework.DZm5WilM.js";const g=JSON.parse('{"title":"库位分配","description":"","frontmatter":{"title":"库位分配","desc":"库位分配","name":"LocDispatch","type":"rule","navIgnore":false,"version":4,"tags":["wms/rule/LocDispatch"]},"headers":[],"relativePath":"wms/07_规则设计/rule.LocDispatch.md","filePath":"wms/07_规则设计/rule.LocDispatch.md"}'),d={name:"wms/07_规则设计/rule.LocDispatch.md"},h=e("h2",{id:"库位分配",tabindex:"-1"},[s("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),_=e("p",null,"库位分配",-1),u=e("p",null,"版本: 4",-1),m=o("",3),T=e("h3",{id:"出口参数",tabindex:"-1"},[s("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(b,y,P,S,D,L){const i=t("YvCallOut"),a=t("YvBeanSchema");return p(),c("div",null,[h,n(i,{type:"rule",title:"LocDispatch"},{default:r(()=>[_,u]),_:1}),m,n(a,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "uiEditor" : "",
  "properties" : {
    "put_intent" : {
      "valueType" : "dict",
      "dict" : "PUT_INTENT",
      "title" : "入库意向"
    },
    "quality_status" : {
      "valueType" : "dict",
      "dict" : "INV_QUALITY_STATUS",
      "title" : "质检状态"
    },
    "PilerDistPhase" : {
      "valueType" : "dict",
      "dict" : "PILER_DIST_PHASE",
      "title" : "立库分配阶段"
    },
    "ShuttleDistPhase" : {
      "valueType" : "dict",
      "title" : "密集库分配阶段",
      "dict" : "SHUTTLE_DIST_PHASE"
    }
  }
}
}
`}),T,n(a,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "whereSql" : {
      "valueType" : "string",
      "title" : "库位条件"
    },
    "orderSql" : {
      "valueType" : "string",
      "title" : "库位排序"
    },
    "locId" : {
      "valueType" : "string",
      "title" : "库位ID"
    },
    "steps" : {
      "valueType" : "array",
      "title" : "算法步骤",
      "items" : {
        "valueType" : "object",
        "title" : "步骤内容",
        "properties" : {
          "putAlgorithmLocat" : {
            "valueType" : "dict",
            "title" : "货位限制条件",
            "dict" : "PUT_ALGORITHM_LOCAT"
          },
          "option" : {
            "valueType" : "array",
            "items" : {
              "valueType" : "dict",
              "title" : "空间限制条件",
              "dict" : "PUT_ALGORITHM_SPACE"
            },
            "title" : "空间限制条件内容"
          }
        }
      }
    }
  }
}
}
`})])}const I=l(d,[["render",v]]);export{g as __pageData,I as default};
