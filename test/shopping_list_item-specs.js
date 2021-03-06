// const expect = chai.expect;
// //takes all objects and add should to it
// chai.should();

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
      myShoppingListItem.render().should.equal(`<li class="completed_false"><span>shoes</span><span> checkered vans</span></li>`);
    });

    it('should return html formatted string when uncheck method is invoked', () => {
      myShoppingListItem.check();
      myShoppingListItem.render().should.equal(`<li class="completed_true"><span>shoes</span><span> checkered vans</span></li>`);
    });
  });
})
