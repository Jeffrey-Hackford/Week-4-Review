function Pizza (crust, topping1, topping2, topping3) {
  this.crust = crust;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}


$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza (inputtedCrust, topping1, topping2, topping3);

    var inputtedCrust = $('input[name="crust"]:checked').val();
    var topping1 = $("#topping1 :selected").val();
    var topping2 = $("#topping2 :selected").val();
    var topping3 = $("#topping3 :selected").val();

    console.log(newPizza);
  });
});
