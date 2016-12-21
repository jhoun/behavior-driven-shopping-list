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


  describe('constructor()', () => {

  })
  it('should have a name property', () => {
    expect(myShoppingListItem).to.have.property('name');
  })
  // let shoppingListItem;
  // beforeEach(() => {
  //   shoppingListItem = new ShoppingListItem('iphone 7s');
  // });

});