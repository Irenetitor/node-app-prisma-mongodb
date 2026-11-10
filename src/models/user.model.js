import { db } from "../prisma/db.ts";

export async function findAll() {
  const usersDocuments = await db.orm.users.all().toArray();
  console.log("Model - Fetched users:");
  console.log(usersDocuments);

  return usersDocuments.map((doc) => ({
    id: doc.id,
    email: doc.email,
    username: doc.username,
    name: doc.name,
  }));
}

export async function create(email, username, name) {
  try {
    const user = await db.orm.users.create({
      email,
      username,
      name,
    });
    return "ok";
  } catch (e) {
    console.log(e);
    throw new Error("todo mal");
  }
}

// [ {_id: '1', name: 'John'}, {_id: '2', name: 'Jane'}, {_id: '3', name: 'Bob'}, {_id: '4', name: 'Alice'} ]
// map (doc)
// JSON
// { {"initial": "John"}, {"initial": "Jane"}, {"initial": "Bob"}, {"initial": "Alice"} }
