import{_ as o,c as r,J as a,w as i,m as e,a as s,a6 as c,G as n,o as p}from"./chunks/framework.BbZoItmV.js";const P=JSON.parse('{"title":"任务拆分","description":"","frontmatter":{"title":"任务拆分","desc":"任务拆分","name":"TaskSplit","type":"rule","navIgnore":false,"version":2,"tags":["wms/rule/TaskSplit"]},"headers":[],"relativePath":"wms/07_规则设计/rule.TaskSplit.md","filePath":"wms/07_规则设计/rule.TaskSplit.md"}'),d={name:"wms/07_规则设计/rule.TaskSplit.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[s("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),h=e("p",null,"任务拆分",-1),u=e("p",null,"版本: 2",-1),m=c(`<h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>任务拆分规则 taskAlgorithm为拆分算法,由人员手动写入的字符串多个字段以+号连接 只允许写入表字段与后台已实现的相关表字段 任务以波次为单位打包</span></span>
<span class="line"><span>任务拆分需考虑两种，1.合单 2.不合单 合单的任务拆分无法进行订单级别的拆分组合</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="入口参数" tabindex="-1">入口参数 <a class="header-anchor" href="#入口参数" aria-label="Permalink to &quot;入口参数&quot;">​</a></h3>`,3),b=e("h3",{id:"出口参数",tabindex:"-1"},[s("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(k,T,f,S,g,x){const l=n("YvCallOut"),t=n("YvBeanSchema");return p(),r("div",null,[_,a(l,{type:"rule",title:"TaskSplit"},{default:i(()=>[h,u]),_:1}),m,a(t,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
`}),b,a(t,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "taskAlgorithm" : {
      "valueType" : "string",
      "title" : "分组条件"
    }
  }
}
}
`})])}const w=o(d,[["render",v]]);export{P as __pageData,w as default};
