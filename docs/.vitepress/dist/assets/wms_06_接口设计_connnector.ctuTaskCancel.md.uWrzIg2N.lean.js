import{_ as r,c as h,J as n,w as i,m as s,a as l,a6 as p,G as t,o}from"./chunks/framework.BbZoItmV.js";const N=JSON.parse('{"title":"ctuTaskCancel","description":"","frontmatter":{"title":"ctuTaskCancel","desc":"3.7.3-料箱搬运任务取消","type":"connector","apiType":"External","system":"RCS","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/rcs/ctuTaskCancel","tags":["wms/connector","wms/connector3-WCS接口/3_7-ctu(包含三层飞梭)","wms/connector/rcs/ctuTaskCancel"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.ctuTaskCancel.md","filePath":"wms/06_接口设计/connnector.ctuTaskCancel.md"}'),c={name:"wms/06_接口设计/connnector.ctuTaskCancel.md"},k=s("h3",{id:"_3-7-3-料箱搬运任务取消",tabindex:"-1"},[l("3.7.3-料箱搬运任务取消 "),s("a",{class:"header-anchor",href:"#_3-7-3-料箱搬运任务取消","aria-label":'Permalink to "3.7.3-料箱搬运任务取消"'},"​")],-1),d=s("p",null,"描述: 3.7.3-料箱搬运任务取消",-1),u=s("p",null,"名称: ctuTaskCancel",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.RCS@ctuTaskCancel",-1),y=s("p",null,"内部编号: 260230a6-2577-4c23-b383-0a1ae65cc716",-1),_=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),g=s("p",null,null,-1),m=s("p",null,null,-1),C=p("",2),b=s("p",null,null,-1),F=s("p",null,null,-1),q=p("",1);function T(v,B,f,S,x,w){const a=t("YvCallOut"),e=t("YvBeanSchema");return o(),h("div",null,[k,n(a,{type:"connector",title:"URL: /rcs/ctuTaskCancel"},{default:i(()=>[d,u,E,y]),_:1}),_,n(a,{type:"info",title:"数据结构"},{default:i(()=>[g]),_:1}),n(e,{content:`{
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
`}),n(a,{type:"example",title:"请求示例 1"},{default:i(()=>[m]),_:1}),C,n(a,{type:"info",title:"数据结构"},{default:i(()=>[b]),_:1}),n(e,{content:`{
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
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[F]),_:1}),q])}const j=r(c,[["render",T]]);export{N as __pageData,j as default};
