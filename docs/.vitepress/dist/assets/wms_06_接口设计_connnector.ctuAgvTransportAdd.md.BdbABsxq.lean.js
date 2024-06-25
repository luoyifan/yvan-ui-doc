import{_ as h,c as r,J as n,w as a,m as s,a as l,a6 as p,G as e,o as k}from"./chunks/framework.BbZoItmV.js";const w=JSON.parse('{"title":"ctuAgvTransportAdd","description":"","frontmatter":{"title":"ctuAgvTransportAdd","desc":"3.7.1-料箱搬运任务添加","type":"connector","apiType":"External","system":"RCS","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/rcs/ctuAgvTransportAdd","tags":["wms/connector","wms/connector3-WCS接口/3_7-ctu(包含三层飞梭)","wms/connector/rcs/ctuAgvTransportAdd"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.ctuAgvTransportAdd.md","filePath":"wms/06_接口设计/connnector.ctuAgvTransportAdd.md"}'),o={name:"wms/06_接口设计/connnector.ctuAgvTransportAdd.md"},E=s("h3",{id:"_3-7-1-料箱搬运任务添加",tabindex:"-1"},[l("3.7.1-料箱搬运任务添加 "),s("a",{class:"header-anchor",href:"#_3-7-1-料箱搬运任务添加","aria-label":'Permalink to "3.7.1-料箱搬运任务添加"'},"​")],-1),d=s("p",null,"描述: 3.7.1-料箱搬运任务添加",-1),u=s("p",null,"名称: ctuAgvTransportAdd",-1),c=s("p",null,"内部方法：com.galaxis.wms.connector.RCS@ctuAgvTransportAdd",-1),y=s("p",null,"内部编号: e621272f-594a-4b03-8f00-b60ac64ec190",-1),g=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),F=s("p",null,null,-1),C=s("p",null,null,-1),b=p("",2),q=s("p",null,null,-1),m=s("p",null,null,-1),_=p("",1);function v(B,T,A,f,S,x){const i=e("YvCallOut"),t=e("YvBeanSchema");return k(),r("div",null,[E,n(i,{type:"connector",title:"URL: /rcs/ctuAgvTransportAdd"},{default:a(()=>[d,u,c,y]),_:1}),g,n(i,{type:"info",title:"数据结构"},{default:a(()=>[F]),_:1}),n(t,{content:`{
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
`}),n(i,{type:"example",title:"请求示例 1"},{default:a(()=>[C]),_:1}),b,n(i,{type:"info",title:"数据结构"},{default:a(()=>[q]),_:1}),n(t,{content:`{
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
`}),n(i,{type:"example",title:"响应示例 1"},{default:a(()=>[m]),_:1}),_])}const N=h(o,[["render",v]]);export{w as __pageData,N as default};
