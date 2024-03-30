---
title: test1
desc: 测试1
type: flow
tags:
  - wms/flow/test1
---

# title
>[!workflow] test1
> 测试1
> 
> 部署号: N/A
>
> 最后部署时间: 2024-03-05 15:23:10.749
> 
> 版本: 
> 
> 定义号: 


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_0qd4ib6" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.19.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">
  <bpmn:process id="test1" name="测试1" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:extensionElements>
        <camunda:field name="yvan_service_model" value="{}" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_0b0u2vp</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:intermediateThrowEvent id="Event_07f61nw">
      <bpmn:extensionElements>
        <camunda:field name="yvan_service_model" value="{}" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0u4si37</bpmn:incoming>
    </bpmn:intermediateThrowEvent>
    <bpmn:sequenceFlow id="Flow_0b0u2vp" sourceRef="StartEvent_1" targetRef="step1">
      <bpmn:extensionElements>
        <camunda:field name="yvan_service_model" value="{}" />
      </bpmn:extensionElements>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_1603a1x" sourceRef="step1" targetRef="step2" />
    <bpmn:serviceTask id="step1" name="方法1" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test@bpmnTest1</camunda:inputParameter>
          <camunda:inputParameter name="biz_param" />
          <camunda:inputParameter name="biz_save_result">0001</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0b0u2vp</bpmn:incoming>
      <bpmn:outgoing>Flow_1603a1x</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="step3" name="等待回调">
      <bpmn:extensionElements>
        <camunda:field name="yvan_service_model" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_02vluk8</bpmn:incoming>
      <bpmn:outgoing>Flow_120jbl6</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_120jbl6" sourceRef="step3" targetRef="Activity_0hglj59" />
    <bpmn:serviceTask id="step2" name="方法2" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test@bpmnTest2</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[ "${step1.data.localName}" ]</camunda:inputParameter>
          <camunda:inputParameter name="biz_save_result">0001</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1603a1x</bpmn:incoming>
      <bpmn:outgoing>Flow_02vluk8</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_02vluk8" sourceRef="step2" targetRef="step3" />
    <bpmn:sequenceFlow id="Flow_0u4si37" sourceRef="Activity_0hglj59" targetRef="Event_07f61nw" />
    <bpmn:serviceTask id="Activity_0hglj59" name="设定回调返回" camunda:class="com.yvan.bpmn.BpmnService">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="biz_method">com.galaxis.wms.Test@test3</camunda:inputParameter>
          <camunda:inputParameter name="biz_param">[    "${i1}", "${i2}"    ]</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_120jbl6</bpmn:incoming>
      <bpmn:incoming>Flow_0a4ccui</bpmn:incoming>
      <bpmn:outgoing>Flow_0u4si37</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:task id="Activity_1o49rhv" name="手动回调">
      <bpmn:outgoing>Flow_0a4ccui</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0a4ccui" sourceRef="Activity_1o49rhv" targetRef="Activity_0hglj59" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="test1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="2" y="62" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0t2yjld_di" bpmnElement="step1">
        <dc:Bounds x="-30" y="130" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1iv5zsk_di" bpmnElement="step3">
        <dc:Bounds x="410" y="430" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_02c54gd" bpmnElement="step2">
        <dc:Bounds x="-30" y="290" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0te6smb_di" bpmnElement="Activity_0hglj59">
        <dc:Bounds x="410" y="590" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1o49rhv_di" bpmnElement="Activity_1o49rhv">
        <dc:Bounds x="630" y="590" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_07f61nw_di" bpmnElement="Event_07f61nw">
        <dc:Bounds x="62" y="762" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0b0u2vp_di" bpmnElement="Flow_0b0u2vp">
        <di:waypoint x="20" y="98" />
        <di:waypoint x="20" y="130" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1603a1x_di" bpmnElement="Flow_1603a1x">
        <di:waypoint x="20" y="210" />
        <di:waypoint x="20" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_120jbl6_di" bpmnElement="Flow_120jbl6">
        <di:waypoint x="460" y="510" />
        <di:waypoint x="460" y="590" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_02vluk8_di" bpmnElement="Flow_02vluk8">
        <di:waypoint x="20" y="370" />
        <di:waypoint x="20" y="470" />
        <di:waypoint x="410" y="470" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0u4si37_di" bpmnElement="Flow_0u4si37">
        <di:waypoint x="410" y="630" />
        <di:waypoint x="254" y="630" />
        <di:waypoint x="254" y="780" />
        <di:waypoint x="98" y="780" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0a4ccui_di" bpmnElement="Flow_0a4ccui">
        <di:waypoint x="630" y="630" />
        <di:waypoint x="510" y="630" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


