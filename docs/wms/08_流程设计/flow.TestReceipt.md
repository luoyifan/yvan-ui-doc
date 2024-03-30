---
title: TestReceipt
desc: 测试收货
type: flow
tags:
  - wms/flow/TestReceipt
---

# title
>[!workflow] TestReceipt
> 测试收货
> 
> 部署号: N/A
>
> 最后部署时间: 2024-02-01 17:49:01.449738
> 
> 版本: 
> 
> 定义号: 


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="TestReceipt" name="测试收货" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_0c5chv7</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="CatchError" name="记录错误">
      <bpmn:incoming>HasError</bpmn:incoming>
      <bpmn:outgoing>Flow_1pwp6jt</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0c5chv7" sourceRef="StartEvent_1" targetRef="ReceiptApi" />
    <bpmn:sequenceFlow id="Flow_0dtofib" sourceRef="ReceiptApi" targetRef="Gateway1" />
    <bpmn:sequenceFlow id="Flow_1mlmkl8" sourceRef="getItems" targetRef="InvokeRule" />
    <bpmn:sequenceFlow id="Flow_1796pwx" sourceRef="InvokeRule" targetRef="Gateway_1j1vvk9" />
    <bpmn:sequenceFlow id="HasError" sourceRef="Gateway_1j1vvk9" targetRef="CatchError">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression" />
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_1543y3h" sourceRef="Gateway_1j1vvk9" targetRef="HoldLoc" />
    <bpmn:exclusiveGateway id="Gateway_1j1vvk9" default="Flow_1543y3h">
      <bpmn:incoming>Flow_1796pwx</bpmn:incoming>
      <bpmn:outgoing>HasError</bpmn:outgoing>
      <bpmn:outgoing>Flow_1543y3h</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:serviceTask id="getItems" name="获取明细行" camunda:class="com.a.b.c">
      <bpmn:documentation>dc3</bpmn:documentation>
      <bpmn:extensionElements>
        <camunda:inputOutput />
        <camunda:field name="method">
          <camunda:string>ttt1</camunda:string>
        </camunda:field>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1kfadwj</bpmn:incoming>
      <bpmn:outgoing>Flow_1mlmkl8</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="InvokeRule" name="调用上架规则">
      <bpmn:incoming>Flow_1mlmkl8</bpmn:incoming>
      <bpmn:outgoing>Flow_1796pwx</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="HoldLoc" name="预占库位">
      <bpmn:incoming>Flow_1543y3h</bpmn:incoming>
      <bpmn:outgoing>Flow_11yfczg</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="SaveItem" name="保存收货明细">
      <bpmn:incoming>Flow_11yfczg</bpmn:incoming>
      <bpmn:outgoing>Flow_1r23szh</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="getMaster" name="获取主单">
      <bpmn:documentation>dc2</bpmn:documentation>
      <bpmn:incoming>Flow_07acayr</bpmn:incoming>
      <bpmn:outgoing>Flow_039fl2k</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_07acayr" sourceRef="Gateway1" targetRef="getMaster" />
    <bpmn:sequenceFlow id="Flow_1kfadwj" sourceRef="Gateway1" targetRef="getItems" />
    <bpmn:serviceTask id="SaveMaster" name="保存收货主单">
      <bpmn:incoming>Flow_039fl2k</bpmn:incoming>
      <bpmn:outgoing>Flow_1m6qg5t</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_039fl2k" sourceRef="getMaster" targetRef="SaveMaster" />
    <bpmn:endEvent id="Event_1npoho5">
      <bpmn:incoming>Flow_1697p66</bpmn:incoming>
      <bpmn:incoming>Flow_1pwp6jt</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:task id="NotifyFinish" name="通知完成">
      <bpmn:incoming>Flow_1r23szh</bpmn:incoming>
      <bpmn:incoming>Flow_1m6qg5t</bpmn:incoming>
      <bpmn:outgoing>Flow_1697p66</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_1r23szh" sourceRef="SaveItem" targetRef="NotifyFinish" />
    <bpmn:sequenceFlow id="Flow_1m6qg5t" sourceRef="SaveMaster" targetRef="NotifyFinish" />
    <bpmn:sequenceFlow id="Flow_1697p66" sourceRef="NotifyFinish" targetRef="Event_1npoho5" />
    <bpmn:sequenceFlow id="Flow_11yfczg" sourceRef="HoldLoc" targetRef="SaveItem" />
    <bpmn:sequenceFlow id="Flow_1pwp6jt" sourceRef="CatchError" targetRef="Event_1npoho5" />
    <bpmn:userTask id="ReceiptApi" name="收货提交">
      <bpmn:documentation>dc1</bpmn:documentation>
      <bpmn:extensionElements>
        <camunda:inputOutput />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0c5chv7</bpmn:incoming>
      <bpmn:outgoing>Flow_0dtofib</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="Gateway1" default="Flow_07acayr">
      <bpmn:incoming>Flow_0dtofib</bpmn:incoming>
      <bpmn:outgoing>Flow_07acayr</bpmn:outgoing>
      <bpmn:outgoing>Flow_1kfadwj</bpmn:outgoing>
    </bpmn:exclusiveGateway>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="TestReceipt">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="262" y="2" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0zedlb6_di" bpmnElement="CatchError">
        <dc:Bounds x="550" y="600" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1mdrh33_di" bpmnElement="Gateway_1j1vvk9" isMarkerVisible="true">
        <dc:Bounds x="355" y="615" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0cphxnj_di" bpmnElement="getItems">
        <dc:Bounds x="330" y="330" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0pyqqwv_di" bpmnElement="InvokeRule">
        <dc:Bounds x="330" y="480" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0u4hge3_di" bpmnElement="HoldLoc">
        <dc:Bounds x="330" y="730" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1b2gtvq_di" bpmnElement="SaveItem">
        <dc:Bounds x="330" y="890" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1umqgzm" bpmnElement="getMaster">
        <dc:Bounds x="140" y="330" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1yvqdg4" bpmnElement="SaveMaster">
        <dc:Bounds x="140" y="480" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1npoho5_di" bpmnElement="Event_1npoho5">
        <dc:Bounds x="262" y="1172" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1on1iew_di" bpmnElement="NotifyFinish">
        <dc:Bounds x="230" y="1050" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1ylxc7e_di" bpmnElement="ReceiptApi">
        <dc:Bounds x="230" y="90" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_17144or_di" bpmnElement="Gateway1" isMarkerVisible="true">
        <dc:Bounds x="255" y="215" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0c5chv7_di" bpmnElement="Flow_0c5chv7">
        <di:waypoint x="280" y="38" />
        <di:waypoint x="280" y="90" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0dtofib_di" bpmnElement="Flow_0dtofib">
        <di:waypoint x="280" y="170" />
        <di:waypoint x="280" y="215" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1mlmkl8_di" bpmnElement="Flow_1mlmkl8">
        <di:waypoint x="380" y="410" />
        <di:waypoint x="380" y="480" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1796pwx_di" bpmnElement="Flow_1796pwx">
        <di:waypoint x="380" y="560" />
        <di:waypoint x="380" y="615" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1bjldaf_di" bpmnElement="HasError">
        <di:waypoint x="405" y="640" />
        <di:waypoint x="550" y="640" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1543y3h_di" bpmnElement="Flow_1543y3h">
        <di:waypoint x="380" y="665" />
        <di:waypoint x="380" y="730" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_07acayr_di" bpmnElement="Flow_07acayr">
        <di:waypoint x="255" y="240" />
        <di:waypoint x="190" y="240" />
        <di:waypoint x="190" y="330" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1kfadwj_di" bpmnElement="Flow_1kfadwj">
        <di:waypoint x="305" y="240" />
        <di:waypoint x="380" y="240" />
        <di:waypoint x="380" y="330" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="336" y="222" width="13" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_039fl2k_di" bpmnElement="Flow_039fl2k">
        <di:waypoint x="190" y="410" />
        <di:waypoint x="190" y="480" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1r23szh_di" bpmnElement="Flow_1r23szh">
        <di:waypoint x="380" y="970" />
        <di:waypoint x="380" y="990" />
        <di:waypoint x="280" y="990" />
        <di:waypoint x="280" y="1050" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1m6qg5t_di" bpmnElement="Flow_1m6qg5t">
        <di:waypoint x="190" y="560" />
        <di:waypoint x="190" y="990" />
        <di:waypoint x="280" y="990" />
        <di:waypoint x="280" y="1050" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1697p66_di" bpmnElement="Flow_1697p66">
        <di:waypoint x="280" y="1130" />
        <di:waypoint x="280" y="1172" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11yfczg_di" bpmnElement="Flow_11yfczg">
        <di:waypoint x="380" y="810" />
        <di:waypoint x="380" y="890" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1pwp6jt_di" bpmnElement="Flow_1pwp6jt">
        <di:waypoint x="600" y="680" />
        <di:waypoint x="600" y="1190" />
        <di:waypoint x="298" y="1190" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


