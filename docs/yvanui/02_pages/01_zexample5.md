---
title: 示例5，平板应用开发
date: 2024-08-03 13:55
author: yvan
------

# 平板应用开发
平板应用，二开和布局与PC端一致，但是需要考虑到平板的特性，比如屏幕小，操作方式不同等。

## 进入应用设置
![[01_zexample5/img01.png]]

## 添加或管理菜单
- 进入模块管理
- 添加或编辑菜单
- 选择文件型低代码, 与PC不同的是，PDA菜单不允许使用目录，只能使用文件型低代码、Vue原生、Iframe 三种类型。
- 填写路径，路径是相对于 /wms-ui/pages 文件夹的, 比如 /wms/pda/fun1 真实路径就是 /wms-ui/pages/wms/pda/fun1
- ![[01_zexample5/img02.png]]

## 为角色赋权
- 角色赋权，与PC端完全一致
- ![[01_zexample5/img03.png]]

## 设置页面基本信息
- title 页面标题
- disableBack 禁止'返回'按钮
- hideMenuButton 隐藏右侧'更多'按钮
  ![[01_zexample5/img04.png]]


## showPage 叠加页面
如何需要在当前页面叠加一个新的页面，可以使用 `system.showPage` 方法，
这个方法会返回一个Promise对象，可以通过这个对象获取到页面返回的数据。

```javascript
system.showPage('/wms/pda/fun1').then(data => {
    // data为返回的数据
})
```

![[01_zexample5/img05.png]]

## ok 方法，关闭当前页面，并向上一个页面传递数据
```javascript
this.ok({
    a: 1,
    b: 2,
    text: this.form.text1,
    data: '返回的数据'
})
```

## close 方法，关闭当前页面
```javascript
this.close()
```