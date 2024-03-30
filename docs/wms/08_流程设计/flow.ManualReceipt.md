---
title: 顺德大参林人工收货
desc: 顺德大参林人工收货
type: flow
navIgnore: false
tags:
  - wms/flow/ManualReceipt
---

# title
>[!workflow] ManualReceipt
> 顺德大参林人工收货
> 
> 部署号: N/A
>
> 最后部署时间: 2024-02-01 17:30:39.729
> 
> 版本: 
> 
> 定义号: 


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_0tp1hln" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.19.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">
  <bpmn:process id="Process_1p34hki" name="人工收货" isExecutable="true" camunda:historyTimeToLive="180">
    <bpmn:startEvent id="StartEvent_1" name="大参林人工收货流程">
      <bpmn:outgoing>Flow_1jlh640</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1m4kene" sourceRef="Activity_1dj0rx8" targetRef="Gateway_12mlct0" />
    <bpmn:userTask id="Activity_1dj0rx8" name="人工收货">
      <bpmn:incoming>Flow_1jlh640</bpmn:incoming>
      <bpmn:outgoing>Flow_1m4kene</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1jlh640" sourceRef="StartEvent_1" targetRef="Activity_1dj0rx8" />
    <bpmn:serviceTask id="Activity_01hjocx" name="生成库存">
      <bpmn:incoming>Flow_07oht8u</bpmn:incoming>
      <bpmn:outgoing>Flow_1s2qitk</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:exclusiveGateway id="Gateway_12mlct0">
      <bpmn:incoming>Flow_1m4kene</bpmn:incoming>
      <bpmn:outgoing>Flow_07oht8u</bpmn:outgoing>
      <bpmn:outgoing>Flow_0eogr7y</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_07oht8u" sourceRef="Gateway_12mlct0" targetRef="Activity_01hjocx" />
    <bpmn:sequenceFlow id="Flow_0eogr7y" name="收货异常" sourceRef="Gateway_12mlct0" targetRef="Activity_02680n0" />
    <bpmn:serviceTask id="Activity_02680n0" name="记录错误">
      <bpmn:incoming>Flow_0eogr7y</bpmn:incoming>
      <bpmn:outgoing>Flow_06xuiv5</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1s2qitk" sourceRef="Activity_01hjocx" targetRef="Activity_0qw7lk9" />
    <bpmn:serviceTask id="Activity_0qw7lk9" name="调用算法：上架规则计算1号月台暂存位">
      <bpmn:incoming>Flow_1s2qitk</bpmn:incoming>
      <bpmn:incoming>Flow_0e85k8e</bpmn:incoming>
      <bpmn:outgoing>Flow_0moals6</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:exclusiveGateway id="Gateway_1a6z4pi">
      <bpmn:incoming>Flow_0moals6</bpmn:incoming>
      <bpmn:outgoing>Flow_0pdaoxg</bpmn:outgoing>
      <bpmn:outgoing>Flow_1ygah8g</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0moals6" sourceRef="Activity_0qw7lk9" targetRef="Gateway_1a6z4pi" />
    <bpmn:serviceTask id="Activity_1txzcme" name="记录错误">
      <bpmn:incoming>Flow_0pdaoxg</bpmn:incoming>
      <bpmn:outgoing>Flow_1fmlhzk</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0pdaoxg" name="分配异常" sourceRef="Gateway_1a6z4pi" targetRef="Activity_1txzcme" />
    <bpmn:endEvent id="Event_0uwed50" name="结束">
      <bpmn:incoming>Flow_16gk2kt</bpmn:incoming>
      <bpmn:incoming>Flow_06xuiv5</bpmn:incoming>
      <bpmn:incoming>Flow_1fmlhzk</bpmn:incoming>
      <bpmn:incoming>Flow_0rbc5dx</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:userTask id="Activity_0wlktr2" name="重新计算暂存位">
      <bpmn:outgoing>Flow_0e85k8e</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0e85k8e" sourceRef="Activity_0wlktr2" targetRef="Activity_0qw7lk9" />
    <bpmn:serviceTask id="Activity_1ior0nx" name="预占暂存位">
      <bpmn:incoming>Flow_1ygah8g</bpmn:incoming>
      <bpmn:outgoing>Flow_0blektu</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1ygah8g" sourceRef="Gateway_1a6z4pi" targetRef="Activity_1ior0nx" />
    <bpmn:userTask id="Activity_01o9fb8" name="呼叫AGV搬运">
      <bpmn:incoming>Flow_0blektu</bpmn:incoming>
      <bpmn:outgoing>Flow_0npbjro</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0blektu" sourceRef="Activity_1ior0nx" targetRef="Activity_01o9fb8" />
    <bpmn:exclusiveGateway id="Gateway_1io11ed">
      <bpmn:incoming>Flow_0npbjro</bpmn:incoming>
      <bpmn:outgoing>Flow_0pjvvlg</bpmn:outgoing>
      <bpmn:outgoing>Flow_1gzwy48</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:serviceTask id="Activity_0am6km6" name="记录错误">
      <bpmn:incoming>Flow_0pjvvlg</bpmn:incoming>
      <bpmn:outgoing>Flow_0rbc5dx</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0pjvvlg" name="呼叫异常" sourceRef="Gateway_1io11ed" targetRef="Activity_0am6km6" />
    <bpmn:sequenceFlow id="Flow_0npbjro" sourceRef="Activity_01o9fb8" targetRef="Gateway_1io11ed" />
    <bpmn:userTask id="Activity_0prwjg7" name="AGV搬运完成">
      <bpmn:incoming>Flow_1gzwy48</bpmn:incoming>
      <bpmn:outgoing>Flow_0yq9i80</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1gzwy48" sourceRef="Gateway_1io11ed" targetRef="Activity_0prwjg7" />
    <bpmn:serviceTask id="Activity_19c8mha" name="预占暂存位释放">
      <bpmn:incoming>Flow_0bshc6b</bpmn:incoming>
      <bpmn:outgoing>Flow_05nodgi</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_0rgbjom" name="库存转移">
      <bpmn:incoming>Flow_05nodgi</bpmn:incoming>
      <bpmn:outgoing>Flow_16gk2kt</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0yq9i80" sourceRef="Activity_0prwjg7" targetRef="Gateway_1pcm1vc" />
    <bpmn:sequenceFlow id="Flow_05nodgi" sourceRef="Activity_19c8mha" targetRef="Activity_0rgbjom" />
    <bpmn:sequenceFlow id="Flow_16gk2kt" sourceRef="Activity_0rgbjom" targetRef="Event_0uwed50" />
    <bpmn:sequenceFlow id="Flow_06xuiv5" sourceRef="Activity_02680n0" targetRef="Event_0uwed50" />
    <bpmn:sequenceFlow id="Flow_1fmlhzk" sourceRef="Activity_1txzcme" targetRef="Event_0uwed50" />
    <bpmn:sequenceFlow id="Flow_0rbc5dx" sourceRef="Activity_0am6km6" targetRef="Event_0uwed50" />
    <bpmn:exclusiveGateway id="Gateway_1pcm1vc">
      <bpmn:incoming>Flow_0yq9i80</bpmn:incoming>
      <bpmn:outgoing>Flow_0bshc6b</bpmn:outgoing>
      <bpmn:outgoing>Flow_03qiua8</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0bshc6b" sourceRef="Gateway_1pcm1vc" targetRef="Activity_19c8mha" />
    <bpmn:sequenceFlow id="Flow_03qiua8" sourceRef="Gateway_1pcm1vc" targetRef="Activity_1t96t4n" />
    <bpmn:serviceTask id="Activity_1t96t4n" name="发送通知" camunda:expression="">
      <bpmn:incoming>Flow_03qiua8</bpmn:incoming>
    </bpmn:serviceTask>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1p34hki">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="462" y="112" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="442" y="82" width="77" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_02w6cal_di" bpmnElement="Activity_1dj0rx8">
        <dc:Bounds x="430" y="200" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_155buqq_di" bpmnElement="Activity_01hjocx">
        <dc:Bounds x="430" y="460" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_12mlct0_di" bpmnElement="Gateway_12mlct0" isMarkerVisible="true">
        <dc:Bounds x="455" y="345" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1u1ovlv_di" bpmnElement="Activity_02680n0">
        <dc:Bounds x="650" y="330" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_10it5eu_di" bpmnElement="Activity_0qw7lk9">
        <dc:Bounds x="430" y="620" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1a6z4pi_di" bpmnElement="Gateway_1a6z4pi" isMarkerVisible="true">
        <dc:Bounds x="455" y="745" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1ju4vwj" bpmnElement="Activity_1txzcme">
        <dc:Bounds x="650" y="730" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_03peetr" bpmnElement="Activity_0wlktr2">
        <dc:Bounds x="160" y="620" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1wgiu4o" bpmnElement="Activity_1ior0nx">
        <dc:Bounds x="430" y="830" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1nvsvfj" bpmnElement="Activity_01o9fb8">
        <dc:Bounds x="430" y="950" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_18wrm2d" bpmnElement="Gateway_1io11ed" isMarkerVisible="true">
        <dc:Bounds x="455" y="1075" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0u9c6lr" bpmnElement="Activity_0am6km6">
        <dc:Bounds x="650" y="1060" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0o22epe" bpmnElement="Activity_0prwjg7">
        <dc:Bounds x="430" y="1190" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0uwed50_di" bpmnElement="Event_0uwed50">
        <dc:Bounds x="462" y="1682" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="469" y="1725" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_124k4gw" bpmnElement="Activity_19c8mha">
        <dc:Bounds x="430" y="1430" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0cg6ul4" bpmnElement="Activity_0rgbjom">
        <dc:Bounds x="430" y="1550" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1pcm1vc_di" bpmnElement="Gateway_1pcm1vc" isMarkerVisible="true">
        <dc:Bounds x="455" y="1315" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_09k9b5j_di" bpmnElement="Activity_1t96t4n">
        <dc:Bounds x="650" y="1300" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1m4kene_di" bpmnElement="Flow_1m4kene">
        <di:waypoint x="480" y="280" />
        <di:waypoint x="480" y="345" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1jlh640_di" bpmnElement="Flow_1jlh640">
        <di:waypoint x="480" y="148" />
        <di:waypoint x="480" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_07oht8u_di" bpmnElement="Flow_07oht8u">
        <di:waypoint x="480" y="395" />
        <di:waypoint x="480" y="460" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0eogr7y_di" bpmnElement="Flow_0eogr7y">
        <di:waypoint x="505" y="370" />
        <di:waypoint x="650" y="370" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="555" y="352" width="45" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1s2qitk_di" bpmnElement="Flow_1s2qitk">
        <di:waypoint x="480" y="540" />
        <di:waypoint x="480" y="620" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0moals6_di" bpmnElement="Flow_0moals6">
        <di:waypoint x="480" y="700" />
        <di:waypoint x="480" y="745" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0pdaoxg_di" bpmnElement="Flow_0pdaoxg">
        <di:waypoint x="505" y="770" />
        <di:waypoint x="650" y="770" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="556" y="752" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0e85k8e_di" bpmnElement="Flow_0e85k8e">
        <di:waypoint x="260" y="660" />
        <di:waypoint x="430" y="660" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ygah8g_di" bpmnElement="Flow_1ygah8g">
        <di:waypoint x="480" y="795" />
        <di:waypoint x="480" y="830" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0blektu_di" bpmnElement="Flow_0blektu">
        <di:waypoint x="480" y="910" />
        <di:waypoint x="480" y="950" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_1kvpoaj" bpmnElement="Flow_0pjvvlg">
        <di:waypoint x="505" y="1100" />
        <di:waypoint x="650" y="1100" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="557" y="1082" width="45" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0npbjro_di" bpmnElement="Flow_0npbjro">
        <di:waypoint x="480" y="1030" />
        <di:waypoint x="480" y="1075" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1gzwy48_di" bpmnElement="Flow_1gzwy48">
        <di:waypoint x="480" y="1125" />
        <di:waypoint x="480" y="1190" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0yq9i80_di" bpmnElement="Flow_0yq9i80">
        <di:waypoint x="480" y="1270" />
        <di:waypoint x="480" y="1315" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_06xuiv5_di" bpmnElement="Flow_06xuiv5">
        <di:waypoint x="750" y="370" />
        <di:waypoint x="920" y="370" />
        <di:waypoint x="920" y="1700" />
        <di:waypoint x="498" y="1700" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1fmlhzk_di" bpmnElement="Flow_1fmlhzk">
        <di:waypoint x="750" y="770" />
        <di:waypoint x="920" y="770" />
        <di:waypoint x="920" y="1700" />
        <di:waypoint x="498" y="1700" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0rbc5dx_di" bpmnElement="Flow_0rbc5dx">
        <di:waypoint x="750" y="1100" />
        <di:waypoint x="920" y="1100" />
        <di:waypoint x="920" y="1700" />
        <di:waypoint x="498" y="1700" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_16gk2kt_di" bpmnElement="Flow_16gk2kt">
        <di:waypoint x="480" y="1630" />
        <di:waypoint x="480" y="1682" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_05nodgi_di" bpmnElement="Flow_05nodgi">
        <di:waypoint x="480" y="1510" />
        <di:waypoint x="480" y="1550" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0bshc6b_di" bpmnElement="Flow_0bshc6b">
        <di:waypoint x="480" y="1365" />
        <di:waypoint x="480" y="1430" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_03qiua8_di" bpmnElement="Flow_03qiua8">
        <di:waypoint x="505" y="1340" />
        <di:waypoint x="650" y="1340" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


