import{_ as a,c as r,J as e,w as o,m as t,a as _,a6 as s,G as l,o as h}from"./chunks/framework.BbZoItmV.js";const P=JSON.parse('{"title":"sys_operator_log","description":"","frontmatter":{"title":"sys_operator_log","desc":"操作日志","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.sys_operator_log.md","filePath":"wms/09_数据库设计/db.sys_operator_log.md"}'),c={name:"wms/09_数据库设计/db.sys_operator_log.md"},i=t("h1",{id:"title",tabindex:"-1"},[_("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,"操作日志",-1),p=s('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>log_id</td><td>int8</td><td></td><td>日志ID</td><td>√</td><td>√</td><td></td></tr><tr><td>log_at</td><td>timestamptz</td><td></td><td>日志发生时间</td><td></td><td>√</td><td></td></tr><tr><td>log_by</td><td>varchar</td><td>64</td><td>日志发生人</td><td></td><td>√</td><td></td></tr><tr><td>log_term_ip</td><td>varchar</td><td>50</td><td>终端IP</td><td></td><td>√</td><td></td></tr><tr><td>log_term_name</td><td>varchar</td><td>50</td><td>终端名称</td><td></td><td>√</td><td></td></tr><tr><td>log_operator</td><td>varchar</td><td>50</td><td>操作类型</td><td></td><td>√</td><td></td></tr><tr><td>log_data_type</td><td>varchar</td><td>50</td><td>数据类型</td><td></td><td>√</td><td></td></tr><tr><td>log_data_id</td><td>varchar</td><td>256</td><td>数据主键ID</td><td></td><td>√</td><td></td></tr><tr><td>log_data_before</td><td>varchar</td><td>40960</td><td>数据修改前</td><td></td><td>√</td><td></td></tr><tr><td>log_data_after</td><td>varchar</td><td>40960</td><td>数据修改后</td><td></td><td>√</td><td></td></tr><tr><td>remark</td><td>varchar</td><td>255</td><td>备注</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function m(g,b,v,y,f,u){const d=l("YvCallOut");return h(),r("div",null,[i,e(d,{type:"dbtable",title:"sys_operator_log"},{default:o(()=>[n]),_:1}),p])}const T=a(c,[["render",m]]);export{P as __pageData,T as default};
