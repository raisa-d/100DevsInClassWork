//Create a pizza object that has four properties and three methods and don't use a constructor or classes
let pizza = {}

// 4+ properties
pizza.size = 'large'
pizza.toppings = ['mushrooms', 'garlic', 'pepperoni', 'onion']
pizza.crust = 'stuffed'
pizza.shape = 'round'
pizza.cheese = true
pizza.sauce = 'heavy'
pizza.numSlices = 8

// 3+ methods
pizza.slice = () => `The pizza is cut into ${pizza.numSlices} slices and the scent starts wafting.`

pizza.eat = () => {
    let string = ''
    pizza.toppings.forEach((topping, i) => {
        if (i !== pizza.toppings.length - 1) {
            string += `${topping}, `
        } else {
            string += `and ${topping}.`
        }
    })
    return `You eat your delectable pizza with ${string}`
}

pizza.estimatedDeliveryTime = () => console.log('Calculating...')

pizza.burnMouth = () => console.log('Fjao;iefjak;ldjfbaldfioaekfjk;lz')