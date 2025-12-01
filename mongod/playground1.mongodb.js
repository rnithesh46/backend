
// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([{
  "name": "Java",
  "price": 7000,
  "instructor": "Harry"
},
{
  "name": "Python",
  "price": 6500,
  "instructor": "Aman"
},
{
  "name": "Data Structures",
  "price": 8000,
  "instructor": "Meera"
},
{
  "name": "Machine Learning",
  "price": 12000,
  "instructor": "Dr. Rao"
},
{
  "name": "Web Development",
  "price": 9000,
  "instructor": "Jennifer"
},
{
  "name": "Cyber Security",
  "price": 11000,
  "instructor": "Arjun"
},
{
  "name": "Database Management",
  "price": 7500,
  "instructor": "Mohan"
},
{
  "name": "Cloud Computing",
  "price": 13000,
  "instructor": "Ravi"
},
{
  "name": "AI & Deep Learning",
  "price": 15000,
  "instructor": "Suhas"
},
{
  "name": "DevOps",
  "price": 10000,
  "instructor": "Priya"
}
]);



// Print a message to the output window.
console.log(`done inserting data`);

