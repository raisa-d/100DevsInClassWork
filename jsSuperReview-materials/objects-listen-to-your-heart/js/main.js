//Create a stopwatch object that has four properties and three methods. Use literal notation and dot notation, no constructors or classes

// create stopwatch object using literal notation
let stopwatch = {};

// 4 properties
stopwatch.color = 'black';
stopwatch.shape = 'round';
stopwatch.brand = 'nike';
stopwatch.smell = 'new';

// 3 methods
stopwatch.start = function() {
    console.log('Run!')
};

stopwatch.stop = function () {
    console.log('Stahp it!')
};

stopwatch.beep = () => console.log('BEEP!');

// what is a constructor function? a function whose job is to help us create objects. syntax convention: start function with capital letter so other devs know it's a constructor. uses this keyword to bind properties and methods to whatever object comes out of constructor.