---
title: 接口示例
---

# 介绍

接口定义文档，结构如下
```javascript
{
    uuid: '',   // 接口32位唯一ID
    
    // 接口名称，必须符合Java标识符定义规范
    name: '托盘出库任务添加',   
    
    // 接口分类
    group: ['3-WCS接口', '3.1-托盘立库', '3.1.1-托盘出库任务添加'],   
    
    // 接口中文描述
    title: '托盘出库任务添加',  
    
    // 接口详细描述
    desc: 'WMS将托盘出库任务传递至WCS系统',   
    
    // 接口URL地址
    url: '',    
    
    // 表明是外部系统（相对WMS系统而言）, 如果是WMS自身的接口，此值为 "Internal"
    type: 'External',   
    
     // 隶属系统, 如果 type='External' 外部系统则生效
    system: 'WCS'  
    
    // 请求参数描述, 符合 BeanSchema 规范
    request: {
        valueType: 'object',
        properties: {
            msgCode: { title: '消息编号', valueType: 'dict', dict:'WCS_API_MSG_CODE', required: true,  },
            msgTime: { title: '消息时间', valueType: 'datetime', required: true,  },
            msgId: { title: '消息唯一ID', valueType: 'string', required: true,  },
            data: { 
                title: '消息内容', valueType: 'array', required: true,  
                items: {
                    valueType: 'object',
                    properties: {
                        taskNo: { title: '指令号', valueType: 'string', required: true,  },
                        taskType: { title: '任务类型', valueType: 'dict', dict:'WCS_TASK_TYPE', required: true, },
                        fromLocation: { title: '源货位', valueType: 'id', widget:'LocSearch', lookme: 'loc_id', required: true, },
                        toLocation: { title: '目的地', valueType: 'id', widget:'LocSearch', lookme: 'loc_id', required: true, },
                        priority: { title: '优先级', valueType: 'number', required: true, },
                        containerCode: { title: '容器号', valueType: 'id', widget:'ContainerSearch', lookme: 'container_code', required: true, },
                        containerType: { title: '容器类型', valueType: 'dict', dict:'WCS_CONTAINER_TYPE', required: true, },
                        ledMsg: { title: 'LED屏显示信息', valueType: 'string', required: true, },
                    }
                }
            },
        },
    },    
    
    // 响应参数描述, 符合 BeanSchema 规范
    response: {
        valueType: 'object',
        properties: {
            code: { title: 'HTTP状态码', valueType: 'number', desc: '为标识的HTTP状态码，如200,表明本次调用成功；如果状态码大于200，表明本次调用出现业务异常，具体的异常描述在msg字段' },
            success: { title: '是否成功', valueType: 'boolean', },
            msg: { title: '消息说明', valueType: 'string', desc: '当code大于200时，该字段为调用错误的业务异常描述；当调用成功无异常时，该字段为空' },
            requestId: { title: '标识客户端的调用', valueType: 'string', desc: '客户端传入值原样返回' },
            data: { title: '消息内容', valueType: 'boolean',  },
        },
    },
    
    
    // 其他选项
    options: {
        mock: [
            // 接口仿真数据
        ],
        asset: [
            // 接口断言
        ],
    },
}
```

接口request和response定义，必须符合 beanSchema 定义模式，

## BeanSchema 定义模式

- 它是 JsonSchema 格式的变种. 可以生成 JsonSchema 格式
- 用来描述接口、工作流方法的定义，比如每个API或方法的输入参数、返回值等信息
- BeanSchema字段描述

| 字段 | 说明 | 示例 |
|-------------|---------|--|
| title | 属性标签 | 比如{title:'商品Id'} |
| valueType | 属性值类型 | 取值范围: string number boolean date datetime id search dict object array |
| dict | 字典编码 | valueType == 'dict' 时生效 |
| widget | 数据窗口编码 | valueType == 'id' 或 'search' 时生效 |
| lookme | 数据窗口回填字段名 | valueType == 'id' 或 'search' 时生效 |
| properties | 下一级属性集 | valueType == 'object' 时生效 |
| items | 表示数组元素类型 | valueType == 'array' 时生效 |
| required | 是否必填 | valueType ==  'string' | 'number' | 'boolean' | 'id' | 'search' | 'dict' 时生效 |



# 接口示例
帮助我把这份文档整理成 markdown 格式, 格式如下: 
## 3-WCS接口
### 3.1-托盘立库
#### 3.1.1-托盘出库任务添加
```javascript
{
    uuid: '',
    name: '托盘出库任务添加',
    group: ['3-WCS接口', '3.1-托盘立库', '3.1.1-托盘出库任务添加'],
    desc: 'WMS将托盘出库任务下传至WCS\nWCS需控制托盘线上的托盘流量，避免环线拥堵。\n完成调用4.2.7',
    title: '托盘出库任务添加',
    url: '',
    type: 'External',
    system: 'WCS',
    request: {
        valueType: 'object',
        properties: {
            msgCode: { title: '消息编号', valueType: 'dict', dict:'WCS_API_MSG_CODE', required: true,  },
            msgTime: { title: '消息时间', valueType: 'datetime', required: true,  },
            msgId: { title: '消息唯一ID', valueType: 'string', required: true,  },
            data: { 
                title: '消息内容', valueType: 'array', required: true,  
                items: {
                    valueType: 'object',
                    properties: {
                        taskNo: { title: '指令号', valueType: 'string', required: true,  },
                        taskType: { title: '任务类型', valueType: 'dict', dict:'WCS_TASK_TYPE', required: true, },
                        fromLocation: { title: '源货位', valueType: 'id', widget:'LocSearch', lookme: 'loc_id', required: true, },
                        toLocation: { title: '目的地', valueType: 'id', widget:'LocSearch', lookme: 'loc_id', required: true, },
                        priority: { title: '优先级', valueType: 'number', required: true, },
                        containerCode: { title: '容器号', valueType: 'id', widget:'ContainerSearch', lookme: 'container_code', required: true, },
                        containerType: { title: '容器类型', valueType: 'dict', dict:'WCS_CONTAINER_TYPE', required: true, },
                        ledMsg: { title: 'LED屏显示信息', valueType: 'string', required: true, },
                    }
                }
            },
        },
    },    
    response: {
        valueType: 'object',
        properties: {
            code: { title: 'HTTP状态码', valueType: 'number', desc: '为标识的HTTP状态码，如200,表明本次调用成功；如果状态码大于200，表明本次调用出现业务异常，具体的异常描述在msg字段' },
            success: { title: '是否成功', valueType: 'boolean', },
            msg: { title: '消息说明', valueType: 'string', desc: '当code大于200时，该字段为调用错误的业务异常描述；当调用成功无异常时，该字段为空' },
            requestId: { title: '标识客户端的调用', valueType: 'string', desc: '客户端传入值原样返回' },
            data: { title: '消息内容', valueType: 'boolean',  },
        },
    },
    options: {
        mock: [],
        asset: [],
    },
}
```

#### 托盘出库任务取消
#### 托盘立库移库任务添加
#### 托盘出库任务优先级调整

### 多穿库
#### 多穿订单出库任务添加
#### 多穿出库任务优先级调整
#### 多穿订单出库库存分配反馈
#### 多穿小车出库任务执行状态反馈
#### 入库相关接口
#### 多穿入库容器明细取消
#### 多穿上架任务添加

## WMS 系统接口
### 托盘立体库操作响应
#### 托盘出库任务执行完成反馈
#### 托盘重入库位请求及响应

### 多穿库操作响应
#### 多穿出库任务完成后的库存分配反馈
#### 料箱出库任务到达完成反馈
