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
        return "".concat(this.name, " is breathing");
    };
    Cat.prototype.eat = function (food) {
        return "".concat(this.name, " eats ").concat(food);
    };
    Cat.prototype.run = function (destination) {
        return "".concat(this.name, " goes to ").concat(destination);
    };
    Cat.prototype.sleep = function (hours) {
        return "".concat(this.name, " sleeps ").concat(hours, " hours");
    };
    Cat.prototype.mew = function () {
        return "".concat(this.name, " does mew!!");
    };
    return Cat;
}());
var Gato1 = new Cat("Óscar", "macho", 3, 7, "marrón", "rayada");
var Gato2 = new Cat("Luna", "hembra", 2, 5, "gris", "lisa");
console.log(Gato1);
console.log(Gato2);
console.log(Gato1.eat("Atun"));
console.log(Gato1.breath());
console.log(Gato1.run("downtown"));
console.log(Gato1.sleep(11));
console.log(Gato1.mew());
