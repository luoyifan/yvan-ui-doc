import{_ as e,c as a,J as r,w as s,m as t,a as _,a6 as c,G as o,o as i}from"./chunks/framework.BbZoItmV.js";const T=JSON.parse('{"title":"sys_biz_code","description":"","frontmatter":{"title":"sys_biz_code","desc":"业务编码表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.sys_biz_code.md","filePath":"wms/09_数据库设计/db.sys_biz_code.md"}'),h={name:"wms/09_数据库设计/db.sys_biz_code.md"},n=t("h1",{id:"title",tabindex:"-1"},[_("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),l=t("p",null,"业务编码表",-1),b=c('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>id</td><td>int8</td><td></td><td>主键id</td><td>√</td><td>√</td><td></td></tr><tr><td>code_name</td><td>varchar</td><td>127</td><td>编码名称</td><td></td><td>√</td><td></td></tr><tr><td>pattern</td><td>varchar</td><td>127</td><td>编码规则表达式</td><td></td><td>√</td><td></td></tr><tr><td>sequence</td><td>int8</td><td></td><td>序列值</td><td></td><td>√</td><td></td></tr><tr><td>reset_pattern</td><td>varchar</td><td>127</td><td>重置sequence值的表达式，使用Java日期格式化字符串</td><td></td><td></td><td></td></tr><tr><td>reset_flag</td><td>varchar</td><td>127</td><td>重置sequence值标识，此字段值变化后则需要重置</td><td></td><td>√</td><td></td></tr><tr><td>description</td><td>varchar</td><td>511</td><td>说明</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td></td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td></td><td></td><td>√</td><td></td></tr></tbody></table>',2);function m(p,u,y,v,f,z){const d=o("YvCallOut");return i(),a("div",null,[n,r(d,{type:"dbtable",title:"sys_biz_code"},{default:s(()=>[l]),_:1}),b])}const w=e(h,[["render",m]]);export{T as __pageData,w as default};
