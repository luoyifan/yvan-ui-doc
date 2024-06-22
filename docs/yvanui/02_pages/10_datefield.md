---
title: 日期输入框 datefield
---
# 日期输入框 datefield 组件
datefield组件是一种用户界面控件，允许用户通过交互方式选择日期。应用于表单场景，为用户提供便捷的日期输入方式。
#### 功能描述
1. 允许用户选择特定的日期。
2. 用户可以自定义显示和提交的日期格式，如“YYYY-MM-DD”或“DD/MM/YYYY”。
3. 在打开和关闭日期选择器时，通常会有平滑的动画效果，选中的日期和当前活跃的日期会被高亮显示，增强用户体验。。
4. 选中的日期会自动填充到输入框中，并可以提交为表单数据。
#### 示例显示
![[10_datefield/img.png]]
## 事件
调用组件的事件，同上button组件

| 事件名称 | 说明      | 参数和示例                                |
|:-----|---------|--------------------------------------|
| focus    | 获取焦点时触发   | datefield1_focus(){}     |
| blur     | 失去焦点触发    | datefield1_blur(){}      |
| change   | 更改时触发     | datefield1_change(){}    |
| input    | 输入时触发     | datefield1_input(){}     |

## 方法
方法一般使用于各类事件中，调用即可生效

| 方法名称 | 说明      | 参数和示例                        |
|:-----|---------|------------------------------|
| focus  | 组件聚焦 | this.refs.datefield1.focus() |

## 属性

| 属性名称                 | 说明                                                  | 示例                                  |
|:---------------------|-----------------------------------------------------|-------------------------------------|
| reference            | 设置组件的refs                                           | refs:textfield1                     |
| modal                | 设置组件的modal值名（必填项，否则运行时组件切换没反应                       | bind:{value:'{whName}'}             |
| hidden               | 隐藏或显示组件，默认为false                                    | hidden:false                        |
| fieldLabel           | 标签名                                                 | fieldLabel:'NewDate'                |
| required             | 组件是否必填，默认为false                                     | required:false                      |
| weight               | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1                         | weight：1                            |
| labelWidth           | 标签宽度，默认为auto                                        | labelWidth:80                       |
| size                 | 设置组件的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false | size:default                        |
| placeholder          | 占位字符，默认为：请输入                                        | placeholder:'请输入'                   |
| maxlength            | 最大长度，默认为空                                           | maxlength:''                        |
| disabled             | 是否禁用组件，默认为false                                     | disabled:false                      |
| readonly             | 是否允许只读，默认为false                                     | readonly:false                      |
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