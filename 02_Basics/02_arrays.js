const Dev = ["Manav", "Keshav", "Shubham"]

const QA = ["Prashant", "Rishabh", "Neha"]
 
// Dev.push(QA)
// console.log(Dev);

// const gcp_Team = Dev.concat(QA)
// console.log(gcp_Team);

const gcp_Team = [...Dev, ...QA]
// console.log(gcp_Team);


console.log(Array.isArray("Manav"));
console.log(Array.from("Manav"));
console.log(Array.from( {name: "Manav"})); // interesting


let Dev1 = "Manav"
let Qa = "Neha"
let Pm = "Shikha"

console.log(Array.of( Dev1, Qa, Pm ));