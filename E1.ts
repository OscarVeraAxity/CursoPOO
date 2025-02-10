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

    breath():string{
        return `${this.name} is breathing`;
    }
    eat(food:string):string{
        return `${this.name} eats ${food}`;
    }
    run(destination:string):string{
        return `${this.name} goes to ${destination}`;
    }
    sleep(hours:number):string{
        return `${this.name} sleeps ${hours} hours`;
    }
    mew():string{
        return `${this.name} does mew!!`;
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
console.log(Gato1.breath());
console.log(Gato1.run("downtown"));
console.log(Gato1.sleep(11));
console.log(Gato1.mew());