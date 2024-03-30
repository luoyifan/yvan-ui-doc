---
title: 接口设计
date: 2024-03-29 22:02
author: yvan
---
# title
>[!tip] 接口设计
>接口目录

```json
{ 
	"args": [ 
		{
			"type": "connector"
		}
	] 
}
```


```dataview
table desc as "描述", apiType as "类型", system as "系统"
from "wms/06_接口设计"
where type = "connector"
```

# WCS
[嘉兴WCS接口设计](./嘉兴WCS接口设计.md)

[嘉兴WCS接口设计合并版](./嘉兴WCS接口设计合并版.md)

# 列表
| 接口名 | 中文 | 类型 | 系统 | URL |
| ------ | ---- | ---- | ---- | --- |
| [agvArrive](./connnector.agvArrive) | 2.2.3-侧叉搬运完成 | Method |  | /wms/Test3@agvArrive | 
| [agvTaskCallback](./connnector.agvTaskCallback) | 4.5.1-任务状态反馈-设备回调 | Internal |  | /rcs/agvTaskCallback | 
| [agvTaskCancel](./connnector.agvTaskCancel) | 3.5.3-托盘搬运任务取消 | External | RCS | /rcs/agvTaskCancel | 
| [agvTransportAdd](./connnector.agvTransportAdd) | 3.5.1-托盘搬运任务添加 | External | RCS | /rcs/agvTransportAdd | 
| [alkTaskAdd](./connnector.alkTaskAdd) | 3.3.1-多穿任务添加 | External | MFC | /mfc/alkTaskAdd | 
| [alkTaskCallback](./connnector.alkTaskCallback) | 4.3.2-任务状态反馈-设备回调 | Internal |  | /mfc/alkTaskCallback | 
| [alkTaskCancel](./connnector.alkTaskCancel) | 3.3.3-多穿任务取消 | External | MFC | /mfc/alkTaskCancel | 
| [alkTaskPriorityModify](./connnector.alkTaskPriorityModify) | 3.3.2-多穿任务优先级调整 | External | MFC | /mfc/alkTaskPriorityModify | 
| [alkTaskRequest](./connnector.alkTaskRequest) | 4.3.1-多穿任务请求-设备回调 | Internal |  | /mfc/alkTaskRequest | 
| [asrsEmptyPalletOutRequest](./connnector.asrsEmptyPalletOutRequest) | 4.1.3-拆盘机空托盘组补给请求-设备回调 | Internal |  | /wcs/asrsEmptyPalletOutRequest | 
| [asrsPalletPriorityModify](./connnector.asrsPalletPriorityModify) | 3.1.2-托盘任务优先级调整 | External | WCS | /wcs/asrsPalletPriorityModify | 
| [asrsPalletTaskAdd](./connnector.asrsPalletTaskAdd) | 3.1.1-托盘搬运任务添加 | External | WCS | /wcs/asrsPalletTaskAdd | 
| [asrsPalletTaskCallback](./connnector.asrsPalletTaskCallback) | 4.1.4-托盘任务状态反馈-设备回调 | Internal |  | /wcs/asrsPalletTaskCallback | 
| [asrsPalletTaskCancel](./connnector.asrsPalletTaskCancel) | 3.1.3-托盘搬运任务取消 | External | WCS | /wcs/asrsPalletTaskCancel | 
| [asrsPalletTaskRequest](./connnector.asrsPalletTaskRequest) | 4.1.2-托盘搬运任务请求-设备回调 | Internal |  | /wcs/asrsPalletTaskRequest | 
| [asrsRoadStatusModify](./connnector.asrsRoadStatusModify) | 4.1.1-立体库巷道(堆垛机)可用状态-设备回调 | Internal | WCS | /wcs/asrsRoadStatusModify | 
| [avgTaskPriorityModify](./connnector.avgTaskPriorityModify) | 3.5.2-托盘任务优先级调整 | External | RCS | /avgTaskPriorityModify | 
| [ccAgvStackingAdd](./connnector.ccAgvStackingAdd) | 3.6.2-托盘叠盘任务添加 | External | RCS | /rcs/ccAgvStackingAdd | 
| [ccAgvTaskCallback](./connnector.ccAgvTaskCallback) | 4.6.1-侧叉任务状态反馈-设备回调 | Internal |  | /rcs/ccAgvTaskCallback | 
| [ccAgvTaskCancel](./connnector.ccAgvTaskCancel) | 3.6.4-托盘搬运任务取消 | External | RCS | /rcs/ccAgvTaskCancel | 
| [ccAgvTaskPriorityModify](./connnector.ccAgvTaskPriorityModify) | 3.6.3-托盘任务优先级调整 | External | RCS | /rcs/ccAgvTaskPriorityModify | 
| [ccAgvTransportAdd](./connnector.ccAgvTransportAdd) | 3.6.1-托盘搬运任务添加 | External | RCS | /rcs/ccAgvTransportAdd | 
| [ctuAgvTransportAdd](./connnector.ctuAgvTransportAdd) | 3.7.1-料箱搬运任务添加 | External | RCS | /rcs/ctuAgvTransportAdd | 
| [ctuTaskCallback](./connnector.ctuTaskCallback) | 4.7.1-任务状态反馈-设备回调 | Internal |  | /rcs/ctuTaskCallback | 
| [ctuTaskCancel](./connnector.ctuTaskCancel) | 3.7.3-料箱搬运任务取消 | External | RCS | /rcs/ctuTaskCancel | 
| [ctuTaskPriorityModify](./connnector.ctuTaskPriorityModify) | 3.7.2-料箱任务优先级调整 | External | RCS | /rcs/ctuTaskPriorityModify | 
| [demo1](./connnector.demo1) | 嘉兴-立体库-DEMO1 | Method | WMS | /wms/Test2@demo1 | 
| [ltkPilerArrive](./connnector.ltkPilerArrive) | 2.2.2-堆垛机到达 | Method |  | /wms/Test3@ltkPilerArrive | 
| [LtkWorkflow.startInboundWithAgv](./connnector.LtkWorkflow.startInboundWithAgv) | 2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运) | Method |  | /wms/inbound/workflow/LtkWorkflow@startInboundWithAgv | 
| [pesPalletPriorityModify](./connnector.pesPalletPriorityModify) | 3.2.2-托盘任务优先级调整 | External | PES | /pes/pesPalletPriorityModify | 
| [pesPalletTaskCallback](./connnector.pesPalletTaskCallback) | 4.2.2-任务状态反馈-设备回调 | Internal |  | /rcs/pesPalletTaskCallback | 
| [pesPalletTaskCancel](./connnector.pesPalletTaskCancel) | 3.2.3-托盘搬运任务取消 | External | PES | /pes/pesPalletTaskCancel | 
| [pesPalletTaskRequest](./connnector.pesPalletTaskRequest) | 4.2.1-托盘搬运任务请求-设备回调 | Internal |  | /rcs/pesPalletTaskRequest | 
| [pesPalletTransportAdd](./connnector.pesPalletTransportAdd) | 3.2.1-托盘搬运任务添加 | External | PES | /pes/pesPalletTransportAdd | 
| [pickFinish](./connnector.pickFinish) | 2.2.4-拣货完成 | Method |  | /wms/Test3@pickFinish | 
| [pilerFinish](./connnector.pilerFinish) | 2.1.4-堆垛机完成 | Method |  | /wms/Test2@pilerFinish | 
| [pilerInboundBCRArrived](./connnector.pilerInboundBCRArrived) | 2.1.3-嘉兴-立体库-到达托盘立体库入库口 | Method |  | /wms/Test2@pilerInboundBCRArrived | 
| [sendDingTalkMsg](./connnector.sendDingTalkMsg) | 1.5.1-发送钉钉消息 | Method |  | /wms/tool/BpmnUtils@sendDingTalkMsg | 
| [Test2.cancelAgvTask](./connnector.Test2.cancelAgvTask) | 2.1.2-嘉兴-立体库-取消AGV任务(测试) | Method |  | /wms/Test2@cancelAgvTask | 
| [Test3.startCk](./connnector.Test3.startCk) | 2.2.1-嘉兴-立体库-出库(测试) | Method |  | /wms/Test3@startCk | 
| [tool.print](./connnector.tool.print) | 1.5.2-打印调试信息 | Method |  | /wms/tool/BpmnUtils@print | 