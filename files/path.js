import path from "path"

let mypath = "C:\\Users\\Nithesh R\\OneDrive\\Desktop\\webdev\\backend\\files\\harry.txt"

// console.log(path)\

console.log(path.extname(mypath)) //return extension

console.log(path.dirname(mypath)) //return directory name

console.log(path.basename(mypath)) // return filename

console.log(path.join("c:/","programs\\harry.txt")) //joins 2 path even if both have different backslashes