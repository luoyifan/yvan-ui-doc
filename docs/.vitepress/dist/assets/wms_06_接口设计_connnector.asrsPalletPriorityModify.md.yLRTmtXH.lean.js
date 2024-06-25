import{_ as r,c as o,J as n,w as i,m as s,a as l,a6 as p,G as t,o as h}from"./chunks/framework.BbZoItmV.js";const M=JSON.parse('{"title":"asrsPalletPriorityModify","description":"","frontmatter":{"title":"asrsPalletPriorityModify","desc":"3.1.2-托盘任务优先级调整","type":"connector","apiType":"External","system":"WCS","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/wcs/asrsPalletPriorityModify","tags":["wms/connector","wms/connector3-WCS接口/3_1-托盘立库","wms/connector/wcs/asrsPalletPriorityModify"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.asrsPalletPriorityModify.md","filePath":"wms/06_接口设计/connnector.asrsPalletPriorityModify.md"}'),d={name:"wms/06_接口设计/connnector.asrsPalletPriorityModify.md"},k=s("h3",{id:"_3-1-2-托盘任务优先级调整",tabindex:"-1"},[l("3.1.2-托盘任务优先级调整 "),s("a",{class:"header-anchor",href:"#_3-1-2-托盘任务优先级调整","aria-label":'Permalink to "3.1.2-托盘任务优先级调整"'},"​")],-1),c=s("p",null,"描述: 3.1.2-托盘任务优先级调整",-1),u=s("p",null,"名称: asrsPalletPriorityModify",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.WCS@asrsPalletPriorityModify",-1),y=s("p",null,"内部编号: b9f25a21-c364-4efa-888a-0c01c1ba00b6",-1),_=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),g=s("p",null,null,-1),m=s("p",null,null,-1),b=p("",2),C=s("p",null,null,-1),q=s("p",null,null,-1),F=p("",1);function v(T,f,P,B,w,S){const a=t("YvCallOut"),e=t("YvBeanSchema");return h(),o("div",null,[k,n(a,{type:"connector",title:"URL: /wcs/asrsPalletPriorityModify"},{default:i(()=>[c,u,E,y]),_:1}),_,n(a,{type:"info",title:"数据结构"},{default:i(()=>[g]),_:1}),n(e,{content:`{
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
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[q]),_:1}),F])}const j=r(d,[["render",v]]);export{M as __pageData,j as default};
