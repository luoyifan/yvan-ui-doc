---  
title: yarn 镜像切换  
tags:  
- dav  
- https  
- httpd  
- apache  
---
#tech/yarn
#tech/npm_mirror
  
最近淘宝镜像不能使用，备选腾讯npm镜像  
```shell  
npm config set registry http://mirrors.cloud.tencent.com/npm/```  
  
  
# 完整 yarn 镜像切换  
  
```shell  
  
yarn config set registry https://registry.npm.taobao.org -g  
yarn config set disturl https://npm.taobao.org/dist -g  
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/ -g  
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g  
yarn config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/ -g  
yarn config set chromedriver_cdnurl https://cdn.npm.taobao.org/dist/chromedriver -g  
arn config set operadriver_cdnurl https://cdn.npm.taobao.org/dist/operadriver -g  
yarn config set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents -g  
  
npm config set registry https://registry.npm.taobao.org  
npm config set disturl https://registry.npm.taobao.org/dist  
npm config set electron_mirror https://registry.npm.taobao.org/electron/  
npm config set sass_binary_site https://registry.npm.taobao.org/node-sass/  
npm config set phantomjs_cdnurl https://registry.npm.taobao.org/phantomjs/  
npm config set chromedriver_cdnurl  https://registry.npm.taobao.org/chromedriver  
npm config set operadriver_cdnurl  https://registry.npm.taobao.org/operadriver  
npm config set fse_binary_host_mirror  https://registry.npm.taobao.org/fsevents  
  
```  
  
安装node  
```bash  
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash  
  
source ~/.bashrc  
nvm ls-remote  
nvm install 20.11.1nvm install 16.17.1  
nvm use 16.17.1nvm alias default 16.17.1  
# 检查  
nvm list```  
  
如果安装过程很慢  
```  
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/  
export NVM_IOJS_ORG_MIRROR=https://npmmirror.com/mirrors/iojs/  
  
```  
  
下载地址  
```  
https://registry.npmmirror.com/binary.html?path=node/v20.11.1/  
```  
  
安装 yarn  
```bash  
npm install -g yarn```  
  
如果发生 GCC 版本过低问题，参考  
  
[https://www.cnblogs.com/dingshaohua/p/17103654.html](https://www.cnblogs.com/dingshaohua/p/17103654.html)  
  
[https://garlicspace.com/2020/07/18/centos7-%E5%8D%87%E7%BA%A7-glibc-gcc/](https://garlicspace.com/2020/07/18/centos7-%E5%8D%87%E7%BA%A7-glibc-gcc/)  
  
[https://blog.csdn.net/qq_40932679/article/details/122842150](https://blog.csdn.net/qq_40932679/article/details/122842150)
