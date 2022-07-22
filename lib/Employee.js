function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.haveBirthday = function () {
    this.age++;
    console.log(this.age);
}

const tyler = new User('Tyler', 23);
const tony = new User('Tony', 57);
const eden = new User('Eden', 20);

console.log(tyler);

tony.haveBirthday();
