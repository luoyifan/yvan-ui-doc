import{_ as e,c as a,J as r,w as _,m as t,a as s,a6 as n,G as c,o}from"./chunks/framework.BbZoItmV.js";const q=JSON.parse('{"title":"doc_asn_items_upn","description":"","frontmatter":{"title":"doc_asn_items_upn","desc":"到货通知单明细唯一码表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.doc_asn_items_upn.md","filePath":"wms/09_数据库设计/db.doc_asn_items_upn.md"}'),i={name:"wms/09_数据库设计/db.doc_asn_items_upn.md"},h=t("h1",{id:"title",tabindex:"-1"},[s("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),l=t("p",null,"到货通知单明细唯一码表",-1),m=n('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>asn_id</td><td>int8</td><td></td><td>通知单ID</td><td>√</td><td>√</td><td></td></tr><tr><td>asn_line_no</td><td>int4</td><td></td><td>通知单行号</td><td>√</td><td>√</td><td></td></tr><tr><td>primary_code</td><td>varchar</td><td>255</td><td>一级容器条码</td><td></td><td>√</td><td></td></tr><tr><td>secondary_code</td><td>varchar</td><td>255</td><td>二级容器条码</td><td></td><td>√</td><td></td></tr><tr><td>upn_id</td><td>int8</td><td></td><td>唯一码ID</td><td>√</td><td>√</td><td></td></tr><tr><td>qty</td><td>numeric</td><td></td><td>数量</td><td></td><td>√</td><td></td></tr><tr><td>cancel_qty</td><td>numeric</td><td></td><td>取消数量</td><td></td><td>√</td><td></td></tr><tr><td>receipt_qty</td><td>numeric</td><td></td><td>收货数量</td><td></td><td>√</td><td></td></tr><tr><td>put_qty</td><td>numeric</td><td></td><td>上架数量</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td>√</td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function p(u,b,y,f,v,x){const d=c("YvCallOut");return o(),a("div",null,[h,r(d,{type:"dbtable",title:"doc_asn_items_upn"},{default:_(()=>[l]),_:1}),m])}const w=e(i,[["render",p]]);export{q as __pageData,w as default};
