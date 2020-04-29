const Order = require("./order");
const Item = require("./item");
​
class Restaurant {
  constructor(name) {
    this.name = name;
    this.ordersToPrepare = [];
    this.revenue = 0;
  }
​
  // This takes in an order object and processes it
  takeOrder(orderObj) {
    // Get the price from the item object and add it to revenue
    this.revenue += orderObj.item.price;
​
    // Add the order object to the orders array for the restaurant
    this.ordersToPrepare.push(orderObj);
​
    console.log(`Added #${orderObj.id} to the queue`);
    this.printRevenue();
  }
​
  printRevenue() {
    console.log(`${this.name} has made ${this.revenue} so far!`);
  }
​
  // We use setInterval so that this process keeps running as long as there are
  // orders in the queue
  prepareOrders() {
    const prepareInterval = setInterval(() => {
      // If there are no more orders, exit this process
      if (this.ordersToPrepare.length === 0) {
        console.log("Finished cooking all orders!");
​
        clearInterval(prepareInterval);
      
      // If there are orders, process the next one up
      } else {
        // .shift() removes the first element from the array
        // (because it's been prepared)
        const finishedOrder = this.ordersToPrepare.shift();
        
        // Our orders array has been decreased by 1
​
        // Console log out an update
        console.log(`#${finishedOrder.id} has been prepared.`);
      }
    }, 1000);
  }
}
​
// Instantiate a new restaurant
const restaurant = new Restaurant("McJared's");
  // restaurant.name = "McJared's"
  // restaurant.orders = []
  // restaurant.revenue = 0;
​
// Instantiate new objects for each menu item
const items = [
  new Item("Burger", 5.99),
  new Item("Soda", 3.5),
  new Item("Chips", 2.0)
];
​
// Loop through all the items and instantiate an Order object for each one
// The .map() function creates a new array with whatever is returned inside of it
// This simulates order(s) being placed from somewhere else
const orders = items.map(itemObj => {
  return new Order(itemObj)
})
​
/*
 orders array: [ OrderObj, OrderObj, OrderObj ]
*/
​
// Loop through the order objects and call the restaurant's takeOrder() method for each
// This is where we react to an order being placed
orders.forEach(order => restaurant.takeOrder(order));
​
// Call the restaurant's prepareOrders() method
restaurant.prepareOrders();