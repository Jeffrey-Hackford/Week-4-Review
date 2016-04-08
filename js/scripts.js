function Pizza (crust, topping1, topping2, topping3) {
  this.crust = crust;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

var inputtedTopping1 = parseInt($("#toppings :selected").val());

var newPizza = new Pizza
