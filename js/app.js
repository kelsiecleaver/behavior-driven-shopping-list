
var newList = new ShoppingList();
var rendAgain = newList.render();

// var somethingContent = document.getElementById("content");
// somethingContent.innerHTML= rendAgain;


var renderBox = document.createElement("div");
renderBox.className = "renderBox";

document.getElementById("content").appendChild(renderBox);

function addToShoppingList(){

var title = document.getElementById("title").value;
var description = document.getElementById("description").value;
var newShoppingListItem = new ShoppingListItem(title, description);
newList.addItems(newShoppingListItem);
rendAgain = newList.render();
renderBox.innerHTML = rendAgain;

console.log(description);

}


