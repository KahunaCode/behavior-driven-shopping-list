/*jshint esversion: 6 */
var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

var SLI = require('../js/shopping_list.js');

describe('ShoppingListItem', function(){

  var ShoppingListItem = SLI;
  var milk;

  beforeEach(function() {
    milk = new ShoppingListItem('milk', 'cows');
  });

  it('should be a class', function() {
    expect(milk.items).to.not.equal(undefined);
  });

});