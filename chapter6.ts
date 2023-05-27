//This is a class in typescript where we have to like tell the what properties are to be binded in the constructor which is the main difference between typescript and javascript 
class CoderPrev {
    name : string
    music : string
    age : number
    lang : string
    constructor(name: string, music : string, age : number, lang : string){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }    
}

//but we can reduce the complexity using visibilty modifiers or access modifiers
class Coder{
    constructor(public name1: string, public music : string, private age : number, private lang : string){
        this.name1 = name1
        this.music = music
        this.age = age
        this.lang = lang
    }
}

//similarly class but with functions and default values
class Coder2{
    constructor(public name: string, public music : string, private age : number, protected lang : string = "Typescript"){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    
    public getAge(){
        return `Hello, I'm ${this.age}`
    }
}

const obj = new Coder2("Dev", "Perfect", 20)
console.log(obj.getAge());
// console.log(obj.lang);  //this is protected so cannot be accessed directly


class WebDev extends Coder2 {
    constructor(
        public computer : string,
        name : string,
        music : string,
        age : number
    ){
        super(name, music, age)
        this.computer = computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const obj2 = new WebDev("ASUS TUF","Ashrit", "believer", 21);
console.log(obj2.getLang());
// console.log(obj2.lang); //protected means it can be accessed in child class and not with the help of object of child class. There is a difference always remember





//INTERFACE IN CLASSES

//to use interfaces in classes we first need to create one interface
interface Musician{
    name : string,
    instrument : string,
    play(action: string) : string //this is how we declare functions in interfaces
}

// type Musician = {
//     name : string,
//     instrument : string,
//     play(action: string) : string //this is how we declare functions in interfaces or types
// }

class Guitarist implements Musician{   // use of implements keyword works both on interfaces and types
    name : string
    instrument : string

    constructor(name : string, instrument : string)
    {
        this.name = name
        this.instrument = instrument
    }

    play(action : string){
        return `${this.name} ${action} ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))  ;

 
//now we will see use of static it replies directly to the class and not to any specific object
class Peeps{
    static count : number = 0 //this is a static member
    
    static getCount() : number {  //this is a static function
        return Peeps.count
    }

    public id : number  //this is object specific

    constructor(public name : string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')


console.log(Amy.id); //3 will be the answer
console.log(Steve.id); //2 will be the answer
console.log(John.id); // 1 will be answer
console.log(Peeps.count); // 3 will be the answer



//getters and setters
class Bands {
    private dataState : string[]

    constructor(){
        this.dataState=[]
    }

    public get data() : string[]{ //this is a getter // it has return type
        return this.dataState
    }

    public set data(value : string[]){ //this is a setter // it does not have any return type not even void
        if(Array.isArray(value) && value.every((item)=>(typeof item === 'string'))){
            this.dataState = value
            return
        }
        else{
            throw new Error('Param is not an array of elements')
        }
    }
}

//getters and setters share the same name

const myBands = new Bands()
myBands.data = ['Neil Young', 'Led Zep']; // this is how you use setter it is a function but we initialise our values to it directly
console.log(myBands.data); //this is how we use getter it is a function but we access it as a property
myBands.data = [...myBands.data, 'Dev Ashrit']
console.log(myBands.data);

