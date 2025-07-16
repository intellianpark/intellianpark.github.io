# 연구과제 관리 블로그

체계적인 연구과제 관리와 투명한 진행상황 공유를 위한 GitHub Pages 블로그입니다.

## 📋 주요 기능

### 1. 과제소개
- 현재 진행 중인 연구과제들의 상세 정보
- 과제 기간, 목표, 기술 스택 등 포함
- 진행 상태별 시각적 표시

### 2. 연구팀 소개
- **연구자**: 프로젝트 리더, 개발자, 분석가 등
- **발주자**: 기술이사, 프로젝트 매니저 등
- 각 구성원의 역할과 전문 분야 표시

### 3. 연구 진행 현황
- 타임라인 형태의 진행 상황 표시
- 각 단계별 완료율 시각화
- 진행 중인 단계와 완료된 단계 구분

### 4. 성과물 현황
- 예정된 성과물들의 목록
- 완료 상태별 분류 (완료/진행중/예정)
- 각 성과물의 예정 완료일 표시

## 🚀 배포 방법

### GitHub Pages 사용
1. 이 저장소를 GitHub에 업로드
2. Settings > Pages에서 Source를 "Deploy from a branch"로 설정
3. Branch를 "main"으로, folder를 "/ (root)"로 설정
4. Save 클릭

### 로컬에서 실행
```bash
# Python 3의 내장 서버 사용
python -m http.server 8000

# 또는 Node.js의 live-server 사용
npx live-server
```

## 📁 파일 구조

```
├── index.html          # 메인 페이지
├── styles.css          # 스타일시트
├── README.md           # 프로젝트 설명서
└── assets/             # 이미지 및 기타 리소스 (선택사항)
```

## 🎨 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
- **현대적 UI**: 그라데이션과 그림자 효과를 활용한 세련된 디자인
- **직관적 네비게이션**: 상단 고정 네비게이션으로 쉬운 이동
- **시각적 피드백**: 호버 효과와 애니메이션으로 사용자 경험 향상

## 🔧 커스터마이징

### 색상 변경
`styles.css` 파일에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
/* 주요 색상 */
--primary-color: #667eea;
--secondary-color: #764ba2;
--success-color: #27ae60;
--warning-color: #856404;
--info-color: #1976d2;
```

### 내용 수정
`index.html` 파일에서 다음 섹션들을 수정할 수 있습니다:
- 과제 정보 (프로젝트 카드)
- 팀 구성원 정보 (멤버 카드)
- 진행 현황 (타임라인)
- 성과물 목록 (델리버러블 카드)

## 📱 브라우저 지원

- Chrome (권장)
- Firefox
- Safari
- Edge

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. 이 저장소를 Fork
2. 새로운 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요. 