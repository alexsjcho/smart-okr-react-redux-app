/**
 * Returns new array with entity removed at index
 * @param  {Array} array         array of any type
 * @param  {Number} indexToRemove index value to remove value
 * @return {Array} reference to new array without object at index
 */
export const removeFromArrayAtIndex = (array, indexToRemove) => {
  return [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)];
};
