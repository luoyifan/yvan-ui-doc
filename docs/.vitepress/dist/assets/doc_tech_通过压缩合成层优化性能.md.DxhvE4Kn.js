import{_ as s,c as n,o as a,a6 as p}from"./chunks/framework.d-Ywx6yJ.js";const e="/assets/composite_reason.6j9vO-3o.png",l="/assets/composite_cpu_1.Bpy9npXu.png",r="/assets/composite_cpu_2.CIbIqngT.png",f=JSON.parse('{"title":"通过优化合成层优化性能","description":"","frontmatter":{"title":"通过优化合成层优化性能","date":"2021-09-04T13:15:01.000Z"},"headers":[],"relativePath":"doc/tech/通过压缩合成层优化性能.md","filePath":"doc/tech/通过压缩合成层优化性能.md"}'),i={name:"doc/tech/通过压缩合成层优化性能.md"},t=p('<h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>Web 性能优化特别是长列表滚动优化是一个老生常谈的问题，一般我们的思路是通过虚拟滚动、GPU 加速、fragment 复用等方式优化性能。</p><p>在本篇文章中，主要介绍一个压缩合成层的思路来进行性能优化，关于合成层的文章网上也有一些（附录部分有列出），不过大部分文章会对合成层创建的原因进行冗长的介绍，本文会跳过这些部分。原因是我们通过 devTools 可以比较方便的针对具体情况分析创建合成层的原因，另外一个原因是 blink 已经把创建合成层的原因写到了一个文件中（<a href="https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/platform/graphics/compositing_reasons.cc" target="_blank" rel="noreferrer">传送门</a>），我们直接参考就行，也没有必要去全都记住。</p><h2 id="合成层是什么" tabindex="-1">合成层是什么 <a class="header-anchor" href="#合成层是什么" aria-label="Permalink to &quot;合成层是什么&quot;">​</a></h2><p>对于 blink 渲染引擎的渲染流程，大致可以分为以下几个阶段：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Dom Tree -&gt; Layout Object -&gt; Paint Layer -&gt; Graphics Layers Tree -&gt; Paint</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我们对以上过程进行一个简述：</p><ul><li>Dom Tree 到 Render Tree 这个过程，基本是一一对应的，除了一些 display:none 的元素。</li><li>Layout Object 会按照一定条件创建 Paint Layer。</li><li>Paint Layer 在到 Graphics Layer 的过程中，会创建合成层（Composite Layer），会对应独立的 Graphics Layer。</li><li>Graphics Layer 会把结果渲染到纹理，最终通过 Chrome 的渲染层以及系统进行上屏。</li></ul><p>实际上我们可以发现，合成层的多少会比较影响我们的渲染性能，合成层比较多的情况下，当我们对页面进行交互（比如滚动），触发重新渲染，就会有卡顿的风险。</p><h2 id="分析合成层" tabindex="-1">分析合成层 <a class="header-anchor" href="#分析合成层" aria-label="Permalink to &quot;分析合成层&quot;">​</a></h2><p>Chrome 的 DevTools 工具可以让我们比较方便地进行合成层分析，例如我们通过一个 demo 来进行分析：</p><p><img src="'+e+'" alt="合成层示例" loading="lazy"></p><p>在上图中，我们会发现这个 demo 的合成层比较多，我们点进去可以查看到是因为 overflow 导致创建了新的合成层。</p><p>也就是说，对该 demo 而言我们可以尝试在这些 Demo 中去掉或者修改 overflow 的相关设置，从而进行合成层优化。</p><h2 id="优化合成层" tabindex="-1">优化合成层 <a class="header-anchor" href="#优化合成层" aria-label="Permalink to &quot;优化合成层&quot;">​</a></h2><p>我们尝试去掉 <code>overflow: scroll;</code>。（ Demo 源代码会在本文最后给出）</p><p>然后我们设置页面的列表元素为 500 个，通过模拟页面持续滚动，来检查去掉前后的性能。</p><p>去掉前，cpu 保持在 50%+，这实际上已经是一个比较高的数值了：</p><p><img src="'+l+'" alt="合成层cpu" loading="lazy"></p><p>去掉后，cpu 保持在 2% 左右：</p><p><img src="'+r+`" alt="去除合成层cpu" loading="lazy"></p><p>我们可以看到，优化后有巨大的性能提升，这种量级的性能提升，会远超虚拟滚动等方案（其实我个人是不建议采用虚拟滚动的，非常难维护，而且你很难做到浏览器原生滚动的丝滑水准）。</p><h2 id="附录" tabindex="-1">附录 <a class="header-anchor" href="#附录" aria-label="Permalink to &quot;附录&quot;">​</a></h2><p>示例代码：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;zh-CN&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,minimal-ui:ios&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style &gt;</span></span>
<span class="line"><span>    .container {</span></span>
<span class="line"><span>      width: 100vw;</span></span>
<span class="line"><span>      height: 100vh;</span></span>
<span class="line"><span>      display: flex;</span></span>
<span class="line"><span>      align-items: center;</span></span>
<span class="line"><span>      justify-content: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .list {</span></span>
<span class="line"><span>      width: 500px;</span></span>
<span class="line"><span>      height: 90vh;</span></span>
<span class="line"><span>      overflow: scroll;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .li {</span></span>
<span class="line"><span>      width: 100%;</span></span>
<span class="line"><span>      height: 50px;</span></span>
<span class="line"><span>      border-bottom: 2px;</span></span>
<span class="line"><span>      border-style: solid;</span></span>
<span class="line"><span>      border-color: grey;</span></span>
<span class="line"><span>      /* overflow: scroll; */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;list&quot;&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  const totalListCount = 500;</span></span>
<span class="line"><span>  const list = document.querySelector(&quot;.list&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for(let i = 0; i &lt; totalListCount; i += 1) {</span></span>
<span class="line"><span>    let fragment = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>    fragment.classList.add(&quot;li&quot;);</span></span>
<span class="line"><span>    fragment.innerHTML = \`&lt;p&gt;this is the \${i} element&lt;/p&gt;\`;</span></span>
<span class="line"><span>    list.appendChild(fragment);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  let curr = 0;</span></span>
<span class="line"><span>  const renderScroll = function () {</span></span>
<span class="line"><span>    curr += 5;</span></span>
<span class="line"><span>    if (curr &gt;= totalListCount) curr = 0;</span></span>
<span class="line"><span>    list.children[curr].scrollIntoView();</span></span>
<span class="line"><span>    window.requestAnimationFrame(renderScroll)</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  renderScroll();</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>参考：</p><ul><li><a href="https://zhuanlan.zhihu.com/p/88288584" target="_blank" rel="noreferrer">Compositing Layers</a></li><li><a href="https://segmentfault.com/a/1190000015917498" target="_blank" rel="noreferrer">前端性能优化之 Composite</a></li></ul>`,27),c=[t];function o(b,u,m,d,h,g){return a(),n("div",null,c)}const q=s(i,[["render",o]]);export{f as __pageData,q as default};
