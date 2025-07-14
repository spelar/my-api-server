// DB 쿼리 및 모델
const db = require('../config/db');

// 추후 회원 관련 쿼리 함수 작성

// 회원 정보 저장 함수
exports.registerUser = (email, password, name, callback) => {
  const sql = 'INSERT INTO user (email, password, name) VALUES (?, ?, ?)';
  db.query(sql, [email, password, name], (err, result) => {
    callback(err, result);
  });
};

module.exports = {
  registerUser: exports.registerUser
};
