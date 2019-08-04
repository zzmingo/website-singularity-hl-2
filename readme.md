# Singularity.AI 

这是网站开发和部署说明文档

```
该项目所有东西未授权不可用于商业用途，仅供参考和学习
```

## 开发

使用到技术：

* node
* vue
* nuxt.js
* strapi
* pm2

```shell
## 启动strapi
cd server
strapi start
## 启动nuxt.js
cd client
npm run dev
```

## 部署

nginx配置

```
server {
    server_name www.singularity-hl.ai;
    
    location / {
        proxy_set_header Host www.singularity-hl.ai;
        proxy_pass http://localhost:3000;
    }
}

server {
    server_name www.singularity-hl.cn;

    location / {
        proxy_pass http://localhost:3000;
    }
}

server {
    server_name  admin.singularity-hl.cn;

    location / {
        proxy_pass http://localhost:1337;
    }    
}
```

域名配置：

* www.singularity-hl.ai 指向HK服务器
* www.singularity-hl.cn 指向HK服务器
* admin.singularity-hl.cn 指向HK服务器

本地部署至HK服务器：

```
sh upload.sh
```

服务器启：

```shell
## 连上HK服务器，通过
sh ssh_hk.sh
## 连上后在阿里的ECS上
cd website2
sh install.sh
sh build.sh
sh restart.sh
## 服务器启动需要30s可访问
```

## 后台系统

通过`http://admin.singularity-hl.cn/admin`可以打开后台系统：

用户：singularity
密码：Singularity1

通过更新后台系统的内容可以很快更新网站的内容
