import express from "express";

//schema
import User from "../models/user-model.js";

//controller
import getAllUsers from "../controllers/users-controller.js";

const router = express.Router();

router.get("/", () => getAllUsers);

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const users = new User(req.body);
    await users.save();
    res.status(200).send(users.toJSON());
  } catch (error) {
    res.status(400).send(console.log(error));
  }
});

export default router;
