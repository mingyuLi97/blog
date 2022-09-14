# git

## commit

撤销 commit

```bash
# 撤回 commit 保留代码
# HEAD^ 指的上一个版本  撤回多次可以使用 HEAD~xxx( 🌰 HEAD~2)
git reset --soft HEAD^
#
--hard
# 修改提交的 message
--amend
```

## reset

1. 撤销 commit
