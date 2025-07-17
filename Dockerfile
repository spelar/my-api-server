# 1. Node.js 공식 이미지 사용
FROM node:20

# 2. 컨테이너 내 작업 디렉토리 생성
WORKDIR /app

# 3. 의존성 파일 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 소스 코드 전체 복사
COPY . .

# 6. TypeScript 빌드
RUN npm run build

# 7. 사용할 포트 지정
EXPOSE 4000

# 8. 빌드된 JS 파일로 서버 실행
CMD ["node", "dist/index.js"] 