const expect = chai.expect;
//takes all objects and add should to it
chai.should();

describe('ShoppingListItem', () => {

  let myShoppingListItem;

  beforeEach(function () {
    myShoppingListItem = new ShoppingListItem("iphone");
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

  })

  // let shoppingListItem;
  // beforeEach(() => {
  //   shoppingListItem = new ShoppingListItem('iphone 7s');
  // });

});