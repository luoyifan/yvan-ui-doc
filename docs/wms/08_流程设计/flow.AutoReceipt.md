---
title: AutoReceipt
desc: 顺德大参林自动收货
type: flow
tags:
  - wms/flow/AutoReceipt
---

# title
>[!workflow] AutoReceipt
> 顺德大参林自动收货
> 
> 部署号: N/A
>
> 最后部署时间: 2024-01-31 10:19:23.214
> 
> 版本: 
> 
> 定义号: 


# 图形内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_0tp1hln" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.19.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">
  <bpmn:process id="Process_1p34hki" isExecutable="true" camunda:historyTimeToLive="180">
    <bpmn:startEvent id="StartEvent_1" name="大参林自动收货流程">
      <bpmn:outgoing>Flow_1jlh640</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1m4kene" sourceRef="Activity_1dj0rx8" targetRef="Gateway_12mlct0" />
    <bpmn:userTask id="Activity_1dj0rx8" name="OCR扫码">
      <bpmn:incoming>Flow_1jlh640</bpmn:incoming>
      <bpmn:outgoing>Flow_1m4kene</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1jlh640" sourceRef="StartEvent_1" targetRef="Activity_1dj0rx8" />
    <bpmn:exclusiveGateway id="Gateway_12mlct0">
      <bpmn:incoming>Flow_1m4kene</bpmn:incoming>
      <bpmn:outgoing>Flow_07oht8u</bpmn:outgoing>
      <bpmn:outgoing>Flow_0eogr7y</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_07oht8u" sourceRef="Gateway_12mlct0" targetRef="Activity_01hjocx" />
    <bpmn:sequenceFlow id="Flow_0eogr7y" name="异常" sourceRef="Gateway_12mlct0" targetRef="Activity_02680n0" />
    <bpmn:serviceTask id="Activity_02680n0" name="记录错误">
      <bpmn:incoming>Flow_0eogr7y</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:endEvent id="Event_0uwed50" name="结束">
      <bpmn:incoming>Flow_00061fn</bpmn:incoming>
      <bpmn:incoming>Flow_0r5uhfh</bpmn:incoming>
      <bpmn:incoming>Flow_0aulc7z</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:userTask id="Activity_01hjocx" name="生成贴标数据">
      <bpmn:incoming>Flow_07oht8u</bpmn:incoming>
      <bpmn:outgoing>Flow_0giqcy0</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0giqcy0" sourceRef="Activity_01hjocx" targetRef="Gateway_02dmoqm" />
    <bpmn:serviceTask id="Activity_17tmxeb" name="货物是否质检">
      <bpmn:incoming>Flow_0w7ms9o</bpmn:incoming>
      <bpmn:outgoing>Flow_1gno5os</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:exclusiveGateway id="Gateway_02dmoqm">
      <bpmn:incoming>Flow_0giqcy0</bpmn:incoming>
      <bpmn:outgoing>Flow_164dbct</bpmn:outgoing>
      <bpmn:outgoing>Flow_0w7ms9o</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:serviceTask id="Activity_1on6563" name="记录错误">
      <bpmn:incoming>Flow_164dbct</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_164dbct" name="有异常" sourceRef="Gateway_02dmoqm" targetRef="Activity_1on6563" />
    <bpmn:exclusiveGateway id="Gateway_0l4ynyi">
      <bpmn:incoming>Flow_1gno5os</bpmn:incoming>
      <bpmn:outgoing>Flow_0ttb7lk</bpmn:outgoing>
      <bpmn:outgoing>Flow_1mx99qn</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_1gno5os" sourceRef="Activity_17tmxeb" targetRef="Gateway_0l4ynyi" />
    <bpmn:serviceTask id="Activity_0cel9r5" name="标记质检">
      <bpmn:incoming>Flow_1mx99qn</bpmn:incoming>
      <bpmn:outgoing>Flow_1b44gnm</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_0kx1enu" name="标记不用质检">
      <bpmn:incoming>Flow_0ttb7lk</bpmn:incoming>
      <bpmn:outgoing>Flow_03j96ck</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0ttb7lk" sourceRef="Gateway_0l4ynyi" targetRef="Activity_0kx1enu" />
    <bpmn:sequenceFlow id="Flow_1mx99qn" sourceRef="Gateway_0l4ynyi" targetRef="Activity_0cel9r5" />
    <bpmn:sequenceFlow id="Flow_0w7ms9o" sourceRef="Gateway_02dmoqm" targetRef="Activity_17tmxeb" />
    <bpmn:sequenceFlow id="Flow_1b44gnm" sourceRef="Activity_0cel9r5" targetRef="Activity_0ptdu6t" />
    <bpmn:userTask id="Activity_180ixns" name="02BCR扫码">
      <bpmn:incoming>Flow_1ame8cq</bpmn:incoming>
      <bpmn:outgoing>Flow_1enylmd</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:serviceTask id="Activity_0ptdu6t" name="分配质检工位">
      <bpmn:incoming>Flow_1b44gnm</bpmn:incoming>
      <bpmn:outgoing>Flow_0mvhx28</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:exclusiveGateway id="Gateway_0u828wj">
      <bpmn:incoming>Flow_1enylmd</bpmn:incoming>
      <bpmn:outgoing>Flow_1n9kpjo</bpmn:outgoing>
      <bpmn:outgoing>Flow_02y5vnn</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_1enylmd" sourceRef="Activity_180ixns" targetRef="Gateway_0u828wj" />
    <bpmn:serviceTask id="Activity_02rjlyd" name="去往异常口">
      <bpmn:incoming>Flow_1n9kpjo</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1n9kpjo" sourceRef="Gateway_0u828wj" targetRef="Activity_02rjlyd" />
    <bpmn:serviceTask id="Activity_1jtnzgq" name="分配码垛位">
      <bpmn:incoming>Flow_03j96ck</bpmn:incoming>
      <bpmn:outgoing>Flow_1dd0ixu</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_03j96ck" sourceRef="Activity_0kx1enu" targetRef="Activity_1jtnzgq" />
    <bpmn:exclusiveGateway id="Gateway_1qv87du">
      <bpmn:incoming>Flow_1dd0ixu</bpmn:incoming>
      <bpmn:outgoing>Flow_11imllj</bpmn:outgoing>
      <bpmn:outgoing>Flow_0iqcjnh</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_1dd0ixu" sourceRef="Activity_1jtnzgq" targetRef="Gateway_1qv87du" />
    <bpmn:serviceTask id="Activity_0p4ajep" name="记录错误">
      <bpmn:incoming>Flow_11imllj</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_11imllj" sourceRef="Gateway_1qv87du" targetRef="Activity_0p4ajep" />
    <bpmn:userTask id="Activity_0axlxh9" name="机械手码垛完成">
      <bpmn:incoming>Flow_0iqcjnh</bpmn:incoming>
      <bpmn:outgoing>Flow_1ihhysw</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_0iqcjnh" sourceRef="Gateway_1qv87du" targetRef="Activity_0axlxh9" />
    <bpmn:serviceTask id="Activity_19dym30" name="绑定货物托盘">
      <bpmn:incoming>Flow_1ihhysw</bpmn:incoming>
      <bpmn:outgoing>Flow_0zxp4pg</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1ihhysw" sourceRef="Activity_0axlxh9" targetRef="Activity_19dym30" />
    <bpmn:sequenceFlow id="Flow_0zxp4pg" sourceRef="Activity_19dym30" targetRef="Activity_1ga3qzg" />
    <bpmn:exclusiveGateway id="Gateway_1wvqv38">
      <bpmn:incoming>Flow_13kpfps</bpmn:incoming>
      <bpmn:outgoing>Flow_1dwtblk</bpmn:outgoing>
      <bpmn:outgoing>Flow_0r5uhfh</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_1dwtblk" sourceRef="Gateway_1wvqv38" targetRef="Activity_0y0a33g" />
    <bpmn:sequenceFlow id="Flow_13kpfps" sourceRef="Activity_1ga3qzg" targetRef="Gateway_1wvqv38" />
    <bpmn:serviceTask id="Activity_1ga3qzg" name="判断码托完成？">
      <bpmn:incoming>Flow_0zxp4pg</bpmn:incoming>
      <bpmn:outgoing>Flow_13kpfps</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_00061fn" sourceRef="Activity_0y0a33g" targetRef="Event_0uwed50" />
    <bpmn:sequenceFlow id="Flow_0r5uhfh" sourceRef="Gateway_1wvqv38" targetRef="Event_0uwed50" />
    <bpmn:exclusiveGateway id="Gateway_0gk49nz">
      <bpmn:incoming>Flow_0mvhx28</bpmn:incoming>
      <bpmn:outgoing>Flow_1nanl3g</bpmn:outgoing>
      <bpmn:outgoing>Flow_1ame8cq</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:serviceTask id="Activity_083lw3p" name="去往异常口">
      <bpmn:incoming>Flow_1nanl3g</bpmn:incoming>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_1nanl3g" name="分配异常" sourceRef="Gateway_0gk49nz" targetRef="Activity_083lw3p" />
    <bpmn:sequenceFlow id="Flow_0mvhx28" sourceRef="Activity_0ptdu6t" targetRef="Gateway_0gk49nz" />
    <bpmn:sequenceFlow id="Flow_1ame8cq" sourceRef="Gateway_0gk49nz" targetRef="Activity_180ixns" />
    <bpmn:serviceTask id="Activity_1fgz15f" name="去往质检工位">
      <bpmn:incoming>Flow_02y5vnn</bpmn:incoming>
      <bpmn:outgoing>Flow_0aulc7z</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_02y5vnn" sourceRef="Gateway_0u828wj" targetRef="Activity_1fgz15f" />
    <bpmn:sequenceFlow id="Flow_0aulc7z" sourceRef="Activity_1fgz15f" targetRef="Event_0uwed50" />
    <bpmn:serviceTask id="Activity_0y0a33g" name="调用立体库上架">
      <bpmn:incoming>Flow_1dwtblk</bpmn:incoming>
      <bpmn:outgoing>Flow_00061fn</bpmn:outgoing>
    </bpmn:serviceTask>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1p34hki">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="612" y="112" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="592" y="82" width="77" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_02w6cal_di" bpmnElement="Activity_1dj0rx8">
        <dc:Bounds x="580" y="200" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_12mlct0_di" bpmnElement="Gateway_12mlct0" isMarkerVisible="true">
        <dc:Bounds x="605" y="345" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1u1ovlv_di" bpmnElement="Activity_02680n0">
        <dc:Bounds x="800" y="330" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1dcxmqq_di" bpmnElement="Activity_01hjocx">
        <dc:Bounds x="580" y="460" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1n22hyz" bpmnElement="Gateway_02dmoqm" isMarkerVisible="true">
        <dc:Bounds x="605" y="615" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0mqp5el_di" bpmnElement="Activity_17tmxeb">
        <dc:Bounds x="580" y="720" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_08u93mz" bpmnElement="Gateway_0l4ynyi" isMarkerVisible="true">
        <dc:Bounds x="605" y="865" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_06dva2h" bpmnElement="Activity_1on6563">
        <dc:Bounds x="800" y="600" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0e9ans6" bpmnElement="Activity_0cel9r5">
        <dc:Bounds x="770" y="930" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_11261p7" bpmnElement="Activity_0kx1enu">
        <dc:Bounds x="390" y="930" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1rxb77g_di" bpmnElement="Activity_1jtnzgq">
        <dc:Bounds x="390" y="1070" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1qv87du_di" bpmnElement="Gateway_1qv87du" isMarkerVisible="true">
        <dc:Bounds x="415" y="1195" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1i247d7" bpmnElement="Activity_0p4ajep">
        <dc:Bounds x="160" y="1180" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1l6wq38" bpmnElement="Activity_0axlxh9">
        <dc:Bounds x="390" y="1280" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_0a08nhi" bpmnElement="Activity_19dym30">
        <dc:Bounds x="390" y="1410" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1wvqv38_di" bpmnElement="Gateway_1wvqv38" isMarkerVisible="true">
        <dc:Bounds x="415" y="1635" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1iq2wkl_di" bpmnElement="Activity_1ga3qzg">
        <dc:Bounds x="390" y="1520" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0uwed50_di" bpmnElement="Event_0uwed50">
        <dc:Bounds x="622" y="1872" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="629" y="1915" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_158ft0l" bpmnElement="Activity_0ptdu6t">
        <dc:Bounds x="770" y="1050" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1smqalw" bpmnElement="Activity_180ixns">
        <dc:Bounds x="770" y="1290" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0u828wj_di" bpmnElement="Gateway_0u828wj" isMarkerVisible="true">
        <dc:Bounds x="795" y="1415" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1d108a2" bpmnElement="Activity_02rjlyd">
        <dc:Bounds x="990" y="1400" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1dzgibd" bpmnElement="Gateway_0gk49nz" isMarkerVisible="true">
        <dc:Bounds x="795" y="1175" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_10vd06q" bpmnElement="Activity_083lw3p">
        <dc:Bounds x="990" y="1160" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1r7j1hq" bpmnElement="Activity_1fgz15f">
        <dc:Bounds x="770" y="1520" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1hfpjqr_di" bpmnElement="Activity_0y0a33g">
        <dc:Bounds x="270" y="1700" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1jlh640_di" bpmnElement="Flow_1jlh640">
        <di:waypoint x="630" y="148" />
        <di:waypoint x="630" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1m4kene_di" bpmnElement="Flow_1m4kene">
        <di:waypoint x="630" y="280" />
        <di:waypoint x="630" y="345" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_07oht8u_di" bpmnElement="Flow_07oht8u">
        <di:waypoint x="630" y="395" />
        <di:waypoint x="630" y="460" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0eogr7y_di" bpmnElement="Flow_0eogr7y">
        <di:waypoint x="655" y="370" />
        <di:waypoint x="800" y="370" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="717" y="352" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0giqcy0_di" bpmnElement="Flow_0giqcy0">
        <di:waypoint x="630" y="540" />
        <di:waypoint x="630" y="615" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_164dbct_di" bpmnElement="Flow_164dbct">
        <di:waypoint x="655" y="640" />
        <di:waypoint x="800" y="640" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="711" y="622" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0w7ms9o_di" bpmnElement="Flow_0w7ms9o">
        <di:waypoint x="630" y="665" />
        <di:waypoint x="630" y="720" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1gno5os_di" bpmnElement="Flow_1gno5os">
        <di:waypoint x="630" y="800" />
        <di:waypoint x="630" y="865" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ttb7lk_di" bpmnElement="Flow_0ttb7lk">
        <di:waypoint x="605" y="890" />
        <di:waypoint x="440" y="890" />
        <di:waypoint x="440" y="930" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1mx99qn_di" bpmnElement="Flow_1mx99qn">
        <di:waypoint x="655" y="890" />
        <di:waypoint x="820" y="890" />
        <di:waypoint x="820" y="930" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1b44gnm_di" bpmnElement="Flow_1b44gnm">
        <di:waypoint x="820" y="1010" />
        <di:waypoint x="820" y="1050" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_03j96ck_di" bpmnElement="Flow_03j96ck">
        <di:waypoint x="440" y="1010" />
        <di:waypoint x="440" y="1070" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1dd0ixu_di" bpmnElement="Flow_1dd0ixu">
        <di:waypoint x="440" y="1150" />
        <di:waypoint x="440" y="1195" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11imllj_di" bpmnElement="Flow_11imllj">
        <di:waypoint x="415" y="1220" />
        <di:waypoint x="260" y="1220" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0iqcjnh_di" bpmnElement="Flow_0iqcjnh">
        <di:waypoint x="440" y="1245" />
        <di:waypoint x="440" y="1280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ihhysw_di" bpmnElement="Flow_1ihhysw">
        <di:waypoint x="440" y="1360" />
        <di:waypoint x="440" y="1410" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0zxp4pg_di" bpmnElement="Flow_0zxp4pg">
        <di:waypoint x="440" y="1490" />
        <di:waypoint x="440" y="1520" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1dwtblk_di" bpmnElement="Flow_1dwtblk">
        <di:waypoint x="415" y="1660" />
        <di:waypoint x="320" y="1660" />
        <di:waypoint x="320" y="1700" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_13kpfps_di" bpmnElement="Flow_13kpfps">
        <di:waypoint x="440" y="1600" />
        <di:waypoint x="440" y="1635" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_00061fn_di" bpmnElement="Flow_00061fn">
        <di:waypoint x="320" y="1780" />
        <di:waypoint x="320" y="1830" />
        <di:waypoint x="640" y="1830" />
        <di:waypoint x="640" y="1872" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0r5uhfh_di" bpmnElement="Flow_0r5uhfh">
        <di:waypoint x="440" y="1685" />
        <di:waypoint x="440" y="1830" />
        <di:waypoint x="640" y="1830" />
        <di:waypoint x="640" y="1872" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_1ajqmsq" bpmnElement="Flow_1nanl3g">
        <di:waypoint x="845" y="1200" />
        <di:waypoint x="990" y="1200" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="896" y="1182" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1enylmd_di" bpmnElement="Flow_1enylmd">
        <di:waypoint x="820" y="1370" />
        <di:waypoint x="820" y="1415" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1n9kpjo_di" bpmnElement="Flow_1n9kpjo">
        <di:waypoint x="845" y="1440" />
        <di:waypoint x="990" y="1440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0mvhx28_di" bpmnElement="Flow_0mvhx28">
        <di:waypoint x="820" y="1130" />
        <di:waypoint x="820" y="1175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ame8cq_di" bpmnElement="Flow_1ame8cq">
        <di:waypoint x="820" y="1225" />
        <di:waypoint x="820" y="1290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_02y5vnn_di" bpmnElement="Flow_02y5vnn">
        <di:waypoint x="820" y="1465" />
        <di:waypoint x="820" y="1520" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0aulc7z_di" bpmnElement="Flow_0aulc7z">
        <di:waypoint x="820" y="1600" />
        <di:waypoint x="820" y="1830" />
        <di:waypoint x="640" y="1830" />
        <di:waypoint x="640" y="1872" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

```


