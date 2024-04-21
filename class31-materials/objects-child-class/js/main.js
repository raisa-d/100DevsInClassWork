// Create an a class and extend it - Can be anything you would like it to be! 
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Domestic extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

class Wild extends Animal {
    constructor(name, prey) {
        super(name);
        this.prey = prey;
    }
}

class Cat extends Domestic {
    constructor(name, breed, colors) {
        super(name, breed);
        this.colors = colors;
    }
    speak() {
        console.log('Meow');
    }
}

const luca = new Cat('Luca', 'goofy', 'brown, black, & white')