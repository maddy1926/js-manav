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

console.log(loginUserMessage("Rubal"));