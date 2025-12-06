//CRUD operations
use("crud")

//to know the database name
// console.log(db)

//create a collection
db.createCollection("courses")

//insert

//insert one
// db.courses.insertOne({
//     name: "harry ka webdev",
//     price: 0,
//     assignment: 12,
//     projects: 5
// })

//insert many
// db.courses.insertMany([{
//   "name": "harry ka webdev",
//   "price": 0,
//   "assignment": 12,
//   "projects": 5
// },
// {
//   "name": "python bootcamp",
//   "price": 499,
//   "assignment": 10,
//   "projects": 3
// },
// {
//   "name": "fullstack masterclass",
//   "price": 999,
//   "assignment": 15,
//   "projects": 6
// },
// {
//   "name": "react crash course",
//   "price": 299,
//   "assignment": 6,
//   "projects": 2
// },
// {
//   "name": "machine learning basics",
//   "price": 799,
//   "assignment": 8,
//   "projects": 4
// },
// {
//   "name": "ai mini degree",
//   "price": 1499,
//   "assignment": 18,
//   "projects": 7
// },
// {
//   "name": "data analytics",
//   "price": 599,
//   "assignment": 11,
//   "projects": 3
// },
// {
//   "name": "devops bootcamp",
//   "price": 899,
//   "assignment": 7,
//   "projects": 4
// },
// {
//   "name": "sql for beginners",
//   "price": 199,
//   "assignment": 5,
//   "projects": 1
// },
// {
//   "name": "cyber security masterclass",
//   "price": 1299,
//   "assignment": 14,
//   "projects": 6
// }
// ])

//read or find
// let a = db.courses.find({price: 0})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

//find one
// let b = db.courses.findOne({price: 0})
// console.log(b)

//update
// db.courses.updateOne({price: 100},{$set:{price: 0}})

//update many
// db.courses.updateMany({price: 0},{$set:{price: 100}})

// delete
// db.courses.deleteOne({price: 299})

//delete many
// db.courses.deleteMany({price: 100})