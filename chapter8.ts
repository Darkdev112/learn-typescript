const echoString = (arg : string) : string => arg //this works only for string but we can define a generic type

const echo = <T>(arg : T) : T => arg  //we can create a generic type and use any type in arg

const isObj = <T>(arg : T) : boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg!==null)  
}

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1,2,3]));
console.log(isObj({name : "John"}));
console.log(isObj(null));

//function to check truthy and falsy values
const TruthyFalsy = <T>(arg : T) : {arg : T, is : boolean} => {
    if(Array.isArray(arg) && !arg.length){
        return {arg, is : false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length)
    {
        return {arg, is : false}
    }
    return {arg, is : !!arg}
}


//Redo this function with an interface
interface BoolCheck<T>{
    value : T
    is : boolean 
}

const TruthyFalsy2 = <T>(arg : T) : BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length){
        return {value : arg, is : false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length)
    {
        return {value : arg, is : false}
    }
    return {value : arg, is : !!arg}
}

//narrowing the generic used
interface HasId {
    id : number
}

const processUser = <T extends HasId>(user : T) : T =>
{                                                        //This generic means T can have any no of properties but having id property is a must
    return user;
}

console.log(processUser({id : 121212, name : "namebro", class : "thisclass"})); //id property is a must


//here there are two argumentss
const getUsersProperty = <T extends HasId, K extends keyof T>(users : T[], key : K) : T[K][] => {     //here first argument has type generic including interface HasId which means an object having properties of id and others properties
    return users.map((user) => user[key])     // K extends index signature substitute type assertion as keys
}

//this might be useful while data fetching



// classes having generic types
class StateObject<T>{
    private data : T

    constructor(value : T)
    {
        this.data = value
    }
    get state() : T {
        return this.data
    }
    set state(value : T){
        this.data = value
        return 
    } 
}

const store = new StateObject("John") //initially set as a string
console.log(store.state);   
store.state = "Dave"      //we can only assign it with a string now 

const myState = new StateObject<(string | number | boolean)[]>([15, "Dev"])   //Here we have previously defined the initial generic as something 
console.log(myState.state);
myState.state = ["Rahul",201,true]
console.log(myState.state);





//UTILITY TYPES

//Partial

interface Assignment {
    studentId : string,
    title : string,
    grade : number,
    verified ?: boolean
}

const updateAssignment = (assign : Assignment, propsToUpdate : Partial<Assignment>) : Assignment => { //use of  partial
    return {...assign, ...propsToUpdate}
}

const assign1 : Assignment = {
    studentId : "compsci123",
    title : "Final Project",
    grade : 0
}

console.log(updateAssignment(assign1,{grade : 95}));
const updated = updateAssignment(assign1,{grade : 95})


// Required and Readonly
const  recordAssignment = (assign : Required<Assignment>) : Assignment => {      // the only difference now is that all of the properties are required
    return assign
}

const assignVerified : Readonly<Assignment> = updated
// assignVerified.verified = false     //this cannot be reassigned

//Record

const hexColorMap : Record<string, string> = {
    red : "FF0000",
    green : "00FF00",
    blue : "0000FF"
}


//use of types in record
type Students = 'Sara' | 'Kelly'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades : Record<Students, LetterGrades> = {
    Sara : "A",
    Kelly : "U"
}

//use of interfaces in record
interface Grades{
    assign1 : number,
    assign2 : number
}

const gradeData : Record<Students, Grades> = {
    Sara : {assign1 : 79, assign2 : 21},
    Kelly : {assign1 : 90, assign2 : 65}
} 

//Pick and Omit

const score : Pick<Assignment, "studentId" | "grade">= {
    studentId : "k932",
    grade : 76
}

type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview : AssignPreview = {
    studentId : "l772",
    title : "Of course"
}

//Exclude and Extract

type adjustedGrades = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">


//non nullible
type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NameOnly = NonNullable<AllPossibleGrades>

//Return type
// it can be used to find out the types of functions which is not defined by us
type newAssign = ReturnType<typeof updateAssignment>


//Parameters
type AssignParams = Parameters<typeof updateAssignment>// it can be used to find out the type of parameters of the function not known
const assignArgs : AssignParams = [assign1, {grade : 25}]
const createAssignment : newAssign = updateAssignment(...assignArgs);
console.log(createAssignment);



//Awaited - helps us with the ReturnType of a Promise
interface User {
    id : string,
    name : string,
    username : string,
    email: string
}

const fetchUsers  = async () : Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

type FetchUsersReturnType =  Awaited<ReturnType<typeof fetchUsers>>
fetchUsers().then(users => console.log)
