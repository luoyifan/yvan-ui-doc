import{_ as s,c as n,o as a,a6 as p}from"./chunks/framework.DZm5WilM.js";const l="/assets/Pasted%20image%2020240327205411.B1m0Om0j.png",h=JSON.parse('{"title":"技术分享 2024-03-27 20.45","description":"","frontmatter":{"title":"技术分享 2024-03-27 20.45","date":"2024-03-27 20:45","author":"yvan"},"headers":[],"relativePath":"doc/share/技术分享 2024-03-27 20.45.md","filePath":"doc/share/技术分享 2024-03-27 20.45.md"}'),e={name:"doc/share/技术分享 2024-03-27 20.45.md"},i=p('<p>#tech/obsidian #tech/emoji</p><h1 id="模板设置" tabindex="-1">模板设置 <a class="header-anchor" href="#模板设置" aria-label="Permalink to &quot;模板设置&quot;">​</a></h1><p><img src="'+l+`" alt="" loading="lazy"></p><h1 id="emoji-表情" tabindex="-1">emoji 表情 <a class="header-anchor" href="#emoji-表情" aria-label="Permalink to &quot;emoji 表情&quot;">​</a></h1><p><a href="https://emoji6.com/emojiall/" target="_blank" rel="noreferrer">https://emoji6.com/emojiall/</a></p><h1 id="template模板-insert-callout" tabindex="-1">template模板 insert-callout <a class="header-anchor" href="#template模板-insert-callout" aria-label="Permalink to &quot;template模板 insert-callout&quot;">​</a></h1><div class="language-tp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;%*</span></span>
<span class="line"><span>const callouts = {</span></span>
<span class="line"><span>	tnow: &#39;⏲️ now - &#39; + tp.date.now(&#39;YYYY-MM-DD HH:mm:ss&#39;),</span></span>
<span class="line"><span>	title: &#39;title&#39;,</span></span>
<span class="line"><span>	info: &#39;🔵 ℹ Info&#39;,</span></span>
<span class="line"><span>	question: &#39;🟡 ❓ Question / Help / FAQ&#39;,</span></span>
<span class="line"><span>	quote: &#39;🔘 💬 Quote / Cite&#39;,</span></span>
<span class="line"><span>	example: &#39;🟣 📑 Example&#39;,</span></span>
<span class="line"><span>	success: &#39;🟢 ✔ Success / Check / Done&#39;,</span></span>
<span class="line"><span>	danger: &#39;🔴 ⚡ Danger / Error&#39;,</span></span>
<span class="line"><span>	bug: &#39;🔴 🐞 Bug&#39;,</span></span>
<span class="line"><span>	dbtable: &#39;表格 - dbtable&#39;,</span></span>
<span class="line"><span>	dict: &#39;字典 - dict&#39;,</span></span>
<span class="line"><span>	widget: &#39;子窗口 - widget&#39;,</span></span>
<span class="line"><span>	rule: &#39;规则 - rule&#39;,</span></span>
<span class="line"><span>	workflow: &#39;工作流 - workflow&#39;,</span></span>
<span class="line"><span>	module: &#39;模块 - module&#39;,</span></span>
<span class="line"><span>	connector: &#39;接口- connector&#39;,</span></span>
<span class="line"><span>	grid_col2: &#39;grid-col-2&#39;,</span></span>
<span class="line"><span>	grid_col3: &#39;grid-col-3&#39;,</span></span>
<span class="line"><span>	grid_col4: &#39;grid-col-4&#39;,</span></span>
<span class="line"><span>	grid_col5: &#39;grid-col-5&#39;,</span></span>
<span class="line"><span>	link: &#39;link&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const type = await tp.system.suggester(Object.values(callouts), Object.keys(callouts), true, &#39;Select callout type.&#39;);</span></span>
<span class="line"><span>const fold = &#39;+&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const title = &#39;Title:&#39;;</span></span>
<span class="line"><span>let content = &#39;content&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var calloutHead</span></span>
<span class="line"><span>if (type === &#39;tnow&#39;) {</span></span>
<span class="line"><span>	tR = tp.date.now(&#39;YYYY-MM-DD HH:mm:ss&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>} else if (type === &#39;title&#39;) {</span></span>
<span class="line"><span>	const cc = await tp.system.prompt(&#39;输入标题&#39;, &#39;&#39;, true)</span></span>
<span class="line"><span>	tR = \`---</span></span>
<span class="line"><span>title: \${cc}</span></span>
<span class="line"><span>date: \${date.now(&#39;YYYY-MM-DD HH:mm&#39;)}</span></span>
<span class="line"><span>author: yvan</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>} else if(type === &#39;grid_col2&#39;) {</span></span>
<span class="line"><span>  tR = \`| f1  | f2  |</span></span>
<span class="line"><span>| --- | --- |</span></span>
<span class="line"><span>|     |     |</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>} else if(type === &#39;grid_col3&#39;) {</span></span>
<span class="line"><span>  tR = \`| f1  | f2  | f3  |</span></span>
<span class="line"><span>| --- | --- | --- |</span></span>
<span class="line"><span>|     |     |     |</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>} else if(type === &#39;grid_col4&#39;) {</span></span>
<span class="line"><span>  tR = \`| f1  | f2  | f3  |  f4  |</span></span>
<span class="line"><span>| --- | --- | --- |  --- |</span></span>
<span class="line"><span>|     |     |     |      |</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>} else if(type === &#39;grid_col5&#39;) {</span></span>
<span class="line"><span>  tR = \`| f1  | f2  | f3  |  f4  |  f5  |</span></span>
<span class="line"><span>| --- | --- | --- |  --- |  --- |</span></span>
<span class="line"><span>|     |     |     |      |      |</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span>} else if(type === &#39;link&#39;) {</span></span>
<span class="line"><span>  const cc = await tp.system.prompt(&#39;输入链接&#39;, &#39;http://www.baidu.com&#39;, true)</span></span>
<span class="line"><span>  tR = &#39;[&#39;+cc+&#39;](&#39;+cc+&#39;)&#39;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  calloutHead = \`&gt; [!\${type}]\${fold} \${title}\\n\`;</span></span>
<span class="line"><span>  tR += calloutHead + content + &#39;\\n&#39;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>-%&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div>`,7),c=[i];function r(t,b,m,u,o,d){return a(),n("div",null,c)}const f=s(e,[["render",r]]);export{h as __pageData,f as default};
