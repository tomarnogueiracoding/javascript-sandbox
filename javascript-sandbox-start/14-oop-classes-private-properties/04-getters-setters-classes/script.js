class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitalizeFirst(value) {
    return value[0].toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('miguel', 'nogueira');
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = 'carlos';
person1.lastName = 'pais';

console.log(person1);
console.log(person1.fullName);
