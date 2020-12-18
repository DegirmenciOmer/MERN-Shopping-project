const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const colors = require("colors");
const productRoutes = require("./routes/productRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(errorMiddleware.notFound);

app.use(errorMiddleware.errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT),
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  );
