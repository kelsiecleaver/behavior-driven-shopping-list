var ShoppingListItem  = require("../js/shopping_list_item.js");
class ShoppingList{
  constructor(){
    this.item=[];

  }
  addItems(item){
    if(item instanceof ShoppingListItem){
      this.item.push(item.name)
      return this.item
    }else{
      throw new Error("ERROR");
    }
  }
  
}



module.exports=ShoppingList;
