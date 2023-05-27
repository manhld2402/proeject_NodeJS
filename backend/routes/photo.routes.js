const express = require("express");
const { uploadFile } = require("../middleware/photo.middleware");
const { postFile } = require("../controller/photo.controller");
const router = express.Router();

router.post("/post", uploadFile, postFile);

module.exports = router;
