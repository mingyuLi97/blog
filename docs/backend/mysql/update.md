# UPDATE - 改

## 更新

1. SET 可以设置为固定的值，也可以设置表中的数据，或者 default、null
2. 如果 where 的条件是多个，那么会同时更新多列（危险操作，sql workbench 不允许这样操作，除非关闭 safe 模式）

```sql
UPDATE invoices
SET
	payment_total = 10,
    payment_date = due_date
WHERE invoice_id = 1
```

## 子查询

```sql
UPDATE invoices
SET
	payment_total = 10,
    payment_date = due_date
WHERE client_id = (SELECT client_id FROM clients WHERE name = 'Yadel')

-- 如果 子查询 返回多个，那么需要用 in 关键字
UPDATE invoices
SET
	payment_total = 10,
    payment_date = due_date
WHERE client_id in (SELECT client_id FROM clients WHERE name in ('Yadel'))
```
