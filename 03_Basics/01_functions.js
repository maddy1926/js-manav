function subtwoNumbers(number1, number2 ){

let value = number1 - number2
return value
}


const value = subtwoNumbers(7,3)
// console.log("value:", value);

function loginUserMessage(Username = "Manav"){

    if(!Username){
       console.log("Please enter a username");
       return
    }
    return `${Username} just logged in`
}

// console.log(loginUserMessage("Rubal"));


function CalculatecartPrice(...num1){
           return num1
}


// console.log(CalculatecartPrice(4000, 5000, 6000))

//How to call an Object in Functions. 

const User = {
    username: "Manav Dixit",
    Age: 29
}

function Details(anyDetails){
            console.log(`Username is ${anyDetails.username} and age is ${anyDetails.Age}`);
}

Details(User)

//How to call an array in function


const myArray = [10, 20, 30, 40, 50]

function secondArray(getArray){
   return getArray[4]
}

console.log(secondArray(myArray));