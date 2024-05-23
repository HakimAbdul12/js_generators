// javascript generators behave like iterable objects meaning they can be looped over with for..of
//example

function* abc(){
    yield "a";
    yield "b";
    yield "c";
}

//we loop the function as if it is an iterable object or an array
for(let letter of abc()){
    console.log(letter.toUpperCase());
}

console.log([...abc()]);