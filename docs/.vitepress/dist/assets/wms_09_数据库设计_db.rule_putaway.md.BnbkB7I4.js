import{_ as a,c as e,J as r,w as _,m as t,a as l,a6 as s,G as o,o as c}from"./chunks/framework.BbZoItmV.js";const N=JSON.parse('{"title":"rule_putaway","description":"","frontmatter":{"title":"rule_putaway","desc":"上架库位分配规则","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.rule_putaway.md","filePath":"wms/09_数据库设计/db.rule_putaway.md"}'),h={name:"wms/09_数据库设计/db.rule_putaway.md"},i=t("h1",{id:"title",tabindex:"-1"},[l("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,"上架库位分配规则",-1),u=s('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>putaway_rule_id</td><td>int8</td><td></td><td>上架规则ID</td><td>√</td><td>√</td><td></td></tr><tr><td>putaway_rule_code</td><td>varchar</td><td>128</td><td>上架规则编号</td><td></td><td></td><td></td></tr><tr><td>putaway_rule_name</td><td>varchar</td><td>255</td><td>上架规则名称</td><td></td><td></td><td></td></tr><tr><td>is_enable</td><td>varchar</td><td>50</td><td>是否启用</td><td></td><td></td><td><a href="/dict.IS_ENABLE.html">dict.IS_ENABLE</a></td></tr><tr><td>remark</td><td>varchar</td><td>255</td><td>备注</td><td></td><td></td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr><tr><td>rule_sort</td><td>int4</td><td></td><td>排序</td><td></td><td></td><td></td></tr><tr><td>rule_expr</td><td>varchar</td><td>40960</td><td>匹配表达式</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function p(m,b,y,w,f,v){const d=o("YvCallOut");return c(),e("div",null,[i,r(d,{type:"dbtable",title:"rule_putaway"},{default:_(()=>[n]),_:1}),u])}const S=a(h,[["render",p]]);export{N as __pageData,S as default};
