export class Pizza {
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