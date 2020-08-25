// pages/listdetail/listdetail.js
const { default: api } = require("../../http/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    playlist:{},
    creator:'',
    trackIds:[],
    songs:[]
  },
  gobofang(e){
    // console.log(e)
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: `../play/play?index=${index}&id=${this.data.trackIds}`,
    })
  },
  getsongdetail(){
    // console.log(this.data.trackIds,"zczvcxvxvcxcbcgxcgbx")
    api.getsongdetail(this.data.trackIds).then(res => {
      this.setData({
        songs:res.songs
      })
      // console.log(res ,"歌曲详情00000")
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let id = options.id
    api.getplaylist(id).then(res => {
      let a = res.playlist.trackIds
      let b = []
     a.map(item => {
       b.push(item.id)
        this.setData({
          trackIds:b
        })
      })
      this.getsongdetail()
      // console.log( res.playlist.trackIds,"trackIds")
      // console.log(this.data.trackIds,"ids")
      this.setData({
        playlist:res.playlist,
        creator:res.playlist.creator,
      })
      // console.log(res , "歌单详情")
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