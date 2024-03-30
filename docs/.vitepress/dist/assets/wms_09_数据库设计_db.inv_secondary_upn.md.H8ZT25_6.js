import{_ as r,c as e,J as a,w as _,m as t,a as n,a6 as i,G as c,o}from"./chunks/framework.BbZoItmV.js";const S=JSON.parse('{"title":"inv_secondary_upn","description":"","frontmatter":{"title":"inv_secondary_upn","desc":"商品批次库位容器唯一码库存","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.inv_secondary_upn.md","filePath":"wms/09_数据库设计/db.inv_secondary_upn.md"}'),s={name:"wms/09_数据库设计/db.inv_secondary_upn.md"},l=t("h1",{id:"title",tabindex:"-1"},[n("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),h=t("p",null,"商品批次库位容器唯一码库存",-1),m=i('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>wh_id</td><td>int8</td><td></td><td>仓库id</td><td>√</td><td>√</td><td></td></tr><tr><td>owner_id</td><td>int8</td><td></td><td>货主id</td><td>√</td><td>√</td><td></td></tr><tr><td>item_id</td><td>int8</td><td></td><td>skuid</td><td>√</td><td>√</td><td></td></tr><tr><td>lot_id</td><td>int8</td><td></td><td>批属性id</td><td>√</td><td>√</td><td></td></tr><tr><td>loc_id</td><td>int8</td><td></td><td>库位id</td><td>√</td><td>√</td><td></td></tr><tr><td>primary_code</td><td>varchar</td><td>128</td><td>一级容器编号</td><td>√</td><td>√</td><td></td></tr><tr><td>secondary_code</td><td>varchar</td><td>128</td><td>二级容器编号</td><td>√</td><td>√</td><td></td></tr><tr><td>upn_id</td><td>int8</td><td></td><td>唯一码ID</td><td>√</td><td>√</td><td></td></tr><tr><td>quality_status</td><td>varchar</td><td>50</td><td>质量状态</td><td>√</td><td>√</td><td><a href="/dict.INV_QUALITY_STATUS.html">dict.INV_QUALITY_STATUS</a></td></tr><tr><td>qty</td><td>numeric</td><td></td><td>库存数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_in</td><td>numeric</td><td></td><td>计划入库数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_pre_allocated</td><td>numeric</td><td></td><td>预分配数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_allocated</td><td>numeric</td><td></td><td>分配数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_on_hold</td><td>numeric</td><td></td><td>冻结数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_lock</td><td>numeric</td><td></td><td>锁定数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_rep_in</td><td>numeric</td><td></td><td>计划补入数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_rep_out</td><td>numeric</td><td></td><td>计划补出数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_move_in</td><td>numeric</td><td></td><td>计划移入数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_move_out</td><td>numeric</td><td></td><td>计划移出数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_profit</td><td>numeric</td><td></td><td>计划溢数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_loss</td><td>numeric</td><td></td><td>计划损数量</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td>√</td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function u(p,y,v,b,q,f){const d=c("YvCallOut");return o(),e("div",null,[l,a(d,{type:"dbtable",title:"inv_secondary_upn"},{default:_(()=>[h]),_:1}),m])}const w=r(s,[["render",u]]);export{S as __pageData,w as default};
