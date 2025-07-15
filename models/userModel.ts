// DB 쿼리 및 모델
import db from '../config/db';

// 추후 회원 관련 쿼리 함수 작성

// 회원 정보 저장 함수
export function registerUser(
  email: string,
  password: string,
  name: string,
  callback: (err: any, result: any) => void
): void {
  const sql = 'INSERT INTO user (email, password, name) VALUES (?, ?, ?)';
  db.query(sql, [email, password, name], (err: any, result: any) => {
    callback(err, result);
  });
}
