import{_ as l,c,J as e,w as a,m as t,a as o,G as r,o as i}from"./chunks/framework.BbZoItmV.js";const N=JSON.parse('{"title":"Test3.startCk","description":"","frontmatter":{"title":"Test3.startCk","desc":"2.2.1-嘉兴-立体库-出库(测试)","type":"connector","apiType":"Method","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/wms/Test3@startCk","tags":["wms/connector","wms/connector2-业务接口/2_2-出库","wms/connector/wms/Test3@startCk"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.Test3.startCk.md","filePath":"wms/06_接口设计/connnector.Test3.startCk.md"}'),_={name:"wms/06_接口设计/connnector.Test3.startCk.md"},d=t("h3",{id:"_2-2-1-嘉兴-立体库-出库-测试",tabindex:"-1"},[o("2.2.1-嘉兴-立体库-出库(测试) "),t("a",{class:"header-anchor",href:"#_2-2-1-嘉兴-立体库-出库-测试","aria-label":'Permalink to "2.2.1-嘉兴-立体库-出库(测试)"'},"​")],-1),p=t("p",null,"描述: 2.2.1-嘉兴-立体库-出库(测试)",-1),u=t("p",null,"名称: Test3.startCk",-1),h=t("p",null,"内部方法：null",-1),m=t("p",null,"内部编号: 8d14b66d-974f-4652-802a-284609b09efa",-1),T=t("h4",{id:"请求",tabindex:"-1"},[o("请求 "),t("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),f=t("p",null,null,-1),v=t("h4",{id:"响应",tabindex:"-1"},[o("响应 "),t("a",{class:"header-anchor",href:"#响应","aria-label":'Permalink to "响应"'},"​")],-1),k=t("p",null,null,-1);function y(C,b,w,x,g,B){const n=r("YvCallOut"),s=r("YvBeanSchema");return i(),c("div",null,[d,e(n,{type:"connector",title:"URL: /wms/Test3@startCk"},{default:a(()=>[p,u,h,m]),_:1}),T,e(n,{type:"info",title:"数据结构"},{default:a(()=>[f]),_:1}),e(s,{content:`{
  "root": {
  "valueType" : "object",
  "properties" : {
    "container_code" : {
      "valueType" : "string",
      "title" : "托盘Code"
    },
    "loc_id" : {
      "valueType" : "id",
      "title" : "库位ID"
    },
    "target_loc_id" : {
      "valueType" : "id",
      "title" : "目标库位ID"
    }
  }
}
}
`}),v,e(n,{type:"info",title:"数据结构"},{default:a(()=>[k]),_:1}),e(s,{content:`{
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
`})])}const Y=l(_,[["render",y]]);export{N as __pageData,Y as default};
