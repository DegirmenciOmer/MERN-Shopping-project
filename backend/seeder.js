import mongoose from "mongoose";
import { config } from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import { map } from "./data/products.js";
import { deleteMany } from "./models/orderModel.js";
import {
  deleteMany as _deleteMany,
  insertMany,
} from "./models/productModel.js";
import {
  deleteMany as __deleteMany,
  insertMany as _insertMany,
} from "./models/userModel.js";
import connectDB from "./config/db.js";

config();

connectDB();

const importData = async () => {
  try {
    await deleteMany();
    await _deleteMany();
    await __deleteMany();

    const createdUsers = await _insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = map((product) => {
      return { ...product, user: adminUser };
    });

    await insertMany(sampleProducts);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await deleteMany();
    await _deleteMany();
    await __deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
