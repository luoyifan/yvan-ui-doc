import{_ as r,c as o,J as n,w as i,m as s,a as l,a6 as p,G as t,o as h}from"./chunks/framework.BbZoItmV.js";const j=JSON.parse('{"title":"avgTaskPriorityModify","description":"","frontmatter":{"title":"avgTaskPriorityModify","desc":"3.5.2-托盘任务优先级调整","type":"connector","apiType":"External","system":"RCS","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/avgTaskPriorityModify","tags":["wms/connector","wms/connector3-WCS接口/3_5-顶升式AGV","wms/connector/avgTaskPriorityModify"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.avgTaskPriorityModify.md","filePath":"wms/06_接口设计/connnector.avgTaskPriorityModify.md"}'),k={name:"wms/06_接口设计/connnector.avgTaskPriorityModify.md"},d=s("h3",{id:"_3-5-2-托盘任务优先级调整",tabindex:"-1"},[l("3.5.2-托盘任务优先级调整 "),s("a",{class:"header-anchor",href:"#_3-5-2-托盘任务优先级调整","aria-label":'Permalink to "3.5.2-托盘任务优先级调整"'},"​")],-1),c=s("p",null,"描述: 3.5.2-托盘任务优先级调整",-1),u=s("p",null,"名称: avgTaskPriorityModify",-1),E=s("p",null,"内部方法：@avgTaskPriorityModify",-1),y=s("p",null,"内部编号: b825707d-4b44-43bd-a884-9ac31adc49a8",-1),g=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),_=s("p",null,null,-1),m=s("p",null,null,-1),b=p("",2),C=s("p",null,null,-1),v=s("p",null,null,-1),q=p("",1);function F(T,f,B,P,S,M){const a=t("YvCallOut"),e=t("YvBeanSchema");return h(),o("div",null,[d,n(a,{type:"connector",title:"URL: /avgTaskPriorityModify"},{default:i(()=>[c,u,E,y]),_:1}),g,n(a,{type:"info",title:"数据结构"},{default:i(()=>[_]),_:1}),n(e,{content:`{
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
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[v]),_:1}),q])}const w=r(k,[["render",F]]);export{j as __pageData,w as default};
