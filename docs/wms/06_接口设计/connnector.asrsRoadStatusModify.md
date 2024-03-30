---
title: asrsRoadStatusModify
desc: 4.1.1-立体库巷道(堆垛机)可用状态-设备回调
type: connector
apiType: Internal
system: WCS
date: 2024-03-29 10:56
author: yvan
navIgnore: true
url: /wcs/asrsRoadStatusModify
tags: 
  - wms/connector
  - wms/connector4-WMS接口/4_1-托盘立库-设备回调
  - wms/connector/wcs/asrsRoadStatusModify
---

### 4.1.1-立体库巷道(堆垛机)可用状态-设备回调
> [!connector] URL: /wcs/asrsRoadStatusModify
> 描述: 4.1.1-立体库巷道(堆垛机)可用状态-设备回调
> 
> 名称: asrsRoadStatusModify
> 
> 内部方法：com.galaxis.wms.connector.WCS@asrsRoadStatusModify
> 
> 内部编号: 3af3d46e-36f0-4b4b-8893-853b7d1a3937


#### 请求
> [!info] 数据结构
```beanSchema
{
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
```
> [!example] 请求示例 1
```json
{
    "reqCode": "asfeji-001",
    "reqTime": "2024-03-26 12:12:00",
    "data": [
        { 
            "roadCode": "1",
            "status": "0"
        },
        { 
            "roadCode": "2",
            "status": "1"
        }
    ]
}
```

#### 响应
> [!info] 数据结构
```beanSchema
{
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
```
> [!example] 响应示例 1
```json
{
  "success": 0,
  "msg": "",
  "data": null,
  "reqCode": "asfeji-001"
}
```

