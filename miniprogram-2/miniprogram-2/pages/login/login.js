Page({
  data: {
    phone: '',
    code: '',
    codeBtnText: '获取验证码', 
    codeBtnDisabled: false, 
    countdown: 60 
  },

  // 手机号输入事件
  bindPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  // 清除手机号
  clearPhone() {
    this.setData({
      phone: ''
    });
  },

  // 验证码输入事件
  bindCodeInput(e) {
    this.setData({
      code: e.detail.value
    });
  },

  // 获取验证码
  getVerificationCode() {
    // 校验手机号格式
    if (!/^1[3-9]\d{9}$/.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return;
    }

    // 模拟倒计时
    this.setData({
      codeBtnDisabled: true,
      codeBtnText: `${this.data.countdown}秒后重新获取`
    });

    const timer = setInterval(() => {
      if (this.data.countdown <= 1) {
        clearInterval(timer);
        this.setData({
          codeBtnDisabled: false,
          codeBtnText: '获取验证码',
          countdown: 60
        });
      } else {
        this.setData({
          countdown: this.data.countdown - 1,
          codeBtnText: `${this.data.countdown - 1}秒后重新获取`
        });
      }
    }, 1000);

    // 实际开发中，这里调用后端接口发送验证码
    // wx.request({
    //   url: 'https://your-domain.com/api/sendCode',
    //   method: 'POST',
    //   data: {
    //     phone: this.data.phone
    //   },
    //   success: (res) => {
    //     if (res.data.code === 0) {
    //       wx.showToast({
    //         title: '验证码发送成功',
    //         icon: 'success'
    //       });
    //     } else {
    //       wx.showToast({
    //         title: res.data.msg || '发送失败，请重试',
    //         icon: 'none'
    //       });
    //       clearInterval(timer);
    //       this.setData({
    //         codeBtnDisabled: false,
    //         codeBtnText: '获取验证码',
    //         countdown: 60
    //       });
    //     }
    //   },
    //   fail: () => {
    //     wx.showToast({
    //       title: '网络异常，请重试',
    //       icon: 'none'
    //     });
    //     clearInterval(timer);
    //     this.setData({
    //       codeBtnDisabled: false,
    //       codeBtnText: '获取验证码',
    //       countdown: 60
    //     });
    //   }
    // });
  },

  // 登录
  handleLogin() {
    // 校验手机号和验证码
    if (!this.data.phone) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      });
      return;
    }
    if (!/^1[3-9]\d{9}$/.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return;
    }
    if (!this.data.code) {
      wx.showToast({
        title: '请输入验证码',
        icon: 'none'
      });
      return;
    }

    // 实际开发中，这里调用后端接口进行登录验证
    // wx.request({
    //   url: 'https://your-domain.com/api/login',
    //   method: 'POST',
    //   data: {
    //     phone: this.data.phone,
    //     code: this.data.code
    //   },
    //   success: (res) => {
    //     if (res.data.code === 0) {
    //       // 登录成功，存储token等信息，跳转到首页
    //       wx.setStorageSync('token', res.data.data.token);
    //       wx.switchTab({
    //         url: '/pages/index/index'
    //       });
    //     } else {
    //       wx.showToast({
    //         title: res.data.msg || '登录失败，请重试',
    //         icon: 'none'
    //       });
    //     }
    //   },
    //   fail: () => {
    //     wx.showToast({
    //       title: '网络异常，请重试',
    //       icon: 'none'
    //     });
    //   }
    // });

    // 模拟登录成功
    wx.showToast({
      title: '登录成功',
      icon: 'success'
    });
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/profile/profile'
      });
    }, 1500);
  },
  wechatLogin() {
    // 调用微信登录API
    wx.login({
      success: (res) => {
        if (res.code) {
          // 发送code到后端换取openid等信息，实现微信登录
          // wx.request({
          //   url: 'https://your-domain.com/api/wechatLogin',
          //   method: 'POST',
          //   data: {
          //     code: res.code
          //   },
          //   success: (res) => {
          //     if (res.data.code === 0) {
          //       wx.setStorageSync('token', res.data.data.token);
          //       wx.switchTab({
          //         url: '/pages/index/index'
          //       });
          //     } else {
          //       wx.showToast({
          //         title: res.data.msg || '登录失败，请重试',
          //         icon: 'none'
          //       });
          //     }
          //   }
          // });
        } else {
          wx.showToast({
            title: '微信登录失败，请重试',
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '微信登录失败，请重试',
          icon: 'none'
        });
      }
    });
  },

  // 手机号登录（跳转回当前页，实际可根据需求调整）
  phoneLogin() {
    wx.showToast({
      title: '手机号登录',
      icon: 'none'
    });
  },

  // 访客登录
  visitorLogin() {
    // 访客登录逻辑，如直接进入首页，标记为访客
    wx.setStorageSync('visitor', true);
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
});