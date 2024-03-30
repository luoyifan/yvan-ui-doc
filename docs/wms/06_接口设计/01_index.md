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

# WCS
[嘉兴WCS接口设计](./嘉兴WCS接口设计.md)

[嘉兴WCS接口设计合并版](./嘉兴WCS接口设计合并版.md)

# 列表
| 类型 | 系统 | 接口 |
| ------ | ---- | ---- |
| Method |  | [1.5.1-发送钉钉消息](./connnector.sendDingTalkMsg) <br/> /wms/tool/BpmnUtils@sendDingTalkMsg |
| Method |  | [1.5.2-打印调试信息](./connnector.tool.print) <br/> /wms/tool/BpmnUtils@print |
| Method |  | [2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运)](./connnector.LtkWorkflow.startInboundWithAgv) <br/> /wms/inbound/workflow/LtkWorkflow@startInboundWithAgv |
| Method |  | [2.1.2-嘉兴-立体库-取消AGV任务(测试)](./connnector.Test2.cancelAgvTask) <br/> /wms/Test2@cancelAgvTask |
| Method |  | [2.1.3-嘉兴-立体库-到达托盘立体库入库口](./connnector.pilerInboundBCRArrived) <br/> /wms/Test2@pilerInboundBCRArrived |
| Method |  | [2.1.4-堆垛机完成](./connnector.pilerFinish) <br/> /wms/Test2@pilerFinish |
| Method |  | [2.2.1-嘉兴-立体库-出库(测试)](./connnector.Test3.startCk) <br/> /wms/Test3@startCk |
| Method |  | [2.2.2-堆垛机到达](./connnector.ltkPilerArrive) <br/> /wms/Test3@ltkPilerArrive |
| Method |  | [2.2.3-侧叉搬运完成](./connnector.agvArrive) <br/> /wms/Test3@agvArrive |
| Method |  | [2.2.4-拣货完成](./connnector.pickFinish) <br/> /wms/Test3@pickFinish |
| External | WCS | [3.1.1-托盘搬运任务添加](./connnector.asrsPalletTaskAdd) <br/> /wcs/asrsPalletTaskAdd |
| External | WCS | [3.1.2-托盘任务优先级调整](./connnector.asrsPalletPriorityModify) <br/> /wcs/asrsPalletPriorityModify |
| External | WCS | [3.1.3-托盘搬运任务取消](./connnector.asrsPalletTaskCancel) <br/> /wcs/asrsPalletTaskCancel |
| External | PES | [3.2.1-托盘搬运任务添加](./connnector.pesPalletTransportAdd) <br/> /pes/pesPalletTransportAdd |
| External | PES | [3.2.2-托盘任务优先级调整](./connnector.pesPalletPriorityModify) <br/> /pes/pesPalletPriorityModify |
| External | PES | [3.2.3-托盘搬运任务取消](./connnector.pesPalletTaskCancel) <br/> /pes/pesPalletTaskCancel |
| External | MFC | [3.3.1-多穿任务添加](./connnector.alkTaskAdd) <br/> /mfc/alkTaskAdd |
| External | MFC | [3.3.2-多穿任务优先级调整](./connnector.alkTaskPriorityModify) <br/> /mfc/alkTaskPriorityModify |
| External | MFC | [3.3.3-多穿任务取消](./connnector.alkTaskCancel) <br/> /mfc/alkTaskCancel |
| External | RCS | [3.5.1-托盘搬运任务添加](./connnector.agvTransportAdd) <br/> /rcs/agvTransportAdd |
| External | RCS | [3.5.2-托盘任务优先级调整](./connnector.avgTaskPriorityModify) <br/> /avgTaskPriorityModify |
| External | RCS | [3.5.3-托盘搬运任务取消](./connnector.agvTaskCancel) <br/> /rcs/agvTaskCancel |
| External | RCS | [3.6.1-托盘搬运任务添加](./connnector.ccAgvTransportAdd) <br/> /rcs/ccAgvTransportAdd |
| External | RCS | [3.6.2-托盘叠盘任务添加](./connnector.ccAgvStackingAdd) <br/> /rcs/ccAgvStackingAdd |
| External | RCS | [3.6.3-托盘任务优先级调整](./connnector.ccAgvTaskPriorityModify) <br/> /rcs/ccAgvTaskPriorityModify |
| External | RCS | [3.6.4-托盘搬运任务取消](./connnector.ccAgvTaskCancel) <br/> /rcs/ccAgvTaskCancel |
| External | RCS | [3.7.1-料箱搬运任务添加](./connnector.ctuAgvTransportAdd) <br/> /rcs/ctuAgvTransportAdd |
| External | RCS | [3.7.2-料箱任务优先级调整](./connnector.ctuTaskPriorityModify) <br/> /rcs/ctuTaskPriorityModify |
| External | RCS | [3.7.3-料箱搬运任务取消](./connnector.ctuTaskCancel) <br/> /rcs/ctuTaskCancel |
| Internal | WCS | [4.1.1-立体库巷道(堆垛机)可用状态-设备回调](./connnector.asrsRoadStatusModify) <br/> /wcs/asrsRoadStatusModify |
| Internal |  | [4.1.2-托盘搬运任务请求-设备回调](./connnector.asrsPalletTaskRequest) <br/> /wcs/asrsPalletTaskRequest |
| Internal |  | [4.1.3-拆盘机空托盘组补给请求-设备回调](./connnector.asrsEmptyPalletOutRequest) <br/> /wcs/asrsEmptyPalletOutRequest |
| Internal |  | [4.1.4-托盘任务状态反馈-设备回调](./connnector.asrsPalletTaskCallback) <br/> /wcs/asrsPalletTaskCallback |
| Internal |  | [4.2.1-托盘搬运任务请求-设备回调](./connnector.pesPalletTaskRequest) <br/> /rcs/pesPalletTaskRequest |
| Internal |  | [4.2.2-任务状态反馈-设备回调](./connnector.pesPalletTaskCallback) <br/> /rcs/pesPalletTaskCallback |
| Internal |  | [4.3.1-多穿任务请求-设备回调](./connnector.alkTaskRequest) <br/> /mfc/alkTaskRequest |
| Internal |  | [4.3.2-任务状态反馈-设备回调](./connnector.alkTaskCallback) <br/> /mfc/alkTaskCallback |
| Internal |  | [4.5.1-任务状态反馈-设备回调](./connnector.agvTaskCallback) <br/> /rcs/agvTaskCallback |
| Internal |  | [4.6.1-侧叉任务状态反馈-设备回调](./connnector.ccAgvTaskCallback) <br/> /rcs/ccAgvTaskCallback |
| Internal |  | [4.7.1-任务状态反馈-设备回调](./connnector.ctuTaskCallback) <br/> /rcs/ctuTaskCallback |
| Method | WMS | [嘉兴-立体库-DEMO1](./connnector.demo1) <br/> /wms/Test2@demo1 |