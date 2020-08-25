// conponents/index/disc/disc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    gedie:{
      type:Array
    },
    xinge:{
      type:Array
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    didi:0
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
goto1(e){
    console.log(1)
    this.setData({
      didi : 0
    })
  },
  goto2(e){
    console.log(2)
    this.setData({
      didi : 1
    })
  },
  godetail1(e){
      console.log(e)
     
  },
  godetail2(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `../../pages/detail/detail?id=${id}`,
    })
  }
  }
})
