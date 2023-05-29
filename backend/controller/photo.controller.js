const epress = require("express");
const multer = require("multer");
const { findByProperty, deleteByProperty } = require("../models/general.model");
const { setPhoto } = require("../models/photo.model");

module.exports.uploadSingle = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      link: `http://locahost:8000/public/assits/images/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};
module.exports.getDetailPhoto = async (req, res) => {
  console.log("photocontroller:24");
  let { id } = req.params;
  let resData = {};
  await findByProperty("tb_photo", "photo_id", id).then((dataPhoto) => {
    resData.dataPhoto = dataPhoto[0];
    findByProperty("tb_user", "user_id", dataPhoto[0].user_id)
      .then((dataOwner) => {
        console.log("photocontroller:30");
        resData.dataOwner = { ...dataOwner[0] };
      })
      .catch((err) => {
        console.log("photocontroller:31");
        res.status(500).json({ err });
      });
  });
  findByProperty("tb_comment", "photo_id", id)
    .then((comments) => {
      if (comments[0]) {
        comments[0].forEach(async (comment) => {
          await findByProperty("tb_user", "user_id", comment.user_id)
            .then((userComment) => {
              resData.userComment.push(userComment[0]);
            })
            .catch((err) => res.status(500).json({ err }));
        });
      }
      res.status(200).json({ ...resData });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

module.exports.deletePhoto = (req, res) => {
  let { id } = req.params;
  deleteByProperty("tb_photo", "photo_id", id)
    .then(() =>
      res.status(201).json({ status: true, message: "Delete successfully " })
    )
    .catch((err) => res.status(500).json({ err }));
};

module.exports.updatePhoto = (req, res) => {
  let { id } = req.params;
  let { photo_title, photo_content } = req.body;
  setPhoto(photo_title, photo_content, id)
    .then(() =>
      res.status(201).json({ status: true, message: "Update successfully" })
    )
    .catch((err) => res.status(500).json({ err }));
};
