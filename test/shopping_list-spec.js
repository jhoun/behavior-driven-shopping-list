const expect = chai.expect;
//takes all objects and add should to it
chai.should();

describe('ShoppingListItem', () => {

  let myShoppingListItem;

  beforeEach( () => {
    myShoppingListItem = new ShoppingListItem("shoes", "checkered vans");
  });

  it('should be a class', () => {
    ShoppingListItem.should.be.a("function");
  });

  it('should have a name property', () => {
    myShoppingListItem.should.have.property('name');
  })

  it('should have a description property', () => {
    myShoppingListItem.should.have.property('description');
  })

  it('should have a is_done property', () => {
    myShoppingListItem.should.have.property('is_done');
  })

  describe('constructor()', () => {
    it('should have 2 arguments', () => {
      let otherShoppingListItem = new ShoppingListItem("iphone", "a smart phone");
      expect(otherShoppingListItem.name).to.equal("iphone");
      expect(otherShoppingListItem.description).to.equal("a smart phone");
    })
    it('should have 2 arguments that are passed through properties', () => {
      myShoppingListItem.name.should.be.equal('shoes');
      myShoppingListItem.description.should.be.equal('checkered vans');
    })
  })

  describe('check()', () => {
    it('should be a method', () => {
      myShoppingListItem.check.should.be.a('function');
    });

    it('is_done to be true', () => {
      myShoppingListItem.check();
      myShoppingListItem.is_done.should.equal(true);
    });
  })

  describe('uncheck()', () => {
    it('should be a method', () => {
      myShoppingListItem.uncheck.should.be.a('function');
    });
  it('is_done to be false', () => {
      myShoppingListItem.uncheck();
      myShoppingListItem.is_done.should.equal(false);
    });
  })

  describe('render()', () => {
    it('should be a method', () => {
      myShoppingListItem.render.should.be.a('function');
    });

    it('should return html formatted string', () => {
      myShoppingListItem.render().should.equal(`<li class="completed_false"><span>shoes</span><span>checkered vans</span></li>`);
    });

    it('should return html formatted string when uncheck method is invoked', () => {
      myShoppingListItem.check();
      myShoppingListItem.render().should.equal(`<li class="completed_true"><span>shoes</span><span>checkered vans</span></li>`);
    });
  });
})

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
  })
});