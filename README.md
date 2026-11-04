# Sabrina ePortfolio — 完整恢复包

重要：如果你已删除 GitHub 上原来的所有文件，这次需要上传完整内容。
之前“只上传五个 HTML”的方法不适用于已经清空资源的情况。
这份 ZIP 包含五个网页、全部 CSS、照片、logo、JavaScript 和简历。

## 第一步：解压
双击 Sabrina-ePortfolio-Full-Restore.zip。
打开解压后的文件夹，应该直接看到 7 个项目：

index.html
foundation.html
design.html
research.html
technology.html
Sabrina-ePortfolio-GitHub-Ready （文件夹）
README.md

其中 Sabrina-ePortfolio-GitHub-Ready 文件夹中保存着所有样式和图片。
它的名字必须保持原样，因为 HTML 正在引用这个路径。

## 第二步：完整上传
1. 请用电脑上的 Chrome 浏览器登录 GitHub。
2. 打开 https://github.com/Sabrina047/sabrina-eportfolio/upload/main
3. 在 Finder 中打开解压后的文件夹，进入能看到上述 7 个项目的画面。
4. 在 Finder 点击一个文件，再按 Command+A，选中这 7 个项目。
5. 把选中的全部项目一起拖进 GitHub 上传区域。
6. 等全部文件上传完，说明填写 Restore complete website。
7. 如有分支选项，选择 Commit directly to the main branch。
8. 点击绿色 Commit changes 按钮，完成保存。

上传的是文件夹里面的 7 个项目；不要把 ZIP 本身上传。
也不要从上一级拖入整个 Sabrina-ePortfolio-Full-Restore 外层文件夹。
这次必须包含 Sabrina-ePortfolio-GitHub-Ready 资源文件夹，不能只选五个 HTML。

## 第三步：核对发布设置
打开 https://github.com/Sabrina047/sabrina-eportfolio/settings/pages
Source：Deploy from a branch
Branch：main
Folder：/(root)
Custom domain：留空（当前使用免费的 github.io 网址）
如修改了设置，点击 Save。

打开 https://github.com/Sabrina047/sabrina-eportfolio/actions
等待最新一次 Pages 发布任务成功，再打开：
https://sabrina047.github.io/sabrina-eportfolio/

如仍然显示旧页面，在 Chrome 按 Command+Shift+R 重新加载。
若显示 404，请提供 Settings → Pages 的截图，以核对发布位置和状态。

## 日后在哪里编辑
- 网页内容：项目最外层的五个 HTML 文件。
- 全站样式：Sabrina-ePortfolio-GitHub-Ready/css/style.css。
- 名字和 logo 样式：Sabrina-ePortfolio-GitHub-Ready/css/logo-styles.css。
- 照片和 logo：Sabrina-ePortfolio-GitHub-Ready/images/。
- 翻转脚本：Sabrina-ePortfolio-GitHub-Ready/js/main.js。
- 简历：Sabrina-ePortfolio-GitHub-Ready/documents/sabrina-resume.pdf。

打开文本文件 → 点击铅笔图标 → 修改 → Commit changes。
本地预览时，完整解压后双击最外层 index.html。
保留五个 HTML 和资源文件夹在一起。

## 检查与限制
文件内容与已验证的路径修复版一致，本次只更新完整恢复说明。
完整包有 5 个 HTML 和全部资源，不需要从已删除的 GitHub 文件中恢复照片。
尚未直接在你的 GitHub 账号中提交或确认线上发布。
Foundation 的真实课程作业仍需你按老师要求补充。
