//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class StreetFighter {
    constructor(HP, GP, strength, XP) {
        this.HP = HP,
        this.GP = GP,
        this.strength = strength,
        this.XP = XP;
    }

    loseHealth = damage => this.HP -= damage
    gainHealth = points => this.HP += points
    gainXP = pts => this.XP += pts
    spendGP = money => this.GP -= money
}

const Luca = new StreetFighter(100, 50, 12, 0)

Luca.loseHealth(15)
Luca.gainXP(20)
Luca.spendGP(5)
Luca.gainHealth(2)

console.table(Luca)