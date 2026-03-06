# 莞香种植管理系统（新手版）IDEA + MySQL 从零运行教程

> 适合：第一次接触 Spring Boot + MySQL + 前后端联调的小白同学。  
> 目标：你可以在本机用 IDEA 跑起后端、用浏览器打开前端、看到接口返回数据。

---

## 一、你会得到什么

完成本教程后，你将掌握：
1. 在 IDEA 中导入并运行 Spring Boot 后端项目。
2. 在 MySQL 中创建项目数据库并初始化表结构。
3. 修改 `application.yml`，让后端正确连接你的 MySQL。
4. 用浏览器/接口工具访问后端 API。
5. 打开前端页面并看到系统页面。

---

## 二、准备环境（必须先安装）

请先确认你的电脑已安装：

- **JDK 17 或以上**
- **Maven 3.9+**（或使用 IDEA 内置 Maven）
- **MySQL 8+**
- **IntelliJ IDEA**（Community/Ultimate 都可以）

### 1）检查 JDK
打开终端执行：

```bash
java -version
```

看到 `17` 或更高版本即可。

### 2）检查 Maven

```bash
mvn -v
```

看到 Maven 版本信息即可。

### 3）检查 MySQL
可以用下面任意方式登录成功就行：

```bash
mysql -u root -p
```

---

## 三、用 IDEA 打开项目

1. 打开 IDEA。  
2. 选择 **Open**。  
3. 选择项目目录：`/workspace/DaiMa001`（你本机按实际路径）。  
4. IDEA 检测到 `pom.xml` 后会自动识别为 Maven 项目。  
5. 等待右下角索引和 Maven 依赖加载完成。

> 如果 Maven 下载慢：可以先切换国内镜像（阿里云等）。

---

## 四、创建 MySQL 数据库

### 方式A：命令行（推荐）
登录 MySQL 后执行：

```sql
CREATE DATABASE guanxiang_management DEFAULT CHARACTER SET utf8mb4;
```

### 方式B：Navicat / DataGrip
手动新建数据库：
- 数据库名：`guanxiang_management`
- 字符集：`utf8mb4`

---

## 五、修改后端数据库配置（非常关键）

打开文件：

`src/main/resources/application.yml`

确认/修改下面这几项为你自己的 MySQL 信息：

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/guanxiang_management?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
    username: root
    password: root
```

> 如果你 MySQL 不是 `root/root`，必须改成自己的账号密码。

---

## 六、启动后端（Spring Boot）

你有两种方式启动：

### 方式A：IDEA 点击运行
1. 打开类：`GuanxiangManagementApplication`  
2. 点击类左侧绿色三角形 ▶  
3. 选择 **Run**

### 方式B：终端命令启动
在项目根目录执行：

```bash
mvn spring-boot:run
```

启动成功后，你会看到类似日志：
- `Started GuanxiangManagementApplication`
- 端口默认是 `8080`

---

## 七、验证后端接口是否可用

启动后，浏览器直接访问以下地址（任意一个即可测试）：

- `http://localhost:8080/api/planting/base/list`
- `http://localhost:8080/api/maintenance/daily/list`
- `http://localhost:8080/api/system/user/list`
- `http://localhost:8080/api/ai/analysis/summary`

如果返回 JSON（哪怕只有一条样例数据）说明后端 OK。

### 测试 AI 分析接口（POST）
可用 Postman / Apifox：

- URL: `http://localhost:8080/api/ai/analysis/run`
- Method: `POST`
- Header: `Content-Type: application/json`
- Body:

```json
{
  "prompt": "请分析近三个月病虫害变化与防治建议"
}
```

---

## 八、打开前端页面

这个项目前端是静态文件（`index.html` + `app.js` + `api.js` + `styles.css`）。

### 本地打开方式
在项目根目录执行：

```bash
python3 -m http.server 4173
```

然后访问：

- `http://localhost:4173`

> 前端会请求 `/api/...`。你可以：
> 1）让前端和后端同域部署；或  
> 2）继续使用当前 CORS 配置跨域访问。

---

## 九、数据库表是如何创建的？

本项目已提供：
- `src/main/resources/schema.sql`（建表）
- `src/main/resources/data.sql`（初始化数据）

项目启动时会自动初始化（见 `application.yml` 的 `spring.sql.init.mode: always`）。

---

## 十、给小白的“最短成功路径”（建议你照抄）

1. 安装 JDK17、MySQL、IDEA。
2. 新建数据库 `guanxiang_management`。
3. 改 `application.yml` 的账号密码。
4. IDEA 启动 `GuanxiangManagementApplication`。
5. 浏览器访问 `http://localhost:8080/api/system/user/list`。
6. 再开一个终端 `python3 -m http.server 4173`。
7. 浏览器打开 `http://localhost:4173` 看页面。

只要这 7 步通了，你环境就完全通了。

---

## 十一、常见报错与解决

### 1）`Access denied for user 'root'@'localhost'`
原因：数据库账号密码错误。  
解决：把 `application.yml` 改成你真实账号密码。

### 2）`Unknown database 'guanxiang_management'`
原因：数据库没创建。  
解决：先执行建库 SQL。

### 3）`Port 8080 already in use`
原因：8080 端口被占用。  
解决：
- 关掉占用程序；或
- 修改 `application.yml` 的 `server.port`（例如 8081）。

### 4）Maven 依赖下载失败
原因：网络或仓库访问限制。  
解决：
- 切换可用网络；
- 配置 Maven 镜像；
- 在 IDEA 的 Maven 设置里重试 Reload。

### 5）前端页面打开了但接口报错
原因：后端没启动 / 地址不通 / 跨域问题。  
解决：
- 先确认后端接口 URL 在浏览器可直接访问；
- 确认后端端口是 8080；
- 保持 `WebConfig` 的 CORS 配置生效。

---

## 十二、后续你可以做什么

- 给每个模块加“新增/修改/删除”接口（现在主要是列表查询）。
- 给列表接口加分页参数（`pageNum/pageSize`）。
- 在 AI 分析里接真实大模型（当前是预留逻辑）。
- 把前端改为正式 Vue 工程（Vite + Vue Router + Pinia）。

---

## 十三、相关文件速查

- 后端启动类：`src/main/java/com/guanxiang/management/GuanxiangManagementApplication.java`
- 后端配置：`src/main/resources/application.yml`
- 建表脚本：`src/main/resources/schema.sql`
- 初始化数据：`src/main/resources/data.sql`
- 前端入口：`index.html`
- 前端 API：`api.js`

---

如果你愿意，我下一步可以继续给你一份 **“IDEA里点哪里（带菜单名）”图文式步骤**，包含每一步在哪个按钮点开。 
