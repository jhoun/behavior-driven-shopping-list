let uniqueID = 0;


class ShoppingListItem{
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
    this._idx = "shoppingListItem_" + uniqueID++;
  }

  check(){
    this.is_done = true;
  };

  uncheck(){
    this.is_done = false;
  }

  render(){
    return `<li class="completed_${this.is_done}" id="${this._idx}"><span>${this.name}</span><span> ${this.description}</span><input type="checkbox" onlick onchange="changeCheckedStatus('${this._idx}', this)"></li>`;
  }
}

