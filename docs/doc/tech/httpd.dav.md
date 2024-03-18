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