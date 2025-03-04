// H/A
// Create a regular object and make it iterable. In this case, the iteration should proceed as follows:
// All values from the object's from property to the to property must be traversed one by one. (if to < from - an error should occur).
// If to or from is not specified OR to or from are not numbers, an error should occur.


// > Examples:
// const myIterable = { from: 1, to: 4 };
// for (let item of myIterable) {
//  console.log(item); // 1, 2, 3, 4
// }

// const myIterable = { from: 'aaa', to: 4 };
// for (let item of myIterable) { // Error!
//  console.log(item);
// }




// H/A
// You need to implement a function that will take a person's name and age as arguments and then return an array of objects. Each object must be created in a unique way.
// Additionally - it is not necessary to write these properties as your own for the object, you can play with prototypes

// /// Example
// function getPersons(name, age) {
//   return [
//     {
//       name,
//       age,
//     },
//     Object.assign({}, { name, age }),
//   ];
// }