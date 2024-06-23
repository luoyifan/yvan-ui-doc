---
title: 单选组 radiogroup
---

# 单选组 radiogroup 组件
radiogroup是一种用户界面控件，允许用户从一组选项中选择一个选项。它通常用于需要用户在几个互斥的选项中做出选择的场景。单选框组通常与表单元素结合使用，用户可以提交所选择的单选框值作为表单数据。
#### 功能描述
1. 一组单选框中只能选择一个选项。
2. 可以将单选框设置为禁用状态，防止用户选择该选项。
#### 示例显示
![[15_radiogroup/img_1.png]]
#### 数据-枚举操作步骤
1. 选中组件-属性栏选择数据-选择枚举类型。
2. 点击添加一项，输入对应的枚举值和枚举名。
####
![[15_radiogroup/img.png]]
![[15_radiogroup/img_2.png]]
#### 数据-字典操作步骤
1. 选中组件-属性栏选择数据-选择字典类型。
2. 点击添加一项，输入对应的枚举值和枚举名。
####
![[15_radiogroup/img_3.png]]
![[15_radiogroup/img_4.png]]
## 事件
调用组件的事件，同上button组件

| 事件名称 | 说明      | 参数和示例                                |
|:-----|---------|--------------------------------------|
| change   | 更改时触发     | radiogroup1_change(){}    |

## 方法

| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 属性

| 属性名称                  | 说明                                                  | 示例                    |
|:----------------------|-----------------------------------------------------|-----------------------|
| reference             | 设置组件的refs                                           | refs:radiogroup1      |
| modal                 | 设置组件的modal值名                                        | bind:{value:'{whExample}'} |
| hidden                | 隐藏或显示组件，默认为false                                    | hidden:false          |
| fieldLabel            | 标签名                                                 | fieldLabel:'Radio'    |
| required              | 组件是否必填，默认为false                                     | required:false        |
| weight                | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1                         | weight：1              |
| labelWidth            | 标签宽度，默认为auto                                        | labelWidth:80         |
| validateOnRuleChange  | 是否立刻校验，默认为false                                     | validateOnRuleChange:false |
| showMessage           | 是否显示错误，默认为false                                     | showMessage:false     |
| inlineMessage         | 是否显示内敛错误，默认为false                                   | inlineMessage:false   |
| size                  | 设置组件的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false | size:default   |
| radioMode             | 显示模式，有radio和radioButton模式，默认为radio                  | radioMode:radio       |
| isCard                | 是否显示边框，默认为false                                     | isCard:false          |
| disabled              | 是否禁用组件，默认为false                                     | disabled:false        |
| readonly              | 是否允许只读，默认为false                                     | readonly:false        |