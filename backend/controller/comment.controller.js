const express = require("express");
const { insertComment, setComment } = require("../models/comment.model");
const { deleteByProperty } = require("../models/general.model");

module.exports.createComment = (req, res) => {
  let { comment_id, photo_id, user_id, comment_create_time, comment_content } =
    req.body;
  insertComment(
    comment_id,
    photo_id,
    user_id,
    comment_create_time,
    comment_content
  )
    .then(() =>
      res.status(201).json({ status: true, message: "Create successfully " })
    )
    .catch((err) => res.status(500).json({ err }));
};
module.exports.updateComment = (req, res) => {
  let { property, value, comment_id } = req.body;
  setComment(property, value, comment_id)
    .then(() =>
      res.status(201).json({ status: true, message: "Update successfully " })
    )
    .catch((err) => res.status(500).json({ err }));
};
module.exports.deleteComment = (req, res) => {
  let { id } = req.params;
  deleteByProperty("tb_comment", "comment_id", id)
    .then(() =>
      res.status(201).json({ status: true, message: "Delete successfully " })
    )
    .catch((err) => res.status(500).json({ err }));
};
