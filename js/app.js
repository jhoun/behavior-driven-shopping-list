var jaysList = new ShoppingList();
reRenderShoppingList();


function add_to_shopping_list(){
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);
  jaysList.addItems(new_shopping_list_item);
  // console.log(jaysList.render());
  document.getElementById('content').innerHTML = jaysList.render();
}


function reRenderShoppingList(){
  document.getElementById('content').innerHTML = jaysList.render();
}



// functionn itemDeleteBtunClick(itemIdx, btnEleement) {
//   console.log("itemIdx", itemIdx_;)
// }

function changeCheckedStatus(idx, checkbox) {
  if (checkbox.checked) {
    console.log('checked');
    jaysList.getItemById(idx).check() //i can use check() because this is an instance of shoppingListItem
    console.log(jaysList.getItemById(idx));//shows my shoppingListItems that are from my constructor
  } else {
    console.log('unchecked');
    jaysList.getItemById(idx).uncheck();
    console.log(jaysList.getItemById(idx));
  }
}



//The right way to add HTML
// Use li = document.created Element(‘li”
// Dd span
// Add another spawn
// Add content
// Var delete bin = document.createElement(‘button’);
// deleteBtn.innerHtml = “&times;”
// Deletebtn.addeventlistener(‘click, () => {
// console.log(“delete this shoppingListIteme);


// Return li.outerHTML
