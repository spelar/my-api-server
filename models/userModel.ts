// DB 쿼리 및 모델
import { ResultSetHeader } from 'mysql2';
import pool from '../config/db';

// 회원 정보 저장 함수 (password는 해싱된 값을 받는다)
export async function registerUser(
  email: string,
  hashedPassword: string,
  name: string
): Promise<ResultSetHeader> {
  const sql = 'INSERT INTO user (email, password, name) VALUES (?, ?, ?)';
  const [result] = await pool.query<ResultSetHeader>(sql, [
    email,
    hashedPassword,
    name,
  ]);
  return result;
}