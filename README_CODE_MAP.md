# 前后端代码标记说明

> 目的：快速区分项目中哪些文件是前端代码，哪些文件是后端代码。

## 1) 前端代码（Frontend）

以下文件属于前端（浏览器端）代码：

- `index.html`：前端页面入口（Vue 模板、页面布局）
- `styles.css`：前端样式文件
- `app.js`：前端页面逻辑（菜单、页面切换、分析页交互）
- `api.js`：前端调用后端 API 的封装

### 前端特征
- 运行在浏览器中
- 使用 `fetch('/api/...')` 请求后端
- 不直接连接 MySQL

---

## 2) 后端代码（Backend）

以下目录和文件属于后端（Spring Boot）代码：

- `pom.xml`：后端 Maven 依赖管理
- `src/main/java/com/guanxiang/management/**`：后端 Java 代码
  - `controller/`：API 接口层
  - `service/`：业务逻辑层
  - `repository/`：数据访问层（JPA）
  - `entity/`：数据库实体映射
  - `dto/`：请求/响应对象
  - `config/`：后端配置（如 CORS）
- `src/main/resources/application.yml`：后端运行配置（MySQL、端口等）
- `src/main/resources/schema.sql`：数据库建表脚本
- `src/main/resources/data.sql`：初始化数据脚本
- `README_BACKEND.md`：后端启动和接口说明

### 后端特征
- 运行在 JVM 中
- 提供 `/api/...` REST 接口
- 连接 MySQL 并读写数据

---

## 3) 一句话理解

- 前端：负责“页面展示 + 调接口”
- 后端：负责“业务处理 + 数据库存取 + 返回接口数据”

---

## 4) 当前项目分层关系

```text
[前端] index.html/app.js/api.js/styles.css
       │  HTTP 请求 /api/*
       ▼
[后端] controller -> service -> repository -> MySQL
```
