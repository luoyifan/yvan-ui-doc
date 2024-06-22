---
title: 勾选框 checkbox
---

# 按钮 checkbox 组件
checkbox组件是一种用户界面控件,用于在两种相互对立的状态（通常是“开”和“关”）之间进行切换。提供了一种直观的交互方式来触发功能或更改状态。 用于表单组件内，提交用户的选择。
#### 功能描述
1. 用户可以通过点击或滑动开关来切换其状态。
2. Switch开关在不同状态下会有明显的视觉差异，例如颜色变化、位置变化等。
3. 可以在开关旁边添加说明文本，以帮助用户理解其功能。
4. 切换状态时通常会伴随平滑的动画效果，增强用户体验。
#### 示例显示
![[06_checkbox/img.png]]
![[06_checkbox/img-1.png]]
## 事件

| 事件名称 | 说明         | 参数和示例                 |
|:-----|------------|-----------------------|
| focus    | 获取焦点时触发   | checkbox1_focus(){}   |
| blur     | 失去焦点触发     | checkbox1_blur(){}   |
| change   | 更改时触发      | checkbox1_change(){} |

## 方法

| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 属性

| 属性名称                 | 说明                                                  | 示例                                  |
|:---------------------|-----------------------------------------------------|-------------------------------------|
| reference            | 设置组件的refs                                           | refs:checkbox1                      |
| modal                | 设置组件的modal值名（必填项，否则运行时组件切换没反应）                      | bind:{value:'{whName}'}             |
| hidden               | 隐藏或显示组件，默认为false                                    | hidden:false                        |
| fieldLabel           | 标签名                                                 | fieldLabel:'勾选字段'                   |
| labelWidth           | 标签宽度，默认为auto                                        | labelWidth:80                       |
| weight               | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1                         | weight：1                            |
| size                 | 设置组件的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false | size:default                        |
| activeText           | 勾选后文本，默认为空                                          | activeText:''                       |
| inactiveText         | 未勾选文本，默认为空                                          | inactiveText:''                     |
| convType             | 值类型,有bool（布尔值）、str（字符串）、num（数值）三种类型,默认为bool         | convType:'bool'                     |
| disabled             | 是否禁用组件，默认为false                                     | disabled:false                      |
| paddingTop           | 距上的内边距，默认为0                                         | paddingTop:5                        |
| paddingRight         | 距右的内边距，默认为0                                         | paddingRight:5                      |
| paddingBottom        | 距下的内边距，默认为0                                         | paddingBottom:5                     |
| paddingLeft          | 距左的内边距，默认为0                                         | paddingLeft:5                       |
| cssBackgroundColor   | 设置整个组件的背景色，默认为none                                  | cssBackgroundColor:"#722ed1"        |
| labelBackgroundColor | 设置组件label的背景色，默认为none                               | labelBackgroundColor: '#eb2f96'     |
| labelSize            | 设置组件label的文字大小，默认为14px                              | labelSize: '12px'                   |
| labelColor           | 设置组件label的文字颜色，默认为'#606266'                         | labelColor: '#fbadd2'               |
| isLabelBlod          | 是否设置label的字题为粗体,默认为false                            | isLabelBlod:true                    |
| valueBackgroundColor | 设置组件value的背景色，默认为none                               | valueBackgroundColor: '#eb2f96'     |
| valueSize            | 设置组件value的文字大小，默认为14px                              | valueSize: '12px'                   |
| valueColor           | 设置组件value的文字颜色，默认为'#606266'                         | valueColor: '#fbadd2'               |