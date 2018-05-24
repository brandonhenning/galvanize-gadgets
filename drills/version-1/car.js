class Car {
    constructor (mpg) {
        this.gallons = 0
        this.mpg = mpg
        this.milesDriven = 0
        this.tripsArr = []
    }

    fill (number) {
        this.gallons += number
    }

    drive (distance) {
        let usedGallons = distance / this.mpg
        this.gallons -= usedGallons
        this.milesDriven += distance
        this.tripsArr.push(`${distance} miles`)
    }

    odometer () {
        return this.milesDriven
    }

    trips (miles) {
        return this.tripsArr
    }
}



module.exports = Car