---
title: 框架详细解读
---

## 系统架构图

![[01.png]]

- 系统可以提供 Web / Mobile / Pad / 大屏，等多种客户端打包和发布运行
- 工作台 (workbench) 服务是公共服务端，用户通过工作台进入到各个子功能模块。
- WMS/WCS/MFC/TMS/OMS 等等子系统，是以插件的方法集成到工作台中，通过工作台的菜单进行切换。
- 所有子应用都是统一的认证和鉴权，与workbench框架统一管理用户认证
- 每个子应用的后台都有自己的监听端口、唯一的URL前缀；
- 每个子应用都有自己的 git 文件夹、各自管理源码和后端。
- 功能前端可以交叉调用后台，比如 WMS 前端能调用 WMS 后端，也可以调用 WCS 后端接口 / WCS 前端能调用 MFC 后端服务
- workbench 带有二开平台，能基于目标系统做功能（前端界面、系统接口、数据字典、数据窗口、数据集成、计划任务、打印模板）开发。二开开发完的功能界面，放进自己应用（WMS/WCS/OES/MFC）所在的前端文件夹。
  workbench 在本地开发时能独立启动，方便本地开发调试。也能本地启动、测试服务器端远程调用。灵活配置。
- 框架统一管理通讯加密、WebSocket消息推送、终端在线（离线）管理;
- 工作台能连接所有子应用的数据库。方便进行表结构调整、元数据查询、统一数据查询报表;
- 工作台自带系统监控功能，JVM监控、服务器指标监控、Jdbc性能监控、中间件性能监控、负载均衡管理都包含在内
- workbench 完成统一的lisence授权、授权时间接口、用户认证、鉴权、角色和菜单管理、
- WMS 有2个后台服务，ent/wms 服务，至少有3个数据库 ent/wms/history.
- WCS 根据设备情况，可能有很多服务、很多数据库（比如: 堆垛机、托盘输送线、箱式输送线、贴标机、机械手、电子标签,
  每类设备一个后台一个数据库)
- MFC 有很多后台服务，多个数据源环境


## 项目文件结构

<pre>
yvan-workbench-app
 ├─ gradle  // gradle的自启动
 ├─ libs    // 项目三方 jar 包
 │   ├─ yvan-core-0.0.0-SNAPSHOT.jar
 │   ├─ yvan-data-0.0.0-SNAPSHOT.jar
 │   └─ ...xxx.jar
 ├─ modules // 存放所有子系统的统一目录
 │   ├─ mfc // mfc 子系统. 独立GIT
 │   │   ├─ mfc-web-ui
 │   │   │   ├─ src
 │   │   │   │   ├─ pages
 │   │   │   │   │   ├─ xxx.vue // 前端页面
 │   │   │   │   │   └─ xxx.design.js // 设计器产出物文件
 │   │   │   │   └─ main.js // 前端引导文件
 │   │   │   ├─ package.json // 前端包装文件
 │   │   │   └─ tsconfig.json // 前端ts配置
 │   ├─ pes // pes 子系统. 独立GIT
 │   │   ├─ pes-web-ui
 │   │   │   ├─ src
 │   │   │   │   ├─ pages
 │   │   │   │   └─ main.js
 │   │   │   ├─ package.json
 │   │   │   └─ tsconfig.json
 │   ├─ wcs // wcs 子系统. 独立GIT
 │   │   ├─ wcs-web-ui
 │   │   │   ├─ src
 │   │   │   │   ├─ pages
 │   │   │   │   └─ main.js
 │   │   │   ├─ package.json
 │   │   │   └─ tsconfig.json
 │   └─ wms // wms 子系统. 独立GIT
 │       ├─ mobile-ui // WMS 移动端
 │       │   ├─ src
 │       │   │   ├─ pages
 │       │   │   └─ main.js
 │       │   ├─ package.json
 │       │   └─ tsconfig.json
 │       ├─ web-ui // WMS PC端项目定制模块
 │       │   ├─ src
 │       │   │   ├─ pages
 │       │   │   └─ main.js
 │       │   ├─ package.json
 │       │   └─ tsconfig.json
 │       ├─ web-ui-core // WMS 产品核心PC前端
 │       │   ├─ src
 │       │   │   ├─ pages
 │       │   │   └─ main.js
 │       │   ├─ package.json
 │       │   └─ tsconfig.json
 │       ├─ wms // WMS后台服务,端口:18081, 全局唯一资源前缀: /wms
 │       │   ├─ src  // 后端源码
 │       │   │   ├─ main            // 主程序
 │       │   │   │   ├─ java          // java源码
 │       │   │   │   └─ resources     // 资源文件
 │       │   │   └─ test            // 单元测试
 │       │   │       ├─ java          // java源码
 │       │   │       └─ resources     // 资源文件
 │       │   └─ build.gradle
 │       ├─ ent // WMS 企业后台包
 │       │   ├─ src
 │       │   │   ├─ main
 │       │   │   │   ├─ java
 │       │   │   │   └─ resources
 │       │   │   └─ test
 │       │   │       ├─ java
 │       │   │       └─ resources
 │       │   └─ build.gradle
 │       ├─ wms-api // WMS接口项目,端口:18083, 全局唯一资源前缀: /wms-api
 │       │   ├─ src
 │       │   │   ├─ main
 │       │   │   │   ├─ java
 │       │   │   │   └─ resources
 │       │   │   └─ test
 │       │   │       ├─ java
 │       │   │       └─ resources
 │       │   └─ build.gradle
 │       └─ wms-common // WMS公共模块，定义系统实体类、查询类、枚举类
 │           ├─ src
 │           │   ├─ main
 │           │   │   ├─ java
 │           │   │   └─ resources
 │           │   └─ test
 │           │       ├─ java
 │           │       └─ resources
 │           └─ build.gradle
 ├─ workbench-servo // 公共基座后台服务,端口:18080, 全局唯一资源前缀: /workbench
 │   ├─ src
 │   │   ├─ main
 │   │   │   ├─ java
 │   │   │   └─ resources
 │   │   └─ test
 │   │       ├─ java
 │   │       └─ resources
 │   └─ build.gradle
 ├─ workbench-ui // 公共基座Web前端服务,浏览器端口:3087
 │   ├─ assets                    // 静态资源
 │   ├─ public                    // 公共页面
 │   ├─ src                       // 前端源码
 │   ├─ widget                    // 数据窗口组件
 │   ├─ index.html                // 入口页面
 │   ├─ package.json              // 前端包装文件
 │   ├─ tsconfig.json             // 前端ts配置
 │   └─ vite.config.ts            // vite配置.用于 dev / build Web服务
 ├─ mobile-ui                     // 公共基座移动端前端服务,浏览器端口:3088
 │   ├─ assets                    
 │   ├─ public                    
 │   ├─ src                       
 │   ├─ widget                    
 │   ├─ index.html                
 │   ├─ package.json              
 │   ├─ tsconfig.json             
 │   └─ vite.config.ts            
 ├─ yvan-framework // 凯乐士开发平台基础后端库
 │   ├─ yvan-model                        // 基础实体类、JSR303验证枚举支持及扩充、业务异常定义
 │   ├─ yvan-core                         // 常用工具类，如：图片验证生成、字符编码以及加解密、唯一id生成等
 │   ├─ yvan-data                         // 提供数据访问层能力
 │   │   ├─ yvan-data-dynamic-sql     // mybatis规范的动态sql实现(支持运行时热更新sql)
 │   │   ├─ yvan-data-jdbc            // 提供基于jdbc的数据库访问能力(基于JdbcTemplate)
 │   │   ├─ yvan-data-jdbc-meta       // 读取数据库元数据
 │   │   └─ yvan-data-redis           // Redis数据库访问层能力(基于RedisTemplate)
 │   ├─ yvan-web                          // 对spring-mvc的封装，全局异常处理、请求日志、静态资源映射、文件上传控制
 │   ├─ yvan-security                     // 权限框架，RBAC模型的抽象
 │   ├─ yvan-groovy                       // 提供groovy语言的支持
 │   ├─ yvan-file                         // 文件管理封装
 │   │   ├─ yvan-file-common          // 文件管理基础模块
 │   │   ├─ yvan-file-sdk             // 外部模块接入文件系统时使用的sdk模块
 │   │   └─ yvan-file-server          // 文件管理服务端
 │   ├─ yvan-print                        // 打印后端
 │   ├─ yvan-rule                         // 业务规则后端
 │   ├─ yvan-studio                       // 低代码后端
 │   └─ yvan-xxljob                       // 分布式任务调度
 ├─ yvan-workbench // 凯乐士开发平台基础前端库
 │   ├─ src
 │   ├─ package.json
 │   ├─ tsconfig.json
 │   └─ vite.config.ts    
 ├─ .gitignore
 ├─ build.gradle              // 项目群的gradle构建文件
 ├─ gradle.properties         // gradle配置文件
 ├─ gradlew                   // gradle的linux命令
 ├─ gradlew.bat               // gradle的windows命令
 ├─ license                   // 授权文件
 ├─ package.json              // 工作组的npm包装文件
 ├─ workbench.yml             // 工作台配置文件
 └─ settings.gradle           // 项目群的gradle配置文件
</pre>

## 工作台配置(workbench.yml)

workbench.yml 是整个系统的核心配置文件，包含了系统的基本信息、各个子系统的配置信息，以及各个子系统的前后端代码生成配置信息。
大致结构为：

```text
workbench
    name 工作台名称
    jdbcUrl jdbc连接串
    jdbcUsername  jdbc用户名
    jdbcPassword jdbc密码
    jdbcDialect: 数据库方言( MYSQL / POSTGRESQL / ORACLE)
    schemaName: 数据库schema名称
    appList: 子系统列表
        app_key: 子系统名称
        title: 子系统标题
        jdbcList: 子系统数据库配置
            - name jdbc名称
              title jdbc标题
              jdbcUrl jdbc连接串
              jdbcUsername  jdbc用户名
              jdbcPassword jdbc密码
              jdbcDialect: 数据库方言( MYSQL / POSTGRESQL / ORACLE)
              schemaName: 数据库schema名称
        frontendList: 子系统前端配置
            - name 前端名称
              frontendType 前端类型( mobile-移动端 / web-Web端)
              frontendLocation 文件夹路径
              codeGenerator: 前端代码生成配置
                  template 代码生成器模板
                  fileExtension 生成文件后缀
                  generationAt 代码生成器的生成时机(createPage-创建页面时)
        backendList: 子系统后端配置
            - name 后端名称
              title 后端标题
              identityUrlPrefix 后端的唯一URL前缀(用来做权限控制和路由 )
              serverUrl 后端服务地址
              serverPort 后端服务监听端口
              codeGenerator: 后端代码生成配置
                  template 代码生成器模板
                  fileExtension 生成文件后缀
                  generationAt 代码生成器的生成时机(DbTable-新建表格时 / Dict-新建字典时 / UpdateMethod-更新方法时 / MyBatis-写入MyBatis内容时 / WidgetSql-写入数据窗口的SQL时)
                
```

配置示例

```yaml
workbench:
  uid: e340d60c-f2fb-1d5b-4ca5-5ffd58a5ec4b
  name: yxtzjc
  title: 一心堂总集成项目
  git: http://xxxx
  gitBranch: master
  ip: localhost
  port: 8080
  jdbcUrl: ...
  jdbcUsername: ...
  jdbcPassword: ...
  jdbcDialect: MYSQL
  lisencePrivateKeyFile: ...
  appList:
    - app_key: workbench
      title: 工作台
      jdbcList:
        - name: master
          title: 主库
          jdbcUrl: ...
          jdbcUsername: ...
          jdbcPassword: ...
          jdbcDialect: MYSQL
          schemaName: ...
      dataSourceList:
        - name: master
          title: 主库framework
          backendName: workbench-servo
          jdbcKey: master
      frontendList:
        - name: workbench-web-ui
          title: 基座页面
          frontendLocation: './workbench-ui/src'
          frontendType: web
          codeGenerator:
            - name: designJs
              title: 生成DesignJs
              template: ./template/designJs.ftl
              fileExtension: .design.js
              generationAt: createPage
            - name: vue
              title: 生成Vue
              template: ./template/webVue.ftl
              fileExtension: .vue
              generationAt: createPage
        - name: sutdio-ui
          title: Studio界面
          frontendLocation: './yvan-workbench/src'
          frontendType: web
          codeGenerator:
            - name: designJs
              title: 生成DesignJs
              template: ./template/designJs.ftl
              fileExtension: .design.js
              generationAt: createPage
            - name: vue
              title: 生成Vue
              template: ./template/webVue.ftl
              fileExtension: .vue
              generationAt: createPage
      backendList:
        - name: workbench-servo
          title: 工作台主服务
          identityUrlPrefix: '/workbench'
          codeGenerator:
            - name: entity
              title: 实体
              classFullName: com.yvan.studio.entity.#(com.yvan.core.NamingUtils::firstUppper(tableNameCamel))
              fileExtension: .java
              location: './yvan-framework/yvan-groovy/src/main/java'
              template: ./template/javaEntity.ftl
              generationAt: DbTable
            - name: queryDsl
              title: DSL帮助类
              classFullName: com.yvan.studio.query.Q#(com.yvan.core.NamingUtils::firstUppper(tableNameCamel))
              fileExtension: .java
              location: './yvan-framework/yvan-groovy/src/main/java'
              template: ./template/javaQueryDsl.ftl
              generationAt: DbTable
            - name: enum
              title: 枚举帮助类
              classFullName: com.yvan.studio.enums.C#(dictCode)
              fileExtension: .java
              location: './workbench-servo/src/main/groovy'
              template: ./template/javaEnum.ftl
              generationAt: Dict
            - name: controller
              title: 控制器
              classFullName: com.yvan.workbench.#(com.yvan.core.NamingUtils::join(modulePath,'.')).#(moduleName)
              fileExtension: .java
              location: './yvan-framework/yvan-studio/src/main/java'
              template: ./template/javaMethod.ftl
              generationAt: Controller
            - name: mybatis
              title: 生成Mybatis
              location: ./yvan-framework/yvan-studio/src/main/java/com/yvan/workbench/#(com.yvan.core.NamingUtils::join(modulePath,'/'))/#(moduleName).xml
              template: ./template/javaMyBatis.ftl
              generationAt: MyBatis
            - name: widget
              title: 生成WidgetSql
              location: ./workbench-servo/src/main/java/com/yvan/workbench/Widget.xml
              generationAt: WidgetSql

    - app_key: WMS
      title: WMS系统
      git:
      gitBranch:
      jdbcList:
        - name: master
          title: 主库
          jdbcUrl: ...
          jdbcUsername: ...
          jdbcPassword: ...
          jdbcDialect: MYSQL
          schemaName: ...
        - name: ent
          title: ENT库
          jdbcUrl: ...
          jdbcUsername: ...
          jdbcPassword: ...
          jdbcDialect: MYSQL
          schemaName: ...
        - name: history
          title: 历史库
          jdbcUrl: ...
          jdbcUsername: ...
          jdbcPassword: ...
          jdbcDialect: MYSQL
          schemaName: ...
      dataSourceList:
        - name: master
          title: 主库wms
          backendName: wms
          jdbcKey: master
      frontendList:
        - name: wms-ui
          title: Web端
          git:
          gitBranch:
          frontendLocation: './modules/demo-wms/web-ui/src'
          frontendType: web
          codeGenerator:
            - name: designJs
              title: 生成DesignJs
              template: ./template/designJs.ftl
              fileExtension: .design.js
              generationAt: createPage
            - name: vue
              title: 生成Vue
              template: ./template/webVue.ftl
              fileExtension: .vue
              generationAt: createPage
        - name: wms-ui-pro
          title: Web端(核心)
          git:
          gitBranch:
          frontendLocation: './modules/demo-wms/web-ui-pro/src'
          frontendType: web
          codeGenerator:
            - name: designJs
              title: 生成DesignJs
              template: ./template/designJs.ftl
              fileExtension: .design.js
              generationAt: createPage
            - name: vue
              title: 生成Vue
              template: ./template/webVue.ftl
              fileExtension: .vue
              generationAt: createPage
        - name: mobile-ui
          title: RF端
          git:
          gitBranch:
          routePrefix: '/m_wms'
          frontendLocation: './modules/demo-wms/mobile-ui/src'
          frontendType: mobile
      backendList:
        - name: wms
          title: 主服务
          git:
          gitBranch:
          identityUrlPrefix: '/wms'
          backendLocation: './modules/demo-wms/wms'
          serverUrl: http://localhost:18081
          serverPort: 18081
          codeGenerator:
            - name: entity
              title: 实体
              classFullName: com.galaxis.wms.#(com.yvan.core.NamingUtils::join(bizCategoryList,'.')).entity.#(com.yvan.core.NamingUtils::firstUppper(tableNameCamel))
              fileExtension: .java
              location: './modules/demo-wms/wms-common/src/main/java'
              template: ./template/javaEntity.ftl
              generationAt: DbTable
            - name: queryDsl
              title: DSL帮助类
              classFullName: com.galaxis.wms.#(com.yvan.core.NamingUtils::join(bizCategoryList,'.')).query.Q#(com.yvan.core.NamingUtils::firstUppper(tableNameCamel))
              fileExtension: .java
              location: './modules/demo-wms/wms-common/src/main/java'
              template: ./template/javaQueryDsl.ftl
              generationAt: DbTable
            - name: enum
              title: 枚举帮助类
              classFullName: com.galaxis.wms.enums.C#(dictCode)
              fileExtension: .java
              location: './modules/demo-wms/wms-common/src/main/java'
              template: ./template/javaEnum.ftl
              generationAt: Dict
            - name: controller
              title: 控制器
              classFullName: com.galaxis.wms.#(com.yvan.core.NamingUtils::join(bizCategoryList,'.')).#(com.yvan.core.NamingUtils::firstUppper(moduleName))Controller
              fileExtension: .java
              location: './modules/demo-wms/wms/src/main/java'
              template: ./template/javaMethod.ftl
              generationAt: UpdateMethod
            - name: mybatis
              title: 生成Mybatis
              namespace: com.galaxis.wms
              location: ./modules/demo-wms/wms/src/main/java/com/galaxis/#(com.yvan.core.NamingUtils::join(modulePath,'/'))/#(moduleName).xml
              template: ./template/javaMyBatis.ftl
              generationAt: MyBatis
            - name: widget
              title: 生成WidgetSql
              location: ./modules/demo-wms/wms/src/main/java/com/galaxis/wms/Widget.xml
              generationAt: WidgetSql
        - name: ent
          title: ENT服务
          git:
          gitBranch:
          identityUrlPrefix: '/wmsEnt'
          backendLocation: './modules/demo-wms/ent'
          serverUrl: http://localhost:18083
          serverPort: 18083
        - name: api
          title: API服务
          git:
          gitBranch:
          identityUrlPrefix: '/wmsApi'
          backendLocation: './modules/demo-wms/wms-api'
          serverUrl: http://localhost:18084
          serverPort: 18084

    - app_key: WCS
      title: WCS系统
      frontendList:
        - name: wcs-web-ui
          title: Web端
          frontendLocation: './modules/demo-wcs/wcs-web-ui/src'
          frontendType: web
          codeGenerator:
            - name: designJs
              title: 生成DesignJs
              template: ./template/designJs.ftl
              fileExtension: .design.js
              generationAt: createPage
            - name: vue
              title: 生成Vue
              template: ./template/webVue.ftl
              fileExtension: .vue
              generationAt: createPage

    - app_key: MFC
      title: MFC系统
      frontendList:
        - name: mfc-web-ui
          title: Web端
          frontendLocation: './modules/demo-mfc/mfc-web-ui/src'
          frontendType: web
          codeGenerator:
            - name: designJs
              title: 生成DesignJs
              template: ./template/designJs.ftl
              fileExtension: .design.js
              generationAt: createPage
            - name: vue
              title: 生成Vue
              template: ./template/webVue.ftl
              fileExtension: .vue
              generationAt: createPage

    - app_key: PES
      title: PES系统
      frontendList:
        - name: pes-web-ui
          title: Web端
          frontendLocation: './modules/demo-pes/pes-web-ui/src'
          frontendType: web
          codeGenerator:
            - name: designJs
              title: 生成DesignJs
              template: ./template/designJs.ftl
              fileExtension: .design.js
              generationAt: createPage
            - name: vue
              title: 生成Vue
              template: ./template/webVue.ftl
              fileExtension: .vue
              generationAt: createPage
```
