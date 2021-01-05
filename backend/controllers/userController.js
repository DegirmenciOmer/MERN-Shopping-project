import expressAsyncHandler from "express-async-handler";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//@desc     Authenticate user / get a token
//@route     POST /api/users/login
//@acces     Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  res.send(email, password);
});

export { authUser };
