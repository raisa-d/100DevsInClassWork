//Create a pizza constructor with 4 properties and 3 methods

function PizzaMaker(size, toppings, crust, numSlices) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.numSlices = numSlices;

    // add methods like you would a property, with this keyword
    this.eat = () => console.log('You eat the yummy pizza')
    this.burnMouth = () => console.log('ao;ieaio;jf;ekfj')
    this.slice = () => console.log(`You cut the pizza into ${numSlices} slices and the smell wafts through the air.`)
}

const mushroom = new PizzaMaker('large', ['mushrooms', 'garlic'], 'deep dish', 8)
const pepperoni = new PizzaMaker('medium', 'pepperoni', 'stuffed', 2)