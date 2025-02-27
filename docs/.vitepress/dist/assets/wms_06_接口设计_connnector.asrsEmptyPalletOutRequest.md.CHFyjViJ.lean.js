import{_ as r,c as h,J as n,w as i,m as s,a as l,a6 as p,G as t,o}from"./chunks/framework.d-Ywx6yJ.js";const S=JSON.parse('{"title":"asrsEmptyPalletOutRequest","description":"","frontmatter":{"title":"asrsEmptyPalletOutRequest","desc":"4.1.3-拆盘机空托盘组补给请求-设备回调","type":"connector","apiType":"Internal","system":null,"date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/wcs/asrsEmptyPalletOutRequest","tags":["wms/connector","wms/connector4-WMS接口/4_1-托盘立库-设备回调","wms/connector/wcs/asrsEmptyPalletOutRequest"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.asrsEmptyPalletOutRequest.md","filePath":"wms/06_接口设计/connnector.asrsEmptyPalletOutRequest.md"}'),k={name:"wms/06_接口设计/connnector.asrsEmptyPalletOutRequest.md"},u=s("h3",{id:"_4-1-3-拆盘机空托盘组补给请求-设备回调",tabindex:"-1"},[l("4.1.3-拆盘机空托盘组补给请求-设备回调 "),s("a",{class:"header-anchor",href:"#_4-1-3-拆盘机空托盘组补给请求-设备回调","aria-label":'Permalink to "4.1.3-拆盘机空托盘组补给请求-设备回调"'},"​")],-1),c=s("p",null,"描述: 4.1.3-拆盘机空托盘组补给请求-设备回调",-1),d=s("p",null,"名称: asrsEmptyPalletOutRequest",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.WCS@asrsEmptyPalletOutRequest",-1),y=s("p",null,"内部编号: c92ead14-70b4-4aed-a8b3-6c7cb8a2f15a",-1),m=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),g=s("p",null,null,-1),_=s("p",null,null,-1),b=p("",2),q=s("p",null,null,-1),C=s("p",null,null,-1),F=p("",1);function v(T,B,f,P,w,O){const a=t("YvCallOut"),e=t("YvBeanSchema");return o(),h("div",null,[u,n(a,{type:"connector",title:"URL: /wcs/asrsEmptyPalletOutRequest"},{default:i(()=>[c,d,E,y]),_:1}),m,n(a,{type:"info",title:"数据结构"},{default:i(()=>[g]),_:1}),n(e,{content:`{
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
          "endLocation" : {
            "title" : "目标点位",
            "valueType" : "string",
            "required" : true
          }
        }
      }
    }
  }
}
}
`}),n(a,{type:"example",title:"请求示例 1"},{default:i(()=>[_]),_:1}),b,n(a,{type:"info",title:"数据结构"},{default:i(()=>[q]),_:1}),n(e,{content:`{
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
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[C]),_:1}),F])}const x=r(k,[["render",v]]);export{S as __pageData,x as default};
