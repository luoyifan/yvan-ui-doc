---
title: 嘉兴WCS接口设计合并版
date: 2024-03-30 13:28
author: yvan
---

# WCS
## 3.1-托盘立库
---  

![connnector.asrsPalletTaskAdd](connnector.asrsPalletTaskAdd.md)
<!--@include:connnector.asrsPalletTaskAdd.md-->  
  
---  

![connnector.asrsPalletPriorityModify](connnector.asrsPalletPriorityModify.md)
<!--@include:connnector.asrsPalletPriorityModify.md-->  
  
---  

![asrsPalletTaskCancel.md](connnector.asrsPalletTaskCancel.md)
<!--@include:connnector.asrsPalletTaskCancel.md-->  

## 3.2-托盘密集库(白盒模式)

![pesPalletTransportAdd.md](connnector.pesPalletTransportAdd.md)
<!--@include:connnector.pesPalletTransportAdd.md-->  
  
---  

![pesPalletPriorityModify.md](connnector.pesPalletPriorityModify.md)
<!--@include:connnector.pesPalletPriorityModify.md-->  
  
---  

![pesPalletTaskCancel.md](connnector.pesPalletTaskCancel.md)
<!--@include:connnector.pesPalletTaskCancel.md-->  

## 3.3-穿梭车库

![alkTaskAdd.md](connnector.alkTaskAdd.md)
<!--@include:connnector.alkTaskAdd.md-->  
  
---  

![alkTaskPriorityModify.md](connnector.alkTaskPriorityModify.md)
<!--@include:connnector.alkTaskPriorityModify.md-->  
  
---  

![alkTaskCancel.md](connnector.alkTaskCancel.md)
<!--@include:connnector.alkTaskCancel.md-->  

## 3.5-顶升式AGV

![agvTransportAdd.md](connnector.agvTransportAdd.md)
<!--@include:connnector.agvTransportAdd.md-->  
  
---  

![avgTaskPriorityModify.md](connnector.avgTaskPriorityModify.md)
<!--@include:connnector.avgTaskPriorityModify.md-->  
  
---  

![agvTaskCancel.md](connnector.agvTaskCancel.md)
<!--@include:connnector.agvTaskCancel.md-->  

## 3.6-侧叉式AGV

![ccAgvTransportAdd.md](connnector.ccAgvTransportAdd.md)
<!--@include:connnector.ccAgvTransportAdd.md-->  
  
---  

![ccAgvStackingAdd.md](connnector.ccAgvStackingAdd.md)
<!--@include:connnector.ccAgvStackingAdd.md-->  
  
---  

![ccAgvTaskPriorityModify.md](connnector.ccAgvTaskPriorityModify.md)
<!--@include:connnector.ccAgvTaskPriorityModify.md-->  
  
---  

![ccAgvTaskCancel.md](connnector.ccAgvTaskCancel.md)
<!--@include:connnector.ccAgvTaskCancel.md-->  

## 3.7-ctu(包含三层飞梭)

![ctuAgvTransportAdd.md](connnector.ctuAgvTransportAdd.md)
<!--@include:connnector.ctuAgvTransportAdd.md-->  
  
---  

![ctuTaskPriorityModify.md](connnector.ctuTaskPriorityModify.md)
<!--@include:connnector.ctuTaskPriorityModify.md-->  
  
---  

![ctuTaskCancel.md](connnector.ctuTaskCancel.md)
<!--@include:connnector.ctuTaskCancel.md-->  

# WMS 接口定义

## 4.1-托盘立库-设备回调

![asrsRoadStatusModify.md](connnector.asrsRoadStatusModify.md)
<!--@include:connnector.asrsRoadStatusModify.md-->  
  
---  

![asrsPalletTaskRequest.md](connnector.asrsPalletTaskRequest.md)
<!--@include:connnector.asrsPalletTaskRequest.md-->  
  
---  

![asrsEmptyPalletOutRequest.md](connnector.asrsEmptyPalletOutRequest.md)
<!--@include:connnector.asrsEmptyPalletOutRequest.md-->  
  
---  

![asrsPalletTaskCallback.md](connnector.asrsPalletTaskCallback.md)
<!--@include:connnector.asrsPalletTaskCallback.md-->  

## 4.2-托盘密集库(白盒模式)-设备回调

![pesPalletTaskRequest.md](connnector.pesPalletTaskRequest.md)
<!--@include:connnector.pesPalletTaskRequest.md-->  
  
---  

![pesPalletTaskCallback.md](connnector.pesPalletTaskCallback.md)
<!--@include:connnector.pesPalletTaskCallback.md-->  

## 4.3-穿梭车库-设备回调

![alkTaskRequest.md](connnector.alkTaskRequest.md)
<!--@include:connnector.alkTaskRequest.md-->  
  
---  

![alkTaskCallback.md](connnector.alkTaskCallback.md)
<!--@include:connnector.alkTaskCallback.md-->  

## 4.5-顶升式AGV-设备回调

![agvTaskCallback.md](connnector.agvTaskCallback.md)
<!--@include:connnector.agvTaskCallback.md-->  

## 4.6-侧叉式AGV-设备回调

![ccAgvTaskCallback.md](connnector.ccAgvTaskCallback.md)
<!--@include:connnector.ccAgvTaskCallback.md-->  

## 4.7-ctu(包含三层飞梭)-设备回调

![ctuTaskCallback.md](connnector.ctuTaskCallback.md)
<!--@include:connnector.ctuTaskCallback.md-->  
  
---