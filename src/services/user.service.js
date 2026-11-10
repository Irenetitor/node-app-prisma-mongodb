import * as userModel from "../models/user.model.js";

export function getUsers() {
  return userModel.findAll();
}

export function createUser(email, username, name) {
  return userModel.create(email, username, name);
}
