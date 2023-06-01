# 聚合函数

## MAX、MIN、AVG、SUM

```sql
SELECT
	MAX(invoice_total) as highest,
    MIN(invoice_total) as lowest,
    AVG(invoice_total) as average,
    SUM(invoice_total) as total,
    -- 所有的变量都可以执行运算
    SUM(invoice_total * 10) as total2
FROM sql_invoicing.invoices;
```

## COUNT

```sql
SELECT
    -- 查询表中所有的 row
    COUNT(*) as counts,
    -- 查询某个字段，null 会被过滤
    COUNT(payment_date) as payment_date_count,
    -- 去重复查询
    COUNT(DISTINCT client_id) as counts
FROM sql_invoicing.invoices;
```

## GROUP BY

```sql
SELECT
	client_id,
	SUM(invoice_total) as total
FROM invoices
WHERE invoice_date > '2019-07-01'
GROUP BY client_id
ORDER BY total DESC

-- 多表 group by
SELECT
	payments.date,
    payment_methods.name,
    SUM(payments.amount) as total_pay
FROM payments
JOIN payment_methods
ON payment_methods.payment_method_id = payments.payment_method
GROUP BY payments.date,payment_methods.name
ORDER BY payments.date
```

## HAVING

HAVING 用户过滤分组

```sql
SELECT
	client_id,
	SUM(invoice_total) as total
FROM invoices
--
-- WHERE total > 400
GROUP BY client_id
HAVING total > 400
```

:::tip HAVING 和 WHERE

1. 两者都是过滤功能，`WHERE` 是过滤行，而 `HAVING` 是过滤分组
2. `WHERE` 用于 `GROUP BY` 之前，过滤的条件是表中的字段，例：上面示例中 `SELECT` 中的 `total` 是无法使用的
3. `HAVING` 用于 `GROUP BY` 之后，过滤条件是 `SELECT` 中的字段

:::

## ROLLUP

用于生成多级汇总报表的操作符。它可以在 `GROUP BY` 子句中使用，用于生成超过一级的聚合结果。
`ROLLUP` 可以按照指定的列进行分组，并为每个分组生成一个汇总行，同时还会生成总体的汇总行。

```sql
SELECT state, city, sum(invoice_total)
FROM invoices i
JOIN clients c USING(client_id)
GROUP BY state, city WITH ROLLUP;
```

| State |     City      | sum(invoice_total) |
| :---- | :-----------: | :----------------: |
| WV    |  Huntington   |       101.79       |
| WV    |       -       |       101.79       |
| OR    |   Portland    |       980.02       |
| OR    |       -       |       980.02       |
| NY    |   Syracuse    |       802.89       |
| NY    |       -       |       802.89       |
| CA    | San Francisco |       705.90       |
| CA    |       -       |       705.90       |
| -     |       -       |      2590.60       |
