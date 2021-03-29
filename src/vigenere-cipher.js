const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    this.value(message, key);
    return this.getResult(message, key);
    throw new CustomError('Not implemented');
  }
  decrypt(encryptedMessage, key) {
    this.value(encryptedMessage, key);
    return this.getResult(encryptedMessage, key, true);
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }

  constructor(valueBoolean) {
    this.valueBoolean = valueBoolean === false;
    this.az = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  value(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw new Error()
    };
  }
}

module.exports = VigenereCipheringMachine;