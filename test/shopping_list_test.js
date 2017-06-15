var chai = require("chai");
var expect = chai.expect;
var should = chai.should();

var ShoppingList  = require("../js/shopping_list.js");

describe("Shopping List Class", function(){
  var shoppingList = ShoppingList;
  it('should be a function', function(){
    expect(shoppingList.name).to.be.a('function');
  });
});
