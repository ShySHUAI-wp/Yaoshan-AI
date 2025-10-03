Page({
  // 点击“开始填写健康档案”触发的事件
  goToFill() {
    wx.navigateTo({
      url: '/pages/meal/meal', // 跳转到“填写健康档案”的目标页面（需提前创建）
    })
  }
})