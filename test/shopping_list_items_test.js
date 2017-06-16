/*jshint esversion: 6 */
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

  it('has a method named uncheck', function() {
    expect(milk.uncheck).to.be.a('function');
    milk.uncheck();
    expect(milk.is_done).to.equal(false);
  });

  it('has a method named render', function() {
    expect(milk.render).to.be.a('function');
    expect(milk.render()).to.be.a('string');
    expect(milk.render()).to.equal(`<li class="completed_${milk.is_done}"><span>${milk.name}</span> <span>${milk.description}</span>`);
  });
});

var SL = require('../js/shopping_list.js');

describe('ShoppingList', function() {
  var ShoppingListItem = SLI;
  var ShoppingList = SL;
  var cheese;

  beforeEach(function() {
    cheese = new ShoppingList('swiss');
  });

  it('should be a class', function() {
    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property named items', function() {
    expect(cheese.items).to.not.equal(undefined);
  });

  it('has a constructor methods that initialized items as an empty array', function () {
    expect(cheese.items).to.be.a('array');
  });

  it('has method addItem', function() {
    var temp = new ShoppingListItem('milk', 'cows');
    expect(cheese.addItem).to.have.lengthOf(1);
    cheese.addItem(temp);
    expect(cheese.items.length).to.equal(1);
    expect(cheese.items[0]).to.be.an.instanceof(ShoppingListItem);
  });

  it('has a method removeItem', function() {
    var temp = new ShoppingListItem('milk', 'cows');
    cheese.addItem(temp);
    cheese.removeItem(temp);
    expect(cheese).to.not.include(temp);
    expect(cheese.removeItem()).to.equal(items = items.pop());
    var temp2;
    expect(cheese.removeItem(temp2).to.be.an('error'));
  });

});