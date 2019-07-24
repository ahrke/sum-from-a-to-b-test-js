
function sum(fromN, toN) {
  // base-case: when our fromN === toN
  // recursive-case: when fromN < toN
  //

  if (fromN === toN) return toN;

  return fromN + sum((fromN + 1), toN)
}

module.exports = sum;
