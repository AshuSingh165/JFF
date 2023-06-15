// const user = require("../Modal/user_schema");
const express = require("express");
const router = express.Router();
const {
  handleAllUser,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleletUserById
} = require("../controllers/usercontroller");

router.route("/").get(handleAllUser).post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleletUserById);

// router
// .route("/:id")
// .get(handleGetUserbyId)
// .get(handleCreateUserbyId)
// .patch(handleUpdateUserbyId)
// .delete(handleDeleteUserbyId)

module.exports = router;
