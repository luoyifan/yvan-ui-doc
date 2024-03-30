import{_ as e,c as a,J as r,w as _,m as t,a as i,a6 as n,G as o,o as l}from"./chunks/framework.BbZoItmV.js";const x=JSON.parse('{"title":"rule_internal_move","description":"","frontmatter":{"title":"rule_internal_move","desc":"库内移动规则","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.rule_internal_move.md","filePath":"wms/09_数据库设计/db.rule_internal_move.md"}'),s={name:"wms/09_数据库设计/db.rule_internal_move.md"},h=t("h1",{id:"title",tabindex:"-1"},[i("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),c=t("p",null,"库内移动规则",-1),m=n('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>internal_move_id</td><td>int8</td><td></td><td>库内移动规则id</td><td>√</td><td>√</td><td></td></tr><tr><td>order_type</td><td>int4</td><td></td><td>业务类型</td><td></td><td>√</td><td></td></tr><tr><td>pipeline_marking</td><td>int4</td><td></td><td>输送线标示</td><td></td><td>√</td><td></td></tr><tr><td>is_elevator</td><td>int4</td><td></td><td>是否电梯</td><td></td><td>√</td><td><a href="/dict.YESNO.html">dict.YESNO</a></td></tr><tr><td>wh_area_from_id</td><td>int8</td><td></td><td>源库区</td><td></td><td>√</td><td></td></tr><tr><td>wh_area_to_id</td><td>int8</td><td></td><td>目的库区</td><td></td><td>√</td><td></td></tr><tr><td>remark</td><td>varchar</td><td>255</td><td>备注</td><td></td><td></td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function p(u,b,v,f,w,y){const d=o("YvCallOut");return l(),a("div",null,[h,r(d,{type:"dbtable",title:"rule_internal_move"},{default:_(()=>[c]),_:1}),m])}const S=e(s,[["render",p]]);export{x as __pageData,S as default};
