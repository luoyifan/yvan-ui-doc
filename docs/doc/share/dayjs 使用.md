# 官网
[https://dayjs.fenxianglu.cn/category/#node-js](https://dayjs.fenxianglu.cn/category/#node-js)

## 浏览器版本

```js
<script src="https://cdn.jsdelivr.net/npm/dayjs/dayjs.min.js"></script>
<script>
  dayjs().format()
</script>
```


## 国内
```js
<script src="https://cdn.jsdelivr.net/npm/dayjs/dayjs.min.js"></script>
<script>dayjs().format()</script>
```

# 举例

```js
dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString()
```

## 单位值

| day         | d   | 日                      |
| ----------- | --- | ---------------------- |
| week        | w   | 周                      |
| month       | M   | 月份(0-11)               |
| quarter     | Q   | 季度，依赖 QuarterOfYear 插件 |
| year        | y   | 年                      |
| hour        | h   | 小时                     |
| minute      | m   | 分钟                     |
| second      | s   | 秒                      |
| millisecond | ms  | 毫秒                     |

## 运算
```js
dayjs().subtract(7, 'year')

dayjs().startOf('year')

dayjs().endOf('month')

dayjs.extend(utc)

var a = dayjs.utc()
a.format() // 2019-03-06T00:00:00Z
a.local().format() //2019-03-06T08:00:00+08:00

// 以下两种写法是等效的
dayjs().utcOffset(8)  // 设置小时偏移量
dayjs().utcOffset(480)  // 设置分钟偏移量 (8 * 60)
```

## 格式化
```js
dayjs().format() 
// 默认返回的是 ISO8601 格式字符串 '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]') 
// 'YYYYescape 2019-01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'

dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```

| 标识   | 示例               | 描述              |
|------|------------------|-----------------|
| YY   | 18               | 年，两位数           |
| YYYY | 2018             | 年，四位数           |
| M    | 1-12             | 月，从1开始          |
| MM   | 01-12            | 月，两位数           |
| MMM  | Jan-Dec          | 月，英文缩写          |
| MMMM | January-December | 月，英文全称          |
| D    | 1-31             | 日               |
| DD   | 01-31            | 日，两位数           |
| d    | 0-6              | 一周中的一天，星期天是 0   |
| dd   | Su-Sa            | 最简写的星期几         |
| ddd  | Sun-Sat          | 简写的星期几          |
| dddd | Sunday-Saturday  | 星期几，英文全称        |
| H    | 0-23             | 小时              |
| HH   | 00-23            | 小时，两位数          |
| h    | 1-12             | 小时, 12 小时制      |
| hh   | 01-12            | 小时, 12 小时制, 两位数 |
| m    | 0-59             | 分钟              |
| mm   | 00-59            | 分钟，两位数          |
| s    | 0-59             | 秒               |
| ss   | 00-59            | 秒，两位数           |
| S    | 0-9              | 毫秒（十），一位数       |
| SS   | 00-99            | 毫秒（百），两位数       |
| SSS  | 000-999          | 毫秒，三位数          |
| Z    | -05:00           | UTC 的偏移量，±HH:mm |
| ZZ   | -0500            | UTC 的偏移量，±HHmm  |
| A    | AM / PM          | 上/下午，大写         |
| a    | am / pm          | 上/下午，小写         |
| Do   | 1st... 31st      | 月份的日期与序号        |

## 差异
```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 默认单位是毫秒

const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month') // 7

const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month', true) // 7.645161290322581
```

| 单位          | 缩写 | 描述                     |
|-------------|----|------------------------|
| week        | w  | 周（Week of Year）        |
| day         | d  | 日                      |
| month       | M  | 月份 (一月 0， 十二月 11)      |
| quarter     | Q  | 季度，依赖 QuarterOfYear 插件 |
| year        | y  | 年                      |
| hour        | h  | 小时                     |
| minute      | m  | 分钟                     |
| second      | s  | 秒                      |
| millisecond | ms | 毫秒                     |

## 时间戳

返回当前实例的 UNIX 时间戳，13位数字，毫秒

```js
dayjs('2019-01-25').valueOf() // 1548381600000
+dayjs(1548381600000) // 1548381600000
```

返回当前实例的 UNIX 时间戳，10位数字，秒。

```js
dayjs('2019-01-25').unix() // 1548381600
```

## 获取月天数

获取当前月份包含的天数。

```js
dayjs('2019-01-25').daysInMonth() // 31
```

## 转Date

调用 `dayjs#toDate` 从 Day.js 对象中获取原生的 Date 对象

```js
dayjs('2019-01-25').toDate()
```

## 解析
直接调用 `dayjs()` 将返回一个包含当前日期和时间的 Day.js 对象。
```js
var now = dayjs()

dayjs('2018-04-04T16:00:00.000Z')

dayjs("12-25-1995", "MM-DD-YYYY")

dayjs('1970-00-00', 'YYYY-MM-DD').isValid() // true
dayjs('1970-00-00', 'YYYY-MM-DD', true).isValid() // false
dayjs('1970-00-00', 'YYYY-MM-DD', 'es', true).isValid() // false
```

| YY   | 18               | 两位数的年份          |
|------|------------------|-----------------|
| YYYY | 2018             | 四位数的年份          |
| M    | 1-12             | 月份，从 1 开始       |
| MM   | 01-12            | 月份，两位数          |
| MMM  | Jan-Dec          | 缩写的月份名称         |
| MMMM | January-December | 完整的月份名称         |
| D    | 1-31             | 月份里的一天          |
| DD   | 01-31            | 月份里的一天，两位数      |
| H    | 0-23             | 小时              |
| HH   | 00-23            | 小时，两位数          |
| h    | 1-12             | 小时, 12 小时制      |
| hh   | 01-12            | 小时, 12 小时制, 两位数 |
| m    | 0-59             | 分钟              |
| mm   | 00-59            | 分钟，两位数          |
| s    | 0-59             | 秒               |
| ss   | 00-59            | 秒，两位数           |
| S    | 0-9              | 毫秒，一位数          |
| SS   | 00-99            | 毫秒，两位数          |
| SSS  | 000-999          | 毫秒，三位数          |
| Z    | -05:00           | UTC 的偏移量        |
| ZZ   | -0500            | UTC 的偏移量，两位数    |
| A    | AM / PM          | 上午 下午 大写        |
| a    | am / pm          | 上午 下午 小写        |
| Do   | 1st... 31st      | 带序数词的月份里的一天     |
| X    | 1410715640.579   | Unix 时间戳        |
| x    | 1410715640579    | Unix 时间戳        |
