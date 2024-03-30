import{_ as e,c as r,J as a,w as _,m as t,a as o,a6 as s,G as c,o as h}from"./chunks/framework.BbZoItmV.js";const y=JSON.parse('{"title":"bas_report","description":"","frontmatter":{"title":"bas_report","desc":"查询报表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.bas_report.md","filePath":"wms/09_数据库设计/db.bas_report.md"}'),i={name:"wms/09_数据库设计/db.bas_report.md"},l=t("h1",{id:"title",tabindex:"-1"},[o("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,"查询报表",-1),p=s('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>report_id</td><td>numeric</td><td></td><td>报表ID</td><td>√</td><td>√</td><td></td></tr><tr><td>resoucre_id</td><td>numeric</td><td></td><td>资源ID</td><td></td><td></td><td></td></tr><tr><td>report_name</td><td>varchar</td><td>255</td><td>报表名称</td><td></td><td>√</td><td></td></tr><tr><td>report_type</td><td>numeric</td><td></td><td>报表类型</td><td></td><td>√</td><td><a href="/dict.BAS_REPORT.html">dict.BAS_REPORT</a></td></tr><tr><td>report_title</td><td>varchar</td><td>255</td><td>报表标题</td><td></td><td>√</td><td></td></tr><tr><td>report_sql</td><td>text</td><td></td><td>报表sql语句</td><td></td><td>√</td><td></td></tr><tr><td>is_enable</td><td>varchar</td><td>50</td><td>是否启用</td><td></td><td>√</td><td><a href="/dict.IS_ENABLE.html">dict.IS_ENABLE</a></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建人</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>更新人</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function m(b,u,f,v,S,T){const d=c("YvCallOut");return h(),r("div",null,[l,a(d,{type:"dbtable",title:"bas_report"},{default:_(()=>[n]),_:1}),p])}const E=e(i,[["render",m]]);export{y as __pageData,E as default};
