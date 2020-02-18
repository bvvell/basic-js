const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  if (/[A-Za-z]/.test(sampleActivity) || parseFloat(sampleActivity) > MODERN_ACTIVITY || parseFloat(sampleActivity) <= 0) return false;
  let calc = Math.ceil(Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD))
  return calc;
};