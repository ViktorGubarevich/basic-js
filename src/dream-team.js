const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameDreamTeam = '';

  if (!Array.isArray(members)) {
    return false
  } else {
    members.forEach(elem => {
      if (typeof (elem) === 'string') {
        nameDreamTeam += elem.trim().slice(0, 1).toUpperCase()
      }
    })
  }
  return nameDreamTeam.split('').sort().join('')

  throw new CustomError('Not implemented');
};