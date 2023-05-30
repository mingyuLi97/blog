# table

## 创建

```sh
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 约束

```sh
# 为 username 增加唯一性约束
ALTER TABLE users ADD UNIQUE (username);

# 如果重复插入返回下面错误
ERROR 1062 (23000): Duplicate entry 'limy' for key 'users.username'
```

## 插入数据

```sh
# 语法
INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);

# 示例
INSERT INTO users (username, password) VALUES ('limy', '123456');
```
