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

const myIterable = { from: 1, to: 4 }; // will display 1 2 3 4
// const myIterable = { from: 5, to: 4 }; // throw an error
// const myIterable = { to: 5}; 
// const myIterable = { to: '5', from: 'asdf' };

if(!myIterable.to){
    throw Error('Object does not have \'to\' property');
}

if(!myIterable.from){
    throw Error('Object does not have \'from\' property');
}

if(typeof myIterable.from !== 'number' || typeof myIterable.to !== 'number'){
    throw Error('to or from are not numbers');
}

if(myIterable.from > myIterable.to){
    throw Error('Object\'s property \'from\' is more than \'to\' property');
}

// if( !myIterable.to||
//     !myIterable.from||
//     myIterable.from > myIterable.to || 
//     typeof myIterable.from !== 'number' || 
//     typeof myIterable.to !== 'number'){
//     throw Error('to or from is not specified OR to < from OR to or from are not numbers')
// }

for(let i = myIterable.from;i<=myIterable.to;i++){
    console.log(i);
}

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

function Person(name,age){
    this.name = name;
    this.age = age;
}

function getPerson(name, age){
    return [
        {name,age},
        Object.create({},{name:{enumerable:true,configurable:false,value:name},age:{enumerable:true,configurable:false,value:age}}),
        Object.assign({},{name},{age}),
        new Person(name,age),
    ]
}

console.log(getPerson('Joe', 50));