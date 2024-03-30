---
title: 嘉兴WCS接口设计
date: 2024-03-30 13:08
author: yvan
---

# 设备接口定义
| 系统类型 | 分类                     | 接口                                                                               |
| -------- | ------------------------ | ---------------------------------------------------------------------------------- |
| WCS      | 3.1-托盘立库             | [3.1.1-托盘搬运任务添加](./connnector.asrsPalletTaskAdd)             |
|          |                          | [3.1.2-托盘任务优先级调整](./connnector.asrsPalletPriorityModify.md) |
|          |                          | [3.1.3-托盘搬运任务取消](./connnector.asrsPalletTaskCancel.md)       |
| PES      | 3.2-托盘密集库(白盒模式) | [3.2.1-托盘搬运任务添加](./connnector.pesPalletTransportAdd.md)      |
|          |                          | [3.2.2-托盘任务优先级调整](./connnector.pesPalletPriorityModify.md)  |
|          |                          | [3.2.3-托盘搬运任务取消](./connnector.pesPalletTaskCancel.md)        |
| MFC      | 3.3-穿梭车库             | [3.3.1-多穿任务添加](./connnector.alkTaskAdd.md)                     |
|          |                          | [3.3.2-多穿任务优先级调整](./connnector.alkTaskPriorityModify.md)    |
|          |                          | [3.3.3-多穿任务取消](./connnector.alkTaskCancel.md)                  |
| RCS      | 3.5-顶升式AGV            | [3.5.1-托盘搬运任务添加](./connnector.agvTransportAdd.md)            |
|          |                          | [3.5.2-托盘任务优先级调整](./connnector.avgTaskPriorityModify.md)    |
|          |                          | [3.5.3-托盘搬运任务取消](./connnector.agvTaskCancel.md)              |
| RCS      | 3.6-侧叉式AGV            | [3.6.1-托盘搬运任务添加](./connnector.ccAgvTransportAdd.md)          |
|          |                          | [3.6.2-托盘叠盘任务添加](./connnector.ccAgvStackingAdd.md)           |
|          |                          | [3.6.3-托盘任务优先级调整](./connnector.ccAgvTaskPriorityModify.md)  |
|          |                          | [3.6.4-托盘搬运任务取消](./connnector.ccAgvTaskCancel.md)            |
| RCS      | 3.7-ctu(包含三层飞梭)    | [3.7.1-料箱搬运任务添加](./connnector.ctuAgvTransportAdd.md)         |
|          |                          | [3.7.2-料箱任务优先级调整](./connnector.ctuTaskPriorityModify.md)    |
|          |                          | [3.7.3-料箱搬运任务取消](./connnector.ctuTaskCancel.md)              |

# WMS接口定义

| 系统类型 | 分类                              | 接口                                                                                             |
| -------- | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| WCS      | 托盘立库-设备回调                 | [4.1.1-立体库巷道(堆垛机)可用状态-设备回调](./connnector.asrsRoadStatusModify.md)  |
|          |                                   | [4.1.2-托盘搬运任务请求-设备回调](./connnector.asrsPalletTaskRequest.md)           |
|          |                                   | [4.1.3-拆盘机空托盘组补给请求-设备回调](./connnector.asrsEmptyPalletOutRequest.md) |
|          |                                   | [4.1.4-托盘任务状态反馈-设备回调](./connnector.asrsPalletTaskCallback.md)          |
| PES      | 4.2-托盘密集库(白盒模式)-设备回调 | [4.2.1-托盘搬运任务请求-设备回调](./connnector.pesPalletTaskRequest.md)]           |
|          |                                   | [4.2.2-任务状态反馈-设备回调](./connnector.pesPalletTaskCallback.md)               |
| MFC      | 4.3-穿梭车库-设备回调             | [4.3.1-多穿任务请求-设备回调](./connnector.alkTaskRequest.md)                      |
|          |                                   | [4.3.2-任务状态反馈-设备回调](./connnector.alkTaskCallback.md)                     |
| RCS      | 4.5-顶升式AGV-设备回调            | [4.5.1-任务状态反馈-设备回调](./connnector.agvTaskCallback.md)                     |
| RCS      | 4.6-侧叉式AGV-设备回调            | [4.6.1-侧叉任务状态反馈-设备回调](./connnector.ccAgvTaskCallback.md)               |
| RCS      | 4.7-ctu(包含三层飞梭)-设备回调    | [4.7.1-任务状态反馈-设备回调](./connnector.ctuTaskCallback.md)                     |