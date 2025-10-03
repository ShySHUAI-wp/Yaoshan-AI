Page({
  data: {
    detail: {} 
  },
  onLoad: function (options) {
    const index = parseInt(options.id); 
    const milkTeaList = [
      {
        image: '/assets/奶茶收藏.png',
        title: '桂圆红枣奶茶',
        desc: '红茶煮出茶汤，加入桂圆肉、红枣片熬煮10分钟，滤渣后兑入热牛奶，加少许红糖调味，表面撒干桂花。',
        suitable: '喜欢甜口人群',
        collectTime: '2天前收藏'
      },
      {
        image: '/assets/收藏2.png',
        title: '生姜红糖奶茶',
        desc: '生姜切片煮出姜汁，加入红糖搅拌至融化，倒入黑白淡奶和红茶汤，小火煮沸后关火焖3分钟，装杯时放一片鲜姜装饰。',
        suitable: '喜欢微苦回甘口感',
        collectTime: '5天前收藏'
      },
      {
        image: '/assets/收藏3.png',
        title: '玫瑰枸杞奶茶',
        desc: '枸杞用温水泡发，玫瑰花茶冲泡出茶汤，混合热牛奶和适量蜂蜜，放入泡好的枸杞，最后撒入干玫瑰花瓣。',
        suitable: '喜欢清新风味',
        collectTime: '1周前收藏'
      },
      {
        image: '/assets/收藏4.png',
        title: '陈皮普洱奶茶',
        desc: '普洱茶饼煮出浓厚茶汤，加入陈皮丝继续煮5分钟，滤渣后与椰奶按3:1比例混合，加少量冰糖，装杯后放一片陈皮装饰。',
        suitable: '喜欢茶香风味',
        collectTime: '2周前收藏'
      }
    ];
    this.setData({
      detail: milkTeaList[index]
    });
  }
});