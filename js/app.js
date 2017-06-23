
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

var newItem = new ShoppingListItem(title, description);
newList.addItems(newItem);
renderBox.innerHTML = newList.render();

var allItems = document.querySelectorAll(' .grocery-item input');
for(var i = 0; i< allItems.length; i++){
  allItems[i].addEventListener('change', function (event){
    var itemId = event.target.parentNode.id;
    newList.item[itemId].checked();
}
};


