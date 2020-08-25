// pages/play/play.js
const { default: api } = require("../../http/api")
let bg = wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trackIds:[], //歌曲id
    indexx:-1, //歌单传过来的id
    songs:[] ,//重新发的歌曲请求 
    startTime:"00:00",
    endTime:"00:00",
    didi:0, //随机顺序单曲播放状态
    nima:false, //播放暂停
    url: '', //音乐地址
    max:0, //滚动条长度
    value:0 ,//滚动条值,
    wordlist:[],//歌词
    haha:false,//歌词判断
    wordindex:0,//单词颜色
  },
  getsongdetail(){
    api.getsongdetail(this.data.trackIds).then(res => {
        bg.title = res.songs[this.data.indexx].name
        bg.epname = res.songs[this.data.indexx].al.name
        bg.singer = res.songs[this.data.indexx].ar[0].name
        bg.coverImgUrl = res.songs[this.data.indexx].al.picUrl
      this.setData({
        songs:res.songs
      })
      // console.log(res ,"歌曲详情8888")
    }).catch(err => {})
  },
    //获取歌曲url
    getsongg(){
      let id = this.data.trackIds[this.data.indexx]
      // console.log(id ,"歌曲id")
      // console.log(this.data.trackIds ,11)
      // console.log(this.data.indexx)
      api.getsongg(id).then(res => {
        this.setData({
          url:res.data[0].url
        })
        bg.src = res.data[0].url
        bg.onTimeUpdate(res => {
          // console.log(bg.currentTime)
          let currentTime = bg.currentTime //当前时间
          let totalTime = bg.duration // 时间总长度
          let todo = totalTime - currentTime
          let word = this.data.wordlist
          if(word.length === 0 ){return}
          for(let i=0; i<word.length;i++){
            if(word[i].time >= currentTime){
              this.setData({
                wordindex: i - 1
              })
              break
            }
          }
          this.setData({
            startTime:this.timeFormate(currentTime),
            endTime:this.timeFormate(todo),
            value:currentTime,
            max:totalTime
          })
          // console.log(currentTime,totalTime)
        })
         //获取歌词
      api.getlyric(id).then(res => {
        console.log("歌曲歌词 ：",res);
      let ppp =  res.lrc.lyric.split('\n')
      let wordlist = []
      console.log(ppp,"换行")
      ppp.map((item) => {
        console.log(item,'jkhhkjxnkjnxkjs')
        // let cj = item.match(/\[(\d{2}):(\d{2}).(\d{2})](\s*)(\w.*?$)/);
        let i=item.match(new RegExp("\\[[0-9]*:[0-9]*.[0-9]*\\]","g"));
        console.log(i)
        if(i){
          i=i[0].replace('[','').replace(']','')
          let time=Number(i.split(':')[0]*60)+Number(i.split(':')[1].split('.')[0]);
        //   console.log(time ,444)
          let word = item.replace(new RegExp("\\[(.*)\\]","g"),"");
          wordlist.push({
            time,word
          })
        }
      })
      console.log(wordlist,"11")
      this.setData({
        wordlist:wordlist
      })
      }).catch(err => {})
        bg.play()
        // console.log(res.data[0].url,"url")
      }).catch(err => {})
    },
    //上一曲
    shangyiqu(){
     let index;
     if(this.data.didi === 0){ //顺序播放
      index = this.data.indexx - 1
      if(index < 0 ){
        index = this.data.trackIds.length - 1 
      }
     }else if(this.data.didi === 1){
       index = parent(Math.random()*this.data.trackIds.length)
     }else{
      index = this.data.indexx
      bg.stop()
     }
     console.log(index)
     this.setData({
       indexx:index
     })
     this.getsongdetail()
    //  if(this.data.didi === 0 ){
    //    this.getsongdetail()
    //    let index = this.data.indexx
    //    if(index === 0){
    //      index = this.data.trackIds.length - 1
    //      this.setData({
    //        indexx : index,
    //        nima:true
    //      })
    //      this.getsongg()
    //    }else{
    //     this.setData({
    //       indexx:index - 1,
    //       nima:true
    //     })
    //     this.getsongg()
    //  }
    //  }else if(this.data.didi === 1){
    //    bg.stop()
    //   this.singleplay
    //  }else if(this.data.didi === 2){
    //    this.randomplay
    //  }
    },
    //单曲播放
    singleplay(){
      this.getsongdetail()
      this.getsongg()
    },
    //随机播放
    randomplay(){
      let a = this.data.trackIds.length
      let num = Math.ceil(Math.random()*(a -1)+0)
      this.setData({
        indexx:num
      })
      console.log(num ,'随机')
      this.getsongdetail()
      this.getsongg()
    },
    //常按时间暂停，松开跳转到当前音频。拖动过程中触发事件
    binding(e){
      // console.log(e)
      bg.pause()
      bg.seek(e.detail.value)
    },
    //跳到歌词
    gogeci(){
      this.setData({
        haha:true
      })
    },
    //点击长度播放，输入框改变时触发
    change(e){
      bg.play()
      // console.log(e)
    },
  //滚动事件时间处理函数
    timeFormate(time){
      let min = Math.floor(time / 60)
      let sec = Math.floor(time % 60)
      min = min < 10 ? '0' + min :min
      sec = sec < 10 ? '0' + sec :sec
      return min + ":" + sec 
    }, 
    //歌词判断

  ///随机顺序单曲播放状态
    didi1(){
      this.setData({
        didi:1 //顺序
      })
    },
    didi2(){
      this.setData({
        didi:2 // 随机
      })
    },
    didi3(){
      this.setData({
        didi:0 // 单曲
      })
    },
    //开始播放
    bofang(){
      this.setData({
        nima:false
      })
      let bg = BackgroundAudioManager.play()
      bg.play()
    },
    //暂停状态
    zanting(){
      this.setData({
        nima:true
      })
      let bg = BackgroundAudioManager.pause()
      bg.pause()
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id ,"iddd")
    console.log(options.index ,"下标")
    // 把字符串转成数组
    let id = options.id.split(',')
    this.setData({
      trackIds:id, 
      indexx:options.index
    })
    this.getsongdetail()
    this.getsongg();
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
