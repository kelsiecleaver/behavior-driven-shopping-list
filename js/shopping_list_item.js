class ShoppingListItem{

  constructor(name, description) {
    this.name = name;
    this.description= description;
    this.finished= false;
}

checked(){
  this.finished = true;
  return this.finished;
}

}
module.exports=ShoppingListItem;
