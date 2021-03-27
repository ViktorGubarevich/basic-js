const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result = 0;
  backyard.forEach((e) => {
    e.forEach((cat) => {
      if (cat === '^^') {
        result += 1
      };
    });
  });
  return result;

  throw new CustomError('Not implemented');
};