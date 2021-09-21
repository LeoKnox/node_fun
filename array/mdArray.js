var menu = [["Salad","Soup","Appetizer"],
           ["Chicken","Beef","Vegetable","Pork"],
           ["Ice Cream", "Fruit"]];

var find = "Beef";


for (var i = 0; i < menu.length; i++) {
  for (var j = 0; j < menu[i].length; j++) {
    console.log(menu[i][j]);
    if (find == menu[i][j]) {
      console.log("Found at x " + i + " and " + j);
    }
  }
  console.log("new");
}
