const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const month_and_day = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  return '' + month + '.' + day
}

const tomorrow = date =>{
  const month = date.getMonth() + 1
  const day = date.getDate() + 1
  return '' + month + '.' + day
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  month_and_day: month_and_day,
  tomorrow: tomorrow
}
