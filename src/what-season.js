module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();
  let month = date.getMonth() + 1;
  if (month === 12 || month === 1 || month === 2) {
    return 'winter';
  }
  if (month >= 3 && month <= 5) {
    return 'spring';
  }
  if (month >= 6 && month <= 8) {
    return 'summer';
  }
  if (month >= 9 && month <= 11) {
    return 'autumn';
  }
};