module.exports = {
  pageClass: '',
  head: [
    ['link',
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_1180504_ol37traisu.css' }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '/src/assets/',
        '@components': '/src/components/'
      }
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'Me-View',
      description: 'Me-View 交流中心'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Me-View',
      description: 'Me-View 交流中心'
    }
  },
  themeConfig: {
    repo: 'hpf393187274/me-view',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        title: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '嵌套', link: '/' }
        ],
        sidebarDepth: 0,
        sidebar: [
          {
            title: 'Common 公共', collapsable: false,
            children: [
              '/zh/common/tools',
              '/zh/common/type',
              '/zh/common/storage'
            ]
          },
          {
            title: 'Basic 基础', collapsable: false,
            children: [
              '/zh/basic/row',
              '/zh/basic/column',
              '/zh/basic/icon',
              '/zh/basic/link',
              '/zh/basic/lineH',
              '/zh/basic/lineV',
              '/zh/basic/scrollbar',
              '/zh/basic/slidebar',
            ]
          },
          {
            title: 'Form 表单', collapsable: false,
            children: [
              '/zh/form/form',
              '/zh/form/input',
              '/zh/form/button',
              '/zh/form/checkbox',
              '/zh/form/comboSelect',
              '/zh/form/comboTree',
              '/zh/form/comboTable'
            ]
          },
          {
            title: 'Layout 布局', collapsable: false,
            children: [
              { title: 'Table 表格', path: '/zh/layout/table' },
              { title: 'Paging 分页', path: '/zh/layout/paging' },
              { title: 'Tree 树型控件', path: '/zh/layout/tree' },
              { title: 'Transfer 穿梭框', path: '/zh/layout/transfer' }
            ]
          },
          {
            title: 'View 视图', collapsable: false,
            children: [
              { title: 'Dialog 对话框', path: '/zh/view/dialog' }
            ]
          }
        ]
      },
      '/en/': {
        selectText: 'Languages',
        title: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Nested', link: '/zh/nested/' }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      }
    }
  }
}