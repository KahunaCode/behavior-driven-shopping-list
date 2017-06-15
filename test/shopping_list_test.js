var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

var SLI = require('../js/shopping_list_item.js');

describe('ShoppingListItem', function(){

  var ShoppingListItem = SLI;

  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property named "name"', function() {
    expect(ShoppingListItem).to.have.property('name');
  });
});