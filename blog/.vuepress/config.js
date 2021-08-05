const path = require("path");

module.exports = {
  title: "C01day",
  description: "C01day's blog, powered by VuePress, themed by Gungnir.",
  
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],

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
    // repo: "Renovamen/renovamen.github.io",
    docsDir: "blog",
    // docsBranch: "master",
    editLinks: true,
    lastUpdated: true,
    hitokoto: true,
    // {
    //   api: "https://v1.hitokoto.cn/?c=c&c=d&c=h&c=i&c=j&c=k"
    // },
    searchIcon: "ri-search-2-line",
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
      clientSecret: "6fbf56328ccc37d6226dc9d0b6e6fdfefb9f3994"
    },
    // analytics: {
    //   ga: "UA-146858305-1",
    //   ba: "75381d210789d3eaf855fa16246860cc"
    // },
    // katex: true,
    // mdPlus: {
    //   all: true
    // },
    // readingTime: {
    //   excludes: ["/about", "/tags/.*", "/links"]
    // },
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "关于我",
        link: "/about/",
        icon: "fa-paw"
      },
      {
        text: "文章",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "外链",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "文档",
        link: "/",
        icon: "ri-book-2-fill"
      }
    ],
    personalInfo: {
      name: "C01day",
      avatar: "/img/avatar.jpg",
      description: "天凉",
      sns: {
        github: "C01day",
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
          // mask: "rgba(40, 57, 101, .4)"
        },
        // {
        //   path: "/img/home-background/2.jpg",
        //   // mask: "rgba(196, 176, 131, .1)"
        // },
        // {
        //   path: "/img/home-background/3.jpg",
        //   // mask: "rgba(68, 74, 83, .1)"
        // },
        // {
        //   path: "/img/home-background/4.jpg",
        //   // mask: "rgba(19, 75, 50, .2)"
        // },
        // {
        //   path: "/img/home-background/5.jpg",
        //   // mask: "rgba(19, 75, 50, .2)"
        // },
        // {
        //   path: "/img/home-background/6.jpg"
        // }
      ]
    },
    pages: {
      tags: {
        title: "文章",
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: "外链",
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
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
        hostname: 'https://c01day.com/'
      },
    ]
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
