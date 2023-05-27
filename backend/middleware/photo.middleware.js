const express = require("express");
const multer = require("multer");

// config storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/assits`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let ext = file.mimetype.split("/")[file.mimetype.split("/").length - 1];
    cb(null, file.fieldname + "-" + uniqueSuffix + `.${ext}`);
  },
});
const upload = multer({ storage: storage }).single("uploaded_file");

module.exports.uploadFile = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({ err });
    } else {
      next();
    }
  });
};
