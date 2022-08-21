const sidebarRepair = require('./conf/sidebar/slide')
// const sidebarParty = require('./conf/sidebar/party')
// const sidebarSlide = require('./conf/sidebar/repair')
const sidebarSkills = require('./conf/sidebar/skills')


module.exports = {
  title: 'QPC',
  description: '科兴性能车指定俱乐部',
  head: [
    ['meta', { name: 'keywords', content: 'QPC' }],
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  plugins: [
    'flowchart',
    '@vuepress/active-header-links',
    '@vuepress/pagination',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        // Don't forget to install moment yourself
        const moment = require('moment')
        moment.locale('zh-CN')
        return moment(timestamp).format('YYYY-MM-DD HH:mm')
      }
    }],
    'vuepress-plugin-baidu-autopush',
    ['sitemap', {
      hostname: 'https://qq-perf.club'
    }],
  ],
  themeConfig: {
    repo: 'qq-perf/qpc.github.io',
    editLinks: true,
    docsRepo: 'qq-perf/qpc.github.io',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '聚会活动', link: '/party/' }, // 内部链接 以docs为根目录
      { text: '溜车打卡', link: '/slide/' }, // 内部链接
      { text: '维修保养', link: '/repair/' }, // 内部链接
      { text: '驾驶心得', link: '/skills/' }, // 内部链接
      // 下拉列表
      {
        text: '关于',
        items: [
          { text: '贡献者', link: '/about/contributors' },
          { text: '加入我们', link: '/about/joinus' },
          { text: '联系我们', link: '/about/contactus' },
          { text: '赞助公示', link: '/about/materials-sponsor' }
        ]
      }
    ],
    //sidebarDepth: 2,
    //displayAllHeaders: true,//显示所有页面的标题链接
    //为方便维护侧边栏变量引用转移到./config/sidebar/下
    sidebar: {
      // '/slide/': sidebarSlide ,
      // '/party/': sidebarParty,
      '/repair/': sidebarRepair,
      '/skills/': sidebarSkills,
    },
    algolia: {
      appId: '7AJPHQ1T68',
      apiKey: 'bd670820b10ee6b3a32dca912d65c689',
      indexName: 'qpc'
    }
  }
}
