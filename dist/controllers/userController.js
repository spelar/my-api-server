"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = require("../models/userModel");
const SALT_ROUNDS = 12;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ message: '필수 항목이 누락되었습니다.' });
    }
    try {
        // 평문 비밀번호를 절대 저장하지 않는다 — bcrypt로 해싱 후 저장
        const hashedPassword = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
        const result = yield (0, userModel_1.registerUser)(email, hashedPassword, name);
        res.status(201).json({ message: '회원가입 성공', userId: result.insertId });
    }
    catch (err) {
        if (err instanceof Error && 'code' in err && err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: '이미 등록된 이메일입니다.' });
        }
        return res.status(500).json({ message: '회원가입 중 오류가 발생했습니다.' });
    }
});
exports.register = register;
