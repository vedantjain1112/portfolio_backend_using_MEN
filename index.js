require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./DataBase");
const portfolioRouter = require("./routers/PortfolioRouter");
const serviceRouter = require("./routers/ServiceRouter");
const aboutRouter = require("./routers/AboutRouter");
const skillRouter = require("./routers/SkillRouter");
const mySelfRouter = require("./routers/MySelfRouter");

const app = express();
const PORT = process.env.port || 4010;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

connectDB();

app.use("/", portfolioRouter);
app.use("/", serviceRouter);
app.use("/", aboutRouter);
app.use("/", skillRouter);
app.use("/", mySelfRouter);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
