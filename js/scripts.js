function Pizza (crust, topping1, topping2, topping3) {
  this.crust = crust;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

Pizza.prototype.cost = function(newPizza) {
  return newPizza.crust + newPizza.topping1 + newPizza.topping2 + newPizza.topping3;
}

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    var crust = parseInt($('input[name="crust"]:checked').val());
    var topping1 = parseInt($("#topping1 :selected").val());
    var topping2 = parseInt($("#topping2 :selected").val());
    var topping3 = parseInt($("#topping3 :selected").val());

    var newPizza = new Pizza (crust, topping1, topping2, topping3);

    var totalPrice = newPizza.cost(newPizza);

    $("#orderTotal").text(totalPrice);
    $("#displayOrder").show();
  });
});
