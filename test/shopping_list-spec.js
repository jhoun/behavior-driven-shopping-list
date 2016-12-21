const expect = chai.expect;
//takes all objects and add should to it
chai.should();

describe('ShoppingListItem', () => {
  it('should be a class', () => {
    ShoppingListItem.should.be.a("function");
  });

  // let shoppingListItem;
  // beforeEach(() => {
  //   shoppingListItem = new ShoppingListItem('iphone 7s');
  // });

});