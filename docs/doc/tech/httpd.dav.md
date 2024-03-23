---
title: 配置 dav 服务器
tags:
  - dav
  - https
  - httpd
  - apache
---

#tech/nginx_proxy


```bash

# 编辑反向代理
vim /opt/nginx/conf/vhost/dav.yvanui.com.conf

server {
    listen       80;
    server_name  xxxxxx;

    location / {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host  $http_host:8083;
            proxy_set_header X-Nginx-Proxy true;
            proxy_set_header Connection "";

            proxy_pass   http://localhost:8083;
    }
}

/opt/nginx/sbin/nginx -c /opt/nginx/conf/nginx.conf -s stop
/opt/nginx/sbin/nginx -c /opt/nginx/conf/nginx.conf

```


# 安装 httpd/dav模块
#tech/httpd 
#tech/dav 

```bash
yum install httpd mod_dav mod_dav_fs

# 修改配置文件
vim /etc/httpd/conf/httpd.conf

# 修改端口号
Listen 8080

# 增加 ServerName
ServerName xxxdomain:port
ServerName xxxip:port

# 查看错误日志
tail -f /var/log/httpd/error_log

# 编辑 Dav 配置文件
vim /etc/httpd/conf.d/webdav.conf

<Directory "/var/www/html/dav">
    Dav On
    AuthType Basic
    AuthName "WebDAV Access"
    AuthUserFile /etc/httpd/.webdav.passwd
    Require valid-user

    # DavResourceLocks on
    DavDepthInfinity on
    Options Indexes FollowSymLinks MultiViews
    AllowOverride None
    Order allow,deny
    Allow from all
</Directory>

# 生成密码
htpasswd -c /etc/httpd/.webdav.passwd <用户名>

# 赋权限
chown -R apache:apache /var/www/html/dav

# 重启服务
systemctl restart httpd
```

systemctl restart httpd
systemctl status httpd

# https 证书支持
#tech/https 

```bash
yum install epel-release

yum install certbot python2-certbot-nginx

sudo certbot certonly --webroot -w /var/www/html -d dav.yvanui.com --email luoyifan@qq.com --agree-tos

cd /etc/letsencrypt/live/dav.yvanui.com

```

## 如果遇到错误
```bash
pip uninstall urllib3
pip install -Iv https://github.com/shazow/urllib3/archive/1.21.1.tar.gz

pip uninstall requests
yum reinstall python-requests

pip uninstall six
yum reinstall python-six

pip uninstall urllib3
pip install --ignore-installed pyOpenSSL
```

## 编辑配置文件
```
server {
        listen 443 ssl; 
        server_name dav.yvanui.com; 
        ssl_certificate /etc/letsencrypt/live/dav.yvanui.com/fullchain.pem; 
        ssl_certificate_key /etc/letsencrypt/live/dav.yvanui.com/privkey.pem; 
        ssl_session_timeout 5m;
        ssl_protocols TLSv1.2 TLSv1.3; 
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
        ssl_prefer_server_ciphers on;
        location / {
		   proxy_pass 127.0.0.1:8080;
        }
    }
    
server {
    listen 80;
    server_name dav.yvanui.com; 
    return 301 https://$host$request_uri; 
}
```

## 配置计划任务
#tech/cron
```bash
crontab -e
0 0 * * 0 certbot renew --quiet
```

# 参考
[https://blog.csdn.net/qq_43610975/article/details/133883411](https://blog.csdn.net/qq_43610975/article/details/133883411)

[https://www.qingsongb2c.com/install-lets-encrypt-ssl-ca-1/](https://www.qingsongb2c.com/install-lets-encrypt-ssl-ca-1/)

