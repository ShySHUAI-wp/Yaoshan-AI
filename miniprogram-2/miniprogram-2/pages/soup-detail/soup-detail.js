Page({
  data: {
    tabs: ['全部', '养生', '减脂', '祛火', '祛湿', '安神'],
    currentTab: 0, // 当前选中标签索引
    tabContents: [
      // 「全部」标签对应的内容：包含“为你推荐”“季节限定”“人气奶茶”三个板块
      {
        sections: [
          {
            id:1,
            title: '为你推荐',
            drinks: [
              { 
                name: '四物汤', 
                desc: '熟地15g、当归10g、白芍10g、川芎5g，加水800ml浸泡30分钟，大火煮沸后转小火煎煮40分钟，滤出药液；药渣加水500ml再煎30分钟，两次药液混合，分早晚温服。', 
                tags: ['安神', '助眠'] ,
                image:"/assets/汤1.png",
                ingredients: ['茯苓粉', '全脂牛奶', '蜂蜜', '燕麦'], 
                price: 18, 
                nutrition: '热量：180kcal/杯 | 蛋白质：3.2g', 
                detail: '采用云南茯苓研磨成粉，搭配牧场直供鲜牛乳，慢火熬制2小时，保留食材原香，无添加蔗糖，健康无负担。' 
              },
            ]
          },
          {
            id:2,
            title: '季节限定',
            drinks: [
              {
                name: '桂枝汤', 
                desc: '桂枝9g、白芍9g、生姜9g、大枣3枚、炙甘草6g，加水700ml，大火烧开后小火煮25分钟，去渣取汁约300ml，温服后喝热粥一碗，加盖衣被即微汗。', 
                tags: ['夏季特供', '祛湿'] ,
                image:"/assets/汤2.png"
              },
            ]
          },
          {
            id:3,
            title: '人气汤品',
            drinks: [
              { 
                name: '麻黄汤', 
                desc: '麻黄6g、桂枝4g、杏仁9g、炙甘草3g，先煮麻黄去上沫，加入其余药材再煮20分钟，滤取药液400ml，温服后盖被取汗，汗出停服。', 
                tags: ['人气爆棚'] ,
                image:"/assets/汤3.png"
              },
            ]
          }
        ]
      },
      {
        sections: [
          {
            title: '养生推荐',
            drinks: [
              { 
                name: '逍遥散', 
                desc: '柴胡9g、当归9g、白芍9g、白术9g、茯苓9g、炙甘草5g、生姜3片、薄荷3g，前六味加水600ml煮30分钟，加入薄荷再煮5分钟，去渣温服，每日两次。', 
                tags: ['养生', '补气血'] ,
                image:"/assets/汤4.png"
              },
            ]
          },
          {
            title: '养生推荐',
            drinks: [
              { 
                name: '养生枸杞奶茶', 
                desc: '枸杞搭配温润牛乳，养生补气血', 
                tags: ['养生', '补气血'] ,
                image:"/assets/收藏4.png"
              },
            ]
          }
        ]
      },
      {
        sections: [
          {
            title: '减脂特选',
            drinks: [
              { 
                name: '低脂茯苓茶', 
                desc: '低脂配方，茯苓助力代谢，适合减脂期', 
                tags: ['减脂', '低脂'] ,
                image:"/assets/收藏4.png"
              },
            ]
          }
        ]
      },
      {
        sections: [
          {
            title: '祛火茶饮',
            drinks: [
              { 
                name: '菊花金银花奶茶', 
                desc: '菊花与金银花结合，清热祛火', 
                tags: ['祛火', '清热'] 
              },
            ]
          }
        ]
      },
      {
        sections: [
          {
            title: '祛湿推荐',
            drinks: [
              { 
                name: '红豆薏米奶茶', 
                desc: '红豆薏米经典祛湿配方，搭配奶茶更易入口', 
                tags: ['祛湿', '消肿'] 
              },
            ]
          }
        ]
      },
      {
        sections: [
          {
            title: '安神特调',
            drinks: [
              { 
                name: '百合莲子奶茶', 
                desc: '百合莲子助眠安神，晚间饮用佳', 
                tags: ['安神', '助眠'] 
              },
            ]
          }
        ]
      }
    ],
  },
  onTabChange(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({ currentTab: index });
  },
  onDrinkTap(e) {
    // 获取当前点击饮品的id
    const drinkId = e.currentTarget.dataset.id;
    // 跳转到详情页（假设详情页路径为/pages/milk-detail/milk-detail）
    wx.navigateTo({
      url: `/pages/milk-detail/milk-detail?id=${drinkId}` // 携带id参数
    });
  }
})