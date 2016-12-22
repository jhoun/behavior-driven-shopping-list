const expect = chai.expect;
//takes all objects and add should to it
chai.should();

describe('ShoppingList', () => {

  let jaysShoppingList;

  beforeEach( () => {
    jaysShoppingList = new ShoppingList();
  });

  it('should be a class', () => {
    ShoppingList.should.be.a('function');
  });

  it('should have a property', () => {
    jaysShoppingList.should.have.property('items');
  })

  it('should have empty array', () => {
    jaysShoppingList.items.should.deep.equal([]);
  })

  describe('addItem(item)', () => {
    it('should be a method', () => {
      jaysShoppingList.addItems.should.be.a('function');
    })

    it('should be a method passing 1 argument', () => {
      let shoes = new ShoppingListItem('vans', 'checkered slip ons');

      jaysShoppingList.addItems(shoes);
      jaysShoppingList.items.should.contain(shoes);

    });

    it('should be an instanceof of ShoppingListItem', () => {
      let shoes = new ShoppingListItem('vans', 'checkered slip ons');

      jaysShoppingList.addItems(shoes);
      expect(shoes instanceof ShoppingListItem).to.be.true;
    });

    it('should not be an instanceof of ShoppingListItem', () => {
      expect(() => jaysShoppingList.addItem('error')).to.throw(Error);
    });

  });

  describe('removeItems(item)', () => {
    it('should be a method', () => {
      jaysShoppingList.removeItems.should.be.a('function');
    });

    it('should remove an item in the items array', () => {
      let shoes = new ShoppingListItem('vans', 'checkered slip ons');

      jaysShoppingList.addItems(shoes);
      jaysShoppingList.removeItems(shoes);
      jaysShoppingList.items.should.not.contain(shoes);
    })

     it('should pop off last item in array if there are no parameters', () => {
      let shoes = new ShoppingListItem('vans', 'checkered slip ons');
      let shirt = new ShoppingListItem('t-shirt', 'white');
      let hat = new ShoppingListItem('beanie', 'blue');

      jaysShoppingList.addItems(shoes);
      jaysShoppingList.addItems(shirt);
      jaysShoppingList.addItems(hat);
      jaysShoppingList.removeItems();
      jaysShoppingList.items.should.not.contain(hat);


    })

    it('should throw error if not an instance', () => {
      expect(() => jaysShoppingList.removeItems('error')).to.throw(Error);
    });
  })

  describe('render()', () => {
    it('should be a method', () => {
      jaysShoppingList.render.should.be.a('function');
    })
    it('should concatenate the results of ShoppingListItem render()', () => {
      let shoes = new ShoppingListItem('vans', 'checkered slip ons');
      let shirt = new ShoppingListItem('t-shirt', 'white');
      let hat = new ShoppingListItem('beanie', 'blue');

      jaysShoppingList.addItems(shoes);
      jaysShoppingList.addItems(shirt);
      jaysShoppingList.addItems(hat);
      jaysShoppingList.render().should.equal('<ul><li class="completed_false"><span>vans</span><span> checkered slip ons</span></li><li class="completed_false"><span>t-shirt</span><span> white</span></li><li class="completed_false"><span>beanie</span><span> blue</span></span></li></ul>')
      console.log(jaysShoppingList.render());

    })
  })
});


// '<ul><li class="completed_false"><span>vans</span><span> checkered slip ons</span></li><li class="completed_false"><span>t-shirt</span><span> white</span></li><li class="completed_false"><span>beanie</span><span> blue</span></span><button onclick="itemDeleteBtnClick(this._idx)")>&times;</button></li></ul>'