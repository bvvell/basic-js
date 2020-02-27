  module.exports = function transform(arr) {
      if (!Array.isArray(arr)) throw new Error();
      if (!arr.length) return [];
      let resultArray = [];
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] != '--discard-prev' && arr[i] != '--double-prev' && arr[i] != '--double-next' && arr[i] != '--discard-next') {
              resultArray.push(arr[i]);
          } else {
              if (arr[i] == '--discard-next' && i < arr.length - 1) {
                  i += 1;
              } else if (arr[i] == '--discard-prev' && i > 0) {
                  resultArray.pop();
              } else if (arr[i] == '--double-next' && i < arr.length - 1) {
                  resultArray.push(arr[i + 1]);
              } else if (arr[i] == '--double-prev' && i > 0) {
                  resultArray.push(arr[i - 1]);
              }
          }
      }
      return resultArray;
  }