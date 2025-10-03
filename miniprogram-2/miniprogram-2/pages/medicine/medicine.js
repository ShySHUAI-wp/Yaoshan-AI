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
                name: '当归黄芪乌鸡汤', 
                desc: '乌鸡切块焯水，与当归、黄芪、红枣、枸杞一同放入砂锅中，加足量清水大火煮沸后转小火炖1.5小时，加盐调味即可。', 
                tags: ['养生', '活血'] ,
                image:"/assets/食1.png",
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
                name: '茯苓山药排骨汤', 
                desc: '排骨焯水后与茯苓、山药块、姜片放入高压锅，加适量清水，上汽后压25分钟，出锅前加盐和葱花调味。', 
                tags: ['夏季特供', '祛湿'] ,
                image:"/assets/食2.png"
              },
            ]
          },
          {
            id:3,
            title: '人气品牌',
            drinks: [
              { 
                name: '莲子百合银耳羹', 
                desc: ' 干银耳泡发撕小朵，与去芯莲子、百合干、冰糖一同放入电饭煲，加适量清水，选择甜品模式煮1小时，出锅前撒少许桂花。', 
                tags: ['人气爆棚'] ,
                image:"/assets/食3.png"
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
                name: '枸杞菊花猪肝粥', 
                desc: '大米淘洗后熬煮成白粥，加入切片猪肝煮熟，再放入枸杞和菊花，煮3分钟后加盐、香油调味，撒上香菜碎。', 
                tags: ['养生', '补气血'] ,
                image:"/assets/食4.png"
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