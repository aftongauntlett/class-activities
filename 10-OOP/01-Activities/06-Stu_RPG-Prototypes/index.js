// use constructors to create characters for an RPG
function Character(name, profession, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;

  // method that prints all stats for a char
 Character.prototype.printStats = function () {
   console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nage: " + this.age + "\nStrength: " +
   this.strength + "\nHitPoints: " + this.hitpoints); 
   console.log("\n-------------\n");
  };


  // add 3 methods onto it via prototype

  // is alive - function that prints whether the character is alove based on HP
  Character.prototype.isAlive = function() {
    if (this.hitpoints > 0) {
      console.log(this.name + " is still alive!");
      console.log("\n-------------\n");
      return true;
    }
    console.log(this.name + " has died!");
    return false;
  };

  // attack - player 2 is the one being attacked
  Character.prototype.attack = function (playerTwo) {
    // player 2 HP reduced by the strength value of player 1
    playerTwo.hitpoints -= this.strength;
  };
  // levelup - function that increases chars age by 1, strength by 6 and HP by 25
  Character.prototype.levelUp = function () {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  };
  
}


// create two new characters and print their properties
var playerOne = new Character("Sumia", "Bard", "7", "25", "15");
var playerTwo = new Character("Dave", "Rogue", "28", "20", "30");
  
playerOne.printStats();
playerTwo.printStats();

playerTwo.attack(playerOne);
playerOne.printStats();
playerOne.isAlive();

playerTwo.levelUp();
playerTwo.printStats();
  