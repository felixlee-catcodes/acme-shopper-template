const { expect } = require("chai");
const { syncAndSeed, User } = require("../server/db");
const jwt = require("jsonwebtoken");
const { describe } = require("mocha");

describe("the shopping process", () => {
  let seed;
  beforeEach(async () => {
    seed = await syncAndSeed();
  });
  describe("getting a cart", () => {
    describe("if the cart does not exist", () => {
      it("gets created", async () => {
        const cart = await seed.users.moe.getCart();
        expect(cart).to.be.ok;
      });
    });
    describe("if the cart does exist", () => {
      it("returns the existing cart", async () => {
        let cart = await seed.users.larry.getCart();
        console.log(cart);
        const id = cart.id;
        cart = await seed.users.larry.getCart();
        expect(cart.id).to.equal(id);
      });
    });
  });
  describe("adding a product to a cart", () => {
    describe("product is not in a lineItem", () => {
      it("the lineItem gets created", async () => {
        const foo = await seed.products.foo;
        const larry = await seed.users.larry;
        const cart = await larry.addToCart({ product: foo, quantity: 2 });
        console.log(cart);
        expect(cart.lineItems.length).to.equal(1);
      });
    });
    describe("product is a lineItem", () => {
      it("the lineItem gets updated", async () => {
        const foo = await seed.products.foo;
        const larry = await seed.users.larry;
        await larry.addToCart({ product: foo, quantity: 2 });
        const cart = await larry.addToCart({ product: foo, quantity: 3 });
        expect(cart.lineItems.length).to.equal(1);
        expect(cart.lineItems[0].quantity).to.equal(5);
      });
    });
  });
});
