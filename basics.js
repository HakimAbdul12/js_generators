function* getFunction(){
    yield "Hello World";
    yield "Hello Planet";
    yield "Hello Universe";
    return "Hello Multiverse";
}

const generator = getFunction();

console.log(generator.next());  //retunrs {value: "Hello World", done: false}
console.log(generator.next());  //retunrs {value: "Hello Planet", done: false}
console.log(generator.next());  //retunrs {value: "Hello Universe", done: false}
console.log(generator.next());  //retunrs {value: "Hello Multiverse", done: true}
console.log(generator.next());  //retunrs {value: undefined, done: true}