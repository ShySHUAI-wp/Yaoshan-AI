// index.js
Page({
  data: {
    newsList: [
      {
        id: 1,
        cover: "/assets/帖子.png",
        isVideo: true,
        duration: "12:30",
        title: "三伏天艾灸实操教程，在家也能养生",
        playCount: "2.5"
      },
      {
        id: 2,
        cover: "/assets/帖子2.png",
        isVideo: false,
        duration: "",
        title: "秋分养生食谱大全，应季食材这样吃最健康",
        playCount: ""
      },
      {
        id: 3,
        cover: "/assets/封面.jpg",
        isVideo: false,
        duration: "",
        title: "秋季养生小推荐",
        playCount: ""
      },
      {
        id: 4,
        cover: "/assets/封面2.jpg",
        isVideo: true,
        duration: "12:30",
        title: "究竟哪种药材才能让人真正告别伤痛",
        playCount: "2.5"
      }
      ]
      },
        onLoad: function (options) {
          const newsId = options.id;
          this.getNewsDetail(newsId);
        },
        getNewsDetail: function (id) {
          wx.request({
            url: '/pages/news-detail/news-detail.wxml',
            data: { id: id },
            success: (res) => {
              this.setData({
                newsDetail: res.data
              });
            }
          });
        }
      });