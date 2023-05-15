import jwt from "jsonwebtoken";

import User from "../models/user-model.js";
import HttpError from "../models/http-error.js";

const getUser = async (req, res, next) => {
  try {
    const users = await User.findById(id);
    res.status(200).json({ users });
  } catch (err) {
    const error = new HttpError("Fetching users failed, please try again", 500);
  }
  return next();
};

export default getUser;
