const { getDb } = require("../util/database");

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  async save() {
    try {
      const db = getDb();
      const result = await db.collection("products").insertOne(this);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  static async fetchAll() {
    try {
      const db = getDb();
      const products = await db.collection("products").find().toArray();
      console.log(products);
      return products;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Product;
