var button = document.getElementById('add_shopping_list_item_button');
var content = document.getElementById('content');
content.innerHTML = "<ul>";
var counter = 0;
var checkBox;

var shoppingList = new ShoppingList();
var new_shopping_list_item;

var title, description;

button.addEventListener('click', function() {
  add_to_shopping_list();
});

function add_to_shopping_list() {
  title = document.getElementById('title').value; //get title value from input
  description = document.getElementById('description').value; //get description value from input

  new_shopping_list_item = new ShoppingListItem(title, description, counter); //create new shopping list item
  shoppingList.addItem(new_shopping_list_item); //add item to shopping list

  // content.innerHTML = shoppingList.render(); //render item to content div
  var li = document.createElement('li');
  li.innerHTML = new_shopping_list_item.render();
  content.appendChild(li);
  checkBox = document.querySelectorAll('.checkbox');
  for(var i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener('change', changeCheckedStatus);
  }
  counter++;
}

function changeCheckedStatus(event) {
  console.log('test');
}