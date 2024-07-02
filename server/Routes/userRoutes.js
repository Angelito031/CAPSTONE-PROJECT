const express = require("express");
const UserRouter = express.Router();
const errorHandler = require("../Utils/errorHandler");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteAllUser,
  getSpecificUser,
  deleteSpecificUser,
} = require("../Controllers/userController");

UserRouter.route("/")
  .get(getAllUser, errorHandler)
  .post(createUser, errorHandler)
  .delete(deleteAllUser, errorHandler);
UserRouter.route("/:id")
  .get(getSpecificUser, errorHandler)
  .patch(updateUser, errorHandler)
  .delete(deleteSpecificUser, errorHandler);

module.exports = UserRouter;
