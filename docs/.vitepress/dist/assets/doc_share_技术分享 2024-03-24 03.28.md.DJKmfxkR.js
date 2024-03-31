import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.DZm5WilM.js";const y=JSON.parse('{"title":"技术分享 2024-03-24 03.28","description":"","frontmatter":{"title":"技术分享 2024-03-24 03.28"},"headers":[],"relativePath":"doc/share/技术分享 2024-03-24 03.28.md","filePath":"doc/share/技术分享 2024-03-24 03.28.md"}'),l={name:"doc/share/技术分享 2024-03-24 03.28.md"},p=n(`<p>监控文件夹，同步文件，并进行防抖</p><p>#tech/linux/inotifywait</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WATCHED_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/var/www/html/dav/note_repo/doc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TARGET_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/www/yvan-ui-doc/docs/doc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YVAN_UI_DOC_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/www/yvan-ui-doc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LOCK_FD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LOCK_FILE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/tmp/yarn_docs_build.lock&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 封装调用 yarn build 的函数，使用文件描述符 200 加锁</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn_build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    flock</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$LOCK_FD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Build is currently running or locked.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Starting build ...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 运行 yarn build 命令</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$YVAN_UI_DOC_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Build finished.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ) {</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LOCK_FD}&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$LOCK_FILE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 防抖变量，防止连续的 inotifywait 事件触发多次构建</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DEBOUNCE_SEC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">last_event_time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># inotifywait 循环监控变化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inotifywait</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> close_write</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%T&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --timefmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%s&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$WATCHED_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> while</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> read</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> event_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  current_time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +%s)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 如果距离上次事件的时间小于防抖设定，则不进行操作</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ $((</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">current_time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> last_event_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-lt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $DEBOUNCE_SEC ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    continue</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  fi</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 更新 last_event_time 为当前时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  last_event_time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$current_time</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 同步文件到目标目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rsync</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -av</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --delete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WATCHED_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TARGET_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用后台进程调用构建函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  yarn_build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">done</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,3),h=[p];function k(t,e,r,d,E,F){return a(),i("div",null,h)}const g=s(l,[["render",k]]);export{y as __pageData,g as default};
