class Pizza {
  constructor() {
    this.size = ""
    this.toppings = [];
    this.price = 0;
  }

  set size(size) {
    this.size = size;
  }

  set toppings(toppings) {
    this.toppings.push(toppings);
  }

  set price(size, toppings) {
    if (size === "Small") {
      this.price += 10;
    } else if (size === "Medium") {
      this.price += 12;
    } else if (size === "Large") {
      this.price += 15;
    }
    this.price += 0.5 * toppings.length;
  }


}