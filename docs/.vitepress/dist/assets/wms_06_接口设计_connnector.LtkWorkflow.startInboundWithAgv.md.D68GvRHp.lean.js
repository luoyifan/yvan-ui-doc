import{_ as l,c,J as n,w as o,m as t,a,G as s,o as i}from"./chunks/framework.d-Ywx6yJ.js";const T=JSON.parse('{"title":"LtkWorkflow.startInboundWithAgv","description":"","frontmatter":{"title":"LtkWorkflow.startInboundWithAgv","desc":"2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运)","type":"connector","apiType":"Method","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/wms/inbound/workflow/LtkWorkflow@startInboundWithAgv","tags":["wms/connector","wms/connector2-业务接口/2_1-入库","wms/connector/wms/inbound/workflow/LtkWorkflow@startInboundWithAgv"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.LtkWorkflow.startInboundWithAgv.md","filePath":"wms/06_接口设计/connnector.LtkWorkflow.startInboundWithAgv.md"}'),d={name:"wms/06_接口设计/connnector.LtkWorkflow.startInboundWithAgv.md"},_=t("h3",{id:"_2-1-1-1-嘉兴-立体库-入库开始-使用侧叉搬运",tabindex:"-1"},[a("2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运) "),t("a",{class:"header-anchor",href:"#_2-1-1-1-嘉兴-立体库-入库开始-使用侧叉搬运","aria-label":'Permalink to "2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运)"'},"​")],-1),u=t("p",null,"描述: 2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运)",-1),h=t("p",null,"名称: LtkWorkflow.startInboundWithAgv",-1),p=t("p",null,"内部方法：null",-1),f=t("p",null,"内部编号: 18c26a85-1585-4ebe-8de4-423bca659c6b",-1),m=t("h4",{id:"请求",tabindex:"-1"},[a("请求 "),t("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),k=t("p",null,null,-1),w=t("h4",{id:"响应",tabindex:"-1"},[a("响应 "),t("a",{class:"header-anchor",href:"#响应","aria-label":'Permalink to "响应"'},"​")],-1),b=t("p",null,null,-1);function v(W,g,y,I,L,A){const e=s("YvCallOut"),r=s("YvBeanSchema");return i(),c("div",null,[_,n(e,{type:"connector",title:"URL: /wms/inbound/workflow/LtkWorkflow@startInboundWithAgv"},{default:o(()=>[u,h,p,f]),_:1}),m,n(e,{type:"info",title:"数据结构"},{default:o(()=>[k]),_:1}),n(r,{content:`{
  "root": {
  "valueType" : "object",
  "properties" : {
    "container_code" : {
      "valueType" : "string",
      "title" : "容器编号"
    }
  }
}
}
`}),w,n(e,{type:"info",title:"数据结构"},{default:o(()=>[b]),_:1}),n(r,{content:`{
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
`})])}const B=l(d,[["render",v]]);export{T as __pageData,B as default};
