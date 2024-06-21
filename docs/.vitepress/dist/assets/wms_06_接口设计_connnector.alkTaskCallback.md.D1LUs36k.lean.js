import{_ as h,c as k,J as a,w as i,m as s,a as p,a6 as t,G as e,o as r}from"./chunks/framework.d-Ywx6yJ.js";const V=JSON.parse('{"title":"alkTaskCallback","description":"","frontmatter":{"title":"alkTaskCallback","desc":"4.3.2-任务状态反馈-设备回调","type":"connector","apiType":"Internal","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/mfc/alkTaskCallback","tags":["wms/connector","wms/connector4-WMS接口/4_3-穿梭车库-设备回调","wms/connector/mfc/alkTaskCallback"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.alkTaskCallback.md","filePath":"wms/06_接口设计/connnector.alkTaskCallback.md"}'),o={name:"wms/06_接口设计/connnector.alkTaskCallback.md"},E=s("h3",{id:"_4-3-2-任务状态反馈-设备回调",tabindex:"-1"},[p("4.3.2-任务状态反馈-设备回调 "),s("a",{class:"header-anchor",href:"#_4-3-2-任务状态反馈-设备回调","aria-label":'Permalink to "4.3.2-任务状态反馈-设备回调"'},"​")],-1),d=s("p",null,"描述: 4.3.2-任务状态反馈-设备回调",-1),u=s("p",null,"名称: alkTaskCallback",-1),c=s("p",null,"内部方法：com.galaxis.wms.connector.MFC@alkTaskCallback",-1),y=s("p",null,"内部编号: 3ff58071-bd2a-4204-bc0b-590213ddac93",-1),g=s("h4",{id:"请求",tabindex:"-1"},[p("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),b=s("p",null,null,-1),C=s("p",null,null,-1),F=t("",1),m=s("p",null,null,-1),q=t("",2),_=s("p",null,null,-1),T=s("p",null,null,-1),B=t("",1),v=s("p",null,null,-1),f=t("",1);function S(P,A,L,N,w,x){const n=e("YvCallOut"),l=e("YvBeanSchema");return r(),k("div",null,[E,a(n,{type:"connector",title:"URL: /mfc/alkTaskCallback"},{default:i(()=>[d,u,c,y]),_:1}),g,a(n,{type:"info",title:"数据结构"},{default:i(()=>[b]),_:1}),a(l,{content:`{
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
`}),a(n,{type:"example",title:"请求示例 1"},{default:i(()=>[C]),_:1}),F,a(n,{type:"example",title:"请求示例 2"},{default:i(()=>[m]),_:1}),q,a(n,{type:"info",title:"数据结构"},{default:i(()=>[_]),_:1}),a(l,{content:`{
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
`}),a(n,{type:"example",title:"响应示例 1"},{default:i(()=>[T]),_:1}),B,a(n,{type:"example",title:"响应示例 2"},{default:i(()=>[v]),_:1}),f])}const I=h(o,[["render",S]]);export{V as __pageData,I as default};
