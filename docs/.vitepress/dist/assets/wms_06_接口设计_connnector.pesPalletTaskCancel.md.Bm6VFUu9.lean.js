import{_ as r,E as t,c as h,J as n,w as i,m as s,a as l,a6 as p,o}from"./chunks/framework.DZm5WilM.js";const N=JSON.parse('{"title":"pesPalletTaskCancel","description":"","frontmatter":{"title":"pesPalletTaskCancel","desc":"3.2.3-托盘搬运任务取消","type":"connector","apiType":"External","system":"PES","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/pes/pesPalletTaskCancel","tags":["wms/connector","wms/connector3-WCS接口/3_2-托盘密集库(白盒模式)","wms/connector/pes/pesPalletTaskCancel"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.pesPalletTaskCancel.md","filePath":"wms/06_接口设计/connnector.pesPalletTaskCancel.md"}'),k={name:"wms/06_接口设计/connnector.pesPalletTaskCancel.md"},c=s("h3",{id:"_3-2-3-托盘搬运任务取消",tabindex:"-1"},[l("3.2.3-托盘搬运任务取消 "),s("a",{class:"header-anchor",href:"#_3-2-3-托盘搬运任务取消","aria-label":'Permalink to "3.2.3-托盘搬运任务取消"'},"​")],-1),d=s("p",null,"描述: 3.2.3-托盘搬运任务取消",-1),u=s("p",null,"名称: pesPalletTaskCancel",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.PES@pesPalletTaskCancel",-1),y=s("p",null,"内部编号: 718411a5-7cf8-4d97-b8e6-f2200ba13d50",-1),_=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),g=s("p",null,null,-1),m=s("p",null,null,-1),b=p("",2),C=s("p",null,null,-1),F=s("p",null,null,-1),q=p("",1);function T(v,B,P,f,S,x){const a=t("YvCallOut"),e=t("YvBeanSchema");return o(),h("div",null,[c,n(a,{type:"connector",title:"URL: /pes/pesPalletTaskCancel"},{default:i(()=>[d,u,E,y]),_:1}),_,n(a,{type:"info",title:"数据结构"},{default:i(()=>[g]),_:1}),n(e,{content:`{
  "root": {
  "valueType" : "object",
  "properties" : {
    "reqCode" : {
      "title" : "请求编号",
      "valueType" : "string",
      "desc" : "请求编号，每个请求都要一个唯一编号，同一个请求重复提交，使用同一编号"
    },
    "reqTime" : {
      "title" : "请求时间戳",
      "valueType" : "string",
      "desc" : "请求时间戳，格式: “yyyy-MM-dd HH:mm:ss”"
    },
    "data" : {
      "valueType" : "array",
      "items" : {
        "valueType" : "object",
        "properties" : {
          "taskNo" : {
            "title" : "任务号",
            "valueType" : "string",
            "required" : true
          },
          "containerCode" : {
            "title" : "容器号",
            "valueType" : "string",
            "required" : true
          }
        }
      }
    }
  }
}
}
`}),n(a,{type:"example",title:"请求示例 1"},{default:i(()=>[m]),_:1}),b,n(a,{type:"info",title:"数据结构"},{default:i(()=>[C]),_:1}),n(e,{content:`{
"root": {
  "valueType" : "object",
  "properties" : {
    "success" : {
      "title" : "状态标记",
      "valueType" : "number",
      "desc" : "返回状态，0 表示成功、大于0表示失败"
    },
    "msg" : {
      "title" : "消息",
      "valueType" : "string",
      "desc" : "一般在success字段返回大于0的时候，返回错误信息"
    },
    "reqCode" : {
      "title" : "请求编号",
      "valueType" : "string",
      "desc" : "返回请求时的 reqCode"
    },
    "data" : {
      "valueType" : "array",
      "items" : {
        "valueType" : "object",
        "properties" : { }
      }
    }
  }
}
}
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[F]),_:1}),q])}const j=r(k,[["render",T]]);export{N as __pageData,j as default};
