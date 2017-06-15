var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

var SLI = require('../js/shopping_list_item.js');

describe('ShoppingListItem', function(){

  var ShoppingListItem = SLI;
  var milk;

  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property named name', function() {
    milk = new ShoppingListItem('milk');
    expect(milk.name).to.equal('milk');
  });

  it('should have property named description', function(){
    milk = new ShoppingListItem('milk', 'cows');
    expect(milk.description).to.equal('cows');
  });

  it('should have a property named is_done', function() {
    milk = new ShoppingListItem('milk', 'cows', true);
    expect(milk.is_done).to.equal(true);
  });

  it('has constructor method with two arguments name and description', function() {
      expect(ShoppingListItem.name).to.not.equal(undefined);
      expect(ShoppingListItem.description).to.not.equal(undefined);
  });
});