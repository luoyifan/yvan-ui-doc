---
title: 按钮 button
---

# 按钮 button 组件
是一种常用的界面元素，通常用于工具栏（toolbar）和表单（form）组件内。
####
1. 在工具栏中，按钮通常用于集中显示和管理各种操作，例如新增、编辑、保存、查询、打印等。
2. 在表单中，按钮通常用于提交表单数据、重置表单内容或执行与表单相关的特定操作。
######
针对于按钮可以设置大小类型等等，框架中常用的几种按钮如下图：
######
![[02_button/img_2.png]]
######
备注：按钮会根据主题色的不同，默认显示为主题色的颜色。
## 事件
进入二开界面，选中按钮后，点击选择事件或属性，可调出事件列表，如下图：
######
![[02_button/img_1.png]]

| 事件名称  | 说明 | 参数和示例                                |
|:------|--|--------------------------------------|
| click | 点击按钮后触发 | click: '{button1_click}', |

## 方法

| 方法名称    | 说明 | 参数和示例                                |
|:--------|--|--------------------------------------|
| -- | -- | -- |

## 属性
进入二开页面，选中按钮可以在右边属性栏设置按钮的各种属性。

| 属性名称 | 说明   | 示例 |
|:-----|------|--|
| reference | 设置按钮的refs | refs:button1 |
| hidden | 隐藏或显示按钮，默认为false | hidden:false |
| disabled | 是否禁用按钮，默认为false | disabled:false |
| text | 输入按钮显示的名字，默认NewButton | text:'按钮' |
| plain | 是否显示为朴素类型按钮，默认为false | plain:false |
| round | 是否设置为圆角，默认为false | round:false |
| circle | 是否设置为圆形，默认为false | circle:false |
| link | 是否设置为文本模式，默认为false | link:false |
| type | 设置按钮的类型，常用有default（默认）、primary（主要）、success（成功）、info（信息）、warning（警告）、danger（危险），默认为default | type:default |
| iconCls | 为按钮添加图标，默认不设置，为空 | iconCls:'element AlarmClock' |
| size | 设置按钮的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false | size:default |