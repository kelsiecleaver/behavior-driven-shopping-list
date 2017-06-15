var chai = require("chai");
var expect = chai.expect;
var should = chai.should();

var ShoppingList  = require("../js/shopping_list_item.js");

describe("Shopping List Class", function(){
  var shoppingListItem = ShoppingListItem;
  it('should be a function', function(){
    expect(shoppingList.name).to.be.a('function');
  });
});
