import{_ as a,c as e,J as r,w as c,m as t,a as _,a6 as l,G as s,o}from"./chunks/framework.BbZoItmV.js";const y=JSON.parse('{"title":"rule_abc","description":"","frontmatter":{"title":"rule_abc","desc":"ABC计算规则","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.rule_abc.md","filePath":"wms/09_数据库设计/db.rule_abc.md"}'),h={name:"wms/09_数据库设计/db.rule_abc.md"},i=t("h1",{id:"title",tabindex:"-1"},[_("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,"ABC计算规则",-1),b=l('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>abc_rule_id</td><td>int8</td><td></td><td>abc规则ID</td><td>√</td><td>√</td><td></td></tr><tr><td>abc_rule_code</td><td>varchar</td><td>128</td><td>abc规则编号</td><td></td><td>√</td><td></td></tr><tr><td>abc_rule_name</td><td>varchar</td><td>255</td><td>abc规则名称</td><td></td><td>√</td><td></td></tr><tr><td>abc_rule_desc</td><td>varchar</td><td>255</td><td>abc规则描述</td><td></td><td></td><td></td></tr><tr><td>is_enable</td><td>int4</td><td></td><td>是否启用</td><td></td><td>√</td><td><a href="/dict.YESNO.html">dict.YESNO</a></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建人</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>更新人</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function m(u,p,f,v,C,N){const d=s("YvCallOut");return o(),e("div",null,[i,r(d,{type:"dbtable",title:"rule_abc"},{default:c(()=>[n]),_:1}),b])}const S=a(h,[["render",m]]);export{y as __pageData,S as default};
