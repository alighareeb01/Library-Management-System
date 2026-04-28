import bcrypt from "bcrypt";
import { userModel } from "../../database/model/user.model.js";
import { bookModel } from "../../database/model/book.model.js";
import { transModel } from "../../database/model/transaction.model.js";
import { generateToken } from "../../middleware/auth.js";

export const userRegister = async (req, res) => {
  let { name, email, password, role } = req.body;

  let userFound = await userModel.findOne({ email });
  if (userFound) {
    return res.json("already exist");
  }
  let hashed = await bcrypt.hash(password, 10);
  console.log(hashed);

  let addedUser = await userModel.insertOne({
    name,
    email,
    password: hashed,
    role,
  });
  res.json({ Message: "registerd succcessful ", addedUser });
};
export const userLogin = async (req, res) => {
  let { email, password } = req.body;
  let userFound = await userModel.findOne({ email });
  if (!userFound) {
    return res.json("user not found");
  }
  let passCorrect = await bcrypt.compare(password, userFound.password);
  if (!passCorrect) {
    return res.json("incorrect password");
  }
  let { token } = generateToken(userFound);
  res.json({ message: "logged", userFound, token });
};

export const userProfile = async (req, res) => {
  console.log(req.user);

  let user = await userModel.findById(req.user._id).select("-password");
  if (!user) return res.json("not found");

  res.json(user);
};
