class ShoppingListItem{

  constructor(name, description, finished) {
    this.name = name;
    this.description= description;
    this.finished= finished;
}

checked(){
  this.finished = true;
  return this.finished;
}
unchecked(){
  this.finished = false;
  return this.finished;
}
render(){
  return `<li class="completed_${this.finished}"><span>${this.name}</span><span>${this.description}</span></li>`
}

}






