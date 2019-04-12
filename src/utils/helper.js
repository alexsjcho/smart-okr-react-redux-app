/**
 * Returns new array with entity removed at index
 * @param  {Array} array         array of any type
 * @param  {Number} indexToRemove index value to remove value
 * @return {Array} reference to new array without object at index
 */
export const removeFromArrayAtIndex = (array, indexToRemove) => {
  return [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)];
};

/**
 * Calculates the objective progress in decimal form
 * @param  {Object} objective current OKR
 * @return {Number} percentage for object progress
 */
export const getObjectivePercentage = objective => {
  let totalValue = 0;
  objective.names.forEach(name => {
    totalValue = totalValue + name.value;
  });

  return totalValue / 100;
};

/**
 * Calculates the objective progress in decimal form
 * @param  {Object} keyResult current keyResult
 * @return {Number} percentage for keyResult progress
 */
export const getKeyResultPercentage = objective => {
  let totalValue = 0;
  objective.names.forEach(name => {
    totalValue = totalValue + name.value;
  });

  return totalValue / 100;
};
