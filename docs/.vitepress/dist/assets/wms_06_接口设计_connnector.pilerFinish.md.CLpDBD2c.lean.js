import{_ as l,c as r,J as n,w as o,m as e,a,G as i,o as c}from"./chunks/framework.BbZoItmV.js";const C=JSON.parse('{"title":"pilerFinish","description":"","frontmatter":{"title":"pilerFinish","desc":"2.1.4-堆垛机完成","type":"connector","apiType":"Method","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/wms/Test2@pilerFinish","tags":["wms/connector","wms/connector2-业务接口/2_1-入库","wms/connector/wms/Test2@pilerFinish"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.pilerFinish.md","filePath":"wms/06_接口设计/connnector.pilerFinish.md"}'),p={name:"wms/06_接口设计/connnector.pilerFinish.md"},_=e("h3",{id:"_2-1-4-堆垛机完成",tabindex:"-1"},[a("2.1.4-堆垛机完成 "),e("a",{class:"header-anchor",href:"#_2-1-4-堆垛机完成","aria-label":'Permalink to "2.1.4-堆垛机完成"'},"​")],-1),d=e("p",null,"描述: 2.1.4-堆垛机完成",-1),h=e("p",null,"名称: pilerFinish",-1),u=e("p",null,"内部方法：null",-1),m=e("p",null,"内部编号: 7b4223a3-2361-4da1-ad9e-51f34aed59cf",-1),f=e("h4",{id:"请求",tabindex:"-1"},[a("请求 "),e("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),v=e("p",null,null,-1),y=e("h4",{id:"响应",tabindex:"-1"},[a("响应 "),e("a",{class:"header-anchor",href:"#响应","aria-label":'Permalink to "响应"'},"​")],-1),T=e("p",null,null,-1);function b(w,g,F,x,k,B){const t=i("YvCallOut"),s=i("YvBeanSchema");return c(),r("div",null,[_,n(t,{type:"connector",title:"URL: /wms/Test2@pilerFinish"},{default:o(()=>[d,h,u,m]),_:1}),f,n(t,{type:"info",title:"数据结构"},{default:o(()=>[v]),_:1}),n(s,{content:`{
  "root": {
  "valueType" : "object",
  "properties" : {
    "start_pos_code" : {
      "valueType" : "string",
      "title" : "起始点位"
    },
    "container_code" : {
      "valueType" : "string",
      "title" : "容器号"
    },
    "target_pos_code" : {
      "valueType" : "string",
      "title" : "目标点位"
    },
    "task_code" : {
      "valueType" : "string",
      "title" : "任务号"
    }
  }
}
}
`}),y,n(t,{type:"info",title:"数据结构"},{default:o(()=>[T]),_:1}),n(s,{content:`{
"root": {
  "valueType" : "object",
  "properties" : {
    "success" : {
      "title" : "是否成功",
      "valueType" : "boolean"
    },
    "msg" : {
      "title" : "消息说明",
      "valueType" : "string"
    },
    "data" : {
      "title" : "消息内容",
      "valueType" : "object",
      "properties" : { }
    }
  }
}
}
`})])}const N=l(p,[["render",b]]);export{C as __pageData,N as default};
