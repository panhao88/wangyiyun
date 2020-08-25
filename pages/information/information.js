const { default: api } = require("../../http/api")
import store from '../../store/index'
import create from '../../utils/create'
// pages/information/information.js
create.Page(store,{

  /**
   * 页面的初始数据
   */
  use:['userid'],
  data: {
    didi:0,
    phone:'',
    password:'',
  },
  goto1(){
    this.setData({
      didi:0
    })
  },
  goto2(){
    this.setData({
      didi:1
    })
  },
  godenglu(){
    if(this.data.didi === 0){
      api.getlogin({
        phone:this.data.phone,
        password:this.data.password
      }).then(res => {
        if(res.code === 200){
          wx.showToast({
            title: '登录成功',
            icon:"success",
            duration:1000
          })
        }
        
        this.store.data.userId = res.bindings[0].userId
        console.log(res ,"登录成功")
        wx.switchTab({
          url: '/pages/index/index'
        })
      }).catch(err => {})
    }
  },
  gozhuce(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
    phone(e){
     
      this.setData({
        phone:e.detail
      })
      // console.log(e)
    },
    password(e){
      // console.log(e)
      this.setData({
        password:e.detail
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