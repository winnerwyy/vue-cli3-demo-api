
export default {
  formatDate: function (time) { //YYYY-MM-DD 日期格式转化
    return time.getFullYear() + '-' + ((time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1)) + '-' + (time.getDate() < 10 ? '0' + time.getDate() : time.getDate())
  },
  formatTime: function (date) {
    let Y = date.getFullYear()
    let M = date.getMonth() + 1 - 0 >= 10 ? Number(date.getMonth()) + 1 : '0' + (Number(date.getMonth()) + 1)
    let D = date.getDate()
    let h = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
    let m = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
    let s = date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds()
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
  },
  dateTime: function (time) {  //时间戳转日期格式
    let date = new Date(time); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y + M + D + h + m + s; // 根据需求改变return的值

  }
}