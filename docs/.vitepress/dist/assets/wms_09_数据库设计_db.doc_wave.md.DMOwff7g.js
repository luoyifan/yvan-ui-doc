import{_ as a,c as e,J as r,w as o,m as t,a as _,a6 as c,G as s,o as h}from"./chunks/framework.BbZoItmV.js";const T=JSON.parse('{"title":"doc_wave","description":"","frontmatter":{"title":"doc_wave","desc":"波次汇总表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.doc_wave.md","filePath":"wms/09_数据库设计/db.doc_wave.md"}'),i={name:"wms/09_数据库设计/db.doc_wave.md"},l=t("h1",{id:"title",tabindex:"-1"},[_("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,"波次汇总表",-1),v=c('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>wave_id</td><td>int8</td><td></td><td>波次ID</td><td>√</td><td>√</td><td></td></tr><tr><td>wave_code</td><td>varchar</td><td>128</td><td>波次编号</td><td></td><td>√</td><td></td></tr><tr><td>dates</td><td>varchar</td><td>19</td><td>日期</td><td></td><td>√</td><td></td></tr><tr><td>out_status</td><td>varchar</td><td>50</td><td>状态</td><td></td><td>√</td><td></td></tr><tr><td>priority</td><td>int4</td><td></td><td>优先级</td><td></td><td>√</td><td></td></tr><tr><td>wave_auto</td><td>varchar</td><td>50</td><td>自动组建波次</td><td></td><td>√</td><td></td></tr><tr><td>alloc_auto</td><td>varchar</td><td>50</td><td>自动分配</td><td></td><td>√</td><td></td></tr><tr><td>task_auto</td><td>varchar</td><td>50</td><td>自动任务拆分</td><td></td><td>√</td><td></td></tr><tr><td>wh_id</td><td>int8</td><td></td><td>仓库ID</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建人</td><td></td><td>√</td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>更新人</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function m(p,b,u,w,f,y){const d=s("YvCallOut");return h(),e("div",null,[l,r(d,{type:"dbtable",title:"doc_wave"},{default:o(()=>[n]),_:1}),v])}const C=a(i,[["render",m]]);export{T as __pageData,C as default};
