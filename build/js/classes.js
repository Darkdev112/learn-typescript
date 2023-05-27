class Coder {
    work = "dsds";
    constructor(){
        this.name = "Dev"
        this.music = "thisismymusic"
        this.age = 12 
    }
    display(){
        console.log(this.name, this.music, this.age);
    }
    increaseAge(){
        this.age = this.age + 10;
    }
}

let coder = new Coder();
console.log(coder.name);
coder.display();
console.log(coder.work);