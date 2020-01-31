class Pizza {
  constructor() {
    this.size = "small"
    this.toppings = [];
    this.price = 0;
  }
  setSize(size) {
    this.size = size;
  }
  getSize() {
    return this.size;
  }
  setToppings(selectedTopping) {
    if (!this.toppings.includes(selectedTopping)) {
      this.toppings.push(selectedTopping);
    }
    else {
      this.toppings = this.toppings.filter(function(topping){
        return (topping != selectedTopping);
      })
    }
  }
  getToppings() {
    return this.toppings;
  }
  setPrice(size, toppings) {
    if (size === "small") {
      this.price = 10;
    } else if (size === "medium") {
      this.price = 12;
    } else if (size === "large") {
      this.price = 15;
    }
    this.price += 0.50 * toppings.length;
  }
  getPrice() {
    return this.price;
  }
}

function displayPrice(pizza) {
  pizza.setPrice(pizza.getSize(), pizza.getToppings());
  let price = pizza.getPrice().toFixed(2);
  $(".price").empty();
  $(".price").append(`<h5>Current Price: $${price}</h5>`)
}

function displayToppings(toppingList) {
  $('.topping-imgs').empty();
  for (let i = 0; i < toppingList.length; i++) {
    let toppingName = toppingList[i];
    $('.topping-imgs').append(`<img src="img/${toppingName}.png"></img>`);
  }
}

function displayOrder(pizza) {
  $(".form-content").hide();
  $(".form-results").show();

  // Make size prettier to display
  let size = pizza.getSize();
  let displaySize = size.charAt(0).toUpperCase() + size.slice(1);
  $('#size-result').append(`<li>${displaySize}</li>`);

  // Make toppings list prettier to display
  let toppings = pizza.getToppings();
  let displayToppingsArray = toppings.map(function(topping){
      return topping.charAt(0).toUpperCase() + topping.slice(1);
  });
  let displayToppingsStr = displayToppingsArray.join(", ")
  $('#toppings-result').append(`<li>${displayToppingsStr}</li>`);

  // Display final price
  $('#price-result').append(`<li>$${pizza.getPrice().toFixed(2)}</li>`);
}


///// USER INTERFACE jQUERY /////
$(document).ready(function(){
  let pizza = new Pizza();
  displayPrice(pizza);

  // On click for radio (selecting size)
  $("input#size").click(function(){
    let size = $('input[name=size]:checked').val();
    pizza.setSize(size);
    displayPrice(pizza);
  });

  // On click for checkbox (selecting/unselecting toppings)
  $("input#topping").click(function(){
    let currentTopping = $(this).val();
    pizza.setToppings(currentTopping);
    displayPrice(pizza);
    displayToppings(pizza.getToppings());
  })

  // On submit of form (finish pizza order)
  $("#order-form").submit(function(event){
    event.preventDefault();
    displayOrder(pizza);

    // On click for radio (selecting delivery/pickup)
    $("input.delivery").click(function(){
      let delivery = $('input[name=delivery]:checked').val();
      if (delivery === "yes") {
        $(".address-fields").show();
      } else {
        $(".address-fields").hide();
      }
    });

    // On submit of form (confirm order)
    $("#results-form").submit(function(event){
      event.preventDefault();
      $(".form-results").empty();
      $(".form-results").append("<h4>Order Submitted!</h4>");
    })
  });
  
});