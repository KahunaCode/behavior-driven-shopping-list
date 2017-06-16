var button = document.getElementById('add_shopping_list_item_button');
var content = document.getElementById('content');

var shoppingList = new ShoppingList();
var new_shopping_list_item;

var title, description;

button.addEventListener('click', function() {
  add_to_shopping_list();
});

function add_to_shopping_list() {
  title = document.getElementById('title').value;
  description = document.getElementById('description').value;
  console.log(title + " " + description);
  new_shopping_list_item = new ShoppingListItem(title, description);
  shoppingList.addItem(new_shopping_list_item);
  console.log(new_shopping_list_item.render());

  content.innerHTML += new_shopping_list_item.render();

}