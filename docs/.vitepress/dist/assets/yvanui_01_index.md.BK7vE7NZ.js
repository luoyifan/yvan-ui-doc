import{_ as o,c as s,J as a,w as e,a6 as t,m as l,a as n,G as r,o as d}from"./chunks/framework.d-Ywx6yJ.js";const c="/assets/01.X4OY0iG6.png",_="/assets/Pasted%20image%2020240315202941.CTlJRvjr.png",h="/assets/Pasted%20image%2020240315202947.RN9CjAmA.png",u="/assets/Pasted%20image%2020240418153026.CbaSJyuI.png",p="/assets/Pasted%20image%2020240315202957.CyXFBS5n.png",v=JSON.parse('{"title":"框架介绍","description":"","frontmatter":{"title":"框架介绍"},"headers":[],"relativePath":"yvanui/01_index.md","filePath":"yvanui/01_index.md"}'),S={name:"yvanui/01_index.md"},m=t('<h1 id="总体介绍" tabindex="-1">总体介绍 <a class="header-anchor" href="#总体介绍" aria-label="Permalink to &quot;总体介绍&quot;">​</a></h1><p><img src="'+c+'" alt="" loading="lazy"> 凯乐士供应链管理系统（Supply Chain Management System）提供涵盖物流供应链的完整解决方案，其核心系统包括：</p><ul><li>WMS 仓储管理系统 (Warehouse Management System) 仓库管理系统，用于管理仓库内的库存、出入库操作等</li><li>WCS 设备控制系统 (Warehouse Control System) 用于控制仓库内的设备，如输送带、堆垛机等</li><li>WES 仓库执行系统 (Warehouse Execution System) 负责执行具体的仓库操作指令</li><li>MFC 多层穿梭车调度系统 (Multi-Floor Carrier System) 用于调度多层穿梭车的运行</li><li>RCS 机器人控制系统 (Robot Control System).用于控制AGV/RGV设备的操作。</li><li>TMS 运输调度系统 (Transportation Management System) 用于规划和管理运输路线、车辆调度等</li><li>OMS 订单管理系统 (Order Management System)，负责处理和管理来自不同渠道的订单。</li><li>BMS 报表系统 (Business Management System) 用于生成各种报表和数据分析</li><li>AI引擎: 提供路径导航、自动纠偏、环境监测、需求预测、数据分析、数字仿真、预防维护、智能开发等功能。</li></ul><p>系统解决方案的特点：</p><ul><li>全面覆盖存取、搬运、分拣、运输四大物流场景</li><li>精准的需求预测与计划执行，增强供应链能力，提升运营效率</li><li>强大的的波次拆分、任务均衡、自动补货、配送规划等智能作业算法，最大化提高作业效率</li><li>智能化的诊断技术，支持3D可视化设备监控与智能远程修 复，并可对西门子、三菱等多种PLC进行设备控制和集成</li><li>强大的二开平台，架构完整并且统一，个性化扩展能力远远优于传统软件基础平台</li><li>全面拥抱AI，AI技术在系统解决方案中开始尝试使用，部分场景已得到应用</li></ul><hr><h1 id="凯乐士开发平台" tabindex="-1">凯乐士开发平台 <a class="header-anchor" href="#凯乐士开发平台" aria-label="Permalink to &quot;凯乐士开发平台&quot;">​</a></h1><p>凯乐士整个软件体系基于自研的凯乐士开发平台构建，在架构层面保持完整并且统一，其项目的个性化扩展能力大大优于传统软件基础平台。</p><p>凯乐士开发平台是一套基于<code>vue</code>和<code>微服务架构</code>构建的企业级应用系统开发平台，其核心特点在于对系统的关键组成部分进行统一、高效、灵活的管理和配置，旨在提升整体性能、稳定性和可维护性。</p><p>二次开发平台功能包括：</p><ul><li>低代码开发: 通过可视化界面和拖拽式操作，快速开发个性化功能。</li><li>数据库设计: 灵活设计数据库结构，满足不同业务需求。</li><li>接口平台: 提供标准化接口，方便与其他系统集成。</li><li>数据集成平台: 实现不同系统间的数据交换和共享。</li><li>数据字典: 统一数据定义，确保数据一致性。</li><li>规则引擎: 灵活配置业务规则，满足个性化需求。</li><li>流程引擎: 可视化设计业务流程，提高流程效率。</li></ul><p>二次开发平台现在与AI进行结合，支持自然语言对话，初步实现个性化功能的自动生成。 大幅提升项目研发和交付效率。</p><h2 id="平台架构与模块化设计" tabindex="-1">平台架构与模块化设计 <a class="header-anchor" href="#平台架构与模块化设计" aria-label="Permalink to &quot;平台架构与模块化设计&quot;">​</a></h2><p>将流程管理、规则策略配置、接口设计、用户界面搭建、数据库结构和字典设计等关键环节纳入统一管理，使得整个系统具有高度的模块化和集成性。在底层架构和业务逻辑层面经历了全面的重构，多方面提升性能，降低了后期的维护成本和扩展难度。</p><h2 id="流程引擎" tabindex="-1">流程引擎 <a class="header-anchor" href="#流程引擎" aria-label="Permalink to &quot;流程引擎&quot;">​</a></h2><p>支持对仓储流程（如入库、出库、盘点、质检等）的精细化定义与控制，通过接口算法和明确的流程切分点，确保每个流程步骤清晰可追溯。例如，不同类型的入库流程可以根据实际场景（如自动化入库、人工收货等）以不同的实体（如原箱号、托盘号）作为流程启动标识，进而实现对每个流程实例的独立跟踪与管理。</p><h2 id="规则引擎" tabindex="-1">规则引擎 <a class="header-anchor" href="#规则引擎" aria-label="Permalink to &quot;规则引擎&quot;">​</a></h2><p>规则引擎，允许用户通过可视化工具如脑图等形式定义复杂的业务计算过程. 凯乐士自研规则引擎性能优异，媲美代码级性能，且灵活性高。 支持多种规则配置，包括： 库存属性规则、上架规则、波次模板（出库模式）规则、出库分配规则、出库任务拆分规则、分播规则、集货规则、作业工位分配规则、界面规则、扩展属性规则、序号生成规则、条码管控规则 满足灵活多变的系统特性。</p><p>案例: 某集团公司供应链系统，他在中国的全国各地拥有超400个物流仓库，每个仓库有不同的作业流程，其管理的物料更是五花八门。如工程物料、3C品、医疗器械、快消品等等，每种不同类型的商品也有不同的物料管控要求、不同的拣货模式。</p><p>士软件仅需一套部署，即可满足全国 400 多个仓库、不同类型商品的多样化运营需求，展现了规则引擎的强大灵活性。</p><h2 id="低代码开发" tabindex="-1">低代码开发 <a class="header-anchor" href="#低代码开发" aria-label="Permalink to &quot;低代码开发&quot;">​</a></h2><p>提供便捷的拖拽式界面设计工具，支持快速布局、方便的事件编写，内置丰富的预置业务组件，通过简单的拖放操作和属性定义，就能快速创建符合业务需求的功能界面和交互逻辑。所有功能界面无缝对接流程引擎，确保业务流程执行的顺畅</p><h2 id="数据字典" tabindex="-1">数据字典 <a class="header-anchor" href="#数据字典" aria-label="Permalink to &quot;数据字典&quot;">​</a></h2><p>包含枚举字典、数据字典设计模块，对各种复杂数据查询视图进行了统一管理，涵盖货主、仓库、库区、客户、商品等多个维度的信息。数据窗口不仅支持多字段检索和关联展示，如根据商品名称查询对应的包装规格和数量，还能方便地嵌入到业务流程中，简化制单及其他业务操作的数据获取与填写过程。</p><h2 id="接口平台" tabindex="-1">接口平台 <a class="header-anchor" href="#接口平台" aria-label="Permalink to &quot;接口平台&quot;">​</a></h2><p>接口平台提供了内外部系统接口的数据结构定义能力。在接口平台中设计和发布的接口可以直接供流程引擎调用，简化了接口组织与调用的过程，提高了跨系统协同工作的效率。此外，接口平台还支持接口测试、及文档自动生成等功能，减轻了开发和运维的工作负担。</p><h2 id="数据库设计平台" tabindex="-1">数据库设计平台 <a class="header-anchor" href="#数据库设计平台" aria-label="Permalink to &quot;数据库设计平台&quot;">​</a></h2><p>系统内建数据库设计工具，能够轻松定义系统的数据库表结构。设计完成后，该平台能智能辅助二次开发，自动解析查询字段的中文含义，关联字典翻译，联动数据窗口实现数据回填等操作。此外，数据库设计平台还能一键生成详尽的数据库文档，大幅提高团队间协作效率和项目实施速度。</p><h2 id="系统架构" tabindex="-1">系统架构 <a class="header-anchor" href="#系统架构" aria-label="Permalink to &quot;系统架构&quot;">​</a></h2><p><img src="'+_+'" alt="" loading="lazy"></p>',30),g=l("p",null,null,-1),P=t('<ol><li><strong>上游标准接口</strong>：比如ERP系统、MES系统、主数据系统等；</li><li><strong>WMS服务</strong>：这是整个架构的核心部分。它包括了基础资料（如仓库、货位等）、入库、出库和查询报表等功能模块。这些模块涵盖了仓库管理的各个方面，如收货、质检、盘点、复核等；</li><li><strong>API接口</strong>：WMS 通过接口平台与 MFC（多穿车调度系统）、RCS（AGV调度系统）、OES（订单执行系统）、支付系统、园区系统、快递系统进行对接；</li><li><strong>规则引擎</strong>：这通常用于处理复杂的业务逻辑和决策过程，例如上架规则、出库规则等；</li><li><strong>凯乐士开发平台</strong>：独立部署的二次开发平台，可以进行低代码的功能开发、打印模板的开发、数据字典的开发、数据库的维护、查询报表的维护、接口平台的维护、规则策略的维护、流程的维护等等</li></ol><h2 id="架构分层" tabindex="-1">架构分层 <a class="header-anchor" href="#架构分层" aria-label="Permalink to &quot;架构分层&quot;">​</a></h2><p><img src="'+h+'" alt="" loading="lazy"></p>',3),b=l("p",null,null,-1),M=l("ul",null,[l("li",null,"底层，底层是所有项目的框架，包括了基础的网络服务框架、安全、授权、UI组件框架、数据库操作底层、消息队列底层、接口底层、部署支持、监控、计划任务、存储等；"),l("li",null,"产品层：产品层主要是WMS系统的核心方法，包括系统管理、库存记账、原子业务逻辑（拣货、复合、盘点）基础方法、调度算法、货位分配算法、工作位分配等等核心逻辑；"),l("li",null,"项目层：每个项目单独定义的层级，包括：批次属性、商品扩展属性、数据字典、容器属性、各种规则策略（上架货位分配策略、工位分配策略、出库库存分配策略、库存周转策略、入库质检策略、换箱策略、线路策略）、查询报表、工作流程、打印模板、个性化的界面和功能交互等；"),l("li",null,"用户层：每个类用户或角色，可以单独定义界面的风格、语言、表格字段顺序、表格字段可见性、表单字段可见性、表单布局、数据查询策略等；")],-1),f=l("h2",{id:"实践案例-大型设备仓部署",tabindex:"-1"},[n("实践案例：大型设备仓部署 "),l("a",{class:"header-anchor",href:"#实践案例-大型设备仓部署","aria-label":'Permalink to "实践案例：大型设备仓部署"'},"​")],-1),x=l("p",null,[l("img",{src:u,alt:"",loading:"lazy"})],-1),C=l("p",null,null,-1),T=t('<ul><li><strong>持续集成与交付流程</strong>：采用Jenkins自动从Git代码仓库中拉取最新源码，通过Gradle构建工具和Nexus私有仓库完成应用系统的Docker镜像构建，并将其推送到Harbor镜像仓库以供后续使用。</li><li><strong>容器编排与服务管理</strong>：利用Rancher作为Kubernetes (K8s) 的可视化管理平台，让架构师和运维团队能直观地监控和管理服务集群，包括服务的部署、升级、扩容缩容等操作。K8s则从Harbor获取指定版本的应用镜像，负责启动服务实例，同时承担起内部负载均衡策略的实施，以及灰度发布、故障恢复、跨地域容灾等功能的管理。</li><li><strong>前端服务</strong>：wms-ui是经过打包后的前端静态资源Docker镜像，便于快速部署和更新。</li><li><strong>数据库服务</strong>：WMS系统依赖于PostgreSQL数据库管理系统，用于存储和管理复杂的数据关系。</li><li><strong>文件存储</strong>：采用Minio作为对象存储服务，用于存储和管理WMS系统相关的非结构化文件数据。</li><li><strong>缓存与授权</strong>：运用Redis进行高速缓存管理和授权数据存储，提高系统性能与安全性。</li><li><strong>内部系统集成</strong>：为了保证低延迟和高效率的交互响应，WMS系统需在同一局域网环境中与以下内部系统进行紧密集成： <ul><li>调用WCS系统执行相关仓储控制操作；</li><li>调用RCS系统执行相关资源调度任务；</li><li>调用MFC系统执行多穿库控制指令；</li><li>调用PES系统执行穿梭板调度控制指令。</li></ul></li></ul><h2 id="实践案例-saas部署" tabindex="-1">实践案例：SaaS部署 <a class="header-anchor" href="#实践案例-saas部署" aria-label="Permalink to &quot;实践案例：SaaS部署&quot;">​</a></h2><p><img src="'+p+'" alt="" loading="lazy"></p>',3),q=l("p",null,null,-1),y=t('<ul><li><code>Jenkins</code>拉取<code>GIT</code>中的源码，借助<code>gradle</code>和<code>nexus</code>构建应用系统docker,并推送至<code>Habor</code>；</li><li><code>Rancher</code>是<code>K8s</code>的管理界面，方便架构师和运维团队监控并维护服务集群；</li><li>K8s从Habor拉起指定版本镜像进行实例部署，并由K8s管理内部负载均衡策略，灰度策略、服务伸缩容、异地容灾都由K8s进行管理；</li><li>Wms-ui-pc / WMS-ui-mobile 是前端打包后的docker镜像，属于静态资源镜像；</li><li>WMS系统启动后将自生运行实例注册至nacos，服务之间的调用从nacos中获取服务列表；</li><li>WMS-Gateway是WMS后端服务接入口，Gateway读取nacos的服务列表，并进行后台服务请求的分发；</li><li>WMS需要<code>PostgreSQL</code>进行数据库管理；</li><li>WMS需要<code>ElasticSearch</code>进行索引管理；</li><li>WMS需要<code>Minio</code>进行文件的存储和管理；</li><li>WMS需要<code>Redis</code>管理缓存和授权数据；</li><li>WMS需要<code>Kafka</code>管理日志和消息队列；</li></ul><h2 id="组件列表" tabindex="-1">组件列表 <a class="header-anchor" href="#组件列表" aria-label="Permalink to &quot;组件列表&quot;">​</a></h2><ul><li>Vue3</li><li>ElementPlus</li><li>Vant4</li><li>JDK 17</li><li>Gradle 6.8.3</li><li>PostgreSQL &gt;= 14.0 或同版本Paas服务</li><li>Mysql 8.0</li><li>Redis &gt;= 6.0或同版本Paas</li><li>MiniIO 4.x或S3兼容的对象存储Paas服务</li><li>Nacos &gt;= V2.0</li><li>ElasticSearch 8.x</li><li>Kubernetes v1.23.15</li><li>Rancher v2.6.9</li><li>Jenkins 2.361.1</li><li>Nexus3 3.47.1</li><li>Nginx 1.22.1</li><li>Harbor 2.7.0</li><li>Node 16.x</li><li>Yarn 1.22.19</li></ul><hr>',4);function k(W,A,R,V,I,N){const i=r("YvCallOut");return d(),s("div",null,[m,a(i,{type:"info",title:"说明"},{default:e(()=>[g]),_:1}),P,a(i,{type:"info",title:"系统框架分为4层"},{default:e(()=>[b]),_:1}),M,f,x,a(i,{type:"info",title:"案例说明"},{default:e(()=>[C]),_:1}),T,a(i,{type:"info",title:"案例说明"},{default:e(()=>[q]),_:1}),y])}const G=o(S,[["render",k]]);export{v as __pageData,G as default};
