Page({
  data: {
    healthItems: [
      { icon: '/assets/品质.png', text: '平和体质' },
      { icon: '/assets/睡眠.png', text: '睡眠良好' },
      { icon: '/assets/血压.png', text: '血压正常' }
    ],
    accountItems: [
      { icon: '/assets/修改密码.png', text: '修改密码' },
      { icon: '/assets/电话.png', text: '手机绑定' },
      { icon: '/assets/第三方账号管理.png', text: '第三方账号管理' }
    ]
  },
  onLoad: function () {
    // 页面加载时可在此请求用户信息，动态更新数据
  },
  // 示例：查看健康画像详情的点击事件
  viewHealthDetail: function () {
    wx.navigateTo({
      url: '/pages/milk/milk'
    });
  },
});