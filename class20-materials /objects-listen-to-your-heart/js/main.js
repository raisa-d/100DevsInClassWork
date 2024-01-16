//Create a stopwatch object that has four properties and three methods
class Stopwatch {
    constructor(startTime, endTime, watchColor, chainColor) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.watchColor = watchColor;
        this.chainColor = chainColor
    }

    // method to find time elapsed
    timeElapsed = (start, end) => `${end - start} hours elapsed`

    // method to evaluate color
    colorRanking = color => color === 'green' ? 'pretty choice ooh' : 'that color is okay too'
}

// instantiate stopwatch object
const greenWatch = new Stopwatch(1, 5, 'green', 'silver')

// call elapsed time method
console.log(greenWatch.timeElapsed(greenWatch.startTime, greenWatch.endTime))

// call color evaluating method
console.log(greenWatch.colorRanking(greenWatch.watchColor))

// seeing all the properties and methods of the greenWatch
console.table(greenWatch)