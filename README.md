# Sabrina ePortfolio — 中文修改指南

这份网站根据你上传的当前版本修改，保留你的照片、SL logo、简历 PDF 和五页内容。五个 HTML 页面共用两份 CSS，不需要 TXT 副本，也不需要编译。

## 本次新增：照片上移与紧凑首屏

这版基于上一次更新继续调整首页。最新截图中的中文标题“有趣的学习”已保留。

- 照片与右侧介绍顶部对齐，解决之前 `align-items: end` 让照片下沉的问题。
- 英文标题改为 `Making learning fun.`，根据宽度自然换行；中文独立为 24px 副标题。
- 首屏保留学历介绍和一句经验概述。原来的完整工作经历在下方 `My professional background` 区域，搜索 `EDIT FULL BIO` 可修改。
- 照片最大宽 352px，随电脑窗口高度适度缩小，保留拱形和 4:5 比例。
- 页头的上下留白从 26px 收至 12px；五页的 Logo 和姓名仍使用一致的大小、间距和位置。
- 两组按钮仍在同一个网格行。照片上移不会改变按钮的对齐方式。

**首屏的取舍：** 目标是在常见笔记本窗口、正常缩放下看见照片、简短介绍和三个按钮。整个网站仍可向下滚动阅读完整经历和作品。手机、很矮的窗口或放大文字时会正常滚动，不隐藏文字，也不强迫所有内容塞进一屏。

在 `css/style.css` 搜索 `EDIT FIRST SCREEN`：

```css
--home-photo-width: clamp(260px, calc(80vh - 248px), 352px);
--hero-padding-y: 22px;
--intro-line-height: 1.6;
```

- `--home-photo-width`：电脑照片宽度。`vh` 根据浏览器可见高度计算。想要简单的固定宽度，可改为 `300px`。
- `--hero-padding-y`：导航到照片、介绍的上方留白；数值越小，整个首页内容越靠上。
- `--hero-column-gap`：照片和介绍之间的横向距离。
- `--actions-space`：上方内容行与按钮行的距离，现在是 18px。
- `--home-title-size`：英文标题字号；`--home-chinese-size`：中文副标题字号。
- `--sl-header-padding`：在 `css/logo-styles.css`，控制五页 Logo 区域的上下留白。

`.home-hero` 中的 `align-items: start` 是照片靠上的关键。按钮使用单独的共同网格行，保留 `grid-template-areas: "photo intro" "photo-links intro-link"`。不用给照片加负数间距，也不用单独挪动三个按钮。

修改文字时，简短内容写在 `EDIT HERO INTRO`，长经历写在 `EDIT FULL BIO`。如果把长段落重新放回首屏，右栏会增高，按钮也会整体下移；这是正常的内容排版。

## 1. 打开这次修改后的完整文件夹

1. 解压新 ZIP，把旧的网站文件夹保留作备份。
2. 在 VS Code 选择 **File → Open Folder…**，打开新解压的 `Sabrina-ePortfolio` 文件夹。
3. 在 Finder 中打开这个新文件夹里的 `index.html`。注意浏览器地址栏的文件夹路径，确认不是旧版本。
4. 修改后按 **Command + S** 保存，再在浏览器按 **Command + R** 刷新。
5. 如果 Chrome 仍显示旧样式，可按 **Command + Shift + R** 强制刷新。

这次 HTML 结构和两份 CSS 都改了，第一次请使用整个新文件夹。只替换 CSS 无法修复旧 HTML 中的嵌套和按钮位置问题。

## 2. 原来为什么显示不一致

- Home 加载了 `css/logo-styles.css`，另外四页没有加载。
- 另外四页重复套了两层 `.masthead`，还把一个 `<a>` 链接放进另一个 `<a>` 里面，结束标签也不完整。浏览器自行修补这些结构，导致位置、间距不一致。
- 另外四页 Logo 的链接写成 `index.foundation`、`index.design` 等不存在的文件，现在都改为 `index.html`。
- Home 缺少 `</figure>`。照片按钮在照片容器里，Explore 在介绍容器里；CSS 中 `.home-hero-split` 也没有对应的 HTML class，因此没有共同行高。
- Logo 的 `gap: 20px` 覆盖了前面的间距变量，现在只保留一个修改入口。
- 字体原来分散在多个选择器里，单改正文大小不会改变另外指定 11px、12px 的文字。现在按用途集中到文件顶部。

## 3. 文件怎么分工

| 要改什么 | 文件 |
| --- | --- |
| Home 标题、自我介绍、兴趣、翻转卡片、按钮链接 | `index.html` |
| Foundation 内容和课程作业 | `foundation.html` |
| Design / Research / Technology 内容 | 对应的 `design.html` / `research.html` / `technology.html` |
| 全站字体、颜色、按钮布局 | `css/style.css` |
| Logo、姓名、ePortfolio、页头留白 | `css/logo-styles.css` |
| 翻转卡片的鼠标和点击效果 | `js/main.js` |
| 照片 / SL logo | `images/sabrina-photo.jpg` / `images/sl-logo.png` |
| 简历 PDF | `documents/sabrina-resume.pdf` |

HTML 管内容和结构，CSS 管外观，JavaScript 管交互。改字号和布局不需要改 JavaScript。

## 4. 字体大小：搜索 EDIT 01

打开 `css/style.css`，按 Command + F 搜索 `EDIT 01`。下面的数值在顶部 `:root { ... }` 内。只改原来的数字，保留 `px` 和分号，不用重复添加 CSS。

| 变量 | 当前值 | 对应文字 |
| --- | --- | --- |
| `--body-font-size` | `18px` | 五页正文、研究步骤、设计和技术卡片正文 |
| `--intro-font-size` | `18px` | Home 自我介绍 |
| `--nav-font-size` | `20px` | 顶部五页导航 |
| `--label-font-size` | `18px` | 兴趣栏、A little about this space、Selected learning、On this page、各页 My … collection 等小标题 |
| `--page-label-font-size` | `20px` | 01 / Understanding learning 等四页顶部标签 |
| `--small-font-size` | `18px` | 图片说明、卡片说明、Hover or tap…、Select a question…、Continue exploring… 等提示 |
| `--footer-font-size` | `18px` | 每页底部 Sabrina Lin… 和 CSUSB 链接 |
| `--status-font-size` | `16px` | Course artifact to be added |
| `--link-font-size` | `18px` | Explore Foundation 等链接、Foundation 页面目录 |
| `--subheading-font-size` | `28px` | Learn / Reflect / Grow、内容三级标题 |
| `--card-title-size` | `30px` | 电脑的四张翻转卡片标题 |
| `--card-title-size-mobile` | `28px` | 手机的四张翻转卡片标题 |
| `--card-number-size` | `36px` | 卡片 01 / 02 / 03 / 04 |

例如想把正文再放大，把原来的 `--body-font-size: 18px;` 改成 `--body-font-size: 20px;`。首页自我介绍使用独立的 `--intro-font-size`，如需一起放大，也改成 20px。

`clamp(32px, 3.2vw, 42px)` 表示最小 32px，随窗口变化，最大 42px。

### 字体风格和颜色

同样在 `style.css` 顶部：

```css
--serif: Georgia, 'Times New Roman', serif; /* 姓名和大标题 */
--sans: Arial, Helvetica, sans-serif;      /* 正文和导航 */
--page: #fffaf2;                          /* 暖米白背景 */
--cream: #f6ebd1;                         /* 奶油黄 */
--pink: #f5e6e8;                          /* 珍珠粉 */
--ink: #463c37;                           /* 深色标题 */
--body: #62554e;                          /* 正文颜色 */
```

`font-size` 是字号，`font-family` 是字体，`font-weight` 是粗细，`line-height` 是行距，`letter-spacing` 是字母间距。`line-height: 1.8` 表示行高为字号的 1.8 倍。

## 5. Logo：搜索 EDIT LOGO

打开 `css/logo-styles.css`，顶部变量控制五页：

```css
--sl-logo-size: 80px;       /* Logo 宽和高 */
--sl-logo-gap: 20px;        /* Logo 与姓名间距 */
--sl-name-size: 38px;      /* SABRINA LIN 字号 */
--sl-note-size: 14px;      /* ePortfolio 字号 */
--sl-note-gap: 8px;        /* 姓名与 ePortfolio 上下距离 */
--sl-header-padding: 12px; /* 页头上下留白 */
```

Logo 在姓名左侧；名字和 ePortfolio 在同一个文字区域里居中；整个组合在页头居中。

手机设置在同一文件的 `EDIT LOGO MOBILE`：600px 以下使用 Logo 56px、姓名 26px；360px 以下使用 Logo 48px、姓名 24px。想改手机效果，请改对应的小屏规则。

五页页头结构一致，并加载相同的两份 CSS。因此改这份 CSS 会同时改变五页。若修改姓名或 ePortfolio 的实际文字，在五个 HTML 搜索 `EDIT HEADER` 并同步修改。每页导航中的 `aria-current="page"` 要保留在各自当前页面上。

## 6. 按钮：搜索 EDIT 02

打开 `css/style.css`，搜索 `EDIT 02`：

```css
--button-font-size: 18px;        /* 电脑字号 */
--button-font-size-mobile: 16px; /* 手机字号 */
--button-min-height: 64px;       /* 电脑最小高度 */
--button-gap: 16px;             /* CSUSB 与 Résumé 间距 */
--button-gap-mobile: 8px;       /* 手机按钮间距 */
--actions-space: 18px;          /* 照片/介绍内容行到按钮的距离 */
```

例如把 `--actions-space: 18px` 改为 `26px`，两边按钮会一起向下移动，保持对齐。

### 按钮为什么会对齐

首页使用 CSS Grid。照片和介绍在第一行，两组按钮共享第二行。

- 电脑：CSUSB 在左、Résumé 在右，两者平分左栏，连同间距恰好等于照片宽度。Explore 在右栏介绍下方，保持自己的宽度。
- 手机：介绍和照片上下排列，三个按钮保留在同一水平行。文字可换行，整行一起增高，框的顶部和底部保持对齐。
- 手机照片占内容区域宽度；为了给 Explore 留位置，左边两按钮在手机上不再单独占满照片宽度。
- 按钮使用最小高度，不写死高度；字号增大时可以继续长高。
- 鼠标经过首页按钮时改变渐变和阴影，不会上下移动。

不要把按钮放回 `<figure>` 或 `.hero-copy` 内。保留 HTML 的四个容器位置。搜索 `EDIT HOME LAYOUT` 可以看到说明。

修改框内留白，搜索 `EDIT BUTTON STYLE`。`padding: 8px 10px` 表示上下 8px、左右 10px。手机的高度和内部留白在 `EDIT MOBILE`。

## 7. 页面内容：搜索 EDIT 或原来的英文

在相应 HTML 按 Command + F，搜索原句或 `EDIT` 中文标记。保留标签，只改中间的文字：

```html
<p>This is my introduction.</p>
<a href="foundation.html">Explore my learning</a>
```

`href` 是点击后打开的文件；中间的文字是读者看到的文字。`class="button"` 匹配 CSS 里的 `.button`，CSS 的点号不能少。

- `<h1>`：页面大标题；`<h2>`、`<h3>`：分区标题。
- `<p>`：正文段落。
- `<div>`：布局容器，需要配对的 `</div>`。
- `<figure>`：图片区域，需要配对的 `</figure>`。
- `<img src="images/sl-logo.png" alt="">`：图片。
- `<!-- 中文提示 -->`：HTML 注释，不会显示在网页上。
- `/* 中文提示 */`：CSS 注释，不会显示在网页上。

CSS 放在 `.css` 文件里。如果把 `.brand { ... }` 直接贴到 HTML 正文，浏览器就会把它当文字显示。

## 8. Foundation 作业仍需要添加

你的 ZIP 已有简历，尚无 Foundation 课程作业文件，因此保留了 `Course artifact to be added`。

1. 把真实作业放进 `documents/`，例如 `foundation-assignment.pdf`。
2. 打开 `foundation.html` 搜索 `EDIT COURSEWORK`，更新标题、简介，删除待添加状态。
3. 在 `<article class="coursework">` 内、HTML 注释结束符 `-->` 后加入：

```html
<a class="button" href="documents/foundation-assignment.pdf">Read my assignment (PDF)</a>
```

4. 保存后点击测试，发布时连同作业一起上传。

## 9. 检查与预览

已检查五页标签闭合、共同页头、各自的导航高亮、本地链接、图片及 PDF 路径。原始图片和简历文件保持不变，CSUSB 项目网址可以打开。

当前制作环境没有可用浏览器，未进行浏览器截图或手机实机验证。请打开新版 `index.html`，拖动浏览器宽度并逐页点击，查看你的浏览器显示效果。

本 ZIP 是源文件，没有部署到网络。电脑上的 `file:///...` 不是公开网址；老师要求的 Foundation 作业和网站 URL 仍需完成。
