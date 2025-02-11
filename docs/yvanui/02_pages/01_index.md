---
title: 功能开发
date: 2024-03-29 22:02
author: yvan
------

每个典型的功能，至少由4个部分组成：

- .vue 文件, 基本功能模块前端文件，这个文件允许手写复杂前端逻辑、样式、复杂html等，他回引用 .design.js 文件，共同拼凑成一个前端功能模块
- .design.js 文件, 是低代码模块拖拽、开发出来的文件，这个文件是由设计器生成的
- .java 文件, 后端接口逻辑，这个文件是手写的，并且与前端功能模块对应，共同完成权限控制、数据交互等功能
- .xml 文件, Mybatis的SQL文件，这个文件会被二开设计器写入，同时也允许手写，当遇到复杂 SQL 时，可以手写定制 SQL

### vue 文件解析
```vue

```

### design.js 文件解析
```javascript

```

### java 文件示例
```java

```

### mybatis 文件示例
```xml

```

# 示例

| 组件名                                | 说明             |
|:-----------------------------------|----------------|
| [01_zback.md](./01_zback.md)       | 后台编码规范         |
| [01_system.md](./01_system.md)     | 系统标准函数         |
| [01_mybatis.md](./01_system.md)    | MyBatis框架特性    |
| [01_queryDsl.md](./01_queryDSL.md) | QueryDsl框架特性   |
| [01_logtrace.md](./01_logtrace.md) | 业务日志特性         |
| [example1.md](./01_zexample1.md)   | 示例1.基础资料       |
| [example2.md](./01_zexample2.md)   | 示例2.开发表单       |
| [example3.md](./01_zexample3.md)   | 示例3.开发ASN单据界面  |
| [example4.md](./01_zexample4.md)   | 示例4.主表、子表模式的开发 |
| [example5.md](./01_zexample5.md)   | 示例5.平板应用开发     |

## 前端组件表

| 组件名                                          | 说明       | 
|:---------------------------------------------|----------|
| [button](02_button.md)                       | 按钮       |
| [textfield](03_textfield.md)                 | 文本输入框    |
| [titlefield](./04_titlefield.md)             | 标题字段     |
| [treefield](./05_treefield.md)               | 树形下拉框    |
| [checkbox](./06_checkbox.md)                 | 勾选框      |
| [combo](./07_combo.md)                       | 下拉框      |
| [combogrid](./08_combogrid.md)               | 下拉表      |
| [combosearch](./09_combosearch.md)           | 自定义搜索框   |
| [datefield](./10_datefield.md)               | 日期输入框    |
| [daterangefield](./11_daterangefield.md)     | 日期范围输入框  |
| [datetimefield](./12_datetimefield.md)       | 日期时间输入框  |
| [fieldslot](./12_fieldslot.md)               | 字段插槽     |
| [filefield](./13_filefield.md)               | 文件上传     |
| [numberfield](./14_numberfield.md)           | 数字输入框    |
| [radiogroup](./15_radiogroup.md)             | 单选输入组    |
| [staticfield](./16_staticfield.md)           | 静态文本字段   |
| [form](./17_form.md)                         | 表单组件     |
| [toolbar](./18_toolbar.md)                   | 工具条      |
| [tree](./19_tree.md)                         | 树        |
| [split](./20_split.md)                       | 分割面板     |
| [alert](./21_alert.md)                       | 提示框      |
| [tabs](./22_tabs.md)                         | 选项卡      |
| [scrollbar](./23_scrollbar.md)               | 滚动容器     |
| [aggrid](./24_aggrid.md)                     | 表格       |
| [aggridplus](./25_aggridplus.md)             | 高级表格     |
| [divider](./26_divider.md)                   | 横向分割条    |
| [divider_formitem](./27_divider_formitem.md) | 表单横向分割条  |
| [iframe](./28_iframe.md)                     | Iframe容器 |
| [slot](./29_slot.md)                         | 插槽       |
| [img](./31_img.md)                           | 图片组件     |
| [yvlist](./34_yvlist.md)                     | 列表组件     |