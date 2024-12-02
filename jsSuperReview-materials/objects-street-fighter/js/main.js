//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Streetfighter(name, specialMove, health, speed) {
    // 4 properties
    this.name = name
    this.specialMove = specialMove
    this.health = health
    this.speed = speed

    // 3 methods
    this.punch = function() {
        console.log(`${this.name} throws a punch at their opponent!`)
    }
    this.throw = function () {
        console.log('yeet')
    }
    this.taunt = function() {
        console.log(`You can't handle my ${this.specialMove}`)
    }
}

let rai = new Streetfighter('Raisa', 'twirling', '500', 'zooming');