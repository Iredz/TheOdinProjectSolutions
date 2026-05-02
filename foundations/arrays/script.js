/*
   EXERCISE #1

   Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
   That is: removes all dashes, each word after dash becomes uppercased.

 * */

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
}
words = "-webkit-transition";
console.log(camelize(words));

/*
   EXERCISE #2

   Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal
   to a and lower or equal to b and return a result as an array.

  The function should not modify the array. It should return the new array.
 */

let arr = [5, 3, 8, 1];

function filterRange(array, a, b) {
  return array.filter((num) => num >= a && num <= b);
}

let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);

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

function filterRangeInPlace(array, a, b) {
  for (let i = 0; i < array.length; i++) {
    let val = array[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);

/*
  EXERCISE #4
  Sort in decreasing order

  let arr = [5, 2, 1, -10, 8];
  alert( arr ); // 8, 5, 2, 1, -10

*/

let arr = [5, 2, 1, -10, 8];
alert(arr.sort((a, b) => b - a));

/*
  EXERCISE #5
  Copy and sort array

  We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

  Create a function copySorted(arr) that returns such a copy.

  let arr = ["HTML", "JavaScript", "CSS"];

  let sorted = copySorted(arr);

  alert( sorted ); // CSS, HTML, JavaScript
  alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = function(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

/*
  EXERCISE #6
  Shuffle an array

  Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

  Multiple runs of shuffle may lead to different orders of elements. For instance:

  let arr = [1, 2, 3];

  shuffle(arr);
  // arr = [3, 2, 1]

  shuffle(arr);
  // arr = [2, 1, 3]

  shuffle(arr);
  // arr = [3, 1, 2]
  // ...

  All element orders should have an equal probability.
  For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}
let array = [1, 2, 3, 4, 5];
shuffle(array);
alert(array);

/*
  EXERCISE #7
  Filter unique array members

  Let arr be an array.

  Create a function unique(arr) that should return an array with unique items of arr.

  For instance:

  function unique(arr) {
  }

  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  alert( unique(strings) ); // Hare, Krishna, :-O
*/

function unique(arr) {
  let filteredArray = [];
  for (str of arr) {
    if (!filteredArray.includes(str)) {
      filteredArray.push(str);
    }
  }
  return filteredArray;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));


/*
  EXERCISE # 8

   You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

    For instance:

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [ john, pete, mary ];

    let names =  ... your code

    // alert( names ); // John, Pete, Mary

*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];

let names = users.map(item => item.name)

alert(names)


/*
  EXERCISE #9
  You have an array of user objects, each one has name, surname and id.

  Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

  For instance:

  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };

  let users = [ john, pete, mary ];

  let usersMapped =  ... your code ...

  usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]

  alert( usersMapped[0].id ) // 1
  alert( usersMapped[0].fullName ) // John Smith

*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];

let usersMapped = users.map(user => ({
  id: user.id,
  fullName: `${user.name} ${user.surname}`
}));

console.log(usersMapped)


/*
    EXERCISE #10
    Sort users by age

    Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

    For instance:

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [ pete, john, mary ];

    sortByAge(arr);

    // now: [john, mary, pete]
    alert(arr[0].name); // John
    alert(arr[1].name); // Mary
    alert(arr[2].name); // Pete
  */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

function sortByAge(usrs) {
  usrs.sort((a, b) => a.age - b.age)
}

sortByAge(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])


/* 
  EXERCISE #11
  Get average age

  Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

  The formula for the average is (age1 + age2 + ... + ageN) / N.

  For instance:

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [ john, pete, mary ];

  alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(input) {
  let sumOfAges = 0
  input.forEach(e => {
    sumOfAges += e.age
  });
  let avgAge = sumOfAges / input.length
  return avgAge
}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length
}

console.log(getAverageAge(arr))

/*
  EXERCISE #12
  Create keyed object from array
  Let’s say we received an array of users in the form {id:..., name:..., age:... }.
  Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

  For example:

  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  let usersById = groupById(users);

  // after the call we should have:

  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }

  Such function is really handy when working with server data.

  In this task we assume that id is unique. There may be no two array items with the same id.

  Please use array .reduce method in the solution.
*/

let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value
    return obj;
  }, {})
}

let usersById = groupById(users)

console.log(usersById)
