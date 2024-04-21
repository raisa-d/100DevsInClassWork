class Animal {
    constructor(name) {
        this._name = name; // use convention with underscore to signify to other developers that it is not to be touched/changed
    }

    // when a dev calls Animal.name, they will actually be calling the getter to get the _name property. this prevents people from accidentally reassigning a private property. if they tried to reassign something by doing Animal.name = 'something' it wouldn't work, it would just return this._name
    get name() {
        return this._name;
    }

    speak() {
        console.log(`${this._name} makes a sound`);
    }
}

class Domestic extends Animal {
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }

    get breed() {
        return this._breed;
    }

}

class Dog extends Domestic {
    constructor(name, breed) {
        super(name, breed);
    }

    speak() {
        // see original speak from animal class
        super.speak()
        // create dog's own speak method
        console.log(`${this.name} barks!`)
    }
}

class Cat extends Domestic {
    constructor(name, breed) {
        super(name, breed);
    }

    speak() {
        super.speak()
        console.log(`${this.name} meows!`)
    }
}

const luca = new Cat('Luca', 'Goofy');
const mama = new Dog('Mama', 'Pitbull');


let farm = [luca,mama]

// polymorphism: you can call speak on different objects and receive different results because the individual objects have their own speak methods which behave differently
for(a of farm){
    a.speak()
}
