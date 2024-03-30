import{_ as e,c as r,J as a,w as _,m as t,a as o,a6 as n,G as i,o as c}from"./chunks/framework.BbZoItmV.js";const T=JSON.parse('{"title":"doc_inner_move","description":"","frontmatter":{"title":"doc_inner_move","desc":"库内库存转移单","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.doc_inner_move.md","filePath":"wms/09_数据库设计/db.doc_inner_move.md"}'),s={name:"wms/09_数据库设计/db.doc_inner_move.md"},h=t("h1",{id:"title",tabindex:"-1"},[o("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),l=t("p",null,"库内库存转移单",-1),m=n('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>inner_move_id</td><td>int8</td><td></td><td>库内库存转移单ID</td><td>√</td><td>√</td><td></td></tr><tr><td>inner_move_line_no</td><td>int4</td><td></td><td>库内库存转移单号</td><td>√</td><td>√</td><td></td></tr><tr><td>inner_move_status</td><td>varchar</td><td>50</td><td>订单状态</td><td></td><td>√</td><td></td></tr><tr><td>doc_id</td><td>int8</td><td></td><td>业务订单id</td><td>√</td><td>√</td><td></td></tr><tr><td>doc_line_no</td><td>int4</td><td></td><td>业务订单行号</td><td>√</td><td>√</td><td></td></tr><tr><td>doc_order_type</td><td>varchar</td><td>50</td><td>业务订单类型</td><td></td><td>√</td><td></td></tr><tr><td>doc_order_biz_type</td><td>varchar</td><td>50</td><td>业务订单业务类型</td><td></td><td>√</td><td></td></tr><tr><td>wh_id</td><td>int8</td><td></td><td>仓库ID</td><td></td><td>√</td><td></td></tr><tr><td>owner_id</td><td>int8</td><td></td><td>货主ID</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>255</td><td>创建者</td><td></td><td>√</td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function p(v,b,u,f,y,w){const d=i("YvCallOut");return c(),r("div",null,[h,a(d,{type:"dbtable",title:"doc_inner_move"},{default:_(()=>[l]),_:1}),m])}const C=e(s,[["render",p]]);export{T as __pageData,C as default};
