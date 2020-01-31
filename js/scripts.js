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

  setToppings(toppings) {
    this.toppings.push(toppings);
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

function displayPrice(price) {
  $(".price").empty();
  $(".price").append(`<h5>Current Price: ${price}</h5>`)
}


// USER INTERFACE LOGIC
$(document).ready(function(){
  let pizza = new Pizza();
  pizza.setPrice(pizza.getSize(), pizza.getToppings());
  displayPrice(pizza.getPrice());
  

  $("form").submit(function(event){
    event.preventDefault();


  })
})