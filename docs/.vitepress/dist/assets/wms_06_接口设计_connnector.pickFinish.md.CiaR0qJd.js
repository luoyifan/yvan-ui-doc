import{_ as c,c as l,J as n,w as o,m as e,a as s,G as i,o as r}from"./chunks/framework.d-Ywx6yJ.js";const C=JSON.parse('{"title":"pickFinish","description":"","frontmatter":{"title":"pickFinish","desc":"2.2.4-拣货完成","type":"connector","apiType":"Method","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/wms/Test3@pickFinish","tags":["wms/connector","wms/connector2-业务接口/2_2-出库","wms/connector/wms/Test3@pickFinish"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.pickFinish.md","filePath":"wms/06_接口设计/connnector.pickFinish.md"}'),p={name:"wms/06_接口设计/connnector.pickFinish.md"},_=e("h3",{id:"_2-2-4-拣货完成",tabindex:"-1"},[s("2.2.4-拣货完成 "),e("a",{class:"header-anchor",href:"#_2-2-4-拣货完成","aria-label":'Permalink to "2.2.4-拣货完成"'},"​")],-1),d=e("p",null,"描述: 2.2.4-拣货完成",-1),h=e("p",null,"名称: pickFinish",-1),u=e("p",null,"内部方法：null",-1),m=e("p",null,"内部编号: 756362f9-9b22-46e1-86f5-d180e014637e",-1),f=e("h4",{id:"请求",tabindex:"-1"},[s("请求 "),e("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),k=e("p",null,null,-1),v=e("h4",{id:"响应",tabindex:"-1"},[s("响应 "),e("a",{class:"header-anchor",href:"#响应","aria-label":'Permalink to "响应"'},"​")],-1),y=e("p",null,null,-1);function b(w,T,F,x,g,B){const t=i("YvCallOut"),a=i("YvBeanSchema");return r(),l("div",null,[_,n(t,{type:"connector",title:"URL: /wms/Test3@pickFinish"},{default:o(()=>[d,h,u,m]),_:1}),f,n(t,{type:"info",title:"数据结构"},{default:o(()=>[k]),_:1}),n(a,{content:`{
  "root": {
  "valueType" : "object",
  "properties" : {
    "container_code" : {
      "valueType" : "string"
    }
  }
}
}
`}),v,n(t,{type:"info",title:"数据结构"},{default:o(()=>[y]),_:1}),n(a,{content:`{
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
`})])}const N=c(p,[["render",b]]);export{C as __pageData,N as default};
