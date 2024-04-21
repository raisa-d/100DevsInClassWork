// Object-Oriented practice: noise cancelling headphones
class Headphones {
    // encapsulation
    constructor(model, style, color, brand, bluetooth) {
        this._model = model;
        this._style = style;
        this._color = color;
        this._brand = brand;
        this._bluetooth = bluetooth;
    }

    // getters: abstraction
    get model() {
        return this._model;
    }

    get style() {
        return this._style;
    }

    get color() {
        return this._color;
    }

    get brand() {
        return this._brand;
    }

    get bluetooth() {
        return this._bluetooth;
    }

    turnOn() {
        console.log(`Your ${this._brand} ${this._model} are powering on...`)
    }
}

// inheritance
class NoiseCancelling extends Headphones {
    constructor(model, style, color, brand, bluetooth, noiseCancelling) {
        super(model, style, color, brand, bluetooth);
        this._noiseCancelling = noiseCancelling;
    }

    get noiseCancelling() {
        return this._noiseCancelling;
    }

    turnOn() {
        console.log(`Your ${this._brand} ${this._model} are powering on & cancelling the noise.`)
    }
}

// instantiate the headphones
earPods = new Headphones('EarPods', 'in ear', 'white', 'Apple', false);
airPodsMax = new NoiseCancelling('Air Pods Max', 'over ear', 'blue', 'Apple', true, true);

let headphones = [earPods, airPodsMax];

// polymorphism
headphones.forEach(headphone => headphone.turnOn());