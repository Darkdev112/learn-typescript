//TYPE ALIASES

// we can create our types using type keyword
type SorN = string | number;

//one more
type SorNArray = (string | number)[]

type Guitarist1 = {
    name? : string,
    active : boolean,
    albums : SorNArray // instead of this (string | number)[]
}

type userId = SorN// just playing with type aliases


//LITERAL TYPES 
let myName : "Dev"; // myName can only be "Dev" and nothing else

let userName  : "Dev" | "Don" |  "Rahul"
userName = "Don"




//FUNCTIONS

// we can assign what is the type of arguments and return type
const add = (a:number, b:number) : number => {
    return a+b;
}

//we can assign void to return type if it does not return anything 
const logMsg = (message : any) : void => {
    console.log(message);
}

logMsg("Hello!")// some calls
logMsg(add(2,3))


//function for subtraction having same type signature as that of add function
const subtract = function (c : number, d:number) : number {
    return c-d;
}

//type alias for such functions
type mathFunction = (parameter1 : number, parameter2: number) => number;

const multiply : mathFunction = (x,y) => {
    return x*y;
} 

logMsg(multiply(12,20))

//writing interface for the above type can be a little bit different
interface mathFunction2 {
    (parameter1 : number, parameter2 : number) : number
}


//optional parameters
const addAll = (a : number, b:number, c?:number) : number => {
    if(typeof c !== "undefined") // this is required for narrowing 
    {
        return a+b+c;
    }
    return a+b; //you need to cover every case
}


//default param value
const sumAll = (a : number, b:number, c:number=2) : number => {
    return a+b+c;
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3,4))

// if default param value is at beginning
const sumAll2 = (a: number = 10, b:number , c:number=2 ):number =>
{
    return a+b+c
}


//while calling it we have to pass the first value as undefined
logMsg(sumAll2(undefined,3))
logMsg(sumAll2(3,8)) // if we want to give value to a we can give total of 2 arguments

//default values DO NOT work in type aliases


//REST PARAMETERS
const totalSum = (...nums : number[]) : number => {
    return nums.reduce((prev,curr)=> {return prev+curr} )
}
logMsg(totalSum(1,2))



//NEVER TYPES

//function throwing errors are basically return never type
const createError = (errMsg : string) : never => {
    throw new Error(errMsg)
}

//function having a infinite loop inside is called a never type
const infinite = () : never => {
    let i : number = 1;
    while(true)     // infinite loop
    {
        i++;
    } 
}

const finite = () : number => {
    let i : number = 1;
    while(i<10)     // infinite loop
    {
        i++;
    }
    return i; 
}

//returning a never type its use
const numberOrString = (value : number | string) : string => {
    if(typeof value === 'string') return 'string'
    if(typeof value === 'number') return 'number'
    return createError('This should never happen')// we have to return something even if our code is logically complete and that cannot be undefined so we return never type
}
