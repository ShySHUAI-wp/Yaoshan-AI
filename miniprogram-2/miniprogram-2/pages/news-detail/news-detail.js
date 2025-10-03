Page({
  data: {
    videoUrl: 'http://www.douyin.com', 
    coverImg: '/assets/forward.png',
    title: '三伏天艾灸实操教程，在家也能养生',
    likeNum: 2.5,
    commentNum: 0.8, 
    collectNum: 1.2, 
    relatedList: [
      {
        id: 1,
        cover: '/assets/帖子2.png',
        title: '秋分养生食谱大全，应季食材这样吃最健康',
        play: 1
      },
      {
        id: 2,
        cover: '/assets/封面.jpg',
        title: '中药材辨识指南，教你认清常用养生药材',
        play: 1.5
      },
      {
        id: 3,
        cover: '/assets/封面2.jpg',
        title: '秋冬养生茶配方，每天一杯暖身又养颜',
        play: 2
      },
      {
        id: 4,
        cover: '/assets/帖子.png',
        title: '中医安神助眠方法，摆脱失眠困扰',
        play: 1.8
      }
    ]
  },
  onLoad: function(options) {
    console.log('当前资讯ID：', options.id);
  }
})