import{_ as r,c as e,J as a,w as _,m as t,a as c,a6 as i,G as o,o as l}from"./chunks/framework.BbZoItmV.js";const I=JSON.parse('{"title":"doc_pre_alloc_items","description":"","frontmatter":{"title":"doc_pre_alloc_items","desc":"预分配明细表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.doc_pre_alloc_items.md","filePath":"wms/09_数据库设计/db.doc_pre_alloc_items.md"}'),s={name:"wms/09_数据库设计/db.doc_pre_alloc_items.md"},n=t("h1",{id:"title",tabindex:"-1"},[c("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),h=t("p",null,"预分配明细表",-1),p=i('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>pre_alloc_id</td><td>int8</td><td></td><td>分配ID</td><td>√</td><td>√</td><td></td></tr><tr><td>out_status</td><td>varchar</td><td>50</td><td>预分配状态</td><td></td><td>√</td><td></td></tr><tr><td>order_type</td><td>varchar</td><td>50</td><td>订单类型</td><td></td><td></td><td></td></tr><tr><td>order_biz_type</td><td>varchar</td><td>50</td><td>单据业务类型</td><td></td><td></td><td></td></tr><tr><td>inv_level</td><td>varchar</td><td>50</td><td>库存级别</td><td></td><td>√</td><td></td></tr><tr><td>inv_occupatiom_type</td><td>varchar</td><td>50</td><td>库存预占类型</td><td></td><td>√</td><td></td></tr><tr><td>item_id</td><td>int8</td><td></td><td>产品ID</td><td></td><td>√</td><td></td></tr><tr><td>lot_id</td><td>int8</td><td></td><td>批属性id</td><td></td><td>√</td><td></td></tr><tr><td>pack_id</td><td>int8</td><td></td><td>包装ID</td><td></td><td>√</td><td></td></tr><tr><td>pack_level</td><td>varchar</td><td>50</td><td>包装级别</td><td></td><td>√</td><td></td></tr><tr><td>target_pack_level</td><td>varchar</td><td>50</td><td>目标包装级别</td><td></td><td>√</td><td></td></tr><tr><td>loc_id</td><td>int8</td><td></td><td>库位id</td><td></td><td>√</td><td></td></tr><tr><td>primary_code</td><td>varchar</td><td>128</td><td>一级容器</td><td></td><td>√</td><td></td></tr><tr><td>secondary_code</td><td>varchar</td><td>128</td><td>箱条码</td><td></td><td>√</td><td></td></tr><tr><td>upn_id</td><td>int8</td><td></td><td>唯一码ID</td><td></td><td>√</td><td></td></tr><tr><td>quality_status</td><td>varchar</td><td>50</td><td>质量状态</td><td></td><td>√</td><td></td></tr><tr><td>qty</td><td>numeric</td><td></td><td>分配数量</td><td></td><td>√</td><td></td></tr><tr><td>cancel_qty</td><td>numeric</td><td></td><td>取消数量</td><td></td><td>√</td><td></td></tr><tr><td>is_merge</td><td>varchar</td><td>50</td><td>是否合并</td><td></td><td>√</td><td></td></tr><tr><td>rep_alloc_id</td><td>int8</td><td></td><td>关联补货ID</td><td></td><td></td><td></td></tr><tr><td>is_active</td><td>varchar</td><td>50</td><td>是否激活</td><td></td><td>√</td><td></td></tr><tr><td>wave_id</td><td>int8</td><td></td><td>波次ID</td><td></td><td>√</td><td></td></tr><tr><td>wh_id</td><td>int8</td><td></td><td>仓库id</td><td></td><td>√</td><td></td></tr><tr><td>owner_id</td><td>int8</td><td></td><td>货主id</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function m(v,u,b,y,f,w){const d=o("YvCallOut");return l(),e("div",null,[n,a(d,{type:"dbtable",title:"doc_pre_alloc_items"},{default:_(()=>[h]),_:1}),p])}const k=r(s,[["render",m]]);export{I as __pageData,k as default};
