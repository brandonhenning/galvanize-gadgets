"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(mpg) {
        this.tripLog = [''];
        this.gallons = 0;
        this.milesDriven = 0;
        this.mpg = mpg;
        // this.tripLog.push(`${miles} miles`)
    }
    Car.prototype.fill = function (gallonsOfGas) {
        this.gallons += gallonsOfGas;
    };
    Car.prototype.drive = function (miles) {
        var gasUsed = miles / this.mpg;
        this.gallons -= gasUsed;
        this.milesDriven += miles;
        this.tripLog.push(miles + " miles");
    };
    Car.prototype.odometer = function () {
        return this.milesDriven;
    };
    Car.prototype.trips = function () {
        return this.tripLog;
    };
    return Car;
}());
exports.Car = Car;
