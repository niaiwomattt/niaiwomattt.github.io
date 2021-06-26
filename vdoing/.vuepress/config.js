module.exports = {
  title: '上士之道',
  description: '上士闻道，勤而行之；中士闻道，若存若亡；下士闻道，大笑之。不笑不足以为道。',
  theme: 'vdoing',
  head: [
    ['link', { rel: 'icon', href: 'logo.ico' }],
    ['meta', { name: 'keywords', content: '计算机，中医，政治'}],
    ['script', {
      "data-ad-client": "ca-pub-5981096209380525",
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    }]
  ],
  themeConfig: {
    sidebar: 'structuring' //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
  },
  author: '上士之道',
  //  temp: 'docs',
  dest: 'docs'
}
