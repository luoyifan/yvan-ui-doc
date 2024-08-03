import{_ as l,c,J as n,w as r,m as e,a as s,a6 as o,G as t,o as p}from"./chunks/framework.d-Ywx6yJ.js";const g=JSON.parse('{"title":"库位分配","description":"","frontmatter":{"title":"库位分配","desc":"库位分配","name":"LocDispatch","type":"rule","navIgnore":false,"version":4,"tags":["wms/rule/LocDispatch"]},"headers":[],"relativePath":"wms/07_规则设计/rule.LocDispatch.md","filePath":"wms/07_规则设计/rule.LocDispatch.md"}'),d={name:"wms/07_规则设计/rule.LocDispatch.md"},h=e("h2",{id:"库位分配",tabindex:"-1"},[s("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),_=e("p",null,"库位分配",-1),u=e("p",null,"版本: 4",-1),m=o(`<h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.如若要指定库区入库：订单界面选择库区传入 规则不直接写死库区</span></span>
<span class="line"><span>    2.规则when的条件以及明细中的whereSql 只允许在LocationDispatchParam实体、item、lot、loc、area、wh表中存在的字段做条件，其余在实现代码中均不会处理 有特殊需要必须调整程序 否则会报错</span></span>
<span class="line"><span>    3.分巷道还是具体库位由系统传入参数决定，规则只做实现</span></span>
<span class="line"><span>    4.上架规则适用于：入库、出库补货、移库等业务的库存上架中的库位分配 规则通过when中的类型进行区分</span></span>
<span class="line"><span>    5.库位深度为顺序执行,靠外层为1依次递加。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="入口参数" tabindex="-1">入口参数 <a class="header-anchor" href="#入口参数" aria-label="Permalink to &quot;入口参数&quot;">​</a></h3>`,3),T=e("h3",{id:"出口参数",tabindex:"-1"},[s("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(b,y,P,S,D,L){const i=t("YvCallOut"),a=t("YvBeanSchema");return p(),c("div",null,[h,n(i,{type:"rule",title:"LocDispatch"},{default:r(()=>[_,u]),_:1}),m,n(a,{content:`{
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
