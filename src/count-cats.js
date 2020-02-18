module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => {
    if (Array.isArray(element[0])) {
      countCats(element);
    } else {
      let a = element.filter(item => item == "^^").length;
      count += a;
    }
  });
  return count;
};