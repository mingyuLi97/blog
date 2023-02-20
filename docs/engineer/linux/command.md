# 基础命令

## 程序挂载到后台

#### 方式一

使用 `&` 符号：在命令行中输入命令，然后在命令的末尾添加`&`符号即可将该进程挂在后台

```shell
$ command &
```

#### 方式二

使用 `Ctrl+z`和 `bg` 命令：在命令行中输入命令，然后按下`Ctrl+z`键将进程挂起。然后，输入`bg`命令即可将该进程挂在后台。

```shell
$ command
Ctrl+z
$ bg
```

:::tip

你可以使用 jobs 命令查看后台运行的进程。如果你需要将一个后台进程带回到前台，可以使用 fg 命令。

```shell
$ jobs
$ fg %<job number>
```

如果在终端退出时不想停止该进程，你可以使用 `nohup` 命令。

```shell
$ nohup command &
```

:::

## 输出重定向

输出分为：

- 标准输出（stdout），例如：python 中的 `print`
- 标准错误流（stderr），例如：python 中的模块 `tqdm`

```shell
# 重定向标准输出流
$ python script.py > output.txt &

# 重定向标准输出 + 标准错误流
$ python script.py > output.txt 2>error.txt &

# 输出到同一个文件
$ python script.py > output.txt 2>&1 &
```
