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
    this.price += 0.5 * toppings.length;
  }

  getPrice() {
    return this.price;
  }
}

function displayPrice(pizza) {
  pizza.setPrice(pizza.getSize(), pizza.getToppings());
  let price = pizza.getPrice();
  $(".price").empty();
  $(".price").append(`<h5>Current Price: ${price}</h5>`)
}

function displayToppings(toppingList) {
  $('.topping-imgs').empty();
  for (let i = 0; i < toppingList.length; i++) {
    let toppingName = toppingList[i];
    $('.topping-imgs').append(`<img src="img/${toppingName}.png"></img>`);
  }
}


// USER INTERFACE LOGIC
$(document).ready(function(){
  let pizza = new Pizza();
  displayPrice(pizza);

  // On radio click (select size)
  $("input#size").click(function(){
    let size = $('input[name=size]:checked').val();
    pizza.setSize(size);
    displayPrice(pizza);
  });

  // On checkbox click (select toppings)
  $("input#topping").click(function(){
    let currentTopping = $(this).val();
    console.log("toppings before" + pizza.getToppings())
    pizza.setToppings(currentTopping);
    console.log("toppings after" + pizza.getToppings());
    displayPrice(pizza);
    displayToppings(pizza.getToppings());
  })

  
  $("form").submit(function(event){
    event.preventDefault();


  })
})


$("input:checkbox[name=toppings]:checked").each(function(){
  let topping = $(this.val());
  userToppings.push(topping);
  $('.topping-imgs').append(`<img src="img/${topping}"></img>`);
});