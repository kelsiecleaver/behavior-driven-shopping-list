var ShoppingListItem  = require("../js/shopping_list_item.js");
class ShoppingList{
  constructor(){
    this.item=[];

  }
  addItems(item){
    if(item instanceof ShoppingListItem){
      this.item.push(item.name);
      console.log(this)
      return this.item;
    }else{
      throw new Error("ERROR");
    }
  }

removeItem(item){
  if(this.item.length > 0 && item instanceof ShoppingListItem){
    var removed = this.item.indexOf(item);
    this.item.splice(removed, 1);
    return this.item;
  }else if(this.item.length > 0){
    this.item.pop();
    return this.item;
    }else{
      throw new Error("ERROR");
    }
  }
  render(item){
     console.log(this.item);
    return `<ul>${this.item.toString()}</ul>`

  }
}




module.exports=ShoppingList;
