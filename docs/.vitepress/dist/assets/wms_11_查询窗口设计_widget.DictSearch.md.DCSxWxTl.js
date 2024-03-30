import{_ as a,c as s,J as i,w as d,m as t,a as c,a6 as n,G as r,o as l}from"./chunks/framework.BbZoItmV.js";const w=JSON.parse('{"title":"字典项检索","description":"","frontmatter":{"title":"字典项检索","desc":"字典项检索","name":"DictSearch","columnCount":3,"sqlId":"DictSearch","type":"widget","navIgnore":false,"tags":["wms/widget/DictSearch"]},"headers":[],"relativePath":"wms/11_查询窗口设计/widget.DictSearch.md","filePath":"wms/11_查询窗口设计/widget.DictSearch.md"}'),o={name:"wms/11_查询窗口设计/widget.DictSearch.md"},h=t("h2",{id:"库区检索",tabindex:"-1"},[c("库区检索 "),t("a",{class:"header-anchor",href:"#库区检索","aria-label":'Permalink to "库区检索"'},"​")],-1),p=t("p",null,"字典项检索",-1),_=t("p",null,"sqlId: DictSearch",-1),m=n(`<h3 id="sql" tabindex="-1">SQL <a class="header-anchor" href="#sql" aria-label="Permalink to &quot;SQL&quot;">​</a></h3><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dict_code, dict_desc, dict_type, is_dynamic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys_dictionary</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        --# and #</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h3><p>总共 <code>3</code> 个</p><table><thead><tr><th>字段</th><th>描述</th></tr></thead><tbody><tr><td>dict_code</td><td>字典编号</td></tr><tr><td>dict_desc</td><td>字典描述</td></tr><tr><td>dict_type</td><td>字典类别</td></tr></tbody></table>`,5);function u(k,g,b,y,S,D){const e=r("YvCallOut");return l(),s("div",null,[h,i(e,{type:"widget",title:"DictSearch"},{default:d(()=>[p,_]),_:1}),m])}const v=a(o,[["render",u]]);export{w as __pageData,v as default};
