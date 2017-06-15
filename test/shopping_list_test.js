var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

var SLI = require('../js/shopping_list_item.js');

describe('ShoppingListItem', function(){

  var ShoppingListItem = SLI;
  var milk;

  beforeEach(function() {
    milk = new ShoppingListItem('milk', 'cows');
  });

  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property named name', function() {
    expect(milk.name).to.equal('milk');
  });

  it('should have property named description', function(){
    expect(milk.description).to.equal('cows');
  });

  it('should have a property named is_done', function() {
    expect(milk.is_done).to.equal(false);
  });

  it('has constructor method with two arguments name and description', function() {
      expect(ShoppingListItem).to.have.lengthOf(2);
      expect(milk.name).to.not.equal(undefined);
      expect(milk.description).to.not.equal('description');
  });

  it('has a method named check', function() {
    expect(milk.check).to.be.a('function');
    milk.check();
    expect(milk.is_done).to.equal(true);
  });
});