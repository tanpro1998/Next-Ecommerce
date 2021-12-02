import connectDB from "../../../connect/connectDB";
import User from "../../../models/userModel";
import validate from "../../../validate/validate";
import bcrypt from "bcrypt";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body;
    const errMessage = validate(name, email, password, cf_password);
    if (errMessage) return res.status(400).json({ err: errMessage });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      cf_password,
    });
    await newUser.save();
    res.status(200).json("Register Success");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
