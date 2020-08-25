const { default: api } = require("../../http/api")
import dayjs from '../../lib/dayjs/dayjs.min'
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    album:{},
    songs:[],
    publishTime:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
      id:options.id
     })
    api.album(this.data.id).then(res => {
      this.setData({
        album:res.album,
        songs:res.songs,
        publishTime:dayjs(res.album.publishTime).format('DD--MM-YYYY')
      })
      console.log(res , "歌单专辑详情")
    }).catch(err => {})
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