import{_ as e,c as a,J as r,w as _,m as t,a as c,a6 as s,G as i,o}from"./chunks/framework.BbZoItmV.js";const w=JSON.parse('{"title":"rule_abc_items","description":"","frontmatter":{"title":"rule_abc_items","desc":"abc规则明细","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.rule_abc_items.md","filePath":"wms/09_数据库设计/db.rule_abc_items.md"}'),l={name:"wms/09_数据库设计/db.rule_abc_items.md"},n=t("h1",{id:"title",tabindex:"-1"},[c("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),h=t("p",null,"abc规则明细",-1),b=s('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>abc_rule_id</td><td>int8</td><td></td><td>abc规则ID</td><td>√</td><td>√</td><td></td></tr><tr><td>abc_item_id</td><td>int8</td><td></td><td>abc规则明细ID</td><td>√</td><td>√</td><td></td></tr><tr><td>item_abc</td><td>int4</td><td></td><td>商品abc属性</td><td></td><td></td><td></td></tr><tr><td>reorder</td><td>int4</td><td></td><td>固定排名</td><td></td><td></td><td></td></tr><tr><td>percentage</td><td>numeric</td><td></td><td>百分比</td><td></td><td></td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建人</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>更新人</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function m(u,p,f,v,x,y){const d=i("YvCallOut");return o(),a("div",null,[n,r(d,{type:"dbtable",title:"rule_abc_items"},{default:_(()=>[h]),_:1}),b])}const C=e(l,[["render",m]]);export{w as __pageData,C as default};
