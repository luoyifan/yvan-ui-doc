---
title: 嘉兴-密集库-采购入库
desc: 嘉兴-密集库-采购入库
type: flow
navIgnore: false
tags:
  - wms/flow/jx_mjk_cgrk
---

# title
>[!workflow] jx_mjk_cgrk
> 嘉兴-密集库-采购入库
> 
> 部署号: N/A
>
> 最后部署时间: 2024-03-05 15:05:39.398871
> 
> 版本: 
> 
> 定义号: 


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="jx_mjk_cgrk" name="嘉兴-密集库-采购入库" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_0hwlr6q</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:exclusiveGateway id="Gateway_1kik59l">
      <bpmn:incoming>Flow_0dw1gfd</bpmn:incoming>
      <bpmn:outgoing>Flow_0vtrbcl</bpmn:outgoing>
      <bpmn:outgoing>Flow_0g0qdv8</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:userTask id="Activity_07r2dk2" name="BCR扫托盘码">
      <bpmn:incoming>Flow_0hwlr6q</bpmn:incoming>
      <bpmn:outgoing>Flow_0dw1gfd</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0dw1gfd" sourceRef="Activity_07r2dk2" targetRef="Gateway_1kik59l" />
    <bpmn:sequenceFlow id="Flow_0vtrbcl" sourceRef="Gateway_1kik59l" targetRef="Activity_0ies202" />
    <bpmn:sequenceFlow id="Flow_0g0qdv8" sourceRef="Gateway_1kik59l" targetRef="Activity_1o6n5ho" />
    <bpmn:serviceTask id="Activity_1o6n5ho" name="分密集库货位">
      <bpmn:incoming>Flow_0g0qdv8</bpmn:incoming>
      <bpmn:outgoing>Flow_1fpc6bn</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="Activity_0zx4wn9" name="PES问位置">
      <bpmn:incoming>Flow_16h9ynn</bpmn:incoming>
      <bpmn:outgoing>Flow_1bwkxbo</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1fpc6bn" sourceRef="Activity_1o6n5ho" targetRef="Activity_0xls0wa" />
    <bpmn:serviceTask id="Activity_0q6mjmj" name="查询位置，判断是否错误，是否过度阶段">
      <bpmn:incoming>Flow_1bwkxbo</bpmn:incoming>
      <bpmn:outgoing>Flow_1hfciq2</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1bwkxbo" sourceRef="Activity_0zx4wn9" targetRef="Activity_0q6mjmj" />
    <bpmn:sequenceFlow id="Flow_1hfciq2" sourceRef="Activity_0q6mjmj" targetRef="Gateway_0jbqlrk" />
    <bpmn:serviceTask id="Activity_0ies202" name="不合格，记录异常">
      <bpmn:incoming>Flow_0vtrbcl</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:userTask id="Activity_1fuse87" name="密集库上架完成">
      <bpmn:incoming>Flow_03xvrra</bpmn:incoming>
      <bpmn:outgoing>Flow_18zcwiw</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:endEvent id="Event_1a90rs1">
      <bpmn:incoming>Flow_1nq1i8n</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1nq1i8n" sourceRef="Activity_1vc4um7" targetRef="Event_1a90rs1" />
    <bpmn:sequenceFlow id="Flow_18zcwiw" sourceRef="Activity_1fuse87" targetRef="Activity_1vc4um7" />
    <bpmn:serviceTask id="Activity_1vc4um7" name="记录库存,释放预占">
      <bpmn:incoming>Flow_18zcwiw</bpmn:incoming>
      <bpmn:outgoing>Flow_1nq1i8n</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_16h9ynn" sourceRef="Activity_0xls0wa" targetRef="Activity_0zx4wn9" />
    <bpmn:serviceTask id="Activity_0xls0wa" name="记录任务、预占库位">
      <bpmn:incoming>Flow_1fpc6bn</bpmn:incoming>
      <bpmn:outgoing>Flow_16h9ynn</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0hwlr6q" sourceRef="StartEvent_1" targetRef="Activity_07r2dk2" />
    <bpmn:exclusiveGateway id="Gateway_0jbqlrk">
      <bpmn:incoming>Flow_1hfciq2</bpmn:incoming>
      <bpmn:outgoing>Flow_083w9ws</bpmn:outgoing>
      <bpmn:outgoing>Flow_13guq6m</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_083w9ws" sourceRef="Gateway_0jbqlrk" targetRef="Gateway_04laim1" />
    <bpmn:serviceTask id="Activity_1dw4zmz" name="应答PES完成">
      <bpmn:incoming>Flow_1pg0vqq</bpmn:incoming>
      <bpmn:outgoing>Flow_03xvrra</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_03xvrra" sourceRef="Activity_1dw4zmz" targetRef="Activity_1fuse87" />
    <bpmn:serviceTask id="Activity_03ve25h" name="应答PES错误">
      <bpmn:incoming>Flow_13guq6m</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_13guq6m" name="错误" sourceRef="Gateway_0jbqlrk" targetRef="Activity_03ve25h" />
    <bpmn:exclusiveGateway id="Gateway_04laim1">
      <bpmn:incoming>Flow_083w9ws</bpmn:incoming>
      <bpmn:outgoing>Flow_1pg0vqq</bpmn:outgoing>
      <bpmn:outgoing>Flow_16f6ipm</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_1pg0vqq" sourceRef="Gateway_04laim1" targetRef="Activity_1dw4zmz" />
    <bpmn:serviceTask id="Activity_1hghzcs" name="应答PES继续">
      <bpmn:incoming>Flow_16f6ipm</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_16f6ipm" name="过度过程" sourceRef="Gateway_04laim1" targetRef="Activity_1hghzcs" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="jx_mjk_cgrk">
      <bpmndi:BPMNShape id="Gateway_1kik59l_di" bpmnElement="Gateway_1kik59l" isMarkerVisible="true">
        <dc:Bounds x="345" y="385" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0vceily_di" bpmnElement="Activity_07r2dk2">
        <dc:Bounds x="141" y="370" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1nrp5oz_di" bpmnElement="Activity_1o6n5ho">
        <dc:Bounds x="141" y="530" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_02j0mbm_di" bpmnElement="Activity_0zx4wn9">
        <dc:Bounds x="141" y="670" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0h8zye0_di" bpmnElement="Activity_0q6mjmj">
        <dc:Bounds x="320" y="670" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_18sih12_di" bpmnElement="Activity_1fuse87">
        <dc:Bounds x="141" y="850" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1a90rs1_di" bpmnElement="Event_1a90rs1">
        <dc:Bounds x="352" y="992" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1kh5hx0_di" bpmnElement="Activity_1vc4um7">
        <dc:Bounds x="320" y="850" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0rwwrlo_di" bpmnElement="Activity_0xls0wa">
        <dc:Bounds x="320" y="530" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="262" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1qow8r6" bpmnElement="Activity_1dw4zmz">
        <dc:Bounds x="860" y="670" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0jbqlrk_di" bpmnElement="Gateway_0jbqlrk" isMarkerVisible="true">
        <dc:Bounds x="525" y="685" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_05e3hjy" bpmnElement="Gateway_04laim1" isMarkerVisible="true">
        <dc:Bounds x="705" y="685" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0ph6nx2" bpmnElement="Activity_03ve25h">
        <dc:Bounds x="500" y="550" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_01dtw7x" bpmnElement="Activity_1hghzcs">
        <dc:Bounds x="680" y="550" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0j6mtlu_di" bpmnElement="Activity_0ies202">
        <dc:Bounds x="500" y="370" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0dw1gfd_di" bpmnElement="Flow_0dw1gfd">
        <di:waypoint x="241" y="410" />
        <di:waypoint x="345" y="410" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0vtrbcl_di" bpmnElement="Flow_0vtrbcl">
        <di:waypoint x="395" y="410" />
        <di:waypoint x="500" y="410" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0g0qdv8_di" bpmnElement="Flow_0g0qdv8">
        <di:waypoint x="370" y="435" />
        <di:waypoint x="370" y="490" />
        <di:waypoint x="191" y="490" />
        <di:waypoint x="191" y="530" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1fpc6bn_di" bpmnElement="Flow_1fpc6bn">
        <di:waypoint x="241" y="570" />
        <di:waypoint x="320" y="570" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1bwkxbo_di" bpmnElement="Flow_1bwkxbo">
        <di:waypoint x="241" y="710" />
        <di:waypoint x="320" y="710" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1hfciq2_di" bpmnElement="Flow_1hfciq2">
        <di:waypoint x="420" y="710" />
        <di:waypoint x="525" y="710" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1nq1i8n_di" bpmnElement="Flow_1nq1i8n">
        <di:waypoint x="370" y="930" />
        <di:waypoint x="370" y="992" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_18zcwiw_di" bpmnElement="Flow_18zcwiw">
        <di:waypoint x="241" y="890" />
        <di:waypoint x="320" y="890" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_16h9ynn_di" bpmnElement="Flow_16h9ynn">
        <di:waypoint x="370" y="610" />
        <di:waypoint x="370" y="640" />
        <di:waypoint x="191" y="640" />
        <di:waypoint x="191" y="670" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0hwlr6q_di" bpmnElement="Flow_0hwlr6q">
        <di:waypoint x="191" y="298" />
        <di:waypoint x="191" y="370" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_083w9ws_di" bpmnElement="Flow_083w9ws">
        <di:waypoint x="575" y="710" />
        <di:waypoint x="705" y="710" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_03xvrra_di" bpmnElement="Flow_03xvrra">
        <di:waypoint x="960" y="710" />
        <di:waypoint x="1010" y="710" />
        <di:waypoint x="1010" y="800" />
        <di:waypoint x="191" y="800" />
        <di:waypoint x="191" y="850" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_13guq6m_di" bpmnElement="Flow_13guq6m">
        <di:waypoint x="550" y="685" />
        <di:waypoint x="550" y="630" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="554" y="653" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1pg0vqq_di" bpmnElement="Flow_1pg0vqq">
        <di:waypoint x="755" y="710" />
        <di:waypoint x="860" y="710" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_16f6ipm_di" bpmnElement="Flow_16f6ipm">
        <di:waypoint x="730" y="685" />
        <di:waypoint x="730" y="630" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="737" y="652" width="45" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


