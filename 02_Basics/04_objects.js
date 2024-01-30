const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.age = 28

// console.log(tinderuser);


const regularuser = {

    fullname: {
        userfullname:{
            firstname: "Manav",
            lastname: "Dixit", 
        }
    }
}

// console.log(typeof regularuser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const Goc = {
    
    Name: "Manav Dixit",
    Price: "123",
    Desig: "Dev"
}

 const {Desig: designation} = Goc
console.log(designation);
