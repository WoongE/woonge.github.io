---
title: "쿠팡 Review Team"
company: "Coupang"
role: "Backend Engineer"
startDate: "2020.01"
endDate: "2022.05"
lang: "ko"
order: 8
summary: "24개 서비스 개선 실험으로 GMV +1.04%, 리뷰 작성률 +152% 달성. Kafka 최적화로 메시지 소비 속도 20배 향상."
---

### 주요 성과

- **비즈니스 지표 개선:** 2년간 24개의 서비스 개선 실험(A/B Test)에 참여하여 **'Total GMV per customer +1.04%'**(2020Q1), **'리뷰 작성률 +152% 증가'**(2021Q2) 성과 달성
- **대규모 시스템 최적화:** 리뷰 도메인의 카프카 컨슈머 아키텍처를 개선하여 메시지 소비 속도 **20배** 증가, peek 시 CPU Usage **80% -> 20%** 감소, 장애로 발생한 **700만 개 Lag** 무사 처리
- **보안/개인정보 강화:** 145개 테이블, 581개 API, 83개 Batch Job, 29개 Kafka Consumer의 개인정보 익명화/분리/파기 시스템 마이그레이션 작업을 무중단으로 사고 없이 완료

### Security (개인정보보호 및 보안 강화) 작업

- 리뷰 도메인의 휴면회원 및 탈퇴회원의 정보를 익명화하고, 관련 데이터를 분리보관 또는 완전 제거하는 개인정보보호 작업 진행
- 총 145개 테이블을 전수조사하여 데이터 분리 작업이 필요한 72개 테이블 선정
- Spring Data JPA를 분석하여, ORM에서 table feature를 추출하여 휴면회원의 데이터를 json 형태로 분리보관하는 기능 개발
- 신입 개발자 세명을 리딩하여 총 19개 role에 Vault 적용 & 7개 role에 OAuth2 적용

### Review 도메인 개선 및 성능 최적화

- **레거시 카프카 컨슈머 성능 최적화:** 하나의 거대한 로직을 7개 작업으로 분리하여, 2개의 내부 토픽과 7개의 컨슈머가 분산처리하도록 개선
- **Redis(by Lettuce) Migration:** 리뷰 시스템에서 사용하는 캐시 관련 여러 인프라(Local Cache, Memcached, Elasticache Redis)를 하나로 통합
- **API Latency 개선:** 멀티스레드 API 호출, 캐시 적용, 중복로직 제거 등을 통해 평균 30%씩 개선
