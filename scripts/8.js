class Vehicle {
  constructor(modelName, color, numberOfWheels) {
    this.modelName = modelName;
    this.color = color;
    this.numberOfWheels = numberOfWheels;
  }

  toString() {
    return `${this.modelName} in ${this.color} has ${this.numberOfWheels} wheels`;
  }
}

const vehicle = new Vehicle('Fiat Punto', 'Black', 4);
console.log('Vehicle is type:', typeof vehicle);
console.log(vehicle);
console.log(vehicle.toString());

class Car extends Vehicle {
  constructor(modelName, color, isConvertible) {
    super(modelName, color, 4);
    this.isConvertible = isConvertible;
  }

  toString() {
    const val = super.toString();
    return `${val} and is ${this.isConvertible ? '' : 'not '}a convertible`;
  }
}

const car = new Car('Fiat Punto', 'Black', false);
console.log('Car is type:', typeof car);
console.log(car);
console.log(car.toString());
