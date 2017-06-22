
class ShoppingList{
  constructor(item, description){
    this.item = [];
    this.description = [];
  }
  addItems(item){
    if(item instanceof ShoppingListItem){
      this.item.push(item);

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


 render(){
     var rendList = "";
     for (var i = 0; i < this.item.length; i++){
      rendList += this.item[i].render();
     }
     return `<ul>${rendList}</ul>`
     }

}
