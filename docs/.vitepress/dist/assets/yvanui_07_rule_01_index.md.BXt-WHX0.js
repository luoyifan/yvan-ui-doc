import{_ as a,c as i,o as n,a6 as l}from"./chunks/framework.BbZoItmV.js";const s="/assets/Pasted image 20240315152420.Cbh9ljqm.png",p="/assets/Pasted image 20240315152433.BBJWdmDk.png",t="/assets/Pasted image 20240315152453.CipAR6lq.png",e="/assets/Pasted image 20240315152510.BO4QhDto.png",h="/assets/Pasted image 20240315152524.DT9cPb4k.png",k="/assets/Pasted image 20240315152530.B9f7B2Ly.png",r="/assets/Pasted image 20240315152543.PpsNnHnL.png",d="/assets/Pasted image 20240315152554.Dayqh7oE.png",g="/assets/Pasted image 20240315152604.Jaw4p8Y8.png",c="/assets/Pasted image 20240315152608.CKnzK6jN.png",E="/assets/Pasted image 20240315152613.B3nyT7-M.png",T=JSON.parse('{"title":"规则引擎","description":"","frontmatter":{"title":"规则引擎"},"headers":[],"relativePath":"yvanui/07_rule/01_index.md","filePath":"yvanui/07_rule/01_index.md"}'),y={name:"yvanui/07_rule/01_index.md"},o=l('<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>规则引擎，专门用来处理大量逻辑判断，以脑图图形化的方法展现，方便运维和客户使用的一种框架特性</p><p>要开发规则引擎，是以下步骤</p><h2 id="_1-新建规则" tabindex="-1">1.新建规则 <a class="header-anchor" href="#_1-新建规则" aria-label="Permalink to &quot;1.新建规则&quot;">​</a></h2><p><img src="'+s+'" alt="" loading="lazy"></p><p><img src="'+s+'" alt="" loading="lazy"></p><p><img src="'+p+'" alt="" loading="lazy"></p><h2 id="_2-实现算法类" tabindex="-1">2.实现算法类 <a class="header-anchor" href="#_2-实现算法类" aria-label="Permalink to &quot;2.实现算法类&quot;">​</a></h2><p><img src="'+t+`" alt="" loading="lazy"></p><p>算法类的模板方法是</p><div class="language-groovy vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.galaxis.wms.tool.locDispatch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.galaxis.wms.workbench.RuleFile</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.yvan.core.BizContext</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.yvan.core.json.JsonWrapper</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.yvan.rule.Strategy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestDispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> String</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RULE_CODE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;InboundTask&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> volatile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Strategy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> STRATEGY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 这个方法必须同名保留，规则发生变化时会主动调用这个方法，设置新版本的策略</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Strategy</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> strategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        STRATEGY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> strategy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 规则测试</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> Object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Map&lt;String, Object&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> instanceId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        RuleFile.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">checkVersion(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RULE_CODE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">STRATEGY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 检测新版本，并按需加载</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        JsonWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jw </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> JsonWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        InboundTaskInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">asObject(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">InboundTaskInput.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        BizContext.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">setValues(input)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> STRATEGY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">testRun()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 上架分配分配</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> Object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">InboundTaskInput</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">InboundTaskResult</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        RuleFile.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">checkVersion(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RULE_CODE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">STRATEGY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> it </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> STRATEGY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">run()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="_3-选择事实维度" tabindex="-1">3.选择事实维度 <a class="header-anchor" href="#_3-选择事实维度" aria-label="Permalink to &quot;3.选择事实维度&quot;">​</a></h2><p><img src="`+e+'" alt="" loading="lazy"></p><h2 id="_4-填写输入和输出的数据结构" tabindex="-1">4.填写输入和输出的数据结构 <a class="header-anchor" href="#_4-填写输入和输出的数据结构" aria-label="Permalink to &quot;4.填写输入和输出的数据结构&quot;">​</a></h2><p><img src="'+h+'" alt="" loading="lazy"></p><p><img src="'+k+'" alt="" loading="lazy"></p><p>有了输入的数据结构，就方便测试</p><p><img src="'+r+'" alt="" loading="lazy"></p><p>有了输出的数据结构，方便填写决策</p><p><img src="'+d+'" alt="" loading="lazy"></p><h2 id="_5-编写方便客户看懂的-vue-编辑器" tabindex="-1">5.编写方便客户看懂的 VUE 编辑器 <a class="header-anchor" href="#_5-编写方便客户看懂的-vue-编辑器" aria-label="Permalink to &quot;5.编写方便客户看懂的 VUE 编辑器&quot;">​</a></h2><p><img src="'+g+'" alt="" loading="lazy"></p><p><img src="'+c+'" alt="" loading="lazy"></p><p><img src="'+E+'" alt="" loading="lazy"></p>',24),b=[o];function m(u,F,A,D,_,C){return n(),i("div",null,b)}const v=a(y,[["render",m]]);export{T as __pageData,v as default};
