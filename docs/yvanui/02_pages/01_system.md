---
title: 系统标准函数
date: 2024-07-15
author: yvan
---

# 系统标准函数

###  _ Lodash函数

用来快捷调用 Lodash

```javascript
system._.map([1, 2, 3], function (n) {
    return n * 3;
});

system._.remove([1, 2, 3, 4], function (n) {
    return n % 2 === 0;
});
```

### createUUID 生成UUID

客户端生成UUID

```javascript
const id = system.createUUID()
```

### defer 延迟执行函数

同 _.defer 一样, 用来延迟执行函数

```javascript
system._.defer(() => {
    this.refs.user_name.focus()
})
```

### nextTick 下一帧执行函数

同 vue.$nextTick 一样, 用来下一帧执行函数

```javascript
system.nextTick(() => {
    this.refs.user_name.focus()
})
```

### toString 将任意类型转换为字符串

null/undefined/数字/对象/数组 都可以转换为字符串

```javascript
const str = system.toString(123)
const str = system.toString(undefined)
```

### isLogined 是否已登录

判断是否已登录

```javascript
if (system.isLogined()) {
    // 已登录
} else {
    // 未登录
}
```

### logout 退出登录

退出登录

```javascript
system.logout().finally(() => {
    // 退出登录后的操作
})
```

### invokeServer 调用服务端函数

调用服务端函数

```javascript
system.invokeServer('/wms/inbound/pda/PdaPutAway@reviewSave', {
    put_details: rowData
}).then((res) => {
    system.msg('复核完成!')
})
```

### showLoading / clearLoading

showLoading 显示 “正在载入...” 对话框。
clearLoading 关闭 “正在载入...” 对话框
一般配合 Promise 使用

```javascript
system.showLoading()
system.invokeStudio('/workbench/RuleFile@saveRuleDefine', {
    ruleCode: this.ruleFile.ruleCode,
    ruleContent: JSON.stringify(this.ruleContent)

}).then(res => {
    if (res.success) {
        system.msg('保存成功')
    }

}).finally(() => {
    system.clearLoading()
})
```

### showDialog 显示对话框模块

显示对话框模块

```javascript
system.showDialog('/wms/inbound/scanUdi/ScanUdi', {})
    .then((res) => {
        // 用户点击了确认
    })
    .finally(() => {
        // 对话框关闭后的操作
    })
```

### msg 轻量级提示信息

显示轻量级提示信息

```javascript
system.msg('保存成功')
```

### showValidateError 显示验证错误

弹出用户必须点击确认的校验错误信息
msg 有三种模式

- 字符串，直接显示, 例如: '批准文号不能为空'

- 数组，每个元素显示一行
  [
  '第1行错误 ,批准文号不能为空',
  '第2行错误 ,冷链商品,请填写启运时间和到达时间!!!',
  '第2行错误 ,批准文号不能为空',
  '第3行错误 ,批准文号不能为空',
  '第4行错误 ,冷链商品,请填写启运时间和到达时间!!!',
  '第4行错误 ,批准文号不能为空',
  '冷链商品,请填写启运时间和到达时间!!!',
  '需要填写车牌号、出发地点、交货地点'
  ]

- 对象，key 为属性名，value 为对象:
  {
  'form.shipment_type': [
  {
  field: 'form.shipment_type',
  fieldValue: undefined,
  message: '"运输方式" 不能为空'
  }
  ]
  }

```javascript
this.refs.asnForm.validate().then(() => {
    system.msg('校验通过')

}).catch(err => {
    system.showValidateError(err)

}).finally(() => {
    system.clearLoading()
})
```

### showErrorDialog
弹出用户必须点击确认的错误信息
```javascript
system.showErrorDialog("用户名不能为空")
```

### showInfoDialog
弹出用户必须点击确认的信息
```javascript
system.showInfoDialog("切换语言成功！")
```

### alert
信息提示内容，强提示，必须用户点击确认
```javascript
system.alert("请选择ASN订单")
```

### confirm 弹出确认对话框
弹出确认对话框
```javascript
system.confirm("确定删除吗?").then(() => {
    // 用户点击了确认
})
```
### 加密相关
- makeMd5 生成MD5
- aesEncrypt AES加密
- aesDecrypt AES解密

### getNowDate
获取当前日期(与服务端同步)
```javascript
const nowDate = system.getNowDate()
```

### getNowTime 
获取当前时间(与服务端同步)
```javascript
const nowTime = system.getNowTime()
```

### syncTime
同步时间(与服务端), 一般在前端刚刚刷新完成后调用
客户端会调用 /wms/TimeSync@time 的服务端接口，完成时间同步
时间同步完成后才能调用 getNowDate/getNowTime 等函数，否则取到的时间是跟随客户端的，可能不准确
```javascript
system.syncTime()
```

### importExcelDialog 
导入Excel对话框
columns 设置参考 aggridplus 的 column 配置
```javascript
system.importExcelDialog({
    columns: [
        {header: '客户编号', dataIndex: 'customer_code'},
    ],
}).then(data => {
    this.form1.import_customer = ''
    system.showLoading()
    system.invokeServer("/wms/outbound/waveDispatch/WaveDispatch@importCustomer", {
        data : data,
    }).then(res => {
        if(!res.data) {
            system.msg('导入的客户编号匹配到的客户为空!')
            return
        }
        system.msg('导入成功!')
        this.form1.import_customer = res.data
    }).finally(() => {
        system.clearLoading()
    })
}).finally()
```