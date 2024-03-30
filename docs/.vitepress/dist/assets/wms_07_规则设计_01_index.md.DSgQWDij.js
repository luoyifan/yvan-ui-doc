import{_ as s,c as e,J as n,w as l,m as t,a as i,a6 as r,G as d,o as p}from"./chunks/framework.BbZoItmV.js";const y=JSON.parse('{"title":"规则设计","description":"","frontmatter":{"title":"规则设计","date":"2024-03-29 22:02","author":"yvan"},"headers":[],"relativePath":"wms/07_规则设计/01_index.md","filePath":"wms/07_规则设计/01_index.md"}'),h={name:"wms/07_规则设计/01_index.md"},o=t("h1",{id:"title",tabindex:"-1"},[i("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),c=t("p",null,null,-1),u=r(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rule&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		} </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	] </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-dataview vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dataview</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>table desc as &quot;描述&quot;, name as &quot;名称&quot;, version as &quot;版本&quot;</span></span>
<span class="line"><span>from &quot;wms/07_规则设计&quot;</span></span>
<span class="line"><span>where contains(file.name, &quot;rule.&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h1><table><thead><tr><th>名称</th><th>描述</th><th>版本</th></tr></thead><tbody><tr><td><a href="./rule.TaskSplit.html">TaskSplit</a></td><td>任务拆分</td><td>2</td></tr><tr><td><a href="./rule.AllocateMerge.html">AllocateMerge</a></td><td>分配合并</td><td>1</td></tr><tr><td><a href="./rule.LocDispatch.html">LocDispatch</a></td><td>库位分配</td><td>4</td></tr><tr><td><a href="./rule.InvAllocate.html">InvAllocate</a></td><td>库存分配</td><td>1</td></tr><tr><td><a href="./rule.InvReservation.html">InvReservation</a></td><td>库存预占</td><td>2</td></tr><tr><td><a href="./rule.LotAllocate.html">LotAllocate</a></td><td>批次分配</td><td>1</td></tr><tr><td><a href="./rule.WaveTemplate.html">WaveTemplate</a></td><td>波次模板</td><td>4</td></tr><tr><td><a href="./rule.Test.html">Test</a></td><td>测试</td><td>21</td></tr><tr><td><a href="./rule.Rep.html">Rep</a></td><td>补货</td><td>1</td></tr><tr><td><a href="./rule.OrderWaveTemplate.html">OrderWaveTemplate</a></td><td>订单波次模板</td><td>4</td></tr></tbody></table>`,4);function m(k,b,_,v,E,g){const a=d("YvCallOut");return p(),e("div",null,[o,n(a,{type:"rule",title:"规则设计"},{default:l(()=>[c]),_:1}),u])}const q=s(h,[["render",m]]);export{y as __pageData,q as default};
