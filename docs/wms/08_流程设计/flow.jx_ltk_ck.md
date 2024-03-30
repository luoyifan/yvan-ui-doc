---
title: jx_ltk_ck
desc: 嘉兴-立体库-出库
type: flow
tags:
  - wms/flow/jx_ltk_ck
---

# title
>[!workflow] jx_ltk_ck
> 嘉兴-立体库-出库
> 
> 部署号: df3b2fc2-e5a0-11ee-a2ef-f42679af3859
>
> 最后部署时间: 2024-03-19 11:29:19.779
> 
> 版本: 
> 
> 定义号: 


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="jx_ltk_ck" name="嘉兴-立体库-出库" isExecutable="true">
    <bpmn:extensionElements>
      <camunda:executionListener class="com.yvan.bpmn.BpmnCommonStartListener" event="start" />
      <camunda:executionListener class="com.yvan.bpmn.BpmnCommonEndListener" event="end" />
    </bpmn:extensionElements>
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:documentation>{
  connector: {
    uuid: '8d14b66d-974f-4652-802a-284609b09efa',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:outgoing>Flow_09cqlw9</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:serviceTask id="Activity_0yxobqh" name="立体库出库-WCS指令发送" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test3#pilerMsgSend</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">0000</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_09cqlw9</bpmn:incoming>
      <bpmn:outgoing>Flow_0ert5mf</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="ltkPilerArrive" name="堆垛机搬运完成">
      <bpmn:documentation>{
  connector: {
    uuid: 'e2b53b8f-14c1-4dad-bac5-2225a52b7fab',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:incoming>Flow_0ert5mf</bpmn:incoming>
      <bpmn:outgoing>Flow_1jzfebo</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1jzfebo" sourceRef="ltkPilerArrive" targetRef="Activity_13fsyik" />
    <bpmn:sequenceFlow id="Flow_09cqlw9" sourceRef="StartEvent_1" targetRef="Activity_0yxobqh" />
    <bpmn:sequenceFlow id="Flow_0ert5mf" sourceRef="Activity_0yxobqh" targetRef="ltkPilerArrive" />
    <bpmn:serviceTask id="Activity_13fsyik" name="下发侧叉指令" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test2#print</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">0000</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1jzfebo</bpmn:incoming>
      <bpmn:outgoing>Flow_0stfdrf</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="agvArrive" name="侧叉搬运完成">
      <bpmn:documentation>{
  connector: {
    uuid: '2391f985-3e14-4005-9114-93e5daf94f61',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:incoming>Flow_0stfdrf</bpmn:incoming>
      <bpmn:outgoing>Flow_19mbs6r</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0stfdrf" sourceRef="Activity_13fsyik" targetRef="agvArrive" />
    <bpmn:sequenceFlow id="Flow_19mbs6r" sourceRef="agvArrive" targetRef="Activity_08hxgsl" />
    <bpmn:serviceTask id="Activity_08hxgsl" name="生成拣货界面需要的数据" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test2#print</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">0000</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_19mbs6r</bpmn:incoming>
      <bpmn:outgoing>Flow_1flbhqw</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="pickFinish" name="拣货完成">
      <bpmn:documentation>{
  connector: {
    uuid: '756362f9-9b22-46e1-86f5-d180e014637e',
  },
  ui_modules: [],
}</bpmn:documentation>
      <bpmn:incoming>Flow_1flbhqw</bpmn:incoming>
      <bpmn:outgoing>Flow_079gcjh</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1flbhqw" sourceRef="Activity_08hxgsl" targetRef="pickFinish" />
    <bpmn:exclusiveGateway id="Gateway_1s2ej0u" default="Flow_1v2dl30">
      <bpmn:incoming>Flow_079gcjh</bpmn:incoming>
      <bpmn:outgoing>Flow_0mnyslg</bpmn:outgoing>
      <bpmn:outgoing>Flow_1v2dl30</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0mnyslg" name="拣空" sourceRef="Gateway_1s2ej0u" targetRef="Activity_0agilzq">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression" />
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_1v2dl30" sourceRef="Gateway_1s2ej0u" targetRef="Activity_1easni6" />
    <bpmn:serviceTask id="Activity_0agilzq" name="下发叠盘机任务至WCS" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test2#print</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">0000</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0mnyslg</bpmn:incoming>
      <bpmn:outgoing>Flow_13hz5lu</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_08f11j7" sourceRef="Activity_1easni6" targetRef="Activity_1ak35lg" />
    <bpmn:endEvent id="Event_1kb4h84">
      <bpmn:incoming>Flow_0sq0rkn</bpmn:incoming>
      <bpmn:incoming>Flow_13hz5lu</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0sq0rkn" sourceRef="Activity_1ak35lg" targetRef="Event_1kb4h84" />
    <bpmn:sequenceFlow id="Flow_13hz5lu" sourceRef="Activity_0agilzq" targetRef="Event_1kb4h84" />
    <bpmn:serviceTask id="Activity_1easni6" name="余料回库" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test2#print</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">0000</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1v2dl30</bpmn:incoming>
      <bpmn:outgoing>Flow_08f11j7</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1ak35lg" name="调用立体库入库流程" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test2#print</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">0000</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_08f11j7</bpmn:incoming>
      <bpmn:outgoing>Flow_0sq0rkn</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_079gcjh" sourceRef="pickFinish" targetRef="Gateway_1s2ej0u" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="jx_ltk_ck">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0fk3n35_di" bpmnElement="Activity_0yxobqh">
        <dc:Bounds x="260" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0uvmujw_di" bpmnElement="ltkPilerArrive">
        <dc:Bounds x="450" y="290" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_10zcgae_di" bpmnElement="Activity_13fsyik">
        <dc:Bounds x="630" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0z1062c" bpmnElement="agvArrive">
        <dc:Bounds x="810" y="290" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_01llq8z_di" bpmnElement="Activity_08hxgsl">
        <dc:Bounds x="970" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_08s1ys9" bpmnElement="pickFinish">
        <dc:Bounds x="1200" y="-140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1s2ej0u_di" bpmnElement="Gateway_1s2ej0u" isMarkerVisible="true">
        <dc:Bounds x="1345" y="85" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0e8d2el_di" bpmnElement="Activity_0agilzq">
        <dc:Bounds x="1520" y="220" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1kb4h84_di" bpmnElement="Event_1kb4h84">
        <dc:Bounds x="1962" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1vaooqm_di" bpmnElement="Activity_1easni6">
        <dc:Bounds x="1520" y="70" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1b88uta_di" bpmnElement="Activity_1ak35lg">
        <dc:Bounds x="1750" y="70" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1jzfebo_di" bpmnElement="Flow_1jzfebo">
        <di:waypoint x="550" y="330" />
        <di:waypoint x="580" y="330" />
        <di:waypoint x="580" y="120" />
        <di:waypoint x="630" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_09cqlw9_di" bpmnElement="Flow_09cqlw9">
        <di:waypoint x="209" y="120" />
        <di:waypoint x="260" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ert5mf_di" bpmnElement="Flow_0ert5mf">
        <di:waypoint x="360" y="120" />
        <di:waypoint x="410" y="120" />
        <di:waypoint x="410" y="330" />
        <di:waypoint x="450" y="330" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0stfdrf_di" bpmnElement="Flow_0stfdrf">
        <di:waypoint x="730" y="120" />
        <di:waypoint x="770" y="120" />
        <di:waypoint x="770" y="330" />
        <di:waypoint x="810" y="330" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_19mbs6r_di" bpmnElement="Flow_19mbs6r">
        <di:waypoint x="910" y="330" />
        <di:waypoint x="940" y="330" />
        <di:waypoint x="940" y="120" />
        <di:waypoint x="970" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1flbhqw_di" bpmnElement="Flow_1flbhqw">
        <di:waypoint x="1070" y="120" />
        <di:waypoint x="1115" y="120" />
        <di:waypoint x="1115" y="-100" />
        <di:waypoint x="1200" y="-100" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0mnyslg_di" bpmnElement="Flow_0mnyslg">
        <di:waypoint x="1370" y="135" />
        <di:waypoint x="1370" y="260" />
        <di:waypoint x="1520" y="260" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1414" y="263" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1v2dl30_di" bpmnElement="Flow_1v2dl30">
        <di:waypoint x="1395" y="110" />
        <di:waypoint x="1520" y="110" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_08f11j7_di" bpmnElement="Flow_08f11j7">
        <di:waypoint x="1620" y="110" />
        <di:waypoint x="1750" y="110" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0sq0rkn_di" bpmnElement="Flow_0sq0rkn">
        <di:waypoint x="1850" y="110" />
        <di:waypoint x="1890" y="110" />
        <di:waypoint x="1890" y="180" />
        <di:waypoint x="1962" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_13hz5lu_di" bpmnElement="Flow_13hz5lu">
        <di:waypoint x="1620" y="260" />
        <di:waypoint x="1890" y="260" />
        <di:waypoint x="1890" y="180" />
        <di:waypoint x="1962" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_079gcjh_di" bpmnElement="Flow_079gcjh">
        <di:waypoint x="1300" y="-100" />
        <di:waypoint x="1370" y="-100" />
        <di:waypoint x="1370" y="85" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


