module.exports = function repeater(str, options) {
    // function repeater(str, options) {
    let calcStr = function (st, cu, sep, ad) {
        let substr = '';
        let add = ad ? ad : '';
        for (a = 0; a <= cu - 1; a++) {
            if (a === 0) {
                substr += st + add;
            } else {
                substr += (sep + st + add);
            }
        }
        return substr;
    }
    let string = (str !== undefined || str === null) ? String(str) : '',
        repeatTimes = options.repeatTimes ? options.repeatTimes : 1,
        separator = options.separator ? options.separator : '+',
        addition = (options.addition !== undefined || options.addition === null) ? String(options.addition) : '',
        additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1,
        additionSeparator = options.additionSeparator ? options.additionSeparator.toString() : '|';
    let substr = calcStr(addition, additionRepeatTimes, additionSeparator);
    let resultString = calcStr(string, repeatTimes, separator, substr);
    return resultString;
};