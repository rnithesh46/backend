//this is used if the type is EcmaScript "module"
// import {a , b} from "./mymodule.js" //named import
// console.log(a , b)

// import harry from "./mymodule.js"  //default import
// console.log(harry)

//for comman js,which is the default type
const a = require("./mymodule.js")
console.log(a)