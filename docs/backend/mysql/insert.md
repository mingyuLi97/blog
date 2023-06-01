# INSERT - 增

## 普通插入

```sql
-- 直接插入一行
insert into customers
values (default,'a','b',null,null,'china','bj','CA',11111)

-- 根据具体字段插入，其余用默认值
insert into customers (first_name, last_name, address, city, state)
values ('a','b111','china','bj','0')

```

## 插入多行

```sql
INSERT INTO shippers (name)
VALUES
	('shipper1'),
    ('shipper2'),
    ('shipper3')
```

## 向多个表插入

核心是借助 `last_insert_id()`, 该函数是一个用于获取最后插入行的自增 ID 值的函数。它返回上一个 INSERT 语句中生成的自增 ID 值。

```sql
INSERT INTO orders (customer_id, order_date, status)
VALUES (1, '2019-01-02', 1);

INSERT INTO order_items
VALUES
	(last_insert_id(), 1, 1, 2.95),
    (last_insert_id(), 2, 1, 3.95)
```

## 子查询插入

借助子查询，将 orders 表中符合的数据全部插入到 orders_archived

```sql
INSERT INTO orders_archived
SELECT *
FROM orders
WHERE order_date > '2019-01-01'
```
