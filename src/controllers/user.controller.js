import * as userService from "../services/user.service.js";

export async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

export async function createUser(req, res) {
  const { email, username, name } = req.body ?? {};

  // if (typeof name !== "string" || !name.trim()) {
  //   return res.status(400).json({
  //     error: "Name is required",
  //   });
  // }

  try {
    const user = await userService.createUser(email, username, name);
    res.status(user.status).json(user.message);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
}
