// console.log("hello world")

var slugify = require("slugify")  //import slugify module

let a = slugify("some string")    //slugify replace spaces with -
console.log(a)

let b = slugify("some string" , "_")  // you can also specify what it need to be spaced with
console.log(b)