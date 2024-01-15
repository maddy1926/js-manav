const myArray = ["Manav", "Navya", "Rubal", "Jhalak", "Palak"]

// console.log(myArray[1]);

// Array Methods

// myArray.push(7)
// myArray.push("Palak")

// myArray.pop()
// myArray.unshift("Palak, Manav")
// myArray.shift()

// console.log(myArray.includes(10));
// console.log(myArray.indexOf(9));



// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);


//Slice, Splice

console.log("A ",  myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)

console.log(myn2);
console.log("C ", myArray);

// Slice - provide the range except the last range given, from an array
// Splice - provide the range till the last range, from an array and change the originl array by removing the given range


