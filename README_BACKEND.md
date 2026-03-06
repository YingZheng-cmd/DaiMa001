# 莞香种植管理系统后端（Spring Boot + MySQL）

## 1. 环境要求
- JDK 17+
- Maven 3.9+
- MySQL 8+

## 2. 数据库
先创建数据库：

```sql
CREATE DATABASE guanxiang_management DEFAULT CHARACTER SET utf8mb4;
```

默认配置在 `src/main/resources/application.yml`：
- url: `jdbc:mysql://localhost:3306/guanxiang_management...`
- username: `root`
- password: `root`

> 按需修改为你的 MySQL 账号密码。

## 3. 启动
```bash
mvn spring-boot:run
```

## 4. 与前端匹配的接口
- `GET /api/planting/base/list`
- `GET /api/planting/tree/list`
- `GET /api/planting/batch/list`
- `GET /api/maintenance/daily/list`
- `GET /api/maintenance/pest-control/list`
- `GET /api/process/harvest/list`
- `GET /api/process/processing/list`
- `GET /api/inventory/storage/list`
- `GET /api/inventory/sales/list`
- `GET /api/system/user/list`
- `GET /api/ai/analysis/summary`
- `POST /api/ai/analysis/run`

POST 示例：
```json
{
  "prompt": "请分析近三个月病虫害变化与防治建议"
}
```


## 5. 前后端代码标记
- 前端文件：`index.html`、`styles.css`、`app.js`、`api.js`
- 后端文件：`pom.xml`、`src/main/java/**`、`src/main/resources/**`
- 详细说明见：`README_CODE_MAP.md`
