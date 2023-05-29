const express = require("express");
const { uploadFile } = require("../middleware/photo.middleware");
const {
  postFile,
  getDetailPhoto,
  uploadSingle,
} = require("../controller/photo.controller");
const router = express.Router();
const multer = require("multer");
router.post("/post", uploadFile, uploadSingle);
router.get("/:id", getDetailPhoto);

module.exports = router;
