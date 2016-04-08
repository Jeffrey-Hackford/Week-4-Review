function Pizza (crust, topping1, topping2, topping3) {
  this.crust = crust;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

Pizza.prototype.cost = function() {
  return Crust[0] + newPizza.length;
}
    var Crust = [];
    var newPizza = [];

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    var inputtedTopping = $("#toppings :selected").val();
    var inputtedCrust = $('input[name="crust"]:checked').val();

    newPizza.push(inputtedTopping);
    Crust.push(inputtedCrust);
    // $(".radio-inline").remove();

    if (newPizza.length >= 3) {
      $(".form-group").remove();
      $(".btn-primary").remove();
    }
    console.log("pizza Array = " + newPizza);
    console.log("crust " + Crust);
  });
});
