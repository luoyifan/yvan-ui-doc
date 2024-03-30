---
title: 嘉兴-多穿-采购入库
desc: 嘉兴-多穿-采购入库
type: flow
navIgnore: false
tags:
  - wms/flow/jx_dc_cgrk
---

# title
>[!workflow] jx_dc_cgrk
> 嘉兴-多穿-采购入库
> 
> 部署号: N/A
>
> 最后部署时间: 2024-03-05 14:42:36.885068
> 
> 版本: 
> 
> 定义号: 


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="jx_dc_cgrk" name="嘉兴-多穿-采购入库" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_1mvselp</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:userTask id="Activity_1u9vvrq" name="BCR扫描">
      <bpmn:incoming>Flow_1mvselp</bpmn:incoming>
      <bpmn:outgoing>Flow_0z7up1a</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:serviceTask id="Activity_12spkug" name="查询多穿任务">
      <bpmn:incoming>Flow_0z7up1a</bpmn:incoming>
      <bpmn:outgoing>Flow_16ys2xt</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:exclusiveGateway id="Gateway_0dgo15c">
      <bpmn:incoming>Flow_16ys2xt</bpmn:incoming>
      <bpmn:outgoing>Flow_0ohu10m</bpmn:outgoing>
      <bpmn:outgoing>Flow_1ug4g9g</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_16ys2xt" sourceRef="Activity_12spkug" targetRef="Gateway_0dgo15c" />
    <bpmn:sequenceFlow id="Flow_0z7up1a" sourceRef="Activity_1u9vvrq" targetRef="Activity_12spkug" />
    <bpmn:serviceTask id="Activity_06kl9ng" name="应答BCR错误">
      <bpmn:incoming>Flow_0ohu10m</bpmn:incoming>
      <bpmn:outgoing>Flow_0iupjap</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0ohu10m" sourceRef="Gateway_0dgo15c" targetRef="Activity_06kl9ng" />
    <bpmn:sequenceFlow id="Flow_1ug4g9g" sourceRef="Gateway_0dgo15c" targetRef="Activity_11cqz0c" />
    <bpmn:serviceTask id="Activity_11cqz0c" name="应答BCR正确">
      <bpmn:incoming>Flow_1ug4g9g</bpmn:incoming>
      <bpmn:outgoing>Flow_0oh7mvc</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="Activity_1ogq8lp" name="记录异常">
      <bpmn:incoming>Flow_0iupjap</bpmn:incoming>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0iupjap" sourceRef="Activity_06kl9ng" targetRef="Activity_1ogq8lp" />
    <bpmn:sequenceFlow id="Flow_0oh7mvc" sourceRef="Activity_11cqz0c" targetRef="Activity_0s4jn9u" />
    <bpmn:userTask id="Activity_0s4jn9u" name="等待MFC完成">
      <bpmn:incoming>Flow_0oh7mvc</bpmn:incoming>
      <bpmn:outgoing>Flow_0m8sqlc</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:serviceTask id="Activity_0rp2338" name="应答MFC错误">
      <bpmn:incoming>Flow_16nbxo8</bpmn:incoming>
      <bpmn:outgoing>Flow_1f3y52j</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:exclusiveGateway id="Gateway_0t16xl2">
      <bpmn:incoming>Flow_0m8sqlc</bpmn:incoming>
      <bpmn:outgoing>Flow_16nbxo8</bpmn:outgoing>
      <bpmn:outgoing>Flow_13vaqa5</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0m8sqlc" sourceRef="Activity_0s4jn9u" targetRef="Gateway_0t16xl2" />
    <bpmn:sequenceFlow id="Flow_16nbxo8" sourceRef="Gateway_0t16xl2" targetRef="Activity_0rp2338" />
    <bpmn:userTask id="Activity_1ackh3p" name="记录异常">
      <bpmn:incoming>Flow_1f3y52j</bpmn:incoming>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1f3y52j" sourceRef="Activity_0rp2338" targetRef="Activity_1ackh3p" />
    <bpmn:serviceTask id="Activity_0aztena" name="转移库存">
      <bpmn:incoming>Flow_13vaqa5</bpmn:incoming>
      <bpmn:outgoing>Flow_0d642bc</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_13vaqa5" sourceRef="Gateway_0t16xl2" targetRef="Activity_0aztena" />
    <bpmn:endEvent id="Event_1oud6eq">
      <bpmn:incoming>Flow_0acko5c</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:serviceTask id="Activity_09fvtg8" name="应答MFC完成">
      <bpmn:incoming>Flow_0d642bc</bpmn:incoming>
      <bpmn:outgoing>Flow_0acko5c</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0d642bc" sourceRef="Activity_0aztena" targetRef="Activity_09fvtg8" />
    <bpmn:sequenceFlow id="Flow_0acko5c" sourceRef="Activity_09fvtg8" targetRef="Event_1oud6eq" />
    <bpmn:sequenceFlow id="Flow_1mvselp" sourceRef="StartEvent_1" targetRef="Activity_1u9vvrq" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="jx_dc_cgrk">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1oe4ppg_di" bpmnElement="Activity_1u9vvrq">
        <dc:Bounds x="141" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1xq49ly_di" bpmnElement="Activity_12spkug">
        <dc:Bounds x="141" y="340" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0dgo15c_di" bpmnElement="Gateway_0dgo15c" isMarkerVisible="true">
        <dc:Bounds x="345" y="355" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0modma0" bpmnElement="Activity_06kl9ng">
        <dc:Bounds x="500" y="340" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1tky8in_di" bpmnElement="Activity_11cqz0c">
        <dc:Bounds x="141" y="500" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0h8u3cf" bpmnElement="Activity_1ogq8lp">
        <dc:Bounds x="700" y="340" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_01z5km1_di" bpmnElement="Activity_0s4jn9u">
        <dc:Bounds x="141" y="640" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1o6e1wf" bpmnElement="Activity_0rp2338">
        <dc:Bounds x="500" y="640" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0gwkjp4" bpmnElement="Gateway_0t16xl2" isMarkerVisible="true">
        <dc:Bounds x="345" y="655" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_08egcpp" bpmnElement="Activity_1ackh3p">
        <dc:Bounds x="700" y="640" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1o9dwwh" bpmnElement="Activity_0aztena">
        <dc:Bounds x="141" y="810" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1oud6eq_di" bpmnElement="Event_1oud6eq">
        <dc:Bounds x="173" y="1062" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0u9lw4v" bpmnElement="Activity_09fvtg8">
        <dc:Bounds x="141" y="930" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_16ys2xt_di" bpmnElement="Flow_16ys2xt">
        <di:waypoint x="241" y="380" />
        <di:waypoint x="345" y="380" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0z7up1a_di" bpmnElement="Flow_0z7up1a">
        <di:waypoint x="191" y="280" />
        <di:waypoint x="191" y="340" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ohu10m_di" bpmnElement="Flow_0ohu10m">
        <di:waypoint x="395" y="380" />
        <di:waypoint x="500" y="380" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ug4g9g_di" bpmnElement="Flow_1ug4g9g">
        <di:waypoint x="370" y="405" />
        <di:waypoint x="370" y="450" />
        <di:waypoint x="191" y="450" />
        <di:waypoint x="191" y="500" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0iupjap_di" bpmnElement="Flow_0iupjap">
        <di:waypoint x="600" y="380" />
        <di:waypoint x="700" y="380" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0oh7mvc_di" bpmnElement="Flow_0oh7mvc">
        <di:waypoint x="191" y="580" />
        <di:waypoint x="191" y="640" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0m8sqlc_di" bpmnElement="Flow_0m8sqlc">
        <di:waypoint x="241" y="680" />
        <di:waypoint x="345" y="680" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_16nbxo8_di" bpmnElement="Flow_16nbxo8">
        <di:waypoint x="395" y="680" />
        <di:waypoint x="500" y="680" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1f3y52j_di" bpmnElement="Flow_1f3y52j">
        <di:waypoint x="600" y="680" />
        <di:waypoint x="700" y="680" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_13vaqa5_di" bpmnElement="Flow_13vaqa5">
        <di:waypoint x="370" y="705" />
        <di:waypoint x="370" y="760" />
        <di:waypoint x="191" y="760" />
        <di:waypoint x="191" y="810" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0d642bc_di" bpmnElement="Flow_0d642bc">
        <di:waypoint x="191" y="890" />
        <di:waypoint x="191" y="930" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0acko5c_di" bpmnElement="Flow_0acko5c">
        <di:waypoint x="191" y="1010" />
        <di:waypoint x="191" y="1062" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1mvselp_di" bpmnElement="Flow_1mvselp">
        <di:waypoint x="191" y="138" />
        <di:waypoint x="191" y="200" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


