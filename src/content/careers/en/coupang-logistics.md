---
title: "Coupang FC & Transportation Data"
company: "Coupang"
role: "Backend Engineer"
startDate: "2017.01"
endDate: "2020.01"
lang: "en"
order: 7
summary: "Built Rocket Install Open API Platform (Samsung, LG integration). Developed real-time delivery/return status dashboard."
---

### Key Achievements

- **Rocket Install Open API Platform:** Designed and built Open API for delivery/return system integration with Rocket Install partners. Actually integrated with major partners including **Samsung Electronics, LG Electronics, SK Magic, Winion**
- **Real-time Delivery/Return Status Dashboard:** Developed real-time delivery/return status dashboard at nationwide logistics hub levels (Coupang Friend, Camp, Area, Region, Nationwide) using Elasticsearch
- **Operational Metrics Reporting Automation:** Developed automated reporting system for 6 key operational metrics (delivery/return delays, logistics dispatch status, etc.)
- **3PL Courier (Lotte Courier) Integration:** 3PL integration with Lotte Courier (delivery/return tracking, settlement)

### Rocket Install Project

- Designed Partner API to be provided to manufacturers so Coupang could add manufacturers without additional development
- Created delivery holiday calendar by manufacturer & postal code, synchronized holiday information with manufacturers
- Participated as lead contact for all subsequent manufacturer integrations starting with **SK Magic**, followed by **Winion, LG Electronics**
- Directly communicated with developers from 4 external manufacturers, jointly decided specs, developed and tested
- Achieved hundreds of millions in revenue within one month of opening

### Delivery/Return Statistics Dashboard Development

- Developed 'Real-time Delivery Status Dashboard' covering all levels: Coupang Friend/Camp/Area/Region/Nationwide
- Processed detailed data including real-time completion status of approximately 1 million daily invoices, hourly deliveries per Coupang Friend, idle time, delivery efficiency, final delivery completion time
- Used Elastic Search to accumulate data and extract through aggregation by unit

### Lotte Courier Integration

- Lotte Courier joined Coupang's 3PL couriers
- Handled delivery tracking, return tracking, settlement
- Settlement was processed by accumulating courier settlement data in HBase, comparing with Coupang data and calculating statistics
