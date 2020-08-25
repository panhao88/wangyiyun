// const { default: api } = require("../../http/api")
import api from '../../http/api'
// pages/singer/singer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      {
        name: '入驻歌手',
        type: "-1",
        area:'-1'
      },
      {
       name: '华语男歌手',
       type:'1',
       area:'7'
      },
      {
        name: '华语女歌手',
        type:'2',
        area:'7'
      },
      {
        name: '华语组合/乐队',
       type:'3',
       area:'7'
      },
      {
        name: '欧美男歌手',
       type:'1',
       area:'96'
      },
      {
        name: '欧美女歌手',
        type:'2',
        area:'96'
      },
      {
        name: '欧美组合',
        type:'3',
        area:'96'
      },
      {
        name: '日本男歌手',
       type:'1',
       area:'8'
      },
      {
        name: '日本女歌手',
        type:'2',
        area:'8'
      },
      {
        name: '日本组合/乐队',
        type:'3',
        area:'8'
      },
      {
        name: '韩国男歌手',
        type:'1',
        area:'16'
      },
      {
        name: '韩国女歌手',
        type:'2',
       area:'16'
      },
      {
        name: '韩国组合/乐队',
        type:'3',
        area:'16'
      },
      {
        name: '其他男歌手',
        type:'1',
        area:'0'
      },
      {
        name: '其他女歌手',
        type:'2',
        area:'0'
      },
      {
        name: '其他组合',
        type:'3',
        area:'0'
      },
    ],
    initials: [
      {
        name: '热门',
        id: ''
      },
      {
        name: 'A',
        id: 'a'
      },
      {
        name: 'B',
        id: 'b'
      },
      {
        name: 'C',
        id: 'c'
      },
      {
        name: 'D',
        id: 'd'
      },
      {
        name: 'E',
        id: 'e'
      },
      {
        name: 'F',
        id: 'f'
      },
      {
        name: 'G',
        id: 'g'
      },
      {
        name: 'H',
        id: 'h'
      },
      {
        name: 'I',
        id: 'i'
      },
      {
        name: 'J',
        id: 'j'
      },
      {
        name: 'K',
        id: 'k'
      },
      {
        name: 'L',
        id: 'l'
      },
      {
        name: 'M',
        id: 'm'
      },
      {
        name: 'N',
        id: 'n'
      },
      {
        name: 'O',
        id: 'o'
      },
      {
        name: 'P',
        id: 'p'
      },
      {
        name: 'Q',
        id: 'q'
      },
      {
        name: 'R',
        id: 'r'
      },
      {
        name: 'S',
        id: 's'
      },
      {
        name: 'T',
        id: 't'
      },
      {
        name: 'U',
        id: 'u'
      },
      {
        name: 'V',
        id: 'v'
      },
      {
        name: 'W',
        id: 'w'
      },
      {
        name: 'X',
        id: 'x'
      },
      {
        name: 'Y',
        id: 'y'
      },
      {
        name: 'Z',
        id: 'z'
      },
      {
        name: '#',
        id: '0'
      },
    ],
    aktav: 0 ,
    aklove : 0,
    limit:10,
    offset:0,
    nima:[]
  },
  didi1(e){
    this.setData({
      aktav:e.currentTarget.dataset.index
    })
    this.getwahaha();
    // console.log(e)
  },
  didi2(e){
    this.setData({
      aklove:e.currentTarget.dataset.index
    })
    this.getwahaha();
    // console.log(e)
  },
  getwahaha(){
    let type = this.data.typeList[this.data.aktav].type
    let area = this.data.typeList[this.data.aktav].area
    let b = this.data.initials[this.data.aklove].id
    let offset = this.data.offset
    let limit = this.data.limit
    api.getwahaha(type,area,b,offset,limit).then(res => {
      this.setData({
        nima:res.artists
      })
      console.log(res , "歌手分类")
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    this.getwahaha();
    
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
    let that = this;
    wx.showLoading({
      title: '玩命加载中...',
    })
    let aaa = this.data.offset
    let bbb = this.data.limit
    aaa = aaa + bbb
    this.setData({
      offset:aaa
    })
    let type = this.data.typeList[this.data.aktav].type
    let area = this.data.typeList[this.data.aktav].area
    let b = this.data.initials[this.data.aklove].id
    let offset = this.data.offset
    let limit = this.data.limit
    api.getwahaha(type,area,b,offset,limit).then(res => {
      let artists111 = this.data.nima
      let artists222 = res.artists
      let artists333=artists111.concat(artists222)
      this.setData({
        nima: artists333
      })
      console.log(this.data.nima, '歌手清单111')
    }).catch(err => {
      console.log(err)
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 1000);
   
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})