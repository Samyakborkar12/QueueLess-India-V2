![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.5-green)
![Supabase](https://img.shields.io/badge/Database-Supabase-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Under%20Development-yellow)
# 🇮🇳 QueueLess India

<p align="center">
  <h2 align="center">"Your Time Matters."</h2>
  <p align="center">
    A Unified Hybrid Queue Management Platform for India
  </p>
</p>

---

## 📖 Overview

**QueueLess India** is a next-generation **Hybrid Queue Management Platform** designed to eliminate long waiting times in hospitals, government offices, banks, clinics, retail stores, restaurants, and other public service organizations.

Unlike traditional queue systems that either rely completely on physical waiting or only support online appointments, QueueLess India creates **one intelligent queue** that fairly combines **online customers** and **walk-in visitors** into a single synchronized system.

The platform ensures that technology improves accessibility rather than replacing it. Whether a customer joins the queue from home using a mobile phone or walks directly to the service desk without a smartphone, both receive a fair position in the same queue.

---

# ❓ Problem Statement

Every day, millions of people spend hours standing in queues because existing systems suffer from multiple challenges.

- No accurate waiting time prediction.
- Overcrowded waiting areas.
- Separate management for online bookings and walk-ins.
- No real-time queue visibility.
- Late arrivals disrupt the entire queue.
- Staff repeatedly answer the same question:
  > "How much longer is my turn?"
- Elderly citizens and non-smartphone users are excluded from digital-only systems.

QueueLess India solves these problems through an intelligent hybrid queue engine.

---

# 💡 Proposed Solution

QueueLess India introduces a **Hybrid Queue Engine** where:

- Online users join through the web application.
- Walk-in visitors are registered by the organization staff.
- Both are inserted into one synchronized queue.
- Queue order is decided fairly using arrival timestamps and queue rules.
- Customers receive live updates instead of physically waiting.
- Staff manage the entire queue from a centralized dashboard.

---

# 🎯 Objectives

- Reduce unnecessary waiting time.
- Prevent overcrowding.
- Create fair queue allocation.
- Support both digital and offline users.
- Improve transparency.
- Increase operational efficiency.
- Modernize India's public service infrastructure.

---

# 🏗 System Architecture

```text
                   Customer (Online)
                          │
                          │
             Walk-in Registration Desk
                          │
                          ▼
               Hybrid Queue Engine
                          │
         ┌────────────────┼────────────────┐
         │                │                │
         ▼                ▼                ▼
   Counter 1         Counter 2        Counter 3
         │                │                │
         └────────────────┼────────────────┘
                          │
                          ▼
                   Queue Completion
```

---

# 👥 User Roles

## 1️⃣ Customer

Customers can:

- Register/Login
- Search organizations
- Join queues
- View estimated waiting time
- Receive QR Token
- Receive OTP
- Track queue position
- Receive "Leave Home Now" alerts
- Request Hold
- Request Rejoin
- Cancel queue
- View queue history
- Submit feedback

---

## 2️⃣ Organization Admin

Organization administrators manage daily operations.

Features include:

- Organization Dashboard
- Counter Management
- Walk-in Registration
- Queue Monitoring
- Call Next Customer
- Hold Customer
- Skip Customer
- Complete Service
- Verify QR Codes
- Verify OTP
- Reports & Analytics

---

## 3️⃣ Super Admin

Platform administrators manage the entire ecosystem.

Responsibilities:

- Verify organizations
- Approve or reject applications
- Review submitted documents
- Platform analytics
- Manage categories
- Audit logs
- Complaint management
- Fraud detection

---

# 🔄 Complete Queue Workflow

```text
Customer Login
      │
      ▼
Search Organization
      │
      ▼
Join Queue
      │
      ▼
Generate Queue Token
      │
      ▼
QR + OTP Generated
      │
      ▼
Live Queue Tracking
      │
      ▼
"Leave Home Now" Notification
      │
      ▼
Customer Arrives
      │
      ▼
QR / OTP Verification
      │
      ▼
Service Started
      │
      ▼
Service Completed
```

---

# 🚶 Walk-in Customer Workflow

```text
Customer Arrives

↓

Staff Registration

↓

Phone Number Verification

↓

OTP Verification

↓

Queue Token Generated

↓

Added to Hybrid Queue

↓

Wait

↓

Service

↓

Completed
```

---

# ⏳ Queue Lifecycle

```text
WAITING
    │
    ▼
CALLED
    │
    ▼
ARRIVED
    │
    ▼
IN_SERVICE
    │
    ▼
COMPLETED
```

Special States

```text
HOLD

↓

REJOIN REQUESTED

↓

REJOIN APPROVED

↓

WAITING
```

Additional States

- SKIPPED
- CANCELLED

---

# 🚨 Emergency Queue

Authorized staff can mark emergency cases.

Features:

- Priority Queue
- Audit Logging
- Staff Authorization
- Transparent Queue Update

---

# 📲 Smart Travel System

Instead of asking customers to wait physically,

QueueLess India continuously estimates:

- Remaining queue length
- Service speed
- Customer travel time

Customers receive notifications like:

> "Your turn is approaching. Please leave now."

This reduces overcrowding significantly.

---

# 🔐 Security

- JWT Authentication
- Spring Security
- Role-Based Access Control
- Password Encryption
- OTP Verification
- QR Verification
- HTTPS Support
- Secure REST APIs
- Input Validation
- Audit Logs

---

# ⚙ Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Chart.js
- QRCode.js
- html5-qrcode

---

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- WebSocket
- REST APIs

---

## Database

- Supabase PostgreSQL
- Supabase Storage

---

# 📂 Project Structure

```text
QueueLess-India/

backend/
frontend/
database/
docs/
README.md
```

---

# 🌟 Key Features

✔ Hybrid Queue Engine

✔ Online + Walk-in Integration

✔ Real-Time Queue Updates

✔ QR Verification

✔ OTP Verification

✔ Hold & Rejoin Logic

✔ Emergency Priority

✔ Multi-Counter Management

✔ Live Dashboard

✔ Queue Analytics

✔ Notification System

✔ Organization Verification

✔ Audit Logging

---

# 🚀 Future Enhancements

- AI Wait Time Prediction
- WhatsApp Notifications
- SMS Gateway
- Voice Announcements
- Google Maps ETA
- Regional Languages
- Display Board Integration
- Mobile Application
- Public APIs
- ERP Integration

---

# 🎯 Target Organizations

- Hospitals
- Clinics
- Banks
- Government Offices
- Municipal Corporations
- Passport Offices
- RTOs
- Restaurants
- Salons
- Retail Stores
- Airports
- Railway Inquiry Counters
- Public Utility Centers

---

# 👨‍💻 Development Team

**Project Name:** QueueLess India

**Tagline:** *Your Time Matters.*

Built to modernize India's physical queue management system through an intelligent, transparent, and inclusive hybrid platform.