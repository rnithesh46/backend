const fs = require("fs")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("harry.txt" , "harry os a good by")
//its not a good practice because js in asunchronic in nature
//its better to use this

fs.writeFile("harry.txt", "harry is a good boy", ()=>{
    console.log("done")
    fs.readFile("harry.txt", (error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("harry.txt" , "roborobo" ,(e,d)=>{
    console.log(d)
})
console.log("ending")