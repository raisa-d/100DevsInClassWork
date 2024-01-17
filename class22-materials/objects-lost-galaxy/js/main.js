//Create a mouse object that has four properties and three methods (don't use constructors or classes)
let mouse = {
    name: 'Augustus',
    color: 'gray',
    voice: 'high pitched',
    earShape: 'round',

    speak() {
        console.log(`${this.name}: *squeak squeak*`)
    },

    sayColor() {
        console.log(`${this.color} is such a cute color`)
    }
}

// add third method outside of literal notation
mouse.sayHi = name => console.log(`${name} says hi!`)

mouse.sayHi(mouse.name)

// DOING IT IN CLASS
let cpMouse = {}

// adding properties
cpMouse.color = 'black'
cpMouse.shape = 'ergonomic'
cpMouse.brand = 'Meetion'
cpMouse.wireless = true
cpMouse.bluetooth = true

// adding methods
cpMouse.leftClick = () => console.log('LEFT CLICK')
cpMouse.rightClick = () => console.log('RIGHT CLICK')
cpMouse.scroll = () => console.log('SCROLLLING...')

// looking at all info
console.table(cpMouse)

// list of all properties
console.table(Object.keys(cpMouse))

// making with classes
class CreateMouse {
    constructor(color, shape, brand, wireless, bluetooth) {
        this.color = color,
        this.shape = shape,
        this.brand = brand,
        this.wireless = wireless,
        this.bluetooth = bluetooth
    }

    leftClick = () => console.log('LEFT CLICK')

    rightClick = () => console.log('RIGHT CLICK')

    scroll = () => console.log('SCROLLING...')
}

trackpad = new CreateMouse('rose gold', 'square', 'Apple', false, false)

trackpad.leftClick()
trackpad.scroll()