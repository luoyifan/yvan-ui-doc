import{_ as a,c as e,J as r,w as _,m as t,a as o,a6 as c,G as n,o as s}from"./chunks/framework.BbZoItmV.js";const x=JSON.parse('{"title":"doc_container_swap","description":"","frontmatter":{"title":"doc_container_swap","desc":"容器商品换箱","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.doc_container_swap.md","filePath":"wms/09_数据库设计/db.doc_container_swap.md"}'),i={name:"wms/09_数据库设计/db.doc_container_swap.md"},h=t("h1",{id:"title",tabindex:"-1"},[o("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),l=t("p",null,"容器商品换箱",-1),p=c('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>swap_id</td><td>int8</td><td></td><td>换箱ID</td><td>√</td><td>√</td><td></td></tr><tr><td>swap_status</td><td>varchar</td><td>50</td><td>换箱状态</td><td></td><td></td><td></td></tr><tr><td>staff_id</td><td>int8</td><td></td><td>换箱员ID</td><td></td><td>√</td><td></td></tr><tr><td>loc_id</td><td>int8</td><td></td><td>站台ID</td><td></td><td>√</td><td></td></tr><tr><td>container_id</td><td>int8</td><td></td><td>原容器ID</td><td></td><td>√</td><td></td></tr><tr><td>container_code</td><td>varchar</td><td>128</td><td>原容器编号</td><td></td><td>√</td><td></td></tr><tr><td>target_container_id</td><td>int8</td><td></td><td>目标容器ID</td><td></td><td>√</td><td></td></tr><tr><td>target_container_code</td><td>varchar</td><td>128</td><td>目标容器编号</td><td></td><td>√</td><td></td></tr><tr><td>wh_id</td><td>int8</td><td></td><td>仓库ID</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function m(b,w,u,f,v,D){const d=n("YvCallOut");return s(),e("div",null,[h,r(d,{type:"dbtable",title:"doc_container_swap"},{default:_(()=>[l]),_:1}),p])}const y=a(i,[["render",m]]);export{x as __pageData,y as default};
