let random=Math.random();
let a = prompt("Enter a fist Number");
let c = prompt("Enter a Operation");
let b = prompt("Enter a second Number");

let obj1={
    "+":"+",
    "-":"-",
    "*":"*",
    "/":"/",
    "**":"**"
}
let obj2={
    "+":"-",
    "-":"**",
    "*":"/",
    "/":"*",
    "**":"+"
}

if(random>0.1){
    c=obj1[c];
    console.log(`result is ${eval(`${a}${c}${b}`)}`);
    console.log(random);
}
else {
    c=obj2[c];
    console.log(`result is ${eval(`${a}${c}${b}`)}`);
    console.log(random);
}