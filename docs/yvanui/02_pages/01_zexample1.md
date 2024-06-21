---
title: 示例1 货主资料
date: 2024-03-29 22:02
author: yvan
---

# 页面布局
![[01_zexample1/01_owner_page.png]]

## 1. 创建货主资料页面
    进入二开平台，点击左侧【Web端功能模块】，选择父级目录，点击鼠标右键，选择【新建文件】。
![[01_zexample1/02_create_owner_design.png]]
    输入文件名称和选择模板类型，创建设计页面。
![[01_zexample1/03_create_owner_design_dialog.png]]

## 2. 进入货主资料页面
    双击左侧创建的Owner.design.js，进入设计页面。
![[01_zexample1/04_design_page.png]]

## 3. 添加数据表格组件
    点击左侧【工具箱】，选择【工具箱】>【高级】>【数据表格增强】组件，拖拽至货主资料页面内容区。
![[01_zexample1/05_add_agridpuls_comp.png]]

## 4. 设置数据表格属性
### 4.1 设置表格名称
    选中【数据表格增强】，编辑右侧【aggridplus 属性】，输入【reference】字段。
![[01_zexample1/06_agridpuls_ref.png]]

### 4.2 设置数据源
    点击【aggridplus 属性】侧【打开设计器】，选择【数据查询】，勾选【自动加载数据】，输入数据查询SQL、
    数据查询SQL参数，点击【保存】按钮。
![[01_zexample1/07_agridplus_datasource.png]]

### 4.3 设置显示字段
    输入数据查询SQL后，点击【分析显示字段】选择列表需要显示的字段，点击【添加】。
![[01_zexample1/08_agridplus_field_1.png]]
![[01_zexample1/09_agridplus_field_2.png]]
    选择【字段】，删除默认的field1、field2字段，点击【保存】。
![[01_zexample1/10_agridplus_field_3.png]]
![[01_zexample1/11_agridplus_field_4.png]]

## 5. 保存文件
    点击【菜单区】>【保存文件】
![[01_zexample1/12_agridplus_save.png]]

## 6. 注册菜单
    点击【设置】>【模块管理】>【添加菜单模块】，数据相关信息，点击【保存】。
![[01_zexample1/13_menu.png]]
    点击【设置】>【角色模块管理】>选中角色>勾选【货主资源】，点击【保存】。
![[01_zexample1/14_role_menu.png]]

## 7. 预览页面
    点击左侧【货主资料】菜单，进去货主资料页面。
![[01_zexample1/15_preview.png.png]]