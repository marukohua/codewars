/**
 * Your task, is to create NxN multiplication table, of size provided in parameter.
 * for example, when given size is 3:
 *
 * 1 2 3
 * 2 4 6
 * 3 6 9
 *
 * for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 */

multiplicationTable = function (size) {
  // insert code here
  let array = new Array(size);
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      array[i] = new Array(size);
      for (let j = 0; j < size; j++) {
        array[i][j] = (i + 1) * (j + 1);
      }
    }
  }
  return array;
};
