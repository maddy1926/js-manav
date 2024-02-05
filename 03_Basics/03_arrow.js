const user = {
    username: "Manav",
    lastname: "Dixit",

    welcomemessage: function(){
        console.log(`${this.username}, Dixit`)
        console.log(this);
  
  }

}

// user.welcomemessage()
// user.username = "Rubal"
// user.welcomemessage()

// console.log(this);


// const addtwo = (num1, num2) => {

//     return num1 + num2
// }

// const addtwo = (num1, num2) =>  (num1 + num2)


// object return 

const addtwo = (num1, num2) => ({usernam: "Manav"})
console.log(addtwo(5,5));