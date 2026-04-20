/*
   EXERCISE #1

   Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
   That is: removes all dashes, each word after dash becomes uppercased.

 * */

// words = "-webkit-transition"
// function camelize(str) {
//   return str.split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('')
// }
// console.log(camelize(words))

/*
   EXERCISE #2

   Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal
   to a and lower or equal to b and return a result as an array.

  The function should not modify the array. It should return the new array.
 */

// let arr = [5, 3, 8, 1];

// function filterRange(array, a, b) {
//   return array.filter((num) => (num >= a && num <= b))
// }

// let filtered = filterRange(arr, 1, 4)
// alert(filtered);
// alert(arr);

/* 
  EXERCISE #3

  Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values
  except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

  The function should only modify the array. It should not return anything.

  For instance:

  let arr = [5, 3, 8, 1];

  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

  alert( arr ); // [3, 1]
*/

// function filterRangeInPlace(array, a, b) {
//   for (let i = 0; i < array.length; i++) {
//     let val = array[i];

//     if (val < a || val > b) {
//       arr.splice(i, 1)
//       i--;
//     }
//   }
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// alert(arr);


/*
  Exercise #4
  Sort in decreasing order

  let arr = [5, 2, 1, -10, 8];
  alert( arr ); // 8, 5, 2, 1, -10

*/

// let arr = [5, 2, 1, -10, 8];
// alert(arr.sort((a,b) => b - a));