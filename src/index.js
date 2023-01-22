module.exports = function check(str, bracketsConfig) {
  let str1;
  let bc = bracketsConfig.flat().join('').match(/.{2}/g);
  for (let i = 0; i < bc.length; i++) {
    str1 = str;
    str = str.replaceAll(bc[i], '');
    if (str1 !== str) i=-1;
    if (str.length === 0) return true;
  }
  return false;
}