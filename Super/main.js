class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    console.log(`${this.name} is eating`);
  }
  sleep(){
    console.log(`${this.name} is sleeping`);
  }
}

class Dog extends Animal{
  constructor(name, age, breed, color){
    super(name, age)
    this.breed = breed;
    this.color = color;
  }
  bark(){
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal{
  constructor(name, age, breed, color){
    super(name, age)
    this.breed = breed;
    this.color = color;
  }
  meow(){
    console.log(`${this.name} is meowing`);
  }
}

const dog1 = new Dog("Tommy", 5, "Labrador", "Black");
const cat1 = new Cat("Kitty", 3, "Persian", "White");

//Super keyword is used to call the constructor of the parent class
//In object dog and cat, we first send the name and age to the parent class constructor that creates dog and cat as objects of the animal class
//Then we add the breed and color to the dog and cat objects respectively


dog1.eat() //This is a method of the parent class Animal
cat1.sleep() //This is a method of the parent class Animal

dog1.bark() //This is a method of the child class Dog
cat1.meow() //This is a method of the child class Cat

console.log(dog1.name, dog1.age) //This is a property of the parent class Animal
console.log(cat1.name, cat1.age) //This is a property of the parent class Animal

console.log(dog1.breed, dog1.color) //This is a property of the child class Dog
console.log(cat1.breed, cat1.color) //This is a property of the child class Cat