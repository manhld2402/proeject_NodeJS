const { db } = require("../utils/dataBase.utils");
const mysql = require("mysql2");

module.exports.insertComment = (
  comment_id,
  photo_id,
  user_id,
  comment_create_time,
  comment_content
) => {
  return db.execute(
    `INSERT INTO tb_comment(comment_id,photo_id,user_id,comment_create_time,comment_content)VALUE(?,?,?,?,?)`,
    [comment_id, photo_id, user_id, comment_create_time, comment_content]
  );
};
module.exports.setComment = (column, value, comment_id) => {
  let sql = "UPDATE ?? SET(??=?) WHERE comment_id=?";
  let inserts = ["tb_comment", column, value, comment_id];
  sql = mysql.format(sql, inserts);
  return db.execute(sql);
};
