---
title: 嘉兴-立体库-入库
desc: 嘉兴-立体库-入库
type: flow
navIgnore: false
tags:
  - wms/flow/jx_ltk_rk
---

# title
>[!workflow] jx_ltk_rk
> 嘉兴-立体库-入库
> 
> 部署号: d49687c3-ea8c-11ee-9a3b-62d14a515d0e
>
> 最后部署时间: 2024-03-25 17:48:27.802
> 
> 版本: 49
> 
> 定义号: jx_ltk_rk:49:d49db3b5-ea8c-11ee-9a3b-62d14a515d0e


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:message id="Message_0db1nq9" name="嘉兴-立体库-入库" />
  <bpmn:process id="jx_ltk_rk" name="嘉兴-立体库-入库" isExecutable="true">
    <bpmn:extensionElements>
      <camunda:executionListener class="com.yvan.bpmn.BpmnCommonStartListener" event="start" />
      <camunda:executionListener class="com.yvan.bpmn.BpmnCommonEndListener" event="end" />
    </bpmn:extensionElements>
    <bpmn:userTask id="onLtkArrive" name="上架完成回调">
      <bpmn:documentation>{
  connector: {
    uuid: '7b4223a3-2361-4da1-ad9e-51f34aed59cf',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:incoming>Flow_0zn4yd9</bpmn:incoming>
      <bpmn:outgoing>Flow_1chiclk</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:serviceTask id="sendPutCmd" name="发送上架指令" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.inbound.workflow.LtkWorkflow@sendPutCmd</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[
  	doc_id: doc_id,
	start_loc_id: start_loc_id,
	end_loc_id: end_loc_id,
	doc_line_no_list: doc_line_no_list,
  	bpmn_biz_key: bpmn_biz_key,
	container_code: container_code,
	doc_table_name: doc_table_name,
	priority: priority
]</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0t3hsi7</bpmn:incoming>
      <bpmn:outgoing>Flow_0zn4yd9</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:endEvent id="Event_0ioknsy">
      <bpmn:incoming>Flow_02pp9nh</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:serviceTask id="putComplete" name="释放预占并更新库存" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.inbound.workflow.LtkWorkflow@putComplete</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[
  	doc_id: doc_id,
	start_loc_id: start_loc_id,
	end_loc_id: end_loc_id,
	doc_line_no_list: doc_line_no_list,
  	bpmn_biz_key: bpmn_biz_key,
	container_code: container_code,
	doc_table_name: doc_table_name,
	priority: priority
]</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1chiclk</bpmn:incoming>
      <bpmn:outgoing>Flow_02pp9nh</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="onRKBcrScan" name="巷道口BCR扫描到条码">
      <bpmn:documentation>{
  connector: {
    uuid: 'f22cecd9-6826-4487-956f-69ecd8c32e6a',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:incoming>Flow_0qr3zo6</bpmn:incoming>
      <bpmn:outgoing>Flow_0t3hsi7</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:startEvent id="startInboundWithAgv" name="立体库-入库开始(侧叉搬运)">
      <bpmn:documentation>{
  connector: {
    uuid: '18c26a85-1585-4ebe-8de4-423bca659c6b',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:outgoing>Flow_0c44t8d</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_0zn4yd9" sourceRef="sendPutCmd" targetRef="onLtkArrive" />
    <bpmn:sequenceFlow id="Flow_1chiclk" sourceRef="onLtkArrive" targetRef="putComplete" />
    <bpmn:sequenceFlow id="Flow_02pp9nh" sourceRef="putComplete" targetRef="Event_0ioknsy" />
    <bpmn:sequenceFlow id="Flow_00ovvpt" sourceRef="onCCAgvArrive" targetRef="moveInv" />
    <bpmn:userTask id="onCCAgvArrive" name="侧叉AGV 搬运到达">
      <bpmn:documentation>{
  connector: {
    uuid: '887c6daf-08f1-498b-8d19-4b878159a377',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:incoming>Flow_16m3vkf</bpmn:incoming>
      <bpmn:outgoing>Flow_00ovvpt</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0c44t8d" sourceRef="startInboundWithAgv" targetRef="allocPutStation" />
    <bpmn:serviceTask id="createLtkPutTask" name="生成上架指令" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.wcs.wcs.LtkTaskCreator@createLtkPutTask</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[
  	doc_id: doc_id,
	start_loc_id: start_loc_id,
	end_loc_id: end_loc_id,
	doc_line_no_list: doc_line_no_list,
  	bpmn_biz_key: bpmn_biz_key,
	container_code: container_code,
	doc_table_name: doc_table_name,
	priority: priority
]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result" />
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0vmblhh</bpmn:incoming>
      <bpmn:outgoing>Flow_0qr3zo6</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_16m3vkf" sourceRef="createCCAgvTransportTask" targetRef="onCCAgvArrive" />
    <bpmn:serviceTask id="createCCAgvTransportTask" name="生成侧叉AGV搬运指令" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.wcs.wcs.CCAgvTaskCreator@createCCAgvTransportTask</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[
  	doc_id: doc_id,
	start_loc_id: start_loc_id,
	end_loc_id: end_loc_id,
	doc_line_no_list: doc_line_no_list,
  	bpmn_biz_key: bpmn_biz_key,
	container_code: container_code,
	doc_table_name: doc_table_name,
	priority: priority
]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result" />
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0kmpjh9</bpmn:incoming>
      <bpmn:outgoing>Flow_16m3vkf</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="allocPutLoc" name="调用上架规则分配货位" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.inbound.workflow.LtkWorkflow@allocPutLoc</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[
  	doc_id: doc_id,
	start_loc_id: end_loc_id,
	end_loc_id: 10020101010501L,
	doc_line_no_list: doc_line_no_list,
	bpmn_biz_key: bpmn_biz_key,
	container_code: container_code,
	doc_table_name: doc_table_name,
	priority: priority
]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">targetResult</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0oikf85</bpmn:incoming>
      <bpmn:incoming>Flow_0lchol5</bpmn:incoming>
      <bpmn:outgoing>Flow_0vmblhh</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0vmblhh" sourceRef="allocPutLoc" targetRef="createLtkPutTask" />
    <bpmn:sequenceFlow id="Flow_0kmpjh9" sourceRef="allocPutStation" targetRef="createCCAgvTransportTask" />
    <bpmn:serviceTask id="allocPutStation" name="分配站台" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.inbound.workflow.LtkWorkflow@allocPutStation</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[
  	doc_id: doc_id,
	start_loc_id: start_loc_id,
	end_loc_id: 1002010101L,
	doc_line_no_list: doc_line_no_list,
	container_code: container_code,
	doc_table_name: doc_table_name,
	priority: priority
]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result" />
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0c44t8d</bpmn:incoming>
      <bpmn:outgoing>Flow_0kmpjh9</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="moveInv" name="库存转移处理" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.inbound.workflow.LtkWorkflow@moveInv</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[
  	doc_id: doc_id,
	start_loc_id: start_loc_id,
	end_loc_id: end_loc_id,
	doc_line_no_list: doc_line_no_list,
  	bpmn_biz_key: bpmn_biz_key,
	container_code: container_code,
	doc_table_name: doc_table_name,
	priority: priority
]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result"></camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_00ovvpt</bpmn:incoming>
      <bpmn:outgoing>Flow_0oikf85</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="startInbound" name="开始入库流程(人工搬运)">
      <bpmn:documentation>{
  connector: {
    uuid: '6c97580f-a24a-4d71-887b-8ecf835bb509',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:outgoing>Flow_0lchol5</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0qr3zo6" sourceRef="createLtkPutTask" targetRef="onRKBcrScan" />
    <bpmn:sequenceFlow id="Flow_0oikf85" sourceRef="moveInv" targetRef="allocPutLoc" />
    <bpmn:sequenceFlow id="Flow_0t3hsi7" sourceRef="onRKBcrScan" targetRef="sendPutCmd" />
    <bpmn:sequenceFlow id="Flow_0lchol5" sourceRef="startInbound" targetRef="allocPutLoc" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="jx_ltk_rk">
      <bpmndi:BPMNShape id="BPMNShape_04mqntr" bpmnElement="onLtkArrive">
        <dc:Bounds x="1170" y="420" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1qtryyd" bpmnElement="sendPutCmd">
        <dc:Bounds x="920" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1rb8mdh" bpmnElement="Event_0ioknsy">
        <dc:Bounds x="1382" y="702" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1m256ou" bpmnElement="putComplete">
        <dc:Bounds x="1350" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0c2ogvp" bpmnElement="onRKBcrScan">
        <dc:Bounds x="710" y="420" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_00fi55s_di" bpmnElement="createLtkPutTask">
        <dc:Bounds x="620" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_030c3wy" bpmnElement="allocPutLoc">
        <dc:Bounds x="470" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1jdiaiy" bpmnElement="startInboundWithAgv">
        <dc:Bounds x="-288" y="32" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="-310" y="2" width="81" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1xbozd1_di" bpmnElement="allocPutStation">
        <dc:Bounds x="-230" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0wllqgi_di" bpmnElement="createCCAgvTransportTask">
        <dc:Bounds x="-40" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1wby82i_di" bpmnElement="onCCAgvArrive">
        <dc:Bounds x="130" y="420" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1l70n0d_di" bpmnElement="moveInv">
        <dc:Bounds x="310" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1ydcxop_di" bpmnElement="startInbound">
        <dc:Bounds x="470" y="-60" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="BPMNEdge_008bvfx" bpmnElement="Flow_0zn4yd9">
        <di:waypoint x="1020" y="180" />
        <di:waypoint x="1120" y="180" />
        <di:waypoint x="1120" y="460" />
        <di:waypoint x="1170" y="460" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_0zff1ud" bpmnElement="Flow_1chiclk">
        <di:waypoint x="1270" y="460" />
        <di:waypoint x="1300" y="460" />
        <di:waypoint x="1300" y="180" />
        <di:waypoint x="1350" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_01websc" bpmnElement="Flow_0t3hsi7">
        <di:waypoint x="810" y="460" />
        <di:waypoint x="850" y="460" />
        <di:waypoint x="850" y="180" />
        <di:waypoint x="920" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_1as4wl3" bpmnElement="Flow_02pp9nh">
        <di:waypoint x="1400" y="220" />
        <di:waypoint x="1400" y="702" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_00ovvpt_di" bpmnElement="Flow_00ovvpt">
        <di:waypoint x="230" y="460" />
        <di:waypoint x="270" y="460" />
        <di:waypoint x="270" y="180" />
        <di:waypoint x="310" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0qr3zo6_di" bpmnElement="Flow_0qr3zo6">
        <di:waypoint x="670" y="220" />
        <di:waypoint x="670" y="460" />
        <di:waypoint x="710" y="460" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0vmblhh_di" bpmnElement="Flow_0vmblhh">
        <di:waypoint x="570" y="180" />
        <di:waypoint x="620" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0c44t8d_di" bpmnElement="Flow_0c44t8d">
        <di:waypoint x="-270" y="68" />
        <di:waypoint x="-270" y="180" />
        <di:waypoint x="-230" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0kmpjh9_di" bpmnElement="Flow_0kmpjh9">
        <di:waypoint x="-130" y="180" />
        <di:waypoint x="-40" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_16m3vkf_di" bpmnElement="Flow_16m3vkf">
        <di:waypoint x="60" y="180" />
        <di:waypoint x="90" y="180" />
        <di:waypoint x="90" y="460" />
        <di:waypoint x="130" y="460" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0oikf85_di" bpmnElement="Flow_0oikf85">
        <di:waypoint x="410" y="180" />
        <di:waypoint x="470" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0lchol5_di" bpmnElement="Flow_0lchol5">
        <di:waypoint x="520" y="20" />
        <di:waypoint x="520" y="140" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


