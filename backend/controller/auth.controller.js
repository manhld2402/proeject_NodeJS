const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { insertAuth } = require("../models/auth.model");
const { findByProperty } = require("../models/general.model");
module.exports.signup = (req, res) => {
  let user_id = Math.floor(Math.random() * 1000000);
  let { user_email, password, user_birthdate } = req.body;
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(password, salt);
  console.log(hashPassword);
  insertAuth(user_id, user_email, hashPassword, user_birthdate)
    .then(() =>
      res
        .status(201)
        .json({ status: "success", message: "Signup successfully" })
    )
    .catch((err) => {
      res.status(500).json({ status: "fail", messs: err });
    });
};
module.exports.login = async (req, res) => {
  let { user_email, password } = req.body;
  try {
    let result = await findByProperty("tb_user", "user_email", user_email);
    let [find] = result[0];
    if (result[0].length == 0) {
      res
        .status(404)
        .json({ status: "fail", message: "Check email or password" });
    } else {
      let checkPassword = bcrypt.compareSync([password, find.password]);
      if (checkPassword) {
        let accessToken = jwt.sign({ user_email: find.user_email }, "project", {
          expiresIn: 60,
        });
        res.json({
          status: "success",
          accessToken,
          message: "Login successfully",
        });
      } else {
        res
          .status(404)
          .json({ status: "fail", message: "Check email or password" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
