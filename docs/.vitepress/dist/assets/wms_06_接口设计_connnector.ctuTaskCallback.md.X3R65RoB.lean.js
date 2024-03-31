import{_ as h,E as p,c as k,J as i,w as n,m as s,a as e,a6 as t,o as r}from"./chunks/framework.DZm5WilM.js";const P=JSON.parse('{"title":"ctuTaskCallback","description":"","frontmatter":{"title":"ctuTaskCallback","desc":"4.7.1-任务状态反馈-设备回调","type":"connector","apiType":"Internal","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/rcs/ctuTaskCallback","tags":["wms/connector","wms/connector4-WMS接口/4_7-ctu(包含三层飞梭)-设备回调","wms/connector/rcs/ctuTaskCallback"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.ctuTaskCallback.md","filePath":"wms/06_接口设计/connnector.ctuTaskCallback.md"}'),E={name:"wms/06_接口设计/connnector.ctuTaskCallback.md"},o=s("h3",{id:"_4-7-1-任务状态反馈-设备回调",tabindex:"-1"},[e("4.7.1-任务状态反馈-设备回调 "),s("a",{class:"header-anchor",href:"#_4-7-1-任务状态反馈-设备回调","aria-label":'Permalink to "4.7.1-任务状态反馈-设备回调"'},"​")],-1),u=s("p",null,"描述: 4.7.1-任务状态反馈-设备回调",-1),d=s("p",null,"名称: ctuTaskCallback",-1),c=s("p",null,"内部方法：com.galaxis.wms.connector.RCS@ctuTaskCallback",-1),y=s("p",null,"内部编号: cfb5fc6c-57e0-4e30-8df5-b9ea314173ff",-1),g=s("h4",{id:"请求",tabindex:"-1"},[e("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),F=s("p",null,null,-1),C=s("p",null,null,-1),b=t("",1),q=s("p",null,null,-1),m=t("",2),B=s("p",null,null,-1),_=s("p",null,null,-1),T=t("",1),v=s("p",null,null,-1),f=t("",1);function S(L,A,N,Z,w,x){const a=p("YvCallOut"),l=p("YvBeanSchema");return r(),k("div",null,[o,i(a,{type:"connector",title:"URL: /rcs/ctuTaskCallback"},{default:n(()=>[u,d,c,y]),_:1}),g,i(a,{type:"info",title:"数据结构"},{default:n(()=>[F]),_:1}),i(l,{content:`{
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
`}),i(a,{type:"example",title:"请求示例 1"},{default:n(()=>[C]),_:1}),b,i(a,{type:"example",title:"请求示例 2"},{default:n(()=>[q]),_:1}),m,i(a,{type:"info",title:"数据结构"},{default:n(()=>[B]),_:1}),i(l,{content:`{
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
`}),i(a,{type:"example",title:"响应示例 1"},{default:n(()=>[_]),_:1}),T,i(a,{type:"example",title:"响应示例 2"},{default:n(()=>[v]),_:1}),f])}const j=h(E,[["render",S]]);export{P as __pageData,j as default};
