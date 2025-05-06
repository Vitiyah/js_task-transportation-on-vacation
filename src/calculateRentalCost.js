/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const singleDayCost = 40;

  if (days >= 3 && days < 7) {
    return singleDayCost * days - 20;
  }

  if (days >= 7) {
    return singleDayCost * days - 50;
  }

  return singleDayCost * days;
}

module.exports = calculateRentalCost;
