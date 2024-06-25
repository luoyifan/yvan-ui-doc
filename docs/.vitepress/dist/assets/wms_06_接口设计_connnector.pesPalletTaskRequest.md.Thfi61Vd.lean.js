import{_ as r,c as h,J as n,w as i,m as s,a as l,a6 as p,G as t,o as k}from"./chunks/framework.BbZoItmV.js";const x=JSON.parse('{"title":"pesPalletTaskRequest","description":"","frontmatter":{"title":"pesPalletTaskRequest","desc":"4.2.1-托盘搬运任务请求-设备回调","type":"connector","apiType":"Internal","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/rcs/pesPalletTaskRequest","tags":["wms/connector","wms/connector4-WMS接口/4_2-托盘密集库(白盒模式)-设备回调","wms/connector/rcs/pesPalletTaskRequest"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.pesPalletTaskRequest.md","filePath":"wms/06_接口设计/connnector.pesPalletTaskRequest.md"}'),o={name:"wms/06_接口设计/connnector.pesPalletTaskRequest.md"},c=s("h3",{id:"_4-2-1-托盘搬运任务请求-设备回调",tabindex:"-1"},[l("4.2.1-托盘搬运任务请求-设备回调 "),s("a",{class:"header-anchor",href:"#_4-2-1-托盘搬运任务请求-设备回调","aria-label":'Permalink to "4.2.1-托盘搬运任务请求-设备回调"'},"​")],-1),u=s("p",null,"描述: 4.2.1-托盘搬运任务请求-设备回调",-1),d=s("p",null,"名称: pesPalletTaskRequest",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.RCS@pesPalletTaskRequest",-1),y=s("p",null,"内部编号: e3fa4079-06cb-4051-972f-d91297b0427d",-1),g=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),_=s("p",null,null,-1),b=s("p",null,null,-1),m=p("",2),q=s("p",null,null,-1),C=s("p",null,null,-1),F=p("",1);function T(v,B,f,P,R,w){const a=t("YvCallOut"),e=t("YvBeanSchema");return k(),h("div",null,[c,n(a,{type:"connector",title:"URL: /rcs/pesPalletTaskRequest"},{default:i(()=>[u,d,E,y]),_:1}),g,n(a,{type:"info",title:"数据结构"},{default:i(()=>[_]),_:1}),n(e,{content:`{
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
          "startLocation" : {
            "title" : "起始点位",
            "valueType" : "string",
            "required" : true
          },
          "containerCode" : {
            "title" : "容器号",
            "valueType" : "number",
            "required" : true
          }
        }
      }
    }
  }
}
}
`}),n(a,{type:"example",title:"请求示例 1"},{default:i(()=>[b]),_:1}),m,n(a,{type:"info",title:"数据结构"},{default:i(()=>[q]),_:1}),n(e,{content:`{
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
            "valueType" : "string",
            "title" : "起始点位"
          },
          "endLocation" : {
            "valueType" : "string",
            "title" : "目标点位"
          },
          "containerCode" : {
            "valueType" : "string",
            "title" : "容器号"
          }
        }
      }
    }
  }
}
}
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[C]),_:1}),F])}const N=r(o,[["render",T]]);export{x as __pageData,N as default};
