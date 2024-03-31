import{_ as i,E as a,c as r,J as n,w as p,m as e,a as s,a6 as o,o as c}from"./chunks/framework.DZm5WilM.js";const f=JSON.parse('{"title":"测试","description":"","frontmatter":{"title":"测试","desc":"测试","name":"Test","type":"rule","navIgnore":false,"version":21,"tags":["wms/rule/Test"]},"headers":[],"relativePath":"wms/07_规则设计/rule.Test.md","filePath":"wms/07_规则设计/rule.Test.md"}'),d={name:"wms/07_规则设计/rule.Test.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[s("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),u=e("p",null,"测试",-1),h=e("p",null,"版本: 21",-1),T=o(`<h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.如若要指定库区入库：订单界面选择库区传入 规则不直接写死库区</span></span>
<span class="line"><span>2.规则when的条件以及明细中的whereSql 只允许在LocationDispatchParam实体、item、lot、loc、area、wh表中存在的字段做条件，其余在实现代码中均不会处理 有特殊需要必须调整程序 否则会报错</span></span>
<span class="line"><span>3.分巷道还是具体库位由系统传入参数决定，规则只做实现</span></span>
<span class="line"><span>4.上架规则适用于：入库、出库补货、移库等业务的库存上架中的库位分配 规则通过when中的类型进行区分</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="入口参数" tabindex="-1">入口参数 <a class="header-anchor" href="#入口参数" aria-label="Permalink to &quot;入口参数&quot;">​</a></h3>`,3),m=e("h3",{id:"出口参数",tabindex:"-1"},[s("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(y,b,S,P,E,I){const l=a("YvCallOut"),t=a("YvBeanSchema");return c(),r("div",null,[_,n(l,{type:"rule",title:"Test"},{default:p(()=>[u,h]),_:1}),T,n(t,{content:`{
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
