//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor(color, hasMilkSteamer, price, model) {
        // this.something are properties while the right side are parameters
        this.color = color
        this.hasMilkSteamer = hasMilkSteamer
        this.price = price
        this.model = model
    }

    pullShot = () => console.log('An espresso shot is pulled with 3 perfect layers');

    steamMilk() {
        if (this.hasMilkSteamer) {
            console.log('The milk is being steamed...');
        }
    };

    turnOn = () => console.log('Espresso Machine is turning on...');
}

const expresso = new EspressoMachine('green', true, 399, 'Classic Pro');