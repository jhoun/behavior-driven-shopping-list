
class ShoppingList{
  constructor(){
    this.items = [];
  }

  addItems(item){
    if(item instanceof(ShoppingListItem)){
      this.items.push(item);
    } else {
      throw new Error("not available");
    }
  }

  removeItems(item){
    if(item === undefined){
      this.items.pop();
    } else if (item instanceof(ShoppingListItem)){
      this.items.splice(this.items.indexOf(item), 1);
    } else {
      throw new Error("not available");
    }
  }

  render(){
  var toRender = [];


    this.items.forEach(function(element) {
      toRender.push(element.render());
    });

    return '<ul>' + toRender +  '</ul>';

  }
}