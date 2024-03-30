import{_ as e,c as r,J as a,w as _,m as t,a as o,a6 as i,G as s,o as n}from"./chunks/framework.BbZoItmV.js";const S=JSON.parse('{"title":"rule_out_inv_reservation","description":"","frontmatter":{"title":"rule_out_inv_reservation","desc":"库存预占规则","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.rule_out_inv_reservation.md","filePath":"wms/09_数据库设计/db.rule_out_inv_reservation.md"}'),l={name:"wms/09_数据库设计/db.rule_out_inv_reservation.md"},c=t("h1",{id:"title",tabindex:"-1"},[o("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),h=t("p",null,"库存预占规则",-1),u=i('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>rule_reserv_id</td><td>int8</td><td></td><td>预占规则ID</td><td>√</td><td>√</td><td></td></tr><tr><td>rule_reserv_code</td><td>varchar</td><td>255</td><td>预占规则编码</td><td></td><td>√</td><td></td></tr><tr><td>rule_out_id</td><td>int8</td><td></td><td>出库分配规则</td><td></td><td>√</td><td></td></tr><tr><td>rule_name</td><td>varchar</td><td>255</td><td>规则名称</td><td></td><td>√</td><td></td></tr><tr><td>rule_order</td><td>int4</td><td></td><td>规则序号</td><td></td><td>√</td><td></td></tr><tr><td>is_enable</td><td>varchar</td><td>50</td><td>是否启用</td><td></td><td>√</td><td><a href="/dict.IS_ENABLE.html">dict.IS_ENABLE</a></td></tr><tr><td>remark</td><td>varchar</td><td>255</td><td>备注</td><td></td><td>√</td><td></td></tr><tr><td>rule_condition</td><td>varchar</td><td>40960</td><td>适用范围</td><td></td><td>√</td><td></td></tr><tr><td>rule_param</td><td>varchar</td><td>40960</td><td>预占维度</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>255</td><td>创建人</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>255</td><td>更新人</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function v(m,p,b,f,N,x){const d=s("YvCallOut");return n(),r("div",null,[c,a(d,{type:"dbtable",title:"rule_out_inv_reservation"},{default:_(()=>[h]),_:1}),u])}const T=e(l,[["render",v]]);export{S as __pageData,T as default};
