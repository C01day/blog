(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{821:function(t,s,a){"use strict";a.r(s);var n=a(36),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"选择主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择主题"}},[t._v("#")]),t._v(" 选择主题")]),t._v(" "),a("p",[t._v("之前用vuepress的默认主题写了一个搭建博客的教程，弄了很多小插件，有一点小小的成就感。不过默认主题更适合写电子书，不太适合作为博客来使用。\n于是试着找找其他主题，但vuepress的生态实在是不太行，主题很少。打算转hexo，官网里的chic主题蛮喜欢的，很简洁，但身为资深懒🐕，还是不太想学新框架。\n最后在github上一个个地看demo，看到gungnir，感觉很不错，优雅而不失简约，就决定是你了，皮卡丘。")]),t._v(" "),a("h2",{attrs:{id:"大自然的搬运工"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大自然的搬运工"}},[t._v("#")]),t._v(" 大自然的搬运工")]),t._v(" "),a("p",[t._v("在之前博客的基础上，按照文档弄了一下，主页怎么也显示不了，可能是依赖包的问题。然后就直接copy了一下，先运行起来再说。\n然后就换了换内容，看了看代码，把主题自带的插件配了起来。在配置vssue的时候安装了一些没必要的包，可能又是包结构问题，只好回退版本了。")]),t._v(" "),a("h2",{attrs:{id:"又整不会了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#又整不会了"}},[t._v("#")]),t._v(" 又整不会了")]),t._v(" "),a("p",[t._v("之前用的valine虽然丑是丑了点，不过支持匿名评论，而且还有访问量统计，就试着把浏览量的功能迁过来。\n果不其然，众望所归地又炸了，还是包结构的问题，之前npm和yarn混着用，而且yarn还会警告workspace什么的，也没去解决，很难受，也不知道以后会不会又出类似的问题。")]),t._v(" "),a("h2",{attrs:{id:"vssue登录会跳到网站首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vssue登录会跳到网站首页"}},[t._v("#")]),t._v(" Vssue登录会跳到网站首页")]),t._v(" "),a("p",[t._v("应该是"),a("code",[t._v(".md")]),t._v("文件名中有中文/特殊字符的原因，导致地址解析不正确，会重定向到"),a("code",[t._v("Authorization callback URL")]),t._v("，也就是在"),a("code",[t._v("OAuth Apps")]),t._v("里配置的首页。")]),t._v(" "),a("h2",{attrs:{id:"lastupdated-不会实时更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lastupdated-不会实时更新"}},[t._v("#")]),t._v(" lastUpdated 不会实时更新")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// blog/.vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/last-updated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("transformer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          moment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("locale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromNow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("虽然会显示上次更新于几天前，但不论过多久还是显示同样的内容。")]),t._v(" "),a("p",[t._v("源代码的"),a("code",[t._v("lastUpdated")]),t._v("是放在"),a("code",[t._v("computed")]),t._v("里的，据 vue 官网上的解释，"),a("code",[t._v("Date")]),t._v("日期之类的不是响应式依赖，计算属性将不再更新。于是我试着将"),a("code",[t._v("lastUpdated")]),t._v("放在"),a("code",[t._v("mounted")]),t._v("里，发现还是不行。")]),t._v(" "),a("p",[t._v("没办法，还是用回"),a("code",[t._v('moment(timestamp).format("YYYY-MM-DD HH:mm");')]),t._v("吧🙃")]),t._v(" "),a("h2",{attrs:{id:"配置首页的标签页标题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置首页的标签页标题"}},[t._v("#")]),t._v(" 配置首页的标签页标题")]),t._v(" "),a("p",[t._v("标签页标题就是浏览器最上面的文字，在主页的时候显示的是Posts，我想改为Home。询问了"),a("a",{attrs:{href:"https://zxh.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("作者大佬")]),t._v("后，找到了解决方法：")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("packages/theme-gungnir/index.js")]),t._v("中"),a("code",[t._v("@vuepress/plugin-blog")]),t._v("的如下部分添加"),a("code",[t._v('title: "Home"')]),t._v("便可🤗\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://i.loli.net/2021/08/09/PUgq8LxjHVlZJ6p.png",alt:""}})]),a("p"),t._v(" "),a("h2",{attrs:{id:"github-actions-自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-自动部署"}},[t._v("#")]),t._v(" Github Actions 自动部署")]),t._v(" "),a("p",[t._v("心血来潮，先试试好不好用~")]),t._v(" "),a("p",[t._v("这段 action （由"),a("a",{attrs:{href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress官方")]),t._v("提供）的功能是在我 push 到 main 分支的时候自动 build ，然后将打包后的静态文件上传到 gh-pages 分支上。")]),t._v(" "),a("p",[t._v("首先在用户的"),a("code",[t._v("Settings->Developer settings")]),t._v("中新建一个"),a("code",[t._v("Personal access tokens")]),t._v("，名字叫"),a("code",[t._v("ACCESS_TOKEN")]),t._v("，权限选择"),a("code",[t._v("repo")]),t._v("就行。")]),t._v(" "),a("p",[t._v("然后在要自动部署的仓库的"),a("code",[t._v("Settings->secrets")]),t._v("中新建一个名为"),a("code",[t._v("ACCESS_TOKEN")]),t._v("的"),a("code",[t._v("secret")]),t._v("，将之前获得的 TOKEN 复制上去。")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .github\\workflows\\deploy.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build and deploy\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每当 push 到 main 分支时触发部署")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 手动触发部署")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TZ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Asia/Shanghai\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch-depth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup Node.js\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择要使用的 node 版本")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"14"')]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存 node_modules")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache dependencies\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            **/node_modules")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/yarn.lock')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            ${{ runner.os }}-yarn-")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果缓存没有命中，安装依赖")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install dependencies\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" steps.yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache.outputs.cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hit "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" 'true'\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("frozen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("lockfile\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行构建脚本")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build VuePress site\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn build\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 workflow 的文档来获取更多信息")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @see https://github.com/JamesIves/github-pages-deploy-action")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy to GitHub Pages\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 gh-pages 分支")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署目录为 VuePress 的输出目录")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" public\n")])])]),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("tip")]),t._v(" "),a("p",[t._v("不过测试了一次后发现"),a("code",[t._v("lastUpdated")]),t._v("的时区不对，于是在上述代码的"),a("code",[t._v("env")]),t._v("部分添加了地区。")])]),t._v(" "),a("h2",{attrs:{id:"giscus评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#giscus评论"}},[t._v("#")]),t._v(" giscus评论")]),t._v(" "),a("p",[t._v("到"),a("a",{attrs:{href:"https://giscus.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("giscus官网")]),t._v("中按照流程配置一下，会获得一段"),a("code",[t._v("<script>")]),t._v("代码，然后复制到相应位置即可。")]),t._v(" "),a("p",[t._v("目前没解决的问题：")]),t._v(" "),a("ul",[a("li",[t._v("响应式（评论随着文章切换）")]),t._v(" "),a("li",[t._v("深色主题（主题切换后评论区还是白色）")])])])}),[],!1,null,null,null);s.default=e.exports}}]);