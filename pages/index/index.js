import store from '../../store/index'
import create from '../../utils/create'
import api from '../../http/api'
create.Page(store,{
  use:['name'],
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
      lunbotu:[],
    //推荐歌单
      gedan:[],
      //歌碟
      gedie:[],
      //新歌
      xinge:[],
      //新音乐
      xinyinyue:[],
      //推荐电台
      diantai:[],
      //推荐节目
      jiemu:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //轮播图请求
      api.getbanner().then(res => {
        this.setData({
          lunbotu:res.banners
        })
        console.log(res ,"轮播图")
      }).catch(err => {})
      // 宝藏歌单请求
      api.getrecommend().then(res => {
        this.setData({
          gedan:res.result
        })
        console.log(res , "歌单")
      }).catch(err => {}),
      //新碟
      api.getalbum().then(res => {
        this.setData({
          gedie:res.albums.slice(0,6)
        })
        console.log(res ,"新碟")
      }).catch(err => {}),
      //新歌
      api.getpersonalized().then(res => {
        this.setData({
          xinge:res.result.slice(0,6)
        })
        console.log(this.data.xinge,"新歌")
      }).catch(err => {}),
      //音乐新势力
      api.gettop().then(res => {
        this.setData({
          xinyinyue:res.data.slice(0,6)
        })
        console.log(this.data.xinyinyue,"音乐新势力")
      }).catch(err => {}),
      //推荐电台
      api.getpersonalized().then(res => {
        this.setData({
          diantai:res.result
        })
        console.log(res,"推荐电台")
      }).catch(err => {}),
      //推荐节目
      api.getprogram().then(res => {
        this.setData({
          jiemu:res.programs.slice(0,6)
        })
        console.log(this.data.jiemu,"推荐节目")
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