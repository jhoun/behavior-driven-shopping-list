const expect = chai.expect;
//takes all objects and add should to it
chai.should();

describe('ShoppingListItem', () => {

  let myShoppingListItem;

  beforeEach(function () {
    myShoppingListItem = new ShoppingListItem("shoes", "checkered vans");
  });

  it('should be a class', () => {
    ShoppingListItem.should.be.a("function");
  });

  it('should have a name property', () => {
    expect(myShoppingListItem).to.have.property('name');
  })

  it('should have a description property', () => {
    expect(myShoppingListItem).to.have.property('description');
  })

  it('should have a is_done property', () => {
    expect(myShoppingListItem).to.have.property('is_done');
  })

  describe('constructor()', () => {
    // it('should have 2 arguments', () => {
    //   let otherShoppingListItem = new ShoppingListItem("iphone", "a smart phone");
    //   expect(otherShoppingListItem.name).to.be("iphone");
    //   expect(otherShoppingListItem.description).to.be("a smart phone");
    // })
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
      let finished = myShoppingListItem.getIsDone();
      myShoppingListItem.render().should.equal(`<li class="completed_><span>shoes</span><span>checkered vans</span></li>`);
    });

  });


});