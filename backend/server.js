const express = require("express");
const server = express();
const port = 8000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
//use thir-party middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(cors());
//import Router
const authRoutes = require("./routes/auth.routes");
const { checkToken } = require("./middleware/auth.middleware");
const { login } = require("./controller/auth.controller");
const mediaRoutes = require("./routes/photo.routes");

//use Router
server.use("/api/v1/auth", authRoutes);
server.use("/api/v1/media", mediaRoutes);
server.post("/test", login);
server.listen(8000, () => {
  console.log("listen port : 8000");
});
