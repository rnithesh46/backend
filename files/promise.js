import fs from "fs/promises"
// const fs = require("fs/promises")

let a = await fs.readFile("harry.txt")

let b = await fs.appendFile("harry.txt" , "\n\n\nthis tis amazing")
console.log(a.toString(),b)