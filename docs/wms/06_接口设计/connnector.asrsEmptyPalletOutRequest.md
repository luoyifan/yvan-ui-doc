---
title: asrsEmptyPalletOutRequest
desc: 4.1.3-拆盘机空托盘组补给请求-设备回调
type: connector
apiType: Internal
system: 
date: 2024-03-29 10:56
author: yvan
navIgnore: true
url: /wcs/asrsEmptyPalletOutRequest
tags: 
  - wms/connector
  - wms/connector4-WMS接口/4_1-托盘立库-设备回调
  - wms/connector/wcs/asrsEmptyPalletOutRequest
---

### 4.1.3-拆盘机空托盘组补给请求-设备回调
> [!connector] URL: /wcs/asrsEmptyPalletOutRequest
> 描述: 4.1.3-拆盘机空托盘组补给请求-设备回调
> 
> 名称: asrsEmptyPalletOutRequest
> 
> 内部方法：com.galaxis.wms.connector.WCS@asrsEmptyPalletOutRequest
> 
> 内部编号: c92ead14-70b4-4aed-a8b3-6c7cb8a2f15a


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
```
> [!example] 请求示例 1
```json
{
  "reqCode": "fuier-004",
  "reqTime": "2024-03-26 12:13:12",
  "data": [
    {
      "endLocation": "ZT0003"
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
```
> [!example] 响应示例 1
```json
{
  "success": 0,
  "msg": "",
  "data": [
    {
      "taskNo": "TASK-24-03-26-14-000001",
      "priority": 99,
      "startLocation": "LOC00003",
      "containerCode": "TP0001",
      "endLocation": "ZT0003"
    }
  ],
  "reqCode": "fuier-004"
}
```

