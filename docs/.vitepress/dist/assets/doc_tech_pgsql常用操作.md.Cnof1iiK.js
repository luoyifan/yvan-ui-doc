import{_ as s,c as n,o as a,a6 as e}from"./chunks/framework.DZm5WilM.js";const h=JSON.parse('{"title":"pgsql常用操作","description":"","frontmatter":{"title":"pgsql常用操作","date":"2024-03-31 23:53","author":"yvan","tags":["tech/pgsql"]},"headers":[],"relativePath":"doc/tech/pgsql常用操作.md","filePath":"doc/tech/pgsql常用操作.md"}'),p={name:"doc/tech/pgsql常用操作.md"},l=e(`<h2 id="创建操作系统用户" tabindex="-1">创建操作系统用户 <a class="header-anchor" href="#创建操作系统用户" aria-label="Permalink to &quot;创建操作系统用户&quot;">​</a></h2><p>创建一个新的Linux用户：dbuser</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$sudo adduser dbuser #创建一个新的Linux用户：dbuser</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="登录postgresql控制台" tabindex="-1">登录PostgreSQL控制台 <a class="header-anchor" href="#登录postgresql控制台" aria-label="Permalink to &quot;登录PostgreSQL控制台&quot;">​</a></h2><p>切换到postgres用户</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$sudo su - postgres #切换到postgres用户</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>系统用户postgres以同名数据库用户的身份，登录数据库</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$psql #系统用户postgres以同名数据库用户的身份，登录数据库</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>成功登录到控制台后，显示 <code>postgres=#</code></p><blockquote><p>注意：后面分号不能省略</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\\password postgres #给postgres用户设置密码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建数据库用户dbuser</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>CREATE USER dbuser WITH PASSWORD &#39;dbuser&#39;; #创建数据库用户dbuser</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建用户数据库，这里为exampledb，并指定所有者为dbuser。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>CREATE DATABASE exampledb OWNER dbuser; #创建用户数据库，这里为exampledb，并指定所有者为dbuser。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将exampledb数据库的所有权限都赋予dbuser</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>GRANT ALL PRIVILEGES ON DATABASE exampledb to dbuser; #将exampledb数据库的所有权限都赋予dbuser</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>推出控制台（也可以直接按ctrl+D）</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\\q #退出控制台</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="控制台命令" tabindex="-1">控制台命令 <a class="header-anchor" href="#控制台命令" aria-label="Permalink to &quot;控制台命令&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\\h: #查看SQL命令的解释，比如\\h select。</span></span>
<span class="line"><span>\\?: #查看psql命令列表。</span></span>
<span class="line"><span>\\l: #列出所有数据库。</span></span>
<span class="line"><span>\\c [database_name]: #连接其他数据库。</span></span>
<span class="line"><span>\\d: #列出当前数据库的所有表格。</span></span>
<span class="line"><span>\\d [table_name]: #列出某一张表格的结构。</span></span>
<span class="line"><span>\\du: #列出所有用户。</span></span>
<span class="line"><span>\\e: #打开文本编辑器。</span></span>
<span class="line"><span>\\conninfo: #列出当前数据库和连接的信息。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="数据库操作" tabindex="-1">数据库操作 <a class="header-anchor" href="#数据库操作" aria-label="Permalink to &quot;数据库操作&quot;">​</a></h2><p>基本的数据库操作，就是使用一般的SQL语言</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 创建新表</span></span>
<span class="line"><span>CREATE TABLE user_tbl(name VARCHAR(20), signup_date DATE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 插入数据</span></span>
<span class="line"><span>INSERT INTO user_tbl(name, signup_date) VALUES(&#39;张三&#39;, &#39;2013-12-22&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 选择记录</span></span>
<span class="line"><span>SELECT * FROM user_tbl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新数据</span></span>
<span class="line"><span>UPDATE user_tbl set name = &#39;李四&#39; WHERE name = &#39;张三&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除记录</span></span>
<span class="line"><span>DELETE FROM user_tbl WHERE name = &#39;李四&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加栏位</span></span>
<span class="line"><span>ALTER TABLE user_tbl ADD email VARCHAR(40);</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新结构</span></span>
<span class="line"><span>ALTER TABLE user_tbl ALTER COLUMN signup_date SET NOT NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更名栏位</span></span>
<span class="line"><span>ALTER TABLE user_tbl RENAME COLUMN signup_date TO signup;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除栏位</span></span>
<span class="line"><span>ALTER TABLE user_tbl DROP COLUMN email;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 表格更名</span></span>
<span class="line"><span>ALTER TABLE user_tbl RENAME TO backup_tbl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除表格</span></span>
<span class="line"><span>DROP TABLE IF EXISTS backup_tbl;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="ddl数据定义语言" tabindex="-1">DDL数据定义语言 <a class="header-anchor" href="#ddl数据定义语言" aria-label="Permalink to &quot;DDL数据定义语言&quot;">​</a></h2><h3 id="数据库-角色-schema" tabindex="-1">数据库/角色/schema <a class="header-anchor" href="#数据库-角色-schema" aria-label="Permalink to &quot;数据库/角色/schema&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 创建一个数据库用户</span></span>
<span class="line"><span>create role &quot;sp-boss&quot; createdb createrole login password &#39;sp-boss&#39;;</span></span>
<span class="line"><span>-- 使用上面角色登录 postgres 数据库</span></span>
<span class="line"><span>psql -U sp-boss -d postgres</span></span>
<span class="line"><span>-- 创建自己的数据库</span></span>
<span class="line"><span>create database &quot;sp-boss&quot;</span></span>
<span class="line"><span>-- 登录自己的数据库</span></span>
<span class="line"><span>psql -U sp-boss</span></span>
<span class="line"><span>-- 创建一个其他用户</span></span>
<span class="line"><span>create role &quot;sp-manager&quot; login password &#39;sp-manager&#39;;</span></span>
<span class="line"><span>-- 赋予 create 权限</span></span>
<span class="line"><span>grant create on database &quot;sp-boss&quot; to &quot;sp-manager&quot;;</span></span>
<span class="line"><span>-- 使用 新用户 登录数据库</span></span>
<span class="line"><span>psql -U sp-manager -d sp-boss</span></span>
<span class="line"><span>-- 创建自己的 schema</span></span>
<span class="line"><span>create schema &quot;sp-manager&quot;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="表" tabindex="-1">表 <a class="header-anchor" href="#表" aria-label="Permalink to &quot;表&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>--创建表</span></span>
<span class="line"><span>create table user_info (</span></span>
<span class="line"><span>  id serial primary key,</span></span>
<span class="line"><span>  name varchar(20),</span></span>
<span class="line"><span>  age integer,</span></span>
<span class="line"><span>  create_time timestamp,</span></span>
<span class="line"><span>  type integer,</span></span>
<span class="line"><span>  display boolean default true,</span></span>
<span class="line"><span>  unique (name, type)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>--删除表</span></span>
<span class="line"><span>drop table exists user_info;</span></span>
<span class="line"><span>--重命名表</span></span>
<span class="line"><span>alter table user_info rename to user_infos;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="列" tabindex="-1">列 <a class="header-anchor" href="#列" aria-label="Permalink to &quot;列&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>--添加一列</span></span>
<span class="line"><span>alter table user_info add [column] username varchar(50);</span></span>
<span class="line"><span>--删除一列</span></span>
<span class="line"><span>alter table user_info drop [column] username;</span></span>
<span class="line"><span>--重命名列</span></span>
<span class="line"><span>alter table user_info rename [column] username to name;</span></span>
<span class="line"><span>--修改结构</span></span>
<span class="line"><span>alter table user_info alter [column] username set not null;</span></span>
<span class="line"><span>--</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="唯一约束" tabindex="-1">唯一约束 <a class="header-anchor" href="#唯一约束" aria-label="Permalink to &quot;唯一约束&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 添加名为 uk_name 的联合唯一约束，组合列为column1和column2</span></span>
<span class="line"><span>alter table sys_theme add constraint uk_name unique(column1,column2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 删除名为 uk_name 的约束</span></span>
<span class="line"><span>alter table sys_theme drop constraint uk_name;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="dml数据库操作语言" tabindex="-1">DML数据库操作语言 <a class="header-anchor" href="#dml数据库操作语言" aria-label="Permalink to &quot;DML数据库操作语言&quot;">​</a></h2><h3 id="select" tabindex="-1">SELECT <a class="header-anchor" href="#select" aria-label="Permalink to &quot;SELECT&quot;">​</a></h3><h4 id="查询包含json格式的text类型的数据" tabindex="-1">查询包含json格式的text类型的数据 <a class="header-anchor" href="#查询包含json格式的text类型的数据" aria-label="Permalink to &quot;查询包含json格式的text类型的数据&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>postgres=# select * from person;</span></span>
<span class="line"><span> id |  name  |                          other                           </span></span>
<span class="line"><span>----+--------+----------------------------------------------------------</span></span>
<span class="line"><span>  1 | faker  | {&quot;gender&quot;:&quot;male&quot;,&quot;address&quot;:&quot;xiamen&quot;,&quot;college&quot;:&quot;xmut&quot;}</span></span>
<span class="line"><span>  2 | watson | {&quot;gender&quot;:&quot;male&quot;,&quot;address&quot;:&quot;shenzhen&quot;,&quot;college&quot;:&quot;szu&quot;}</span></span>
<span class="line"><span>  3 | lance  | {&quot;gender&quot;:&quot;male&quot;,&quot;address&quot;:&quot;shenzhen&quot;,&quot;college&quot;:&quot;xmut&quot;}</span></span>
<span class="line"><span>  4 | jine   | {&quot;gender&quot;:&quot;female&quot;,&quot;address&quot;:&quot;xiamen&quot;,&quot;college&quot;:&quot;xmut&quot;}</span></span>
<span class="line"><span>  5 | jobs   | {&quot;gender&quot;:&quot;male&quot;,&quot;address&quot;:&quot;beijing&quot;,&quot;college&quot;:&quot;xmu&quot;}</span></span>
<span class="line"><span>  6 | yak    | {&quot;gender&quot;:&quot;female&quot;,&quot;address&quot;:&quot;xiamen&quot;,&quot;college&quot;:&quot;xmut&quot;}</span></span>
<span class="line"><span>  7 | alice  | {&quot;gender&quot;:&quot;female&quot;,&quot;address&quot;:&quot;shanghai&quot;,&quot;college&quot;:&quot;thu&quot;}</span></span>
<span class="line"><span>  8 | anita  | {&quot;gender&quot;:&quot;female&quot;,&quot;address&quot;:&quot;xiongan&quot;,&quot;college&quot;:&quot;hku&quot;}</span></span>
<span class="line"><span>(8 行记录)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 查询深圳学生的高校分部情况</span></span>
<span class="line"><span>select</span></span>
<span class="line"><span>  other::json-&gt;&gt;&#39;college&#39; college,</span></span>
<span class="line"><span>  count(1)</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>  person</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>  other::json-&gt;&gt;&#39;address&#39;=&#39;shenzhen&#39;</span></span>
<span class="line"><span>group by</span></span>
<span class="line"><span>  other::json-&gt;&gt;&#39;college&#39;;</span></span>
<span class="line"><span>___________________________</span></span>
<span class="line"><span>  college | count</span></span>
<span class="line"><span> ---------+-------</span></span>
<span class="line"><span>  szu     |     1</span></span>
<span class="line"><span>  xmut    |     1</span></span>
<span class="line"><span> (1 行记录)</span></span>
<span class="line"><span>--- 结果可得深圳一共有两个学生，</span></span>
<span class="line"><span>--- 在深圳大学和厦门理工学院各一个。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,38),i=[l];function r(t,c,u,o,b,d){return a(),n("div",null,i)}const g=s(p,[["render",r]]);export{h as __pageData,g as default};
