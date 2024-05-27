const obj = {
    name: "Hakim",
    favs: ["playing", "movies", "conjure", "storm"],
    *[Symbol.iterator](){
        for(let i of this.favs){
            yield i
        }
    }
}

// console.log([...obj])
// console.log([...obj.favs])
// console.log([...obj.name])

let string = "Hakim"
let number = 24534

console.log([...string])

// async function doSomething() {
//     data = {
//         identifier:"hakim",
//         password:"Hakim,12"
//     }
//   try {
//     const resp = await fetch("http://localhost:1337/api/auth/local", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//       cache: "no-cache",
//     });
//     if (!resp.ok) {
//       console.log(resp);

//     }
//     return resp
//   } catch (err) {
//     console.log(err);
//   }
// }

// (async () =>{
//     const resp = await doSomething()
//     console.log(resp)
// })();