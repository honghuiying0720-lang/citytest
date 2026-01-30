#!/bin/bash

# 脚本名称：push.sh
# 功能：推送代码到远程仓库

echo "正在推送到远程仓库..."

# 推送到主分支
git push -u origin main

# 检查推送结果
if [ $? -eq 0 ]; then
    echo "推送成功！"
else
    echo "推送失败，请检查网络连接或凭据"
    exit 1
fi
