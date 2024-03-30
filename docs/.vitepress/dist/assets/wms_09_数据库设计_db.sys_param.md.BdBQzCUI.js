import{_ as a,c as e,J as r,w as s,m as t,a as _,a6 as c,G as o,o as h}from"./chunks/framework.BbZoItmV.js";const P=JSON.parse('{"title":"sys_param","description":"","frontmatter":{"title":"sys_param","desc":"系统参数表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.sys_param.md","filePath":"wms/09_数据库设计/db.sys_param.md"}'),m={name:"wms/09_数据库设计/db.sys_param.md"},l=t("h1",{id:"title",tabindex:"-1"},[_("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),p=t("p",null,"系统参数表",-1),i=c('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>param_code</td><td>varchar</td><td>255</td><td>系统参数编号</td><td>√</td><td>√</td><td></td></tr><tr><td>param_name</td><td>varchar</td><td>255</td><td>系统参数名称</td><td></td><td>√</td><td></td></tr><tr><td>param_type</td><td>varchar</td><td>50</td><td>参数类型</td><td></td><td>√</td><td><a href="/dict.SYSTEM_PARAM.html">dict.SYSTEM_PARAM</a></td></tr><tr><td>param_value</td><td>varchar</td><td>255</td><td>默认值</td><td></td><td></td><td></td></tr><tr><td>param_fact_model</td><td>varchar</td><td>255</td><td>参数计算模型</td><td></td><td></td><td></td></tr><tr><td>param_desc</td><td>varchar</td><td>255</td><td>系统参数描述</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建人</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>更新人</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function n(b,y,u,v,f,S){const d=o("YvCallOut");return h(),e("div",null,[l,r(d,{type:"dbtable",title:"sys_param"},{default:s(()=>[p]),_:1}),i])}const x=a(m,[["render",n]]);export{P as __pageData,x as default};
