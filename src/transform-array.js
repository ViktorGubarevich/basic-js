const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let newArr = [];

  for (var i = 0; i < arr.length; ++i) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          newArr.pop();
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;

  throw new CustomError('Not implemented');
};