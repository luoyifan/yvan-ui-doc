import{_ as r,c as h,J as n,w as i,m as s,a as l,a6 as p,G as t,o}from"./chunks/framework.BbZoItmV.js";const x=JSON.parse('{"title":"asrsPalletTaskAdd","description":"","frontmatter":{"title":"asrsPalletTaskAdd","desc":"3.1.1-托盘搬运任务添加","type":"connector","apiType":"External","system":"WCS","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/wcs/asrsPalletTaskAdd","tags":["wms/connector","wms/connector3-WCS接口/3_1-托盘立库","wms/connector/wcs/asrsPalletTaskAdd"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.asrsPalletTaskAdd.md","filePath":"wms/06_接口设计/connnector.asrsPalletTaskAdd.md"}'),k={name:"wms/06_接口设计/connnector.asrsPalletTaskAdd.md"},d=s("h3",{id:"_3-1-1-托盘搬运任务添加",tabindex:"-1"},[l("3.1.1-托盘搬运任务添加 "),s("a",{class:"header-anchor",href:"#_3-1-1-托盘搬运任务添加","aria-label":'Permalink to "3.1.1-托盘搬运任务添加"'},"​")],-1),c=s("p",null,"描述: 3.1.1-托盘搬运任务添加",-1),u=s("p",null,"名称: asrsPalletTaskAdd",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.WCS@asrsPalletTaskAdd",-1),y=s("p",null,"内部编号: 12bdb98f-8859-49a1-b97d-22174e34053c",-1),g=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),_=s("p",null,null,-1),m=s("p",null,null,-1),b=p("",2),C=s("p",null,null,-1),q=s("p",null,null,-1),F=p("",1);function T(v,B,P,f,A,w){const a=t("YvCallOut"),e=t("YvBeanSchema");return o(),h("div",null,[d,n(a,{type:"connector",title:"URL: /wcs/asrsPalletTaskAdd"},{default:i(()=>[c,u,E,y]),_:1}),g,n(a,{type:"info",title:"数据结构"},{default:i(()=>[_]),_:1}),n(e,{content:`{
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
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[q]),_:1}),F])}const N=r(k,[["render",T]]);export{x as __pageData,N as default};
