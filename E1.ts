class Cat  {
    name:string;
    sex:string;
    age:number;
    weight:number;
    color:string;
    texture:string;

    constructor(name:string, sex:string, age:number, weight:number, color:string, texture:string){
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }

    breath(){
        console.log(`${this.name} is breathing`);
    }
    eat(food:string):void{
        console.log(`${this.name} eats ${food}`);
    }
    run(destination:string):void{
        console.log(`${this.name} goes to ${destination}`)
    }
    sleep(hours:number):void{
        console.log(`${this.name} sleeps ${hours} hours`)
    }
    mew():void{
        console.log(`${this.name} does mew!!`)
    }
}

const Gato1 = new Cat(
    "Óscar",
    "macho",
    3,
    7,
    "marrón",
    "rayada"
);

const Gato2 = new Cat(
    "Luna",
    "hembra",
    2,
    5,
    "gris",
    "lisa"
);

console.log(Gato1);
console.log(Gato2);

console.log(Gato1.eat("Atun"));
console.log(Gato1.eat("Atun"));