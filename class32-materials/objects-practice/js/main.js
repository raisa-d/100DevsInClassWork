// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

// === My code ===

class Contractor {
    constructor(name, role) {
    // encapsulation
        this._name = name;
        this._role = role;
    }

    // abstraction using getters
    get name() {
        return this._name;
    }

    get role() {
        return this._role;
    }

    sayHi() {
        return `${this._name} the ${this._role} says hi!`
    }
}

// *** TO DO: make a developer class, a designer class, then have front-end inherit from designer and back-end inherit from developer

// inheritance, frontend class inherits from contractor class
class Frontend extends Contractor {
    constructor(name, role, tech) {
        // inherit name and role from the superclass
        super(name, role);
        this._tech = tech;
    }

    get tech() {
        return this._tech;
    }

    sayHi() {
        return `${this._name} uses ${this._tech} in their ${this._role} role.`;
    }
}

class Backend extends Frontend {
    constructor(name, role, tech, database) {
        super(name, role, tech);
        this._database = database;
    }

    get database() {
        return this._database;
    }

    sayHi() {
        return `${this._name} is using ${this._tech} with the ${this._database} database!`
    }
}

// instantiate objects/contractors
let raisa = new Contractor('Raisa', 'Contractor');
let brookelyn = new Frontend('Brookelyn', 'Front-end', 'React');
let luca = new Backend('Luca', 'Back-end', 'Python', 'mongoDB');

// array of contractors in the agency
let agency = [raisa, brookelyn, luca]

// polymorphism: call the same method on diff objects and receive different behaviors
agency.forEach(contractor => console.log(contractor.sayHi()));

// for of loop for objects
for (let contractor of agency) {
    console.log(contractor.sayHi())
}






// === Leon's code example ===
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
