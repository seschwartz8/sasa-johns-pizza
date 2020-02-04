import { Pizza } from '../src/pizza.js';

describe('Pizza', () => {

  var pizza;
  beforeEach(() => {
    pizza = new Pizza();
  });

  test('should correctly create pizza object with size small, no toppings, and price of zero', () => {
    expect(pizza.size).toEqual("small");
    expect(pizza.toppings).toEqual([]);
    expect(pizza.price).toEqual(0);
  });

  test('should change size of pizza object to inputted size', () => {
    pizza.setSize("medium")
    expect(pizza.size).toEqual("medium");
  });

  test('should return correct size of pizza object', () => {
    expect(pizza.getSize()).toEqual("small");
  });

  test('should add new topping to list of toppings', () => {
    pizza.setToppings("pepperoni");
    expect(pizza.toppings).toEqual(["pepperoni"]);
  });

  test('should remove existing topping from toppings list', () => {
    pizza.setToppings("pepperoni");
    pizza.setToppings("pepperoni");
    expect(pizza.toppings).toEqual([]);
  });

  test('should return correct toppings of pizza object', () => {
    pizza.setToppings("pepperoni");
    pizza.setToppings("mushrooms");
    expect(pizza.getToppings()).toEqual(["pepperoni", "mushrooms"]);
  });

  test('should return correct price of pizza object', () => {
    expect(pizza.getPrice()).toEqual(0);
  });

  test('should correctly update price of pizza object according to size and toppings', () => {
    pizza.setSize("large");
    pizza.setToppings("mushrooms");
    pizza.setPrice(pizza.getSize(), pizza.getToppings());
    expect(pizza.getPrice()).toEqual(15.5);
  });
});