// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    arrList: [
      {
        "job": "web前端工程师",
        "ename": "小鸟云",
        "src":"../../images/list/1.png",
        "tag": [
          {
            "tagName": "深圳"
          },
          {
            "tagName": "深圳湾"
          },
          {
            "tagName": "3-5年"
          },
          {
            "tagName": "大专"
          }
        ],
        "xz": "10K-15K",
        "time": "09:13"
      },
      {
        "job": "web前端工程师",
        "ename": "腾讯科技有限公司",
        "src": "../../images/list/4.png",
        "tag": [
          {
            "tagName": "武汉"
          },
          {
            "tagName": "深圳湾"
          },
          {
            "tagName": "3-5年"
          },
          {
            "tagName": "大专"
          }
        ],
        "xz": "10K-15K",
        "time": "09:13"
      },
      {
        "job": "web前端工程师1",
        "ename": "小鸟云1",
        "src": "../../images/list/2.jpg",
        "tag": [
          {
            "tagName": "深圳"
          },
          {
            "tagName": "深圳湾"
          },
          {
            "tagName": "3-5年"
          },
          {
            "tagName": "大专"
          }
        ],
        "xz": "10K-15K",
        "time": "09:13"
      },
      {
        "job": "web前端工程师2",
        "ename": "小鸟云2",
        "src": "../../images/list/3.png",
        "tag": [
          {
            "tagName": "深圳"
          },
          {
            "tagName": "深圳湾"
          },
          {
            "tagName": "3-5年"
          },
          {
            "tagName": "大专"
          }
        ],
        "xz": "10K-15K",
        "time": "09:13"
      },
      {
        "job": "web前端工程师3",
        "ename": "小鸟云3",
        "src": "../../images/list/4.png",
        "tag": [
          {
            "tagName": "深圳"
          },
          {
            "tagName": "深圳湾"
          },
          {
            "tagName": "3-5年"
          },
          {
            "tagName": "大专"
          }
        ],
        "xz": "10K-15K",
        "time": "09:13"
      }
    ]
  },
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindTimeChangeEnd(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endtime: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  searchpag:function(){
     wx.navigateTo({
       url: '../search/search'
     })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation();
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

  },
  tonav:function(){
    wx.navigateTo({
      url: '../detail/detail?id=1'
    })
  }
})