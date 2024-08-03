import{_ as o,c as r,J as a,w as i,m as e,a as s,a6 as c,G as n,o as p}from"./chunks/framework.d-Ywx6yJ.js";const P=JSON.parse('{"title":"任务拆分","description":"","frontmatter":{"title":"任务拆分","desc":"任务拆分","name":"TaskSplit","type":"rule","navIgnore":false,"version":2,"tags":["wms/rule/TaskSplit"]},"headers":[],"relativePath":"wms/07_规则设计/rule.TaskSplit.md","filePath":"wms/07_规则设计/rule.TaskSplit.md"}'),d={name:"wms/07_规则设计/rule.TaskSplit.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[s("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),h=e("p",null,"任务拆分",-1),u=e("p",null,"版本: 2",-1),m=c("",3),b=e("h3",{id:"出口参数",tabindex:"-1"},[s("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function v(k,T,f,S,g,x){const l=n("YvCallOut"),t=n("YvBeanSchema");return p(),r("div",null,[_,a(l,{type:"rule",title:"TaskSplit"},{default:i(()=>[h,u]),_:1}),m,a(t,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
`}),b,a(t,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "taskAlgorithm" : {
      "valueType" : "string",
      "title" : "分组条件"
    }
  }
}
}
`})])}const w=o(d,[["render",v]]);export{P as __pageData,w as default};
