module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1) {
        if (!Array.isArray(arr)) return 1;
        arr.forEach(item=>{
            if (Array.isArray(item)) {
                count = Math.max(this.calculateDepth(item) + 1, count);
            }
        })
        return count;
    }
};