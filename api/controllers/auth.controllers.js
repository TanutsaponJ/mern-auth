import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import Jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "Email already exists"));
    const isValidPassword = bcryptjs.compareSync(password, validUser.password);
    if (!isValidPassword) return next(errorHandler(401, "wrong password"));
    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiresDate = new Date(Date.now() + 24 * 3600000); // the cookie will expire in 24 hours
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expiresDate,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
