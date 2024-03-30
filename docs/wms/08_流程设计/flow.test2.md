---
title: test2
desc: test2
type: flow
tags:
  - wms/flow/test2
---

# title
>[!workflow] test2
> test2
> 
> 部署号: 373483cf-e6c8-11ee-90a0-f42679af3859
>
> 最后部署时间: 2024-03-20 22:43:28.91
> 
> 版本: 1
> 
> 定义号: test2:1:37421861-e6c8-11ee-90a0-f42679af3859


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="test2" name="test2" isExecutable="true">
    <bpmn:extensionElements>
      <camunda:executionListener class="com.yvan.bpmn.BpmnCommonStartListener" event="start" />
      <camunda:executionListener class="com.yvan.bpmn.BpmnCommonEndListener" event="end" />
    </bpmn:extensionElements>
    <bpmn:sequenceFlow id="Flow_1cezayx" sourceRef="StartEvent_1" targetRef="step1" />
    <bpmn:endEvent id="Event_0nr4k87">
      <bpmn:incoming>Flow_0w9jrj6</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_12o9cgh" sourceRef="Activity_07u8umu" targetRef="Activity_0p72zd0" />
    <bpmn:serviceTask id="Activity_07u8umu" name="运行1" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test@helloWorld</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[]</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_198du8j</bpmn:incoming>
      <bpmn:outgoing>Flow_12o9cgh</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="Activity_0p72zd0" name="等待调用">
      <bpmn:incoming>Flow_12o9cgh</bpmn:incoming>
      <bpmn:outgoing>Flow_0w9jrj6</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0w9jrj6" sourceRef="Activity_0p72zd0" targetRef="Event_0nr4k87" />
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_1cezayx</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:serviceTask id="step1" name="step1" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test@step1</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">0001</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1cezayx</bpmn:incoming>
      <bpmn:outgoing>Flow_198du8j</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_198du8j" sourceRef="step1" targetRef="Activity_07u8umu" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="test2">
      <bpmndi:BPMNShape id="Event_0e3r37l_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_14jbkri" bpmnElement="step1">
        <dc:Bounds x="290" y="80" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1xi29l6_di" bpmnElement="Activity_07u8umu">
        <dc:Bounds x="460" y="80" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_03s1gf0_di" bpmnElement="Activity_0p72zd0">
        <dc:Bounds x="640" y="80" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0nr4k87_di" bpmnElement="Event_0nr4k87">
        <dc:Bounds x="832" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1cezayx_di" bpmnElement="Flow_1cezayx">
        <di:waypoint x="209" y="120" />
        <di:waypoint x="290" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_12o9cgh_di" bpmnElement="Flow_12o9cgh">
        <di:waypoint x="560" y="120" />
        <di:waypoint x="640" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0w9jrj6_di" bpmnElement="Flow_0w9jrj6">
        <di:waypoint x="740" y="120" />
        <di:waypoint x="832" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_198du8j_di" bpmnElement="Flow_198du8j">
        <di:waypoint x="390" y="120" />
        <di:waypoint x="460" y="120" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


