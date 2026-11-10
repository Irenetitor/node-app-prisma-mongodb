import { db } from "../prisma/db.ts";

export async function findAll() {
  const allp = await db.orm.products.all().toArray();
  console.log(allp);
  return allp;
}

export async function findById(id) {
  const p = await db.orm.products.where({ id }).first();
  console.log(p);
  return p;
}

export async function createProduct(body) {
  try {
    const product = await db.orm.products.create(body);
    console.log(product);
    return { id: product.id };
  } catch (e) {
    console.log(e);
    throw new Error("todo mal");
  }
}

export async function updateProduct(id, body) {
  try {
    const product = await db.orm.products.where({ id }).update(body);
    console.log(product);
    return product;
  } catch (e) {
    console.log(e);
    throw new Error("todo mal");
  }
}

export async function deleteProduct(id) {
  const p = await db.orm.products.where({ id }).delete();
  console.log(p);
  return p;
}
