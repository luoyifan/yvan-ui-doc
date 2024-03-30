---
title: PalletStorage
desc: 托盘立库
type: flow
tags:
  - wms/flow/PalletStorage
---

# title
>[!workflow] PalletStorage
> 托盘立库
> 
> 部署号: N/A
>
> 最后部署时间: 
> 
> 版本: 
> 
> 定义号: 


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_1a868qn" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.19.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.15.0">
  <bpmn:process id="Process_0utw5zk" name="托盘立库" isExecutable="true" camunda:historyTimeToLive="180">
    <bpmn:startEvent id="StartEvent_1" name="大参林托盘立库流程">
      <bpmn:outgoing>Flow_1e6lc3o</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:serviceTask id="Activity_0y0a33g" name="调用立体库上架规则">
      <bpmn:incoming>Flow_00u0876</bpmn:incoming>
      <bpmn:incoming>Flow_0v1nw1p</bpmn:incoming>
      <bpmn:outgoing>Flow_0txo4og</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1e6lc3o" sourceRef="StartEvent_1" targetRef="Activity_0iy9w5q" />
    <bpmn:exclusiveGateway id="Gateway_0px3ibs" default="Flow_1gx5mni">
      <bpmn:incoming>Flow_0txo4og</bpmn:incoming>
      <bpmn:outgoing>Flow_1kbcdxc</bpmn:outgoing>
      <bpmn:outgoing>Flow_1gx5mni</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0txo4og" sourceRef="Activity_0y0a33g" targetRef="Gateway_0px3ibs" />
    <bpmn:serviceTask id="Activity_04h6vvl" name="记录异常">
      <bpmn:incoming>Flow_1kbcdxc</bpmn:incoming>
      <bpmn:outgoing>Flow_1vfkk06</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1kbcdxc" name="规则计算错误" sourceRef="Gateway_0px3ibs" targetRef="Activity_04h6vvl">
      <bpmn:extensionElements>
        <camunda:field name="yvan_service_model" value="{}" />
      </bpmn:extensionElements>
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">${aaa}</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:serviceTask id="Activity_0g0lye7" name="标记去往异常口">
      <bpmn:incoming>Flow_1vfkk06</bpmn:incoming>
      <bpmn:outgoing>Flow_1iiuk3y</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1vfkk06" sourceRef="Activity_04h6vvl" targetRef="Activity_0g0lye7" />
    <bpmn:userTask id="Activity_0wnyfos" name="重新上架">
      <bpmn:incoming>Flow_1iiuk3y</bpmn:incoming>
      <bpmn:outgoing>Flow_00u0876</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1iiuk3y" sourceRef="Activity_0g0lye7" targetRef="Activity_0wnyfos" />
    <bpmn:sequenceFlow id="Flow_00u0876" sourceRef="Activity_0wnyfos" targetRef="Activity_0y0a33g" />
    <bpmn:userTask id="Activity_1961ubn" name="上架完成">
      <bpmn:incoming>Flow_1etbgda</bpmn:incoming>
      <bpmn:outgoing>Flow_1imlgim</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1gx5mni" sourceRef="Gateway_0px3ibs" targetRef="Activity_1akfms1">
      <bpmn:extensionElements>
        <camunda:field name="yvan_service_model" value="{}" />
      </bpmn:extensionElements>
    </bpmn:sequenceFlow>
    <bpmn:exclusiveGateway id="Gateway_0snq46d">
      <bpmn:incoming>Flow_1imlgim</bpmn:incoming>
      <bpmn:outgoing>Flow_00r22e2</bpmn:outgoing>
      <bpmn:outgoing>Flow_1gjyoje</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:serviceTask id="Activity_0o0mh8d" name="记录异常">
      <bpmn:incoming>Flow_00r22e2</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_00r22e2" name="上架异常" sourceRef="Gateway_0snq46d" targetRef="Activity_0o0mh8d" />
    <bpmn:sequenceFlow id="Flow_1imlgim" sourceRef="Activity_1961ubn" targetRef="Gateway_0snq46d" />
    <bpmn:serviceTask id="Activity_0wkegmg" name="记录库存">
      <bpmn:incoming>Flow_1gjyoje</bpmn:incoming>
      <bpmn:outgoing>Flow_0s9khq1</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1gjyoje" sourceRef="Gateway_0snq46d" targetRef="Activity_0wkegmg" />
    <bpmn:sequenceFlow id="Flow_1etbgda" sourceRef="Activity_1akfms1" targetRef="Activity_1961ubn" />
    <bpmn:serviceTask id="Activity_1qzbllb" name="释放预占">
      <bpmn:incoming>Flow_0s9khq1</bpmn:incoming>
      <bpmn:outgoing>Flow_0dzpn7o</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0s9khq1" sourceRef="Activity_0wkegmg" targetRef="Activity_1qzbllb" />
    <bpmn:endEvent id="Event_1ay5wi1">
      <bpmn:incoming>Flow_0dzpn7o</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0dzpn7o" sourceRef="Activity_1qzbllb" targetRef="Event_1ay5wi1" />
    <bpmn:serviceTask id="Activity_1akfms1" name="预占货位">
      <bpmn:incoming>Flow_1gx5mni</bpmn:incoming>
      <bpmn:outgoing>Flow_1etbgda</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_0iy9w5q" name="获取规则参数">
      <bpmn:incoming>Flow_1e6lc3o</bpmn:incoming>
      <bpmn:outgoing>Flow_0v1nw1p</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0v1nw1p" sourceRef="Activity_0iy9w5q" targetRef="Activity_0y0a33g" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0utw5zk">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="512" y="82" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="492" y="52" width="77" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1hfpjqr_di" bpmnElement="Activity_0y0a33g">
        <dc:Bounds x="480" y="290" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0px3ibs_di" bpmnElement="Gateway_0px3ibs" isMarkerVisible="true">
        <dc:Bounds x="505" y="425" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1dsewi0" bpmnElement="Activity_04h6vvl">
        <dc:Bounds x="203" y="410" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0wywmjd" bpmnElement="Activity_0g0lye7">
        <dc:Bounds x="203" y="560" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_08bmpbi_di" bpmnElement="Activity_0wnyfos">
        <dc:Bounds x="203" y="290" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1ozr843_di" bpmnElement="Activity_1961ubn">
        <dc:Bounds x="480" y="650" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1cs4qwd" bpmnElement="Gateway_0snq46d" isMarkerVisible="true">
        <dc:Bounds x="505" y="775" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0ykr8w7" bpmnElement="Activity_0o0mh8d">
        <dc:Bounds x="673" y="760" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_01d4sl1" bpmnElement="Activity_0wkegmg">
        <dc:Bounds x="480" y="870" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1au46is" bpmnElement="Activity_1qzbllb">
        <dc:Bounds x="480" y="1000" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1ay5wi1_di" bpmnElement="Event_1ay5wi1">
        <dc:Bounds x="512" y="1142" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0iqiihk_di" bpmnElement="Activity_1akfms1">
        <dc:Bounds x="480" y="510" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_03ke8lc" bpmnElement="Activity_0iy9w5q">
        <dc:Bounds x="480" y="160" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1e6lc3o_di" bpmnElement="Flow_1e6lc3o">
        <di:waypoint x="530" y="118" />
        <di:waypoint x="530" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0txo4og_di" bpmnElement="Flow_0txo4og">
        <di:waypoint x="530" y="370" />
        <di:waypoint x="530" y="425" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1kbcdxc_di" bpmnElement="Flow_1kbcdxc">
        <di:waypoint x="505" y="450" />
        <di:waypoint x="303" y="450" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="371" y="432" width="67" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1vfkk06_di" bpmnElement="Flow_1vfkk06">
        <di:waypoint x="253" y="490" />
        <di:waypoint x="253" y="560" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1iiuk3y_di" bpmnElement="Flow_1iiuk3y">
        <di:waypoint x="203" y="600" />
        <di:waypoint x="143" y="600" />
        <di:waypoint x="143" y="330" />
        <di:waypoint x="203" y="330" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_00u0876_di" bpmnElement="Flow_00u0876">
        <di:waypoint x="303" y="330" />
        <di:waypoint x="480" y="330" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1gx5mni_di" bpmnElement="Flow_1gx5mni">
        <di:waypoint x="530" y="475" />
        <di:waypoint x="530" y="510" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_1nlnv43" bpmnElement="Flow_00r22e2">
        <di:waypoint x="555" y="800" />
        <di:waypoint x="673" y="800" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="592" y="782" width="45" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1imlgim_di" bpmnElement="Flow_1imlgim">
        <di:waypoint x="530" y="730" />
        <di:waypoint x="530" y="775" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1gjyoje_di" bpmnElement="Flow_1gjyoje">
        <di:waypoint x="530" y="825" />
        <di:waypoint x="530" y="870" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1etbgda_di" bpmnElement="Flow_1etbgda">
        <di:waypoint x="530" y="590" />
        <di:waypoint x="530" y="650" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0s9khq1_di" bpmnElement="Flow_0s9khq1">
        <di:waypoint x="530" y="950" />
        <di:waypoint x="530" y="1000" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0dzpn7o_di" bpmnElement="Flow_0dzpn7o">
        <di:waypoint x="530" y="1080" />
        <di:waypoint x="530" y="1142" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0v1nw1p_di" bpmnElement="Flow_0v1nw1p">
        <di:waypoint x="530" y="240" />
        <di:waypoint x="530" y="290" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


