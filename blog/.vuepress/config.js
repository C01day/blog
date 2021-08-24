const path = require("path");

module.exports = {
  title: "C01day",
  description: "C01day's blog, powered by VuePress, themed by Gungnir.",
  
  head: [
    ["link", { rel: "icon", href: "/img/logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  dest: 'public',
  theme: "gungnir",

  locales: {
    "/": {
      lang: "zh-CN"
    },
    // "/en/": {
    //   lang: "en-US"
    // }
  },
  themeConfig: {
    // repo: "C01day/blog",
    docsDir: "blog",
    // docsBranch: "master",
    editLinks: true,
    // lastUpdated: true,
    hitokoto: true,
    // {
    //   api: "https://v1.hitokoto.cn/?c=c&c=d&c=h&c=i&c=j&c=k"
    // },
    searchIcon: "ri-search-2-line",
    searchPlaceholder: "想搜点什么呢~",
    codeTheme: "gungnir-dark",
    // rss: {
    //   site_url: "https://zxh.io",
    //   copyright: "Renovamen 2018-2021",
    //   count: 20
    // },
    comment: {
      owner: "C01day",
      repo: "Vssue-comments",
      clientId: "7519f1d06d54f825191c",
      clientSecret: "6fbf56328ccc37d6226dc9d0b6e6fdfefb9f3994",
      // autoCreateIssue: true,
    },
    analytics: {
      ga: "UA-204468193-1",
      // ba: "75381d210789d3eaf855fa16246860cc"
    },
    katex: true,
    chartjs: true,
    mdPlus: {
      all: true
    },
    readingTime: false,
    // readingTime: {
    //   excludes: ["/about", "/tags/.*", "/links"]
    // },
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "ri-home-2-line"
        // icon: "fa-fort-awesome"
      },
      {
        text: "关于我",
        link: "/about/",
        icon: "bi-chat"
        // icon: "fa-paw"
      },
      {
        text: "文章",
        link: "/tags/",
        icon: "bi-bookmark"
      },
      {
        text: "外链",
        link: "/links/",
        icon: "hi-rss",
        // icon: "fa-satellite-dish"
      },
      // {
      //   text: "文档",
      //   link: "/docs/",
      //   icon: "bi-journal"
      //   icon: "ri-book-2-fill"
      // }
    ],
    personalInfo: {
      name: "C01day",
      avatar: "/img/avatar.jpg",
      description: "天凉",
      sns: {
        github: "C01day/blog",
        linkedin: "c01day",
        facebook: "C01day",
        twitter: "",
        zhihu: "C01day",
        email: "ddaweizhou@gmail.com"
      }
    },
    homeHeaderImages: {
      // api: "https://source.unsplash.com/1600x900/?nature,water,travel"
      local: [
        {
          path: "/img/home-background/1.jpg",
        },
        {
          path: "/img/home-background/2.jpg",
        },
        {
          path: "/img/in-post/cover/114.jpg",
        },
        {
          path: "/img/in-post/cover/116.jpg",
        },
        {
          path: "/img/in-post/cover/118.jpg",
        },
      ]
    },
    pages: {
      tags: {
        title: "文章",
        subtitle: "点击标签可以检索相关的文章~",
        bgImage: {
          path: "/img/pages/tags.jpg",
        }
      },
      links: {
        title: "外链",
        subtitle:
          "看看有啥网站吧~",
        bgImage: {
          path: "/img/pages/links.jpg",
        }
      }
    },
    footer: `
      &copy; <a href="https://github.com/C01day" target="_blank">C01day</a> 2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5"]
  },

  plugins: [
    // [
    //   '@vuepress/back-to-top'
    // ],
    [
      'sitemap', 
      {
        hostname: 'https://www.c01day.com/',
        dateFormatter: val => {
          return new Date().toISOString()
        }
      },
    ],
    [
      '@vuepress/last-updated', 
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).format("YYYY-MM-DD HH:mm");
        }
      }
    ],
  ],

  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          public: path.resolve(__dirname, "./public")
        }
      }
    };
    
  }
};
