---
title: "Coupang Review Team"
company: "Coupang"
role: "Backend Engineer"
startDate: "2020.01"
endDate: "2022.05"
lang: "en"
order: 8
summary: "Achieved GMV +1.04%, review submission rate +152% through 24 service experiments. 20x message consumption speed through Kafka optimization."
---

### Key Achievements

- **Business Metrics Improvement:** Participated in 24 service improvement experiments (A/B Tests) over 2 years, achieving **'Total GMV per customer +1.04%'** (2020Q1), **'Review submission rate +152%'** (2021Q2)
- **Large-scale System Optimization:** Improved Kafka consumer architecture in review domain, achieving **20x** increase in message consumption speed, CPU usage reduction from **80% → 20%** at peak, successfully processed **7 million Lag** caused by incidents
- **Security/Privacy Enhancement:** Completed zero-downtime migration of PII anonymization/separation/deletion system across 145 tables, 581 APIs, 83 Batch Jobs, 29 Kafka Consumers without incidents

### Security (Privacy Protection & Enhancement) Work

- Conducted privacy protection work to anonymize dormant/withdrawn member information and segregate or completely remove related data in review domain
- Surveyed all 145 tables and selected 72 tables requiring data separation
- Developed functionality to extract table features from ORM by analyzing Spring Data JPA, storing dormant member data in JSON format for separate storage
- Led 3 junior developers to apply Vault to 19 roles & OAuth2 to 7 roles

### Review Domain Improvement & Performance Optimization

- **Legacy Kafka Consumer Performance Optimization:** Split one massive logic into 7 tasks, improved to distributed processing with 2 internal topics and 7 consumers
- **Redis (Lettuce) Migration:** Unified multiple cache infrastructures (Local Cache, Memcached, Elasticache Redis) used by review system
- **API Latency Improvement:** Achieved average 30% improvement through multi-threaded API calls, cache application, duplicate logic removal
