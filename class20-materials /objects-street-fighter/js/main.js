//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class StreetFighter {
    constructor(HP, AC, GP, MP) {
        this.HP = HP // hit points
        this.AC = AC // armor class
        this.GP = GP // gold pieces
        this.MP = MP // magic points
    }

    // method to remove HP from fighter
    loseHP = pointsLost => this.HP -= pointsLost

    // method to add HP to fighter
    gainHP = pointsGained => this.HP += pointsGained

    // method to add GP to fighter
    earnGP = gold => this.GP += gold

    // method to spend GP
    spendGP = price => this.GP -= price
}

// instantiate fighter
let LucaTheWarrior = new StreetFighter(10, 5, 20, 10)

// adds 5 GP to Luca
LucaTheWarrior.earnGP(5)

// look at all Luca's properties/methods
console.table(LucaTheWarrior)