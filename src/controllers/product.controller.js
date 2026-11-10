import e from "express";
import * as productService from "../services/product.service.js";
import { error } from "node:console";

export async function getAllProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
export async function getProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await productService.getProduct(id);
    if (!product) {
      res.status(404).json({ error: "id " + id + " not found" });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
}

export async function createProduct(req, res) {
  const body = req.body ?? {};

  try {
    const product = await productService.createProduct(body);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create product" });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const body = req.body;

  try {
    const product = await productService.updateProduct(id, body);
    if (!product) {
      res.status(404).json({ error: "id " + id + " not found" });
      return;
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await productService.deleteProduct(id);
    if (!product) {
      res.status(404).json({ error: "id " + id + " not found" });
      return;
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete product" });
  }
}
