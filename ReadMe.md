# 密码助手
## 在线预览
- [GitHub Pages](https://你的用户名.github.io/password-assistant/)
## 部署说明
项目使用 GitHub Actions 自动部署到 GitHub Pages。当推送代码到 main 分支时，会自动触发构建和部署流程。
### 手动部署步骤
```bash
# 构建项目
yarn build
# 推送到 GitHub
git add .
git commit -m "your commit message"
git push origin main
```
这是一个密码助手，我可以通过该平台进行如下的操作：a.添加密码记录。b.查看密码记录。c.删除密码记录。d.置顶密码记录。
密码助手的组成元素：平台名称，密码，描述信息，更新时间，创建时间，项目图片(类似于头像)。
该项目主要包含了如下两个tab页面。
## 1.首页页面
首页包含头像，密码列表，和新增按钮(按钮可以是悬浮图标形式)
### 1.1 头像
头像是圆形的头像，按照适当的位置摆放。
### 1.2 密码列表
①、密码列表是密码的列表，该列表中的每一项包含显示了：项目图片，平台名称(名称过长使用...代替剩下的)，更新时间，描述信息。同时有个小眼睛，点击小眼睛可以查看密码(点击密码将密码复制到剪贴板)。
②、左滑后出现两个按钮，置顶和删除，点击后可以置顶和删除。
③、点击每一个条目可以查看密码详情。
### 1.3 新增按钮
新增按钮是新增按钮，按照适当的位置摆放。点击按钮按照密码助手的组成元素进行填充内容进行添加。

## 2.我的页面
我的页面包含头像，用户名，密码记录数，创建时间，和 退出登录按钮。
