function isOdd(num) {
  return Boolean(num & 1);
}

function isEven(num) {
  return !isOdd(num);
}

module.exports = {
  isOdd,
  isEven,
};
