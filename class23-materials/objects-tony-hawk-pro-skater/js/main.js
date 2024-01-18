//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Skater(stance, trick, name, shoes) {
    this.stance = stance
    this.trick = trick
    this.name = name
    this.shoes = shoes

    this.doTrick = () => console.log(`${this.name} does a sick ${this.trick}`)

    this.standAround = () => console.log(`${this.name} walks all ${stance}-like`)

    this.whatAreThose = () => console.log(`Damnn your ${this.shoes} are a lil weird`)
}

const tony = new Skater('goofy', 'acid drop', 'Tony', 'Vans')

tony.standAround()
tony.doTrick()
tony.whatAreThose()