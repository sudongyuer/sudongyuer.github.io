module.exports = {
  title: "速冻鱼blog",
  description: "该网站用于记录前端知识总结",
  dest: "./dist",
  head: [
    // 在head标签中生成以下标签
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["meta", { name: "keywords", content: "前端,js,css" }],
    ["meta", { name: "author", content: "速冻鱼" }],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        // 第一个导航按钮
        text: "Home", //  按钮名称为 Home
        link: "/", //  对应的跳转链接为  /
        icon: "reco-home", // 按钮的前置图标为 reco-home
      },
      {
        // 第二个导航按钮
        text: "TimeLine", //  按钮名称为 TimeLine
        link: "/timeline/", //  对应的跳转链接为  /timeline/
        icon: "reco-date", // 按钮的前置图标为 reco-date
      },
      {
        // 第三个导航按钮
        text: "Docs", //  按钮名称为 Docs
        icon: "reco-message", // 按钮的前置图标为 reco-message
        items: [
          // 该按钮的子菜单
          {
            // 子菜单中的第一个导航按钮
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        // 第四个导航按钮
        text: "Contact", //  按钮名称为 Contact
        icon: "reco-message", // 按钮的前置图标为 reco-message
        items: [
          // 该按钮的子菜单
          {
            // 子菜单中的第一个导航按钮
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": [
        "", // 空字符串对应的是 README.md
        "theme", // 对应 theme.md
        "plugin", // 对应plugin.md
        "api", // 对应api.md
      ],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "速冻鱼",
    authorAvatar: "/longzhu_avatar.jpeg",
    record: "xxxx",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};
