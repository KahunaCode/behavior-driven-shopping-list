/*jshint esversion: 6 */
class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(thing){
    if(thing instanceof ShoppingListItem) {
      this.items.push(thing);
    } else {
      throw new Error("Error!");
    }
  }

  removeItem(thing) {
    if(this.items.length > 0) {
      if(thing instanceof ShoppingListItem) {
        if(thing) {
          if(this.items.indexOf(thing) >= 0) {
            this.items.splice(this.items.indexOf(thing), 1);
          }
        } else {
          this.items.pop();
        }
      } else {
        throw new Error("Error!");
      }
    }
  }

  render() {
    var expectedOutput = "<ul>";
    for (var i = 0; i < this.items.length; i++) {
      expectedOutput += this.items[i].render();
    }
    expectedOutput += "</ul>";
    return expectedOutput;
  }

}