const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const natLogarithm = 0.693;
const sampleNum = Number(sampleActivity);

module.exports = function dateSample(sampleActivity) {

  if (Math.ceil(Math.exp(MODERN_ACTIVITY / sampleNum) / (natLogarithm / sampleNum))) {
    return true
  } else if ((typeof (sampleNum) !== Number || sampleActivity === "")) {
    return false
  };

  throw new CustomError('Not implemented');
};