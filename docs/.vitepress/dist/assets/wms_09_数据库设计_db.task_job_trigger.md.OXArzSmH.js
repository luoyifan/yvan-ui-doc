import{_ as e,c as r,J as a,w as i,m as t,a as _,a6 as s,G as o,o as n}from"./chunks/framework.BbZoItmV.js";const j=JSON.parse('{"title":"task_job_trigger","description":"","frontmatter":{"title":"task_job_trigger","desc":"任务触发器","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.task_job_trigger.md","filePath":"wms/09_数据库设计/db.task_job_trigger.md"}'),c={name:"wms/09_数据库设计/db.task_job_trigger.md"},l=t("h1",{id:"title",tabindex:"-1"},[_("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),h=t("p",null,"任务触发器",-1),m=s('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>id</td><td>int8</td><td></td><td>主键id</td><td>√</td><td>√</td><td></td></tr><tr><td>namespace</td><td>varchar</td><td>63</td><td>命名空间</td><td></td><td>√</td><td></td></tr><tr><td>job_id</td><td>int8</td><td></td><td>任务ID</td><td></td><td>√</td><td></td></tr><tr><td>name</td><td>varchar</td><td>127</td><td>触发器名称</td><td></td><td>√</td><td></td></tr><tr><td>start_time</td><td>timestamp</td><td></td><td>触发开始时间</td><td></td><td>√</td><td></td></tr><tr><td>end_time</td><td>timestamp</td><td></td><td>触发结束时间</td><td></td><td></td><td></td></tr><tr><td>last_fire_time</td><td>timestamp</td><td></td><td>上一次触发时间</td><td></td><td></td><td></td></tr><tr><td>next_fire_time</td><td>timestamp</td><td></td><td>下一次触发时间</td><td></td><td></td><td></td></tr><tr><td>misfire_strategy</td><td>int2</td><td></td><td>错过触发策略，1：忽略，2：立即补偿触发一次</td><td></td><td>√</td><td></td></tr><tr><td>allow_concurrent</td><td>int2</td><td></td><td>是否允许多节点并行触发，使用悲观锁实现，不建议允许，0：禁止，1：允许</td><td></td><td>√</td><td></td></tr><tr><td>type</td><td>int2</td><td></td><td>触发类型，1：cron触发，2：固定间隔触发</td><td></td><td>√</td><td></td></tr><tr><td>cron</td><td>varchar</td><td>511</td><td>cron表达式</td><td></td><td></td><td></td></tr><tr><td>fixed_interval</td><td>int8</td><td></td><td>固定间隔触发，间隔时间(单位：秒)</td><td></td><td></td><td></td></tr><tr><td>fire_count</td><td>int8</td><td></td><td>触发次数</td><td></td><td>√</td><td></td></tr><tr><td>disable</td><td>int2</td><td></td><td>是否禁用：0-启用，1-禁用</td><td></td><td>√</td><td></td></tr><tr><td>description</td><td>varchar</td><td>511</td><td>描述</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamp</td><td></td><td>创建时间</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamp</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function p(b,g,f,u,k,v){const d=o("YvCallOut");return n(),r("div",null,[l,a(d,{type:"dbtable",title:"task_job_trigger"},{default:i(()=>[h]),_:1}),m])}const w=e(c,[["render",p]]);export{j as __pageData,w as default};
