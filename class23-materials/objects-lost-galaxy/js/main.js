//Create a dog object that has four properties and three methods with no constructor
const dog = {
    name: 'Luca',
    color: 'multi-colored',
    legs: 4,
    bark: 'WOOF',
    breed: 'cat',
    likesToCuddle: false,

    // Question: Why do I use dog.name instead of this.name here? If I use this.name it doesn't register as having any name and just says 'You pet'
    pet: () => console.log(`You pet ${dog.name}`)
}

dog.speak = () => console.log(dog.bark)
dog.cuddle = () => dog.likesToCuddle === true ? console.log(`${dog.name} cuddles you`) : console.log(`${dog.name} doesn't like to cuddle! What are you even thinking?`)