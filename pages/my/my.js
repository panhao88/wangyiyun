const { default: api } = require("../../http/api")
import store from '../../store/index'
import create from '../../utils/create'
// pages/my/my.js
create.Page(store, {
  use:['name'],
  /**
   * 页面的初始数据
   */
  data: {
   
  },
  goto(){
    wx.navigateTo({
      url: '../information/information',
    })
  },
  gotuichu(){
    wx.showModal({
      title:'提示',
      content:'你是否要退出',
      success:res => {
        if(res.confirm){
          api.logout().then(res => {
            this.store.data.userid = ''
            wx.navigateTo({
              url: '../information/information',
            })
            console.log(res ,"退出登录")
          }).catch(err => {})
        }
      }
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