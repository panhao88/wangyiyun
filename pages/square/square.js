const { default: api } = require("../../http/api")

// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      didi:0,
      song1:[],
      song2:[],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      circular: true,
      swiperIndex: 0,
      active: 0,
      playlists:[],
      playlists1:[]
  },  
  bindchange(e){
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  haha1(){
    this.setData({
      didi:0
    })
  },
  haha2(){
    this.setData({
      didi:1
    })
  },
  haha3(){
    this.setData({
      didi:2
    })
  },
  didi1(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  },
  didi2(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  },
  didi3(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  },
  didi4(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title:'拼命加载中',
      icon:'loading'
    })
    api.getplaylistsss().then(res => {
      this.setData({
        song1:res.playlists.slice(0,3),
        song2:res.playlists.slice(3,48)
      })
      this.data.song2.map(item => {
        if(item.playCount > 100000 && item.playCount < 100000000){
          item.playCount = parseInt(item.playCount/10000)+'万'
        }else if(item.playCount > 100000000){
          item.playCount = parseInt(item.playCount/100000000).toFixed(1)+'亿'
        }else{
          item.playCount
        }
      })
      this.setData({
        song2:res.playlists.slice(3,48)
      })
      console.log(this.data.song1,"网友精选歌单")
    }).catch(err => {})
    // 精品歌单
    api.gettplaylistss().then(res => {
      this.setData({
        playlists:res.playlists.slice(0,24),
        playlists1:res.playlists.slice(24,48)
       })
       this.data.playlists.map(item=>{
        if(item.playCount>100000 &&item.playCount<100000000){
         item.playCount=parseInt (item.playCount/10000)+'万'
        }else if(item.playCount>100000000){
         item.playCount=(item.playCount / 100000000).toFixed(1)+'亿 '
        }else{
          item.playCount
        } 
      })
      this.data.playlists1.map(item=>{
        if(item.playCount>100000 &&item.playCount<100000000){
         item.playCount=parseInt (item.playCount/10000)+'万'
        }else if(item.playCount>100000000){
         item.playCount=(item.playCount / 100000000).toFixed(1)+'亿 '
        }else{
          item.playCount
        } 
      })
      this.setData({
        playlists:res.playlists.slice(0,24),
        playlists1:res.playlists.slice(24,48)
       })
       
      console.log(res , "精品歌单")
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