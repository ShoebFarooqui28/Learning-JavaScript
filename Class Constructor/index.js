class Car {
  
  static vehicle = "Motor Car"

  constructor (make, model, year, color) {
    this.make = make;
    this.model= model;
    this.year = year;
    this.color = color;
    this.vehicleType = Car.vehicle;
  }

}


const car1 = new Car("toyota", "supra", 1999, "peach");

console.log(car1.vehicleType)