---
title: pgsql常用操作
date: 2024-03-31 23:53
author: yvan
tags:
  - tech/pgsql
---
## 创建操作系统用户

创建一个新的Linux用户：dbuser

```
$sudo adduser dbuser #创建一个新的Linux用户：dbuser
```

## 登录PostgreSQL控制台

切换到postgres用户

```
$sudo su - postgres #切换到postgres用户
```

系统用户postgres以同名数据库用户的身份，登录数据库

```
$psql #系统用户postgres以同名数据库用户的身份，登录数据库
```

成功登录到控制台后，显示 `postgres=#`

> 注意：后面分号不能省略

```
\password postgres #给postgres用户设置密码
```

创建数据库用户dbuser

```
CREATE USER dbuser WITH PASSWORD 'dbuser'; #创建数据库用户dbuser
```

创建用户数据库，这里为exampledb，并指定所有者为dbuser。

```
CREATE DATABASE exampledb OWNER dbuser; #创建用户数据库，这里为exampledb，并指定所有者为dbuser。
```

将exampledb数据库的所有权限都赋予dbuser

```
GRANT ALL PRIVILEGES ON DATABASE exampledb to dbuser; #将exampledb数据库的所有权限都赋予dbuser
```

推出控制台（也可以直接按ctrl+D）

```
\q #退出控制台
```

## 控制台命令

```
\h: #查看SQL命令的解释，比如\h select。
\?: #查看psql命令列表。
\l: #列出所有数据库。
\c [database_name]: #连接其他数据库。
\d: #列出当前数据库的所有表格。
\d [table_name]: #列出某一张表格的结构。
\du: #列出所有用户。
\e: #打开文本编辑器。
\conninfo: #列出当前数据库和连接的信息。
```

## 数据库操作

基本的数据库操作，就是使用一般的SQL语言

```
# 创建新表
CREATE TABLE user_tbl(name VARCHAR(20), signup_date DATE);

# 插入数据
INSERT INTO user_tbl(name, signup_date) VALUES('张三', '2013-12-22');

# 选择记录
SELECT * FROM user_tbl;

# 更新数据
UPDATE user_tbl set name = '李四' WHERE name = '张三';

# 删除记录
DELETE FROM user_tbl WHERE name = '李四' ;

# 添加栏位
ALTER TABLE user_tbl ADD email VARCHAR(40);

# 更新结构
ALTER TABLE user_tbl ALTER COLUMN signup_date SET NOT NULL;

# 更名栏位
ALTER TABLE user_tbl RENAME COLUMN signup_date TO signup;

# 删除栏位
ALTER TABLE user_tbl DROP COLUMN email;

# 表格更名
ALTER TABLE user_tbl RENAME TO backup_tbl;

# 删除表格
DROP TABLE IF EXISTS backup_tbl;
```

## DDL数据定义语言

### 数据库/角色/schema

```
-- 创建一个数据库用户
create role "sp-boss" createdb createrole login password 'sp-boss';
-- 使用上面角色登录 postgres 数据库
psql -U sp-boss -d postgres
-- 创建自己的数据库
create database "sp-boss"
-- 登录自己的数据库
psql -U sp-boss
-- 创建一个其他用户
create role "sp-manager" login password 'sp-manager';
-- 赋予 create 权限
grant create on database "sp-boss" to "sp-manager";
-- 使用 新用户 登录数据库
psql -U sp-manager -d sp-boss
-- 创建自己的 schema
create schema "sp-manager";
```

### 表

```
--创建表
create table user_info (
  id serial primary key,
  name varchar(20),
  age integer,
  create_time timestamp,
  type integer,
  display boolean default true,
  unique (name, type)
);
--删除表
drop table exists user_info;
--重命名表
alter table user_info rename to user_infos;
```

### 列

```
--添加一列
alter table user_info add [column] username varchar(50);
--删除一列
alter table user_info drop [column] username;
--重命名列
alter table user_info rename [column] username to name;
--修改结构
alter table user_info alter [column] username set not null;
--
```

### 唯一约束

```
-- 添加名为 uk_name 的联合唯一约束，组合列为column1和column2
alter table sys_theme add constraint uk_name unique(column1,column2);

-- 删除名为 uk_name 的约束
alter table sys_theme drop constraint uk_name;
```

## DML数据库操作语言

### SELECT

#### 查询包含json格式的text类型的数据

```
postgres=# select * from person;
 id |  name  |                          other                           
----+--------+----------------------------------------------------------
  1 | faker  | {"gender":"male","address":"xiamen","college":"xmut"}
  2 | watson | {"gender":"male","address":"shenzhen","college":"szu"}
  3 | lance  | {"gender":"male","address":"shenzhen","college":"xmut"}
  4 | jine   | {"gender":"female","address":"xiamen","college":"xmut"}
  5 | jobs   | {"gender":"male","address":"beijing","college":"xmu"}
  6 | yak    | {"gender":"female","address":"xiamen","college":"xmut"}
  7 | alice  | {"gender":"female","address":"shanghai","college":"thu"}
  8 | anita  | {"gender":"female","address":"xiongan","college":"hku"}
(8 行记录)
```

```
-- 查询深圳学生的高校分部情况
select
  other::json->>'college' college,
  count(1)
from
  person
where
  other::json->>'address'='shenzhen'
group by
  other::json->>'college';
___________________________
  college | count
 ---------+-------
  szu     |     1
  xmut    |     1
 (1 行记录)
--- 结果可得深圳一共有两个学生，
--- 在深圳大学和厦门理工学院各一个。
```