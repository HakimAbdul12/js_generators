cardDeck = {
    suits: ["hearts", "spades", "diamonds", "clubs"],
    court:["J", "Q", "K", "A"],
    //when an object has a property keyed with Symbol.iterator, it becomes an iterable object
    [Symbol.iterator]: function*(){
        for(let suit of this.suits){
            for(let i = 2; i <= 10; i++) yield suit + i;
            for(let face of this.court) yield suit + face;
        }
    }
}

cardDeck1 = {
    suits: ["hearts", "spades", "diamonds", "clubs"],
    court:["J", "Q", "K", "A"],
    //when an object has a property keyed with Symbol.iterator, it becomes an iterable object
    *[Symbol.iterator](){
        for(let suit of this.suits){
            for(let i = 2; i <= 10; i++) yield suit + i;
            for(let face of this.court) yield suit + face;
        }
    }
}


console.log({...cardDeck1}); // {} distructures the object and spread the properties into an object
console.log({cardDeck1}) // {} calls and distructures the object as a whole

/*
The way javascript es6 works is that when an object is spread or looped over, it first check for symbol.iterator, if it exists, it calls
*/ 
console.log([...cardDeck1]); //spread operator calls and spread the iterable in the object into an array[], in this case, the generator
for(cards of cardDeck1) console.log(cards)

