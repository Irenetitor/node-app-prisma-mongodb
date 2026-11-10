import * as productModel from "../models/product.model.js";

export function getAllProducts() {
  return productModel.findAll();
}

export function getProduct(id) {
  return productModel.findById(id);
}

export function createProduct(body) {
  return productModel.createProduct(body);
}

export function updateProduct(id, body) {
  return productModel.updateProduct(id, body);
}

export function deleteProduct(id) {
  return productModel.deleteProduct(id);
}
