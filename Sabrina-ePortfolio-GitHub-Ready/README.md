# Sabrina ePortfolio — GitHub 上传修正版

这份文件保留你上传的完整版设计、五个网页、照片、SL logo、简历和互动效果。
没有换成之前的最简版。

## 已检查的结果
- 原 ZIP 中的 css、images、js、documents 文件夹都存在。
- HTML 引用的本地图片、样式、脚本、简历路径都能在本包中找到。
- 首页 Fun Learning 标题有一个多余的 </span> 和空的 em 标签，已经修复。
- CSS 的外观设置保持原样，仅更正了一条中文说明。
- 这个标题错误不会让全部照片和 CSS 消失。线上问题还需要核对上传位置与发布状态。
- 当前未能读取 GitHub 仓库实际内容，因此不能把本地文件检查当成线上部署已成功。

## 上传：请在 Mac 的 Chrome 浏览器操作
1. 解压这份 ZIP，打开解压后的文件夹。
2. 你应该直接看到 index.html、另外四个 HTML，以及 css、images、js、documents 四个文件夹。
3. 在 Chrome 打开 https://github.com/Sabrina047/sabrina-eportfolio/upload/main
4. 在 Finder 中进入第 2 步看到那些文件的画面，按 Command+A 选中里面的所有项目。
5. 把选中的文件和文件夹一起拖到 GitHub 的上传区域。保留四个文件夹及其内容。
6. 不要拖 ZIP 本身，也不要把外层 Sabrina-ePortfolio-GitHub-Ready 文件夹再套进去。
7. 等待照片、简历等全部上传完，在 Commit message 填 Fix website file structure。
8. 如果有分支选项，选择 Commit directly to the main branch，点击 Commit changes。
9. 等待 Actions 中最新一次 Pages 发布成功，再打开网站。

这里只覆盖同名同路径文件。散放在根目录的旧图片暂时保留即可；不是本包链接读取的位置。

## 上传后必须能找到的路径
路径中 / 前面是文件夹名字：
- css/style.css
- css/logo-styles.css
- images/sabrina-photo.jpg
- images/sl-logo.png
- images/learning-focus.svg
- images/profile-monogram.svg
- js/main.js
- documents/sabrina-resume.pdf

五个 HTML 必须直接在 GitHub 项目最外层：
index.html、foundation.html、design.html、research.html、technology.html。
如果根目录只能看到一个 Sabrina-ePortfolio 文件夹，说明多套了一层。
如果看到 css/css/style.css，说明 css 文件夹套了两层。

## 发布设置
Settings → Pages：
- Source: Deploy from a branch
- Branch: main
- Folder: /(root)
- Custom domain: 留空，除非你已拥有并配置独立域名。

网站首页：https://sabrina047.github.io/sabrina-eportfolio/
发布记录：https://github.com/Sabrina047/sabrina-eportfolio/actions

## 发布后的三个直接检查链接
CSS：https://sabrina047.github.io/sabrina-eportfolio/css/style.css
照片：https://sabrina047.github.io/sabrina-eportfolio/images/sabrina-photo.jpg
Logo：https://sabrina047.github.io/sabrina-eportfolio/images/sl-logo.png

CSS 链接应该显示代码，照片和 Logo 链接应该显示图片。
若出现 404，请核对相应文件位置、大小写和最新发布是否完成。
若三个链接都正常，但首页还是旧版，请在 Chrome 按 Command+Shift+R 重新加载。

## 日后在哪里修改
- index.html：首页文字、标题、按钮链接。
- foundation.html：Foundation 内容、作业和反思。
- design.html、research.html、technology.html：对应页面的内容。
- css/style.css 顶部 :root：全站字体、颜色和首页间距。
- css/logo-styles.css 顶部 :root：五页统一的名字、logo 和页头间距。
- images：你自己的图片。替换照片时保持原文件名，或同步修改 HTML 的 src。
- documents：简历和作业。替换 PDF 时保持文件名，或同步修改 HTML 的 href。

CSS 请留在 .css 文件里，不要作为普通文字粘贴到 HTML 页面。
本地保存后要重新上传修改过的文件并 Commit，线上才会更新。

## 作业提醒
这份包里保留了你的简历，但 Foundation 课程作业仍是占位内容。
按老师的完整要求提交前，需要加入自己的真实课程作业及链接。
ZIP 文件与公开网址是两项不同的提交内容。
