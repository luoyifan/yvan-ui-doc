---
title: ctuTaskCallback
desc: 4.7.1-任务状态反馈-设备回调
type: connector
apiType: Internal
system: 
date: 2024-03-29 10:56
author: yvan
url: /rcs/ctuTaskCallback
tags: 
  - wms/connector
  - wms/connector4-WMS接口/4_7-ctu(包含三层飞梭)-设备回调
  - wms/connector/rcs/ctuTaskCallback
---

# title
> [!connector] URL: /rcs/ctuTaskCallback
> 描述: 4.7.1-任务状态反馈-设备回调
> 
> 名称: ctuTaskCallback
> 
> 内部方法：com.galaxis.wms.connector.RCS@ctuTaskCallback
> 
> 内部编号: cfb5fc6c-57e0-4e30-8df5-b9ea314173ff


# 请求
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
```
> [!example] 请求示例 1
```json
{
  "reqCode": "dftyhft-003",
  "reqTime": "2024-03-26 12:12:12",
  "data": [
    {
      "taskNo": "TASK-24-03-26-15-000001",
      "taskState": 3,
      "startLocation": "ZT0001",
      "endLocation": "LOC001",
      "containerCode": "Z00001"
    },
    {
      "taskNo": "TASK-24-03-26-15-000002",
      "taskState": 3,
      "startLocation": "ZT0002",
      "endLocation": "LOC002",
      "containerCode": "Z00002"
    },
    {
      "taskNo": "TASK-24-03-26-15-000003",
      "taskState": 3,
      "startLocation": "ZT0003",
      "endLocation": "LOC003",
      "containerCode": "Z00003"
    }
  ]
}
```
> [!example] 请求示例 2
```json
{
  "reqCode": "dftyhft-003",
  "reqTime": "2024-03-26 12:12:12",
  "data": [
    {
      "taskNo": "TASK-24-03-26-15-000001",
      "taskState": 5,
      "startLocation": "ZT0001",
      "endLocation": "LOC001",
      "containerCode": "Z00001"
    },
    {
      "taskNo": "TASK-24-03-26-15-000002",
      "taskState": 5,
      "startLocation": "ZT0002",
      "endLocation": "LOC002",
      "containerCode": "Z00002"
    },
    {
      "taskNo": "TASK-24-03-26-15-000003",
      "taskState": 3,
      "startLocation": "ZT0003",
      "endLocation": "LOC003",
      "containerCode": "Z00003"
    }
  ]
}
```

# 响应
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
  "data": null,
  "reqCode": "dftyhft-003"
}
```
> [!example] 响应示例 2
```json
{
  "success": 0,
  "msg": "",
  "data": [
    {
      "taskNo": "TASK-24-03-26-15-000001",
      "priority": 10,
      "startLocation": "LOC001",
      "endLocation": "LOC004",
      "containerCode": "Z00001"
    },
    {
      "taskNo": "TASK-24-03-26-15-000002",
      "priority": 10,
      "startLocation": "LOC002",
      "endLocation": "LOC005",
      "containerCode": "Z00002"
    }
  ],
  "reqCode": "dftyhft-003"
}
```

