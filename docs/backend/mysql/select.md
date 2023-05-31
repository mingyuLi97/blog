# 选择语句

## SELECT

```sql
SELECT * FROM customers;
```

1. SELECT 可以选择指定的列
2. 可以对拿到的结果做运算，通过括号可以改变运算符顺序
3. AS 可以对表头的名称作修改

```sql
SELECT
	first_name,
    last_name,
    points,
    (points + 1) * 10 AS 'total points'
FROM customers;

-- 对查询的值去重复
select distinct state from customers;

```

## WHERE

```sql
select * from customers where points > 3000;

-- 相等 / 不等
select * from customers where state = 'VA';
select * from customers where state <> 'VA';

-- 日期判断
select * from customers where birth_date > '1992-01-01';

-- and
select * from customers where birth_date > '1990-01-01' and points > 1000;

-- or
select * from customers where birth_date > '1990-01-01' or points > 1000;

-- 组合
select * from customers where birth_date > '1990-01-01' or (points > 1000 and state = 'VA');

-- not
select * from customers where not (birth_date > '1990-01-01' or (points > 1000 and state = 'VA'));

-- in
select * from customers where state in ('VA', 'FL', 'GA');

-- between
SELECT * FROM sql_store.customers where points between 1000 and 3000;

-- like
-- % 表示任意字符，任意数量
-- _ 表示一个单字符

-- 查找名称中含有 b 的
SELECT * FROM sql_store.customers where last_name like '%b%';
-- 查找 b 开头，中间 4个任意字符，结尾为 y 的
SELECT * FROM sql_store.customers where last_name like 'b____y';

-- regexp 正则匹配字符串
SELECT * FROM sql_store.customers where last_name regexp 'field|mac';

-- is null
SELECT * FROM sql_store.customers where phone is null;
```

## ORDER BY

```sql
SELECT * FROM sql_store.order_items where order_id = 2 order by quantity * unit_price DESC;
```

## LIMIT

```sql
SELECT * FROM sql_store.order_items limit 4;

-- offset 6就是偏移量，取出的是 7，8，9
SELECT * FROM sql_store.customers limit 6,3;
```
