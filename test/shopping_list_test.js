var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function(){

  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('class');
  });
});