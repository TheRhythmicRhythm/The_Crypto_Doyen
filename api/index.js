// MODULES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const postsRoute = require("./routes/posts");

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

// DOT_ENV_CONFIG
dotenv.config();

// CONNECTION TO MONGO_DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo db na ti wa online "))
  .catch((err) => {
    console.log("mongo err");
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("test is successful");
});

// ENABLES REQ IN JSON FORMAT
app.use(express.json());

//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/posts", postsRoute);

// SERVER_PORT
app.listen(process.env.PORT || 5000, () => {
  console.log("Rhythmic server ti wa online");
});
