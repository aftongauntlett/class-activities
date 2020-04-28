const dogs = {
  // Create the property raining and set it to true
  raining: true,
  // Create the property noise and set the value to "Woof!"
  noise: "Woof!",
  // Creates a method "makeNoise", which prints to the console when called
  makeNoise: function () {
      // "this" refers to the parents object
    if (this.raining === true) {
      console.log(this.noise);
    }
  },
};
const cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        if(this.raining === true) {
            console.log(this.noise)
        }
    }
}
const fox = {
    raining: true,
    noise: "Ring ding ding ding!",
    makeNoise: function () {
        if(this.raining === true) {
            console.log(this.noise)
        }
    }
}
dogs.makeNoise();
cats.raining = true;
cats.makeNoise();
const massHysteria = function(pet1,pet2) {
    if(pet1.raining === true && pet2.raining === true) {
        console.log("It's raining cats and dogs!!!");
        console.log(pet1.noise)
        console.log(pet2.noise)
    }
}
massHysteria(dogs, fox);