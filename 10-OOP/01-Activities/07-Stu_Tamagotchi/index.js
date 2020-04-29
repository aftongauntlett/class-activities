const DigitalPal = function (){
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.houeQuality = 100;
}

DigitalPal.prototype.feed = function() {
	if (this.hungry) {
		console.log("That was yummy!");
    this.hungry = false;
    this.sleepy = true;
	} else { console.log("No thanks! I'm full.");
};

DigitalPal.prototype.sleepy = function() {
	if (this.sleepy === false) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

DigitalPal.prototype.play = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

DigitalPal.prototype.increaseAge = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

DigitalPal.prototype.bark = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

DigitalPal.prototype.goOutside = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

DigitalPal.prototype.goInside = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

DigitalPal.prototype.meow = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

DigitalPal.prototype.destroyFurniture = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

DigitalPal.prototype.buyNewFurniture = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

var cat = new DigitalPal(false, false, true, 0, false, 100);
var dog = new DigitalPal(false, false, true, 0, false, 100);

