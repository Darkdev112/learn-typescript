

// ARRAY
let stringArr = ["dev", "rahul", "ahsan"]
let guitars = ["newguitar", 1983, "Les Paul"]
let mixedData = ["EVH", 1984, true]

// now we note the datatypes of the arrays
let stringArr2 : string[] = ["dev", "rahul", "ahsan"]
let guitars2 : (string | number)[] = ["newguitar", 1983, "Les Paul"]
let mixedData2 : (string | number | boolean)[]= ["EVH", 1984, true]

//now if we assign first element of stringArr then we can only assign it with a string
stringArr[0]  = "John"

//we can also push a string to stringArr
stringArr.push('Jim')

let test : any = []
let bands : string[] = []
//we can push on string to bands
bands.push('Van Halen')
//we can push any value to test array
test.push(12)
test.push(true)



//TUPLE

//This array type means it contains only three elements of type string number or boolean and order is strict as well
let myTuple : [string, number, boolean] = ['Dave', 42, true]

//This array type means it can contain any elements of type string number or boolean
let mixed = ['John', 1, false]

mixed = myTuple // this is correct
//myTuple = mixed  //this is wrong because number of elements may not match as typescript assumes



//OBJECTS

let myObj : object;
myObj = [10]
console.log(typeof myObj); // this will show object even if an array is assigned because array has type object in javascript 
myObj = {} // no error

const exObj  = {
    prop1 : "Dev",
    prop2 : true
}
exObj.prop1 = "Ashrit" // no number can be assigned here




// USE OF TYPE KEYWORD

type Guitarist13 = {
    name : string,
    active : boolean,
    albums : (string | number)[]
}

// this is an object of type Guitarist where all fields are necessary
let evh : Guitarist13 = {
    name : "dev bro",
    active : true,
    albums : [1924, "Divide"]
}

type Guitarist2 = {
    name : string,
    active? : boolean,
    albums : (string | number)[]
}

// this is an object of type Guitarist2 where active property is either undefined or boolean
let jp : Guitarist2 = {
    name : "dev bro", // it does not matter if we give the active or not
    albums : [1924, "Divide"]
}

// a function where the argument is of type Guitarist
const greetGuitarist = (guitarist : Guitarist13) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(evh)); //calling of the function




//USE OF INTERFACE KEYWORD

//an interface with name optional
interface Coder10 {
    name? : string,
    skills : string,
    isHacker : boolean
}

const myInterface : Coder10 = {
    name : "Dev",
    skills : "js ts c++",
    isHacker : false
}

//performing operations on an optional field
const greetCoder = (coder : Coder10) => {
    //return `Hello ${coder.name.toLowerCase()}!`;  this wont work as name may be available or maynot be available so

    // solution 1
    return `Hello ${coder.name?.toLowerCase()}!`
}

const greetCoder2 = (coder : Coder10) => {
    // solution 2
    if(coder.name)
    {
        return `Hello ${coder.name.toLowerCase()}!`
    }
}



//ENUMS
//unlike most ts features, Enums are not a type level addition to js but something added to the language and runtime
enum Grade {
    A,
    B,
    C,
    D,
    E
}

console.log(Grade.C);

//but is we initialise the first value
enum Grade2 {
    A=1,
    B,
    C,
    D,
    E
}
console.log(Grade2.C);

