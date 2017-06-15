var chai = require("chai");
var expect = chai.expect;
var should = chai.should();

var ShoppingListItem  = require("../js/shopping_list_item.js");

describe("Shopping List Class", function(){
  var shoppingListItem = ShoppingListItem;

  it('should be a function', function(){
    expect(shoppingListItem).to.be.a('function');
  });

  it('should have property name', function(){
  var jerky= new ShoppingListItem("Jerky");
  expect(jerky.name).to.equal("Jerky");
  });

  it("should have a description", function(){
    var jerky= new ShoppingListItem("jerky", "delicious");
    expect(jerky.description).to.equal("delicious");
  })
  it("should be finished", function(){
    var jerky= new ShoppingListItem("jerky", "delicious", "finished");
    expect(jerky.finished).to.equal("finished");
  })

});
