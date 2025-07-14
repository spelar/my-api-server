// 회원 관련 비즈니스 로직
const userModel = require('../models/userModel');

exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ message: '필수 항목이 누락되었습니다.' });
  }
  userModel.registerUser(email, password, name, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: '이미 등록된 이메일입니다.' });
      }
      return res.status(500).json({ message: '회원가입 중 오류가 발생했습니다.' });
    }
    res.status(201).json({ message: '회원가입 성공', userId: result.insertId });
  });
};
