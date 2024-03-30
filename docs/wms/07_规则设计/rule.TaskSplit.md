---
title: 任务拆分
desc: 任务拆分
name: TaskSplit
type: rule
navIgnore: false
version: 2
tags:
  - wms/rule/TaskSplit
---

## 库位分配  
>[!rule] TaskSplit  
> 任务拆分  
>   
> 版本: 2 
  
### 说明  
```text
任务拆分规则 taskAlgorithm为拆分算法,由人员手动写入的字符串多个字段以+号连接 只允许写入表字段与后台已实现的相关表字段 任务以波次为单位打包
任务拆分需考虑两种，1.合单 2.不合单 合单的任务拆分无法进行订单级别的拆分组合
```

### 入口参数
```beanSchema
{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
```
### 出口参数
```beanSchema
{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "taskAlgorithm" : {
      "valueType" : "string",
      "title" : "分组条件"
    }
  }
}
}
```

