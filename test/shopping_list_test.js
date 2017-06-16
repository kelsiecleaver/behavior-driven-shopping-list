var chai = require("chai");
var expect = chai.expect;
var should = chai.should();

var ShoppingListItem  = require("../js/shopping_list_item.js");
var ShoppingList= require("../js/shopping_list.js");

describe("Shopping List Item Class", function(){
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
  });


  it("should be finished", function(){
    var jerky= new ShoppingListItem("jerky", "delicious");
   jerky.finished.should.equal(false);
  });


  it("should have a method checked()", function(){
    var jerky = new ShoppingListItem();
    expect(jerky.checked()).to.equal(true);
  });

    it("should have a method checked()", function(){
      var jerky = new ShoppingListItem();
      expect(jerky.unchecked()).to.equal(false);
    });

    it('should have a method render, should be a string', function(){
      var jerky = new ShoppingListItem("jerky","delicious");
          expect(jerky.render).to.be.a("function");
    expect(jerky.render()).to.be.a("string");
    expect(jerky.render()).to.equal(`<li class="completed_${jerky.finished}"><span>${jerky.name}</span><span>${jerky.description}</span></li>`);

    });
});



    describe("Shopping List Class", function(){
      var shoppingList= ShoppingList;
      var coffee;
      beforeEach(function(){
       coffee= new ShoppingList("Coffee")
      })

      it('should be a function', function(){
        expect(shoppingList).to.be.a('function');
      });

      it('should have property named item that is initialized as an empty array', function(){
      expect(coffee.item).to.be.an("Array");
      });

      it('should be a method', function(){
        expect(coffee.addItems).to.be.a("function")
      });
      it('should add item into shoppingList', function(){
        var donut= new ShoppingListItem("donut")
        expect(coffee.addItems(donut)).to.deep.equal(['donut'])
      });




    })
