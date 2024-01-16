//Create a stopwatch object that has four properties and three methods

// METHOD 1: using literal object notation
let stopwatch = {}

// properties
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.brand = 'nike'
stopwatch.time = 12

// methods
stopwatch.tellTime = time => console.log(`The current time is ${time}`)

stopwatch.tellBrand = brand => console.log(`Your stopwatch brand is ${brand}`)

stopwatch.evaluateColor = color => console.log(`${color} is a good color. Good job`)

stopwatch.commentOnShape = shape => 
console.log(`Your stopwatch is ${shape} but perhaps a star shaped stopwatch would be cuter`)

stopwatch.start = _ => console.log('STTAAARRRTTTIIINGNGNG!!')

// calling methods
stopwatch.commentOnShape(stopwatch.shape)
stopwatch.tellTime(stopwatch.time)
stopwatch.tellBrand(stopwatch.brand)
stopwatch.evaluateColor(stopwatch.color)

// viewing all the properties and methods of stopwatch
console.table(stopwatch)

// METHOD 2: using es6 classes
class stopWatch {
    constructor(color, shape, brand, model, minutes, seconds, milliseconds) {
      this.color = color;
      this.shape = shape;
      this.brand = brand;
      this.model = model;
      this.minutes = minutes;
      this.seconds = seconds;
      this.milliseconds = milliseconds;
    }
    
    // methods
    // start
    // stop
    // beep
    
  }
  
  // instantiate
  let watch = new stopWatch('black', 'round', 'acusplit', 'pro survivor', 3, 59, 45);

  // METHOD 3: literal notation but adding properties within the object
  let stopwatch2 = {
    color: 'green',
    brand: 'apple',
    shape: 'square'
  }
