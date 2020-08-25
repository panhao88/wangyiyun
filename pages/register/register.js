const { default: api } = require("../../http/api");

// pages/register/register.js
var interval = null //倒计时函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTime:60,
    time:'获取验证码',
    phone:"",
    password:"",
    captcha:"",
    nickname:""
  },
  // 倒计时
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime;
    interval = setInterval(function () {
      currentTime--;
    that.setData({
    time: (currentTime - 1) + '秒'
    })
    if (currentTime <= 0) {
    clearInterval(interval)
    that.setData({
    time: '重新获取',
    currentTime: 60,
    disabled: false
    })
    }
    }, 1000)
    },
    // 发送验证码
    fasongyanzhengma(){
     var that = this;
      that.setData({
      disabled: true, //只要点击了按钮就让按钮禁用 （避免正常情况下多次触发定时器事件）
      color: '#ccc',
      })
      api.getcaptcha(this.data.phone).then(res => {
        wx.showToast({
          title: '发送成功',
          icon: 'success',
          duration: 1000
        })
        console.log(res ,"验证码")
      }).catch(err => {})
    },
    // 前往登录
    godenglu(){
      wx.navigateTo({
        url: '../information/information',
      })
    },
    // 立即注册
    gozhuce(){
      api.getverify({
        phone:this.data.phone,
        captcha:this.data.captcha
      }).then(res => {
        console.log(res ,"验证验证码")
        api.getcellphone(this.data.phone).then(res => {
          console.log(res ,"验证手机")
          api.getregister({
            phone:this.data.phone,
            password:this.data.password,
            captcha:this.data.captcha,
            nickname:this.data.nickname
          }).then(res => {
            console.log(res ,"注册成功")
            if(res.code === 200 ){
              wx.showToast({
                title: '注册成功',
                icon: 'success',
                duration: 1000
              })
            }
            wx.navigateTo({
              url: '../information/information',
            })
          }).catch(err => {
            if(err){
              wx.showToast({
                title: err.response.data.message,
                icon: 'none',
              })
            }
          })
        }).catch(err => {
         if(err){
          wx.showToast({
            title: err.response.data.message,
            icon: 'none',
          })
         }
        })
      }).catch(err => {
        if(err){
          wx.showToast({
            title: err.response.data.message,
            icon: 'none',
          })
        }
      })
    },
  // 定义四个空变量，装输入框的值
  // 用户名
  phone(e){
    this.setData({
      phone:e.detail
    })
    console.log(e)
  },
  //密码
  password(e){
    this.setData({
      password:e.detail
    })
  },
  //验证码
  captcha(e){
    this.setData({
      captcha:e.detail
    })
  } ,
  //昵称
  nickname(e){
    this.setData({
      nickname:e.detail
    })
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})