//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
    // properties
    constructor(title, genre, trashy, numEps) {
        this.title = title;
        this.genre = genre;
        this.trashy = trashy;
        this.numEps = numEps;
    }
    // methods
    watchShow = () => `You watch ${this.title} intently.`
    pauseShow = () => `You hit pause on your ${this.genre.toLowerCase()} show ${this.title}`
    reactToShow = () => {
        if (this.trashy) return 'Ohhhh shit!!! They did THAT'
        else if (!this.trashy) return 'Hmm interesting...'
    }
}

let loveIsBlind = new NetflixShow('Love is Blind', 'Reality', true, 10)
let bridgerton = new NetflixShow('Bridgerton', 'Period Drama', false, 16)