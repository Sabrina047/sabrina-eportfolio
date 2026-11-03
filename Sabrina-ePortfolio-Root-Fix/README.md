# Sabrina ePortfolio — 已定位的 GitHub 路径修复

## 这次确认的错误
你从 GitHub 下载的压缩包里有两套网页：
1. 最外层的旧 index.html 等五个网页；CSS、图片、JS 和 PDF 散放在同一层。
2. Sabrina-ePortfolio-GitHub-Ready 文件夹里面，是完整的新版网站及资源文件夹。

外层 index.html 写的是 css/style.css、images/sabrina-photo.jpg，
但这些路径在 GitHub 根目录不存在，所以外层网页无法读取样式和照片。
完整资源实际在 Sabrina-ePortfolio-GitHub-Ready/css/style.css 等位置。

## 我已经改了什么
- 修改了最外层五个 HTML 的资源路径，让它们直接读取已经上传好的资源文件夹。
- 保留五页原有的文字、设计、照片、logo 和简历。
- 修正首页 Fun Learning 标题中多余的结束标签。
- 五个页面的导航仍然互相链接到最外层 HTML，原首页网址保持一致。

## 现在只上传五个 HTML
这个 ZIP 也包含全部图片和资源，方便你离线查看和交作业。
但你当前 GitHub 上已经有资源，只需上传以下五个文件：

index.html
foundation.html
design.html
research.html
technology.html

1. 双击 ZIP 解压，打开解压后的文件夹。
2. 在 Chrome 打开 https://github.com/Sabrina047/sabrina-eportfolio/upload/main
3. 点击 choose your files。
4. 在 Mac 文件选择窗口进入解压后的文件夹。
5. 按住 Command，逐个点击上面五个 .html 文件，选中后点 Open。
6. 等待上传完成，说明可以写 Fix asset paths。
7. 如有分支选项，选 Commit directly to the main branch，再点 Commit changes。
8. 等 Actions 中最新的 Pages 发布成功，再打开原网站并按 Command+Shift+R 刷新。

这次不需要选文件夹，不需要再上传图片，也不用删除原来的文件。
不要把 ZIP 本身上传到 GitHub。
如果文件名输入框或文件列表显示你正在 Sabrina-ePortfolio-GitHub-Ready 里面，请返回项目最外层再上传五页。

## 网站网址
https://sabrina047.github.io/sabrina-eportfolio/

其他四页仍然是：
https://sabrina047.github.io/sabrina-eportfolio/foundation.html
https://sabrina047.github.io/sabrina-eportfolio/design.html
https://sabrina047.github.io/sabrina-eportfolio/research.html
https://sabrina047.github.io/sabrina-eportfolio/technology.html

## 以后在 GitHub 哪里 coding
- 首页：项目最外层 index.html。
- 其他页面：项目最外层对应的 HTML。
- 全站外观：Sabrina-ePortfolio-GitHub-Ready/css/style.css。
- Logo、名字大小和间距：Sabrina-ePortfolio-GitHub-Ready/css/logo-styles.css。
- 图片：Sabrina-ePortfolio-GitHub-Ready/images/。
- 翻转效果：Sabrina-ePortfolio-GitHub-Ready/js/main.js。
- 简历：Sabrina-ePortfolio-GitHub-Ready/documents/sabrina-resume.pdf。

最外层原来散放的 style.css 和照片已经不由修正版网页读取，可暂时保留。
不要删除 Sabrina-ePortfolio-GitHub-Ready 文件夹，修正版五页正在使用里面的资源。
修改文本文件时，打开文件 → 铅笔图标 → 编辑 → Commit changes。

## 在 Mac 上预览
完整解压，保持 HTML 和 Sabrina-ePortfolio-GitHub-Ready 资源文件夹放在一起。
双击最外层 index.html；不要只把 index.html 单独拿到桌面打开。

## 验证范围
已用这次 GitHub 下载的文件重现外层资源缺失，并测试修复后五页的本地链接和资源读取。
未直接登录你的 GitHub 账号、提交修改或确认线上发布结果。
Foundation 的真实课程作业仍需你按老师要求补充。
