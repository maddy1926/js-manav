 const name = "Manav"
 const age = "28"

 //console.log(name + age + " Value");   old way to write 

 //New way to write **** 

 //console.log(`Hello my name is ${name} and my age is ${age}`); // New wau to wrie -  String Interpolation

 const gameName = new String('Rubal')

 //console.log(gameName.__proto__);
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherstring = gameName.slice( -4, 3);

console.log(anotherstring);


const newStringone = "    Manav   "

console.log(newStringone);
console.log(newStringone.trim()); 


const url = "www.manavdixit.tyu"

console.log(url.replace('tyu', 'com'));


console.log(url.includes('navya'));


const str = "Manav is my name"

console.log(str.split( ));

console.log(str.small('1'));




