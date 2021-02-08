[![Build Status](https://travis-ci.org/crossoverJie/JCSprout.svg?branch=master)](https://travis-ci.org/crossoverJie/jeeplatform) [![Join the chat at https://gitter.im/jeeplatform/community](https://badges.gitter.im/jeeplatform/community.svg)](https://gitter.im/jeeplatform/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## 一、项目简介 
OTFS项目是一款以SpringBoot为核心框架，Web层框架React和多种开源组件框架而成的一款智能物联网办公系统。

代码结构图：
```
├─otfs----------------------------父项目，公共依赖
│  │
│  ├─otfs-cloud--------------------------网关模块
│  │
│  ├─otfs-common-----------------------公共模块
│  │
│  ├─otfs-device--------------------------设备模块
│  │
│  ├─otfs-log--------------------------日志模块
|  |
|  |─otfs-workflow-----------------------工作流模块
│  │
│  ├─otfs-message-----------------------消息模块
|  |
│  ├─otfs-ops-----------------------运维监控模块
│  │ 
│  ├─otfs-sys---------------基础模块
│  │ 
│  ├─otfs-user---------------用户模块

```

## 二、系统设计 
### 系统管理(模块名称otfs-sys) 
OTFS管理系统登录页面
ps:登录链接一般为：http://localhost:8888/user/login
![Image text](https://img-blog.csdnimg.cn/20210208142953303.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

管理系统欢迎页面，可以适配移动端页面
![Image text](https://img-blog.csdnimg.cn/20210208142953113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

产品分类页面，获取用户具有的权限，显示菜单
![Image text](https://img-blog.csdnimg.cn/20210208142953409.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

产品管理页面，获取用户具有的权限，显示菜单
![Image text](https://img-blog.csdnimg.cn/20210208142953317.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

SKU管理页面，获取用户具有的权限，显示菜单
![Image text](https://img-blog.csdnimg.cn/20210208142953368.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

设备管理界面，可以获取考勤机、打印机、传输机等设备信息
![Image text](https://img-blog.csdnimg.cn/20210208142953484.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

消息管理界面，可以用于收发站内、外消息（站外消息支持短信、邮件、极光推送等）
![Image text](https://img-blog.csdnimg.cn/20210208142953499.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

用户反馈界面，支持用户反馈改进建议到平台
![Image text](https://img-blog.csdnimg.cn/20210208142953528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

系统管理界面，支持账号管理、角色权限管理等
![Image text](https://img-blog.csdnimg.cn/20210208142953606.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

系统管理界面，支持账号管理、角色权限管理等
![Image text](https://img-blog.csdnimg.cn/20210208142953625.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

新建流程界面，支持报销、打车、财会等流程新建
![Image text](https://img-blog.csdnimg.cn/20210208142953674.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

模型管理，支持工作流模型创建、编辑、部署、导出、删除等
![Image text](https://img-blog.csdnimg.cn/20210208142953666.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

工作流流程管理，支持工作流部署、查看、激活、挂起、转换、删除等
![Image text](https://img-blog.csdnimg.cn/20210208142953728.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

![Image text](https://img-blog.csdnimg.cn/20210208142953798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

工作流程绘制，支持任意工作流流程绘制
![Image text](https://img-blog.csdnimg.cn/20210208142953795.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

自定义表单管理，支持自定义表单拖拽、绘制、生成
![Image text](https://img-blog.csdnimg.cn/20210208142953823.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

![Image text](https://img-blog.csdnimg.cn/20210208142953883.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

## 四、业务方案 
### 系统管理通用功能 
- [x] 单点登录: OAuth2.0+JWT单点登录/CAS单点登录
- [√] 用户管理: 系统用户	
- [√] 角色管理: 按照企业系统职能进行角色分配，每个角色具有不同的系统操作权限	
- [√] 权限管理: 权限管理细分到系统菜单权限
- [√] 菜单管理：系统可以配置系统菜单，并分配不同的权限	
- [x] 报表统计：数据报表、用户分析
- [x] 系统监控：数据库等方面监控(采用Druid提供的)
- [√] 在线文档：SwaggerUI API在线文档管理
- [√] 设备管理：考勤机、打印机、传输机等设备管理
- [√] 产品管理：不同种类产品、SKU管理
- [√] 消息管理：站内消息交流、站外消息推送（支持短信、邮件、极光推送等）

## 二、技术方案
### 后台技术 
* 工作流引擎：Activiti6.0
* ORM框架：Mybatis
* Web框架：React
* 核心框架：SpringBoot
* 权限安全：自实现
* 网页即时通讯：TLS
* 连接池：Druid（阿里开源）
* 日志处理：SLF4J
* 缓存处理：Redis
* 数据库：MySQL
* Excel表处理：POI

### 前端技术 
* 文件上传：React、WebUploader（大文件分片上传）
* 树形结构：React
* 日期插件：React
* 弹窗框架：React
* Cookie保存：React
* 富文本编辑器：React
* 前端框架：React

## QQ交流群
为了方便大家更好的交流，在此建立QQ交流群，扫描下方二维码加入：
![Image text](https://img-blog.csdnimg.cn/20210208152009549.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzE5NzM0NTk3,size_16,color_FFFFFF,t_70)

## 四、项目技术博客介绍 
为了帮助学习者更好地理解代码，下面给出作者自己的博客链接：
https://vegetable-chicken.blog.csdn.net/



