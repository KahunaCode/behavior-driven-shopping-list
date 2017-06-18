/*jshint esversion: 6 */
class ShoppingListItem {
  constructor(name, description, id) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.is_done = false;
  }

  check(){
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    var itemStr = `
    <input class="checkbox" type="checkbox" id="${this.id}" ${this.is_done ? "checked" : ""}>\n
    <span>${this.name}</span>\n
    <span>${this.description}</span>
    `;
    return itemStr;
    //`<li class="completed_${this.is_done}"><input class="checkbox" type="checkbox" id="${this.id}"><span>${this.name}</span> <span>${this.description}</span>`
  }
}