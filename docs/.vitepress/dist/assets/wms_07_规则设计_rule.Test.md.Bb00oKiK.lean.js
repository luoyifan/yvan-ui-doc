import{_ as i,c as r,J as n,w as p,m as e,a as s,a6 as o,G as a,o as c}from"./chunks/framework.d-Ywx6yJ.js";const f=JSON.parse('{"title":"测试","description":"","frontmatter":{"title":"测试","desc":"测试","name":"Test","type":"rule","navIgnore":false,"version":21,"tags":["wms/rule/Test"]},"headers":[],"relativePath":"wms/07_规则设计/rule.Test.md","filePath":"wms/07_规则设计/rule.Test.md"}'),d={name:"wms/07_规则设计/rule.Test.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[s("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),u=e("p",null,"测试",-1),h=e("p",null,"版本: 21",-1),T=o("",3),m=e("h3",{id:"出口参数",tabindex:"-1"},[s("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(y,b,S,P,E,I){const l=a("YvCallOut"),t=a("YvBeanSchema");return c(),r("div",null,[_,n(l,{type:"rule",title:"Test"},{default:p(()=>[u,h]),_:1}),T,n(t,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "输入参数",
  "properties" : {
    "item_id" : {
      "title" : "商品Id",
      "valueType" : "id",
      "widget" : "ItemSearch",
      "lookme" : "item_id"
    },
    "qty" : {
      "title" : "商品数量",
      "valueType" : "number"
    },
    "order_type" : {
      "title" : "订单类型",
      "valueType" : "dict",
      "dict" : "ORDER_TYPE"
    },
    "order_biz_type" : {
      "title" : "订单业务类型",
      "valueType" : "dict",
      "dict" : "ORDER_BIZ_TYPE"
    },
    "whole" : {
      "title" : "是否整件",
      "valueType" : "dict",
      "dict" : "SYS_YES_NO"
    },
    "put_intent" : {
      "title" : "入库意向",
      "valueType" : "dict",
      "dict" : "PUT_INTENT"
    },
    "piler_dist_phase" : {
      "valueType" : "dict",
      "dict" : "PILER_DIST_PHASE",
      "title" : "托盘立库分配阶段"
    },
    "shuttle_dist_phase" : {
      "valueType" : "dict",
      "title" : "密集库分配阶段",
      "dict" : "SHUTTLE_DIST_PHASE"
    },
    "item_physi_spect" : {
      "valueType" : "dict",
      "dict" : "ITEM_PHYSI_SPEC",
      "title" : "商品物理特性"
    }
  }
}
}
`}),m,n(t,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "whereSql" : {
      "title" : "库位过滤条件",
      "valueType" : "sqlWhere",
      "sqlDbTables" : [ ]
    },
    "orderSql" : {
      "title" : "库位排序条件",
      "valueType" : "sqlOrder"
    },
    "locId" : {
      "title" : "固定库位ID",
      "valueType" : "id"
    },
    "steps" : {
      "title" : "算法步骤",
      "valueType" : "array",
      "items" : {
        "valueType" : "object",
        "properties" : {
          "type" : {
            "valueType" : "dict",
            "title" : "类型",
            "dict" : "PUT_ALGORITHM_LOCAT"
          },
          "option" : {
            "valueType" : "array",
            "items" : {
              "valueType" : "dict",
              "dict" : "PUT_ALGORITHM_SPACE"
            }
          }
        }
      }
    }
  },
  "uiEditor" : "Putaway"
}
}
`})])}const q=i(d,[["render",v]]);export{f as __pageData,q as default};
