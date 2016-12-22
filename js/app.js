var jaysList = new ShoppingList();
reRenderShoppingList();


function add_to_shopping_list(){
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);
  jaysList.addItems(new_shopping_list_item);
  document.getElementById('content').innerHTML = jaysList.render();
}


function reRenderShoppingList(){
  document.getElementById('content').innerHTML = jaysList.render();
}