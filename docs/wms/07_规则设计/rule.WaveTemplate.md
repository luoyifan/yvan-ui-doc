---
title: 波次模板
desc: 波次模板
name: WaveTemplate
type: rule
navIgnore: false
version: 4
tags:
  - wms/rule/WaveTemplate
---

## 库位分配  
>[!rule] WaveTemplate  
> 波次模板  
>   
> 版本: 4 
  
### 说明  
```text
在分配完成后 再调用进行波次模板对明细流程进行处理 流程大概率跟库区相关
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
    "pickMode" : {
      "valueType" : "dict",
      "title" : "拣货",
      "dict" : "OUT_STEPS_TYPE"
    },
    "sowBeforeCollectMode" : {
      "valueType" : "dict",
      "title" : "分播前集货",
      "dict" : "OUT_STEPS_TYPE"
    },
    "sowMode" : {
      "valueType" : "dict",
      "title" : "分播",
      "dict" : "OUT_STEPS_TYPE"
    },
    "reviewBeforeCollectMode" : {
      "valueType" : "dict",
      "title" : "复核前集货",
      "dict" : "OUT_STEPS_TYPE"
    },
    "reviewMode" : {
      "valueType" : "dict",
      "title" : "复核",
      "dict" : "OUT_STEPS_TYPE"
    },
    "shipBeforeCollectMode" : {
      "valueType" : "dict",
      "title" : "发运前集货",
      "dict" : "OUT_STEPS_TYPE"
    },
    "shipMode" : {
      "valueType" : "dict",
      "title" : "发运",
      "dict" : "OUT_STEPS_TYPE"
    }
  }
}
}
```

