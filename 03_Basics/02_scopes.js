let a = 10
const b = 20
var c = 30

if (true) {
    let a = 100
    const b = 200
    var c = 300
}

// console.log(c);
function one() {
    const username = "Manav"
    
    function two(){
            const website = "Dixit"
            console.log(username); 
    }
        // console.log(website);

        // two()
}
// one()

if (true) {
    const username = "Manav"
    if (username === "Manav"){
        const website = " Dixit"
        console.log(username + website);
    }
            // console.log(website);
}

// console.log(username);


// *********************************INTERESTING***************************
console.log(addone(4))
function addone(num){
    return num + 1
}


const addtwo = function(num){
    return num + 2
}
console.log(addtwo(4))