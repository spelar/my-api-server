# My API Server Blue/Green Deployment Project

## 프로젝트 개요

이 프로젝트는 **Node.js(Express)** 기반의 API 서버를  
- **MySQL** 데이터베이스와 연동하고,  
- **Docker** 컨테이너로 빌드하여,  
- **Nginx**로 Reverse Proxy를 구성,  
- **Linux 서버**(예: Ubuntu)에  
- **Blue/Green 무중단 배포** 방식으로 운영하도록 자동화된 인프라/배포 환경을 구축합니다.

CI/CD 자동화에는 **GitHub Actions**를 사용하며,  
최종적으로 **DNS 설정 및 TLS(HTTPS) 인증서 적용**까지 아우릅니다.

---

## 기술 스택

- **백엔드 프레임워크**: [Node.js(Express)](https://expressjs.com/)
- **데이터베이스**: [MySQL](https://www.mysql.com/)
- **웹 서버/Proxy**: [Nginx](https://nginx.org/)
- **OS**: Linux (예: Ubuntu 22.04)
- **컨테이너**: Docker
- **CI/CD**: GitHub Actions
- **배포 전략**: Blue/Green Deployment
- **도메인/DNS**:  
  - [https://api.spelar.shop](https://api.spelar.shop)
- **TLS 인증서**: Let's Encrypt

---

## 주요 특징

- **MySQL 연동**: 회원가입 등 데이터 관리
- **Express-rate-limit**: API 요청 제한(DoS 방어)
- **Nginx Rate Limiting**: 2차 요청 제한(서버 자원 보호)
- **Docker 기반 배포**: 환경 일관성 및 이식성 보장
- **Blue/Green 무중단 배포**: 실시간 트래픽 전환, 롤백 용이
- **GitHub Actions CI/CD**: 코드 푸시 → 자동 빌드/배포
- **TLS(HTTPS) 적용**: 안전한 API 통신

---

## 배포/운영 구조

1. **코드 푸시 → GitHub Actions가 Docker 이미지 빌드 & Docker Hub 푸시**
2. **서버에서 Blue/Green 컨테이너 번갈아 실행**
3. **Nginx가 활성 컨테이너로 트래픽 프록시**
4. **TLS 인증서로 HTTPS 보안 통신**
5. **API 요청 제한(Express + Nginx)으로 서버 보호**
