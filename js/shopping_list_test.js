class ShoppingListItem{
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    this.is_done = true;
  };

  uncheck(){
    this.is_done;
  }

  render(){
    return `<li class="completed_${this.is_done}"><span>${this.name}</span><span>${this.description}</span></li>`;
  }
}


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

  }
}