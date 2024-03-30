import{_ as t,c as d,o as r,a6 as a}from"./chunks/framework.BbZoItmV.js";const c=JSON.parse('{"title":"嘉兴WCS接口设计","description":"","frontmatter":{"title":"嘉兴WCS接口设计","date":"2024-03-30 13:08","author":"yvan"},"headers":[],"relativePath":"wms/06_接口设计/嘉兴WCS接口设计.md","filePath":"wms/06_接口设计/嘉兴WCS接口设计.md"}'),h={name:"wms/06_接口设计/嘉兴WCS接口设计.md"},e=a('<h1 id="设备接口定义" tabindex="-1">设备接口定义 <a class="header-anchor" href="#设备接口定义" aria-label="Permalink to &quot;设备接口定义&quot;">​</a></h1><table><thead><tr><th>系统类型</th><th>分类</th><th>接口</th></tr></thead><tbody><tr><td>WCS</td><td>3.1-托盘立库</td><td><a href="./嘉兴WCS接口设计合并版.html#_3-1-1-托盘搬运任务添加">3.1.1-托盘搬运任务添加</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-1-2-托盘任务优先级调整">3.1.2-托盘任务优先级调整</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-1-3-托盘搬运任务取消">3.1.3-托盘搬运任务取消</a></td></tr><tr><td>PES</td><td>3.2-托盘密集库(白盒模式)</td><td><a href="./嘉兴WCS接口设计合并版.html#_3-2-1-托盘搬运任务添加">3.2.1-托盘搬运任务添加</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-2-2-托盘任务优先级调整">3.2.2-托盘任务优先级调整</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-2-3-托盘搬运任务取消">3.2.3-托盘搬运任务取消</a></td></tr><tr><td>MFC</td><td>3.3-穿梭车库</td><td><a href="./嘉兴WCS接口设计合并版.html#_3-3-1-多穿任务添加">3.3.1-多穿任务添加</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-3-2-多穿任务优先级调整">3.3.2-多穿任务优先级调整</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-3-3-多穿任务取消">3.3.3-多穿任务取消</a></td></tr><tr><td>RCS</td><td>3.5-顶升式AGV</td><td><a href="./嘉兴WCS接口设计合并版.html#_3-5-1-托盘搬运任务添加">3.5.1-托盘搬运任务添加</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-5-2-托盘任务优先级调整">3.5.2-托盘任务优先级调整</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-5-3-托盘搬运任务取消">3.5.3-托盘搬运任务取消</a></td></tr><tr><td>RCS</td><td>3.6-侧叉式AGV</td><td><a href="./嘉兴WCS接口设计合并版.html#_3-6-1-托盘搬运任务添加">3.6.1-托盘搬运任务添加</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-6-2-托盘叠盘任务添加">3.6.2-托盘叠盘任务添加</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-6-3-托盘任务优先级调整">3.6.3-托盘任务优先级调整</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-6-4-托盘搬运任务取消">3.6.4-托盘搬运任务取消</a></td></tr><tr><td>RCS</td><td>3.7-ctu(包含三层飞梭)</td><td><a href="./嘉兴WCS接口设计合并版.html#_3-7-1-料箱搬运任务添加">3.7.1-料箱搬运任务添加</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-7-2-料箱任务优先级调整">3.7.2-料箱任务优先级调整</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_3-7-3-料箱搬运任务取消">3.7.3-料箱搬运任务取消</a></td></tr></tbody></table><h1 id="wms接口定义" tabindex="-1">WMS接口定义 <a class="header-anchor" href="#wms接口定义" aria-label="Permalink to &quot;WMS接口定义&quot;">​</a></h1><table><thead><tr><th>系统类型</th><th>分类</th><th>接口</th></tr></thead><tbody><tr><td>WCS</td><td>托盘立库-设备回调</td><td><a href="./嘉兴WCS接口设计合并版.html#_4-1-1-立体库巷道(堆垛机)可用状态-设备回调">4.1.1-立体库巷道(堆垛机)可用状态-设备回调</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_4-1-2-托盘搬运任务请求-设备回调">4.1.2-托盘搬运任务请求-设备回调</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_4-1-3-拆盘机空托盘组补给请求-设备回调">4.1.3-拆盘机空托盘组补给请求-设备回调</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_4-1-4-托盘任务状态反馈-设备回调">4.1.4-托盘任务状态反馈-设备回调</a></td></tr><tr><td>PES</td><td>4.2-托盘密集库(白盒模式)-设备回调</td><td><a href="./嘉兴WCS接口设计合并版.html#_4-2-1-托盘搬运任务请求-设备回调">4.2.1-托盘搬运任务请求-设备回调</a>]</td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_4-2-2-任务状态反馈-设备回调">4.2.2-任务状态反馈-设备回调</a></td></tr><tr><td>MFC</td><td>4.3-穿梭车库-设备回调</td><td><a href="./嘉兴WCS接口设计合并版.html#_4-3-1-多穿任务请求-设备回调">4.3.1-多穿任务请求-设备回调</a></td></tr><tr><td></td><td></td><td><a href="./嘉兴WCS接口设计合并版.html#_4-3-2-任务状态反馈-设备回调">4.3.2-任务状态反馈-设备回调</a></td></tr><tr><td>RCS</td><td>4.5-顶升式AGV-设备回调</td><td><a href="./嘉兴WCS接口设计合并版.html#_4-5-1-任务状态反馈-设备回调">4.5.1-任务状态反馈-设备回调</a></td></tr><tr><td>RCS</td><td>4.6-侧叉式AGV-设备回调</td><td><a href="./嘉兴WCS接口设计合并版.html#_4-6-1-侧叉任务状态反馈-设备回调">4.6.1-侧叉任务状态反馈-设备回调</a></td></tr><tr><td>RCS</td><td>4.7-ctu(包含三层飞梭)-设备回调</td><td><a href="./嘉兴WCS接口设计合并版.html#_4-7-1-任务状态反馈-设备回调">4.7.1-任务状态反馈-设备回调</a></td></tr></tbody></table>',4),_=[e];function S(l,C,m,f,W,o){return r(),d("div",null,_)}const n=t(h,[["render",S]]);export{c as __pageData,n as default};
