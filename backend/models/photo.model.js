const { db } = require("../utils/dataBase.utils");
const mysql = require("mysql2");
module.exports.findAll = () => {
  return db.execute(`SELECT * FROM tb_photo`);
};

module.exports.insertPhoto = (
  photo_id,
  user_id,
  photo_url,
  photo_title,
  photo_content,
  photo_create_time,
  album_id
) => {
  return db.execute(
    `INSERT INTO tb_photo(photo_id,user_id,photo_url,photo_title,photo_content,photo_create_time,album_id)VALUE(?,?,?,?,?,?,?)`,
    [
      photo_id,
      user_id,
      photo_url,
      photo_title,
      photo_content,
      photo_create_time,
      album_id,
    ]
  );
};
