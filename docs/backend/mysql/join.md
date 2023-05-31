# 多表

## 内链接

`INNER JOIN` 通常 INNER 不写，返回两个表中**同时存在**的行，即满足 on 的条件

```sql
-- 拿 orders 数据时，同时去 customers 中取出 customer_id 相等的 row
SELECT * FROM orders join customers on orders.customer_id = customers.customer_id;

-- 取出指定字段
-- 如果想取出 关联的字段 customer_id，需要指定表，否则会报错
SELECT order_id, first_name,orders.customer_id  FROM orders join customers on orders.customer_id = customers.customer_id;

-- 简写 table，如下面的 o、p
SELECT * FROM order_items o join products p on o.product_id = p.product_id;

-- 多个表联查
SELECT c.name, pm.name as paymethod, amount
FROM payments p
join clients c on p.client_id = c.client_id
join payment_methods pm on p.payment_method = pm.payment_method_id

-- 多个主键
select *
from order_items oi
join order_item_notes oin
	on oi.order_id = oin.order_Idnote_id
    and oi.product_id = oin.product_id


-- 跨表查询
SELECT * FROM order_items o join sql_inventory.products p on o.product_id = p.product_id;
```

#### 自链接

```sql
SELECT * FROM employees e join employees m on e.reports_to = m.employee_id;

SELECT
	e.employee_id,
    e.first_name,
    m.first_name as manager
FROM employees e join employees m on e.reports_to = m.employee_id;
```

## 外链接

`LEFT JOIN`（或称为 `LEFT OUTER JOIN`：返回左表中的所有行，以及右表中与左表匹配的行。如果右表中没有与左表匹配的行，则右表的列将包含空值（NULL）。

```sql
-- 查询所有顾客，无论是否有订单、无论是否发货
SELECT
	c.customer_id,
    c.first_name,
    o.order_id,
    sh.name
FROM customers c
LEFT JOIN orders o
	ON c.customer_id = o.customer_id
LEFT JOIN shippers sh
	ON o.shipper_id = sh.shipper_id

-- 根据订单整合用户、是否发货、状态 并排序
SELECT
	o.order_date,
    o.order_id,
    c.first_name,
    sh.name as shipper,
    os.name as status
FROM orders o
LEFT JOIN customers c
	ON o.customer_id = c.customer_id
LEFT JOIN shippers sh
	ON o.shipper_id = sh.shipper_id
JOIN order_statuses os
	ON o.status = os.order_status_id
order by status

-- 解决自链接缺少 manager 数据的问题
SELECT
	e.employee_id,
    e.first_name,
    m.first_name as manager
FROM employees e
LEFT JOIN employees m on e.reports_to = m.employee_id;
```

`RIGHT JOIN`（或称为 `RIGHT OUTER JOIN`）：返回右表中的所有行，以及左表中与右表匹配的行。如果左表中没有与右表匹配的行，则左表的列将包含空值（NULL）

## USING

USING 是一种用于在 JOIN 操作中指定连接条件的简化语法。它允许您指定要在连接过程中进行匹配的列，而不需要在连接条件中重复列的名称。

```sql
SELECT *
FROM orders
JOIN customers
  -- ON orders.customer_id = customers.customer_id;
  USING(customer_id)
  -- 等同于上面那句
```

## CROSS

列出表 A 与 表 B 的所有组合方式

```sql
SELECT c.first_name as customer, p.name
FROM customers c
CROSS JOIN products p
ORDER BY customer
```

## UNION

将多个查询的结果合并，每个查询的 Select 必须一样。会以第一个查询当作每一列的名称

```sql
SELECT
	order_id,
    order_date,
    'active' as status
FROM sql_store.orders
where order_date > '2019-01-01'
UNION
SELECT
	order_id,
    order_date,
    'archived' as status
FROM sql_store.orders
where order_date <= '2019-01-01'
```
