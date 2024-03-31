import{_ as l,E as n,c as r,J as a,w as c,m as e,a as o,a6 as i,o as d}from"./chunks/framework.DZm5WilM.js";const M=JSON.parse('{"title":"分配合并","description":"","frontmatter":{"title":"分配合并","desc":"分配合并","name":"AllocateMerge","type":"rule","navIgnore":false,"version":1,"tags":["wms/rule/AllocateMerge"]},"headers":[],"relativePath":"wms/07_规则设计/rule.AllocateMerge.md","filePath":"wms/07_规则设计/rule.AllocateMerge.md"}'),p={name:"wms/07_规则设计/rule.AllocateMerge.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[o("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),h=e("p",null,"分配合并",-1),u=e("p",null,"版本: 1",-1),m=i('<h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>在某条件下合并商品、批次等信息进行库存分配</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="入口参数" tabindex="-1">入口参数 <a class="header-anchor" href="#入口参数" aria-label="Permalink to &quot;入口参数&quot;">​</a></h3>',3),b=e("h3",{id:"出口参数",tabindex:"-1"},[o("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(g,f,x,A,T,k){const s=n("YvCallOut"),t=n("YvBeanSchema");return d(),r("div",null,[_,a(s,{type:"rule",title:"AllocateMerge"},{default:c(()=>[h,u]),_:1}),m,a(t,{content:`{
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
    "isMerge" : {
      "valueType" : "boolean",
      "title" : "是否合并分配"
    }
  }
}
}
`})])}const P=l(p,[["render",v]]);export{M as __pageData,P as default};
