import{_ as e,c as a,J as r,w as _,m as t,a as i,a6 as l,G as s,o}from"./chunks/framework.BbZoItmV.js";const N=JSON.parse('{"title":"rule_view_fields","description":"","frontmatter":{"title":"rule_view_fields","desc":null,"category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.rule_view_fields.md","filePath":"wms/09_数据库设计/db.rule_view_fields.md"}'),c={name:"wms/09_数据库设计/db.rule_view_fields.md"},h=t("h1",{id:"title",tabindex:"-1"},[i("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,null,-1),u=l('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>profile_id</td><td>int8</td><td></td><td>板块</td><td>√</td><td>√</td><td></td></tr><tr><td>view_id</td><td>int8</td><td></td><td>界面元素Key</td><td>√</td><td>√</td><td></td></tr><tr><td>block</td><td>varchar</td><td>64</td><td>板块</td><td>√</td><td>√</td><td></td></tr><tr><td>ui_key</td><td>varchar</td><td>64</td><td>界面元素Key</td><td>√</td><td>√</td><td></td></tr><tr><td>is_display</td><td>int4</td><td></td><td>是否显示</td><td></td><td></td><td><a href="/dict.IS_ENABLE.html">dict.IS_ENABLE</a></td></tr><tr><td>ui_label</td><td>varchar</td><td>64</td><td>界面label</td><td></td><td></td><td></td></tr><tr><td>is_not_null</td><td>int4</td><td></td><td>是否必填</td><td></td><td></td><td><a href="/dict.IS_ENABLE.html">dict.IS_ENABLE</a></td></tr><tr><td>ui_validate</td><td>varchar</td><td>2000</td><td>校验</td><td></td><td></td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建人</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>更新人</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function m(p,b,f,v,w,y){const d=s("YvCallOut");return o(),a("div",null,[h,r(d,{type:"dbtable",title:"rule_view_fields"},{default:_(()=>[n]),_:1}),u])}const S=e(c,[["render",m]]);export{N as __pageData,S as default};
