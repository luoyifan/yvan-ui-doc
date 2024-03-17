---
title: 规则引擎
---

# 介绍
规则引擎，专门用来处理大量逻辑判断，以脑图图形化的方法展现，方便运维和客户使用的一种框架特性

要开发规则引擎，是以下步骤
## 1.新建规则
![[Pasted image 20240315152420.png]]

![](./_assets/Pasted%20image%2020240315152420.png)

![[Pasted image 20240315152433.png]]


## 2.实现算法类

![[Pasted image 20240315152453.png]]

算法类的模板方法是
```groovy
package com.galaxis.wms.tool.locDispatch

import com.galaxis.wms.workbench.RuleFile
import com.yvan.core.BizContext
import com.yvan.core.json.JsonWrapper
import com.yvan.rule.Strategy

class TestDispatch {
    private static final String RULE_CODE = "InboundTask"
    private static volatile Strategy STRATEGY = null

    /**
     * 这个方法必须同名保留，规则发生变化时会主动调用这个方法，设置新版本的策略
     */
    public static void setStrategy(Strategy strategy) {
        STRATEGY = strategy
    }

    /**
     * 规则测试
     */
    public static Object testRun(Map<String, Object> params, String instanceId) {
        RuleFile.checkVersion(RULE_CODE, STRATEGY)

        // 检测新版本，并按需加载
        JsonWrapper jw = new JsonWrapper(params)
        InboundTaskInput input = jw.asObject(InboundTaskInput.class)
        BizContext.setValues(input)
        return STRATEGY.testRun()
    }

    /**
     * 上架分配分配
     */
    public static Object run(InboundTaskInput input, InboundTaskResult result) {
        RuleFile.checkVersion(RULE_CODE, STRATEGY)
        Object it = STRATEGY.run()
        return null
    }
}
```

## 3.选择事实维度

![[Pasted image 20240315152510.png]]

## 4.填写输入和输出的数据结构


![[Pasted image 20240315152524.png]]

![[Pasted image 20240315152530.png]]

有了输入的数据结构，就方便测试

![[Pasted image 20240315152543.png]]

有了输出的数据结构，方便填写决策

![[Pasted image 20240315152554.png]]

## 5.编写方便客户看懂的 VUE 编辑器

![[Pasted image 20240315152604.png]]

![[Pasted image 20240315152608.png]]

![[Pasted image 20240315152613.png]]