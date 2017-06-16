/*jshint esversion: 6 */
class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(thing){
    try {
      this.items.push(thing);
    }
    catch  (e) {
      console.log(e);
    }
  }

}

module.exports = ShoppingList;