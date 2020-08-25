// conponents/index/song/song.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    gedan:{
      type:Array
    },
   
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    godetail(e){
      console.log(e)
      let id = e.currentTarget.dataset.item.id
        wx.navigateTo({
          url: `../../pages/listdetail/listdetail?id=${id}`,
        })
    },
    tototo(){
      wx.navigateTo({
        url: '../../pages/square/square',
      })
    }
  }
})
