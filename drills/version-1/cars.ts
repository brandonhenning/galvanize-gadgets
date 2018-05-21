export class Car {

    public gallons: number
    public milesDriven: number
    public mpg: number
    public tripLog: Array<string> = ['']

    constructor(mpg: number) {
        this.gallons = 0
        this.milesDriven = 0
        this.mpg = mpg
        // this.tripLog.push(`${miles} miles`)
    }
  
    fill(gallonsOfGas: number) {
      this.gallons += gallonsOfGas
    }
  
    drive(miles: number) {
      const gasUsed = miles / this.mpg
      this.gallons -= gasUsed
      this.milesDriven += miles
      this.tripLog.push(`${miles} miles`)
    }
  
    odometer() {
      return this.milesDriven
    }
  
    trips() {
      return this.tripLog
    }
}
