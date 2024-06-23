---
title: 示例4，主表、子表模式的开发
date: 2024-03-29 22:02
author: yvan
------

# 示例4，主表、子表模式的开发

## 功能简介
已知产品与产品条形码是一对多的关系，现需要根据不同的产品展示对应的条形码信息，设计成上下两个表格，上表格显示产品信息，下表格显示产品条形码信息，下表格显示内容需根据上表格选中产品联动。
## 页面整体布局
![[01_zexample4/01_show.png]]

## 1. 创建设计页面
进入二开设计页面，点击左侧的【Web端功能模块】，选择目录，点击鼠标右键创建设计页面，在新建文件弹层中，输入文件名和选择模板类型，创建bastest.design.js文件。
![[01_zexample4/02_create_design_js.png]]

## 2. 设计页面布局
### 2.1 添加分割面板(split)组件
点击左侧侧边栏【工具箱】按钮，显示可用的工具箱内容，在【容器】里选中【分割面板】组件，点击鼠标左键拖动组件至设计页面，在【split 属性】选择上下结构，高度模式选择【填满】。
![[01_zexample4/03_design_split.png]]

## 2.2 添加数据表格(aggridplus)组件
点击左侧侧边栏【工具箱】按钮，显示可用的工具箱内容，在【高级】里选中【数据表格增强】组件，点击鼠标左键拖动组件至分割面板上下区域，在右侧属性栏【aggridplus 属性】设置reference属性。
![[01_zexample4/04_design_aggridplus_1.png]]
![[01_zexample4/04_design_aggridplus_2.png]]

## 2.2 设置数据表格(aggridplus)组件属性
选中【aggridplus】组件，在右侧属性栏【aggridplus 属性】设置reference属性。
![[01_zexample4/05_aggridplus_1_1.png]]
详情请移步[数据表格增强使用手册](./25_aggridplus.md)

## 2.3 设置数据表格(aggridplus)组件联动效果
选中下面的【aggridplus】组件，在右侧属性栏【aggridplus 属性】设置reference属性，选中【数据查询】设置SQL参数，勾选【自动观察】，当item_id发生变化时，会触发监听。
![[01_zexample4/06_aggridplus_2_1.png]]
![[01_zexample4/07_aggridplus_2_2.png]]
