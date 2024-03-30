import{_ as h,c as k,J as a,w as i,m as s,a as p,a6 as t,G as e,o as r}from"./chunks/framework.BbZoItmV.js";const j=JSON.parse('{"title":"agvTaskCallback","description":"","frontmatter":{"title":"agvTaskCallback","desc":"4.5.1-任务状态反馈-设备回调","type":"connector","apiType":"Internal","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/rcs/agvTaskCallback","tags":["wms/connector","wms/connector4-WMS接口/4_5-顶升式AGV-设备回调","wms/connector/rcs/agvTaskCallback"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.agvTaskCallback.md","filePath":"wms/06_接口设计/connnector.agvTaskCallback.md"}'),o={name:"wms/06_接口设计/connnector.agvTaskCallback.md"},E=s("h3",{id:"_4-5-1-任务状态反馈-设备回调",tabindex:"-1"},[p("4.5.1-任务状态反馈-设备回调 "),s("a",{class:"header-anchor",href:"#_4-5-1-任务状态反馈-设备回调","aria-label":'Permalink to "4.5.1-任务状态反馈-设备回调"'},"​")],-1),d=s("p",null,"描述: 4.5.1-任务状态反馈-设备回调",-1),u=s("p",null,"名称: agvTaskCallback",-1),c=s("p",null,"内部方法：com.galaxis.wms.connector.RCS@agvTaskCallback",-1),g=s("p",null,"内部编号: 60c5df51-b314-48a4-96e7-2d6cfb7d8f2c",-1),y=s("h4",{id:"请求",tabindex:"-1"},[p("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),b=s("p",null,null,-1),C=s("p",null,null,-1),F=t("",1),q=s("p",null,null,-1),m=t("",2),_=s("p",null,null,-1),v=s("p",null,null,-1),T=t("",1),B=s("p",null,null,-1),f=t("",1);function S(A,P,L,N,w,x){const n=e("YvCallOut"),l=e("YvBeanSchema");return r(),k("div",null,[E,a(n,{type:"connector",title:"URL: /rcs/agvTaskCallback"},{default:i(()=>[d,u,c,g]),_:1}),y,a(n,{type:"info",title:"数据结构"},{default:i(()=>[b]),_:1}),a(l,{content:`{
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
          "taskState" : {
            "title" : "任务状态",
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
`}),a(n,{type:"example",title:"请求示例 1"},{default:i(()=>[C]),_:1}),F,a(n,{type:"example",title:"请求示例 2"},{default:i(()=>[q]),_:1}),m,a(n,{type:"info",title:"数据结构"},{default:i(()=>[_]),_:1}),a(l,{content:`{
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
`}),a(n,{type:"example",title:"响应示例 1"},{default:i(()=>[v]),_:1}),T,a(n,{type:"example",title:"响应示例 2"},{default:i(()=>[B]),_:1}),f])}const I=h(o,[["render",S]]);export{j as __pageData,I as default};
