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
exports.registerUser = registerUser;
const db_1 = __importDefault(require("../config/db"));
// 회원 정보 저장 함수 (password는 해싱된 값을 받는다)
function registerUser(email, hashedPassword, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const sql = 'INSERT INTO user (email, password, name) VALUES (?, ?, ?)';
        const [result] = yield db_1.default.query(sql, [
            email,
            hashedPassword,
            name,
        ]);
        return result;
    });
}
