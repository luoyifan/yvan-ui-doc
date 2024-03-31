import{_ as r,E as t,c as h,J as n,w as i,m as s,a as l,a6 as p,o as k}from"./chunks/framework.DZm5WilM.js";const N=JSON.parse('{"title":"alkTaskAdd","description":"","frontmatter":{"title":"alkTaskAdd","desc":"3.3.1-多穿任务添加","type":"connector","apiType":"External","system":"MFC","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/mfc/alkTaskAdd","tags":["wms/connector","wms/connector3-WCS接口/3_3-穿梭车库","wms/connector/mfc/alkTaskAdd"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.alkTaskAdd.md","filePath":"wms/06_接口设计/connnector.alkTaskAdd.md"}'),o={name:"wms/06_接口设计/connnector.alkTaskAdd.md"},d=s("h3",{id:"_3-3-1-多穿任务添加",tabindex:"-1"},[l("3.3.1-多穿任务添加 "),s("a",{class:"header-anchor",href:"#_3-3-1-多穿任务添加","aria-label":'Permalink to "3.3.1-多穿任务添加"'},"​")],-1),c=s("p",null,"描述: 3.3.1-多穿任务添加",-1),u=s("p",null,"名称: alkTaskAdd",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.MFC@alkTaskAdd",-1),y=s("p",null,"内部编号: a15d3265-eeb4-4c60-8327-d2af58700777",-1),g=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),_=s("p",null,null,-1),m=s("p",null,null,-1),b=p("",2),C=s("p",null,null,-1),F=s("p",null,null,-1),q=p("",1);function T(v,B,f,A,x,S){const a=t("YvCallOut"),e=t("YvBeanSchema");return k(),h("div",null,[d,n(a,{type:"connector",title:"URL: /mfc/alkTaskAdd"},{default:i(()=>[c,u,E,y]),_:1}),g,n(a,{type:"info",title:"数据结构"},{default:i(()=>[_]),_:1}),n(e,{content:`{
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
          "priority" : {
            "title" : "优先级",
            "valueType" : "number",
            "required" : true
          },
          "startLocation" : {
            "title" : "起始点位",
            "valueType" : "string",
            "required" : true
          },
          "endLocation" : {
            "title" : "目标点位",
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
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[F]),_:1}),q])}const P=r(o,[["render",T]]);export{N as __pageData,P as default};
