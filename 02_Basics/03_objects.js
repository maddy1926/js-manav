const mySym = Symbol("Key1")

const Jsuser = {
        name: "Manav Dixit",
        "fullname": "Dixit Manav",
         [mySym]: "myKey1",
        age: 28,
        email: "Manavdixit@google.com",
        location: "Etah",
        isloggedin: false,
        lastLoggedinDays: "Monday, Saturday",

    
}

// Jsuser.email = "Manav@gmail.com"
// // Object.freeze(Jsuser)
// Jsuser.email = "Rubal@google.com"
// console.log(Jsuser);
// console.log(typeof Jsuser[mySym]);

Jsuser.greeting = function (){
    console.log("Hello Js user")
}
Jsuser.greetingTwo = function (){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());