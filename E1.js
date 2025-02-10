var Cat = /** @class */ (function () {
    function Cat(name, sex, age, weight, color, texture) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }
    Cat.prototype.breath = function () {
    };
    Cat.prototype.eat = function (food) {
        console.log("The cat ".concat(this.name, " eats ").concat(food));
    };
    Cat.prototype.run = function (destination) {
        console.log("The cat ".concat(this.name, " goes to ").concat(destination));
    };
    Cat.prototype.sleep = function (hours) {
        console.log("The cat ".concat(this.name, " sleeps ").concat(hours, " hours"));
    };
    Cat.prototype.mew = function () { };
    return Cat;
}());
var Gato1 = new Cat("Óscar", "macho", 3, 7, "marrón", "rayada");
var Gato2 = new Cat("Luna", "hembra", 2, 5, "gris", "lisa");
console.log(Gato1);
console.log(Gato2);
console.log(Gato1.eat("Atun"));
