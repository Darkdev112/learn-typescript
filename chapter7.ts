//INDEX SIGNATURES

interface TransactionObj {
    [index : string] : number
    Pizza : number,
    Books : number,
    Job : number
}

const todaysTransactions : TransactionObj = {
    Pizza : -10,
    Books : -5,
    Job : 50
}

console.log(todaysTransactions.Pizza); // there are two ways to access properties of an object literal as we know so this is the first one
console.log(todaysTransactions['Pizza']); // this is using the bracket notation

//but we will face error while accessing it dynamically i mean with any variable as key
let prop : string = "Pizza"

// console.log(todaysTransactions[prop]);       //Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.No index signature with a parameter of type 'string' was found on type 'TransactionObj'.

const todaysNet  = (transaction : TransactionObj) : number => {
    let total = 0;
    for(const i in transaction)// using for loop to loop over an object
    {
        total+=transaction[i] // to solve the error we need to use index signature in the interface
    }
    return total
}


console.log(todaysNet(todaysTransactions));

// we can use readonly keyword before index signture to prevent it from creating any property the object

//next ex
interface Student{
    [index : string] : string | number | number[] | undefined
    name : string,
    GPA : number,
    classes? : number[]
}

const student : Student = {
    name : "Abhijeet",
    GPA : 9.8,
    classes : [100,200]
}

console.log(student.test);//wont show error becoz we have provided index signature in interface

interface Student2{
    // we dont have index signature here but we can use assertion
    name : string,
    GPA : number,
    classes? : number[]
}

const student2 : Student2 = {
    name : "Subham",
    GPA : 9.0,
    classes : [10,200]
}

Object.keys(student2).map(key => {
    console.log(student2[key as keyof typeof student2]); //type assertion used here
    
})

//similarly functions can be used


//another way of index signature

// interface Incomes{            //instead of this 
//     [key : string] : number
// }


type Streams = 'salary' | 'bonus' | 'sidehustle' | 12

type Incomes = Record<Streams, number|string>

//use record utility to to define the type of an object

const monthlyIncomes : Incomes = {
    salary : 500,
    bonus : 100,
    sidehustle : 250,
    12 : 121
}

for(const revenue in monthlyIncomes)
{
    console.log(monthlyIncomes[revenue as keyof Incomes ]);
}