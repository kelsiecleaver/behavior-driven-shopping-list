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
unchecked(){
  this.finsihed = false;
  return this.finsihed;
}

}
module.exports=ShoppingListItem;
