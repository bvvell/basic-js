module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    if (!arr.length) return [];
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            if (i < arr.length - 1) i++;
        } else if (arr[i] === '--discard-prev') {
            if (resultArray.length > 0) resultArray.pop();
        } else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) resultArray.push(arr[i + 1]);
        } else if (arr[i] === '--double-prev') {
            if (i > 0) resultArray.push(arr[i - 1]);
        } else {
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
};