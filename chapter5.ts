//TYPE ASSERTION 

type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific
let a : One = 'hello'
let b = a as Two //less specific
let c = a as Three // more specific

let d = <Two> 'world' //this syntax can also be followed
let e = <string | boolean> true


// when return type of a function is an union type then we can use type assertion
const addOrConcat = (a : number, b: number, c: "add" | "concat") : (string | number) => {
    if(c=="add")
    {
        return a+b;
    }
    return  '' + a + b;
}

let myVal : number  = addOrConcat(2,3,"add") as number ; // here we use type assertion to confirm that out return type is number

let nextVal : string = addOrConcat(2,3,"concat") as string; // here we use type assertion to confirm that our return type is string

let againVal : string = addOrConcat(2,3,"add") as string;
//here we lied to typescript about return type while using type assertion and it COULD NOT catch us

// 10 as string         //this will through error
(10 as unknown) as string  //this is fine but should not be used always





//DOM

const img = document.querySelector('img') as HTMLImageElement;//this is a HTMLImageElement so we use type assertion
img.src // so the error disappears

const myImg = document.getElementById('img') as HTMLImageElement ; //this is not an image element so we have to do couple of things to access src
myImg.src

//we can use no null assertion by using exclaimation mark but then we have to take care of src so we can directly use type assertion

// see copyright.ts file next ->