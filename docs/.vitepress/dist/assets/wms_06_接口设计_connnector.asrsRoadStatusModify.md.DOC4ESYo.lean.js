import{_ as r,E as t,c as h,J as a,w as i,m as s,a as l,a6 as p,o}from"./chunks/framework.DZm5WilM.js";const x=JSON.parse('{"title":"asrsRoadStatusModify","description":"","frontmatter":{"title":"asrsRoadStatusModify","desc":"4.1.1-立体库巷道(堆垛机)可用状态-设备回调","type":"connector","apiType":"Internal","system":"WCS","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/wcs/asrsRoadStatusModify","tags":["wms/connector","wms/connector4-WMS接口/4_1-托盘立库-设备回调","wms/connector/wcs/asrsRoadStatusModify"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.asrsRoadStatusModify.md","filePath":"wms/06_接口设计/connnector.asrsRoadStatusModify.md"}'),d={name:"wms/06_接口设计/connnector.asrsRoadStatusModify.md"},k=s("h3",{id:"_4-1-1-立体库巷道-堆垛机-可用状态-设备回调",tabindex:"-1"},[l("4.1.1-立体库巷道(堆垛机)可用状态-设备回调 "),s("a",{class:"header-anchor",href:"#_4-1-1-立体库巷道-堆垛机-可用状态-设备回调","aria-label":'Permalink to "4.1.1-立体库巷道(堆垛机)可用状态-设备回调"'},"​")],-1),c=s("p",null,"描述: 4.1.1-立体库巷道(堆垛机)可用状态-设备回调",-1),u=s("p",null,"名称: asrsRoadStatusModify",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.WCS@asrsRoadStatusModify",-1),y=s("p",null,"内部编号: 3af3d46e-36f0-4b4b-8893-853b7d1a3937",-1),_=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),g=s("p",null,null,-1),m=s("p",null,null,-1),b=p("",2),C=s("p",null,null,-1),F=s("p",null,null,-1),q=p("",1);function v(f,T,B,S,w,M){const n=t("YvCallOut"),e=t("YvBeanSchema");return o(),h("div",null,[k,a(n,{type:"connector",title:"URL: /wcs/asrsRoadStatusModify"},{default:i(()=>[c,u,E,y]),_:1}),_,a(n,{type:"info",title:"数据结构"},{default:i(()=>[g]),_:1}),a(e,{content:`{
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
          "roadCode" : {
            "title" : "任务号",
            "valueType" : "string",
            "required" : true
          },
          "status" : {
            "title" : "任务号",
            "valueType" : "number",
            "required" : true
          }
        }
      }
    }
  }
}
}
`}),a(n,{type:"example",title:"请求示例 1"},{default:i(()=>[m]),_:1}),b,a(n,{type:"info",title:"数据结构"},{default:i(()=>[C]),_:1}),a(e,{content:`{
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
`}),a(n,{type:"example",title:"响应示例 1"},{default:i(()=>[F]),_:1}),q])}const j=r(d,[["render",v]]);export{x as __pageData,j as default};
