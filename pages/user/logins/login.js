// pages/user/logins/login.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    password: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    

  },

  //登陆
  login: function(event) {
    
    var password = this.data.password
    var userName = this.data.userName
    //开始登陆

    if (userName == null || userName == "") {
      console.log("账号为空")
      return
    }

    if (password == null || password == "") {
      console.log("密码为空")
      return
    }

    wx.switchTab({
      url: '../../index/index',
    })
  },

  //获取账号
  user_name: function(event) {
    
    // 获取item上的标记
//  event.currentTarge.dataSet.id;

    this.setData({
      userName: event.detail.value
    })
  },

  //获取密码  
  password: function(event) {
    this.setData({
      password: event.detail.value
    })
  },

  //清空密码
  deletePassword: function(event) {
    this.setData({
      password: ""
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})