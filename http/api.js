
  const fly = require ('./index')
  export default{
    // 1. 获取轮播图数据  
    getbanner(){
      return fly.get(`/banner?type=2`)
    },
    //推荐歌单
    getrecommend(){
       return fly.get(`/personalized?limit=6`)
    },
    //新碟上架 新碟
    getalbum(){
      return fly.get(`/album/newest?offset=0&limit=6`)
    },
    // 推荐新音乐 新歌
    getpersonalized(){
      return fly.get(`/personalized/newsong`)
    },
    //最新专辑 音乐新势力
    gettop(){
      return fly.get(`/top/song?type=7`)
    },
    //推荐电台
    getpersonalized(){
      return fly.get(`/personalized/djprogram`)
    },
    //推荐节目
    getprogram(){
      return fly.get(`/program/recommend`)
    },
    // 歌手分类
    getwahaha(type,area,b,offset,limit){
      return fly.get(`/artist/list?type=${type}&area=${area}&initial=${b}&offset=${offset}&limit=${limit}`)
    },
    //注册
    getregister({password,phone,nickname,captcha}){
      return fly.get(`/register/cellphone?phone=${phone}&password=${password}&captcha=${captcha}&nickname=${nickname}`)
    },
    //登录
    getlogin({phone,password}){
      return fly.get(`/login/cellphone?phone=${phone}&password=${password}`)
    },
    // 退出登录
    logout(){
      return fly.get(`/logout`)
    },
    //发送验证码
    getcaptcha(phone){
      return fly.get(`/captcha/sent?phone=${phone}`)
    },
    //验证验证码
    getverify({phone,captcha}){
      return fly.get(`/captcha/verify?phone=${phone}&captcha=${captcha}`)
    },
    //检测手机号码是否已注册
    getcellphone(phone){
      return fly.get(`/cellphone/existence/check?phone=${phone}`)
    },
    //每日推荐歌曲
    getrecommen(){
      return fly.get(`/recommend/songs`)
    },
    //获取歌单详情
    getplaylist(id){
      return fly.get(`playlist/detail?id=${id}`)
    },
    // 获取歌曲详情
    getsongdetail(ids){
      return fly.get(`/song/detail?ids=${ids}`)
    },
    //获取歌单专辑
    album(id){
      return fly.get(`/album?id=${id}`)
    },
    //网友精选
    getplaylistsss(){
      return fly.get(`/top/playlist`)
    },
     //14.获取精品歌单
    gettplaylistss() {
    return fly.get(`/top/playlist/highquality`)
    },
    //排行榜
    gettoplist(){
      return fly.get(`/toplist/detail`)
    },
    //获取歌词
    getlyric(id){
      return fly.get(`/lyric?id=${id}`)
    },
    //获取歌曲url
    getsongg(id){
      return fly.get(`/song/url?id=${id}`)
    }
  }