//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes
class Pokemon {
    constructor(name, type, evolutionLevel, color, powers) {
        this.name = name,
        this.type = type,
        this.evolutionLevel = evolutionLevel,
        this.color = color,
        this.powers = powers
    }

    evolve() {
        return `${this.name} has evolved to ${this.evolutionLevel+1}!`
    }
}