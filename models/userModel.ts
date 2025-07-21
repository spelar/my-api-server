// DB 쿼리 및 모델
import pool from '../config/db';

// 회원 정보 저장 함수 (async/await)
export async function registerUser(
  email: string,
  password: string,
  name: string
): Promise<any> {
  const sql = 'INSERT INTO user (email, password, name) VALUES (?, ?, ?)';
  const [result] = await pool.query(sql, [email, password, name]);
  return result;
}