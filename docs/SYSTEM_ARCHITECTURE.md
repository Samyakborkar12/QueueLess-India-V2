# System Architecture

## QueueLess India V2

Version: 2.0

---

# High Level Architecture

```text
┌─────────────────────┐
│     Citizen App     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Next.js Frontend  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Supabase Auth     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   FastAPI Backend   │
└──────────┬──────────┘
           │
 ┌─────────┼─────────┐
 ▼         ▼         ▼
Database   AI      Analytics
(Postgres) Engine   Engine
```

---

# Frontend Layer

Technology:

* Next.js 15
* TypeScript
* Tailwind CSS
* Shadcn UI

Responsibilities:

* Authentication UI
* Queue Management
* Token Tracking
* Staff Dashboard
* Admin Dashboard
* Analytics Display

---

# Authentication Layer

Technology:

* Supabase Auth

Supported Methods:

* Email + Password
* Google Login (Future)

Responsibilities:

* User Registration
* Login
* Session Management
* Role Validation

Roles:

* Citizen
* Staff
* Admin
* Super Admin

---

# Backend Layer

Technology:

* FastAPI

Responsibilities:

* Business Logic
* Queue Operations
* Token Generation
* QR Data Creation
* Analytics Processing
* AI Communication

---

# Database Layer

Technology:

* PostgreSQL (Supabase)

Responsibilities:

* User Storage
* Queue Storage
* Token Storage
* Analytics Storage
* Notification Storage

---

# Queue Engine

Responsibilities:

* Generate Token Numbers
* Maintain Queue Order
* Call Next Token
* Skip Token
* Complete Token

Token Lifecycle:

Waiting
↓
Called
↓
In Service
↓
Completed

---

# QR Verification Engine

Verification Methods:

1. QR Code
2. Token Number
3. Mobile Number
4. Walk-In Entry

Purpose:
Ensure accessibility for all users.

---

# Notification Engine

Phase 1:

* In-App Notifications

Phase 2:

* Email Notifications

Future:

* SMS
* WhatsApp

---

# Analytics Engine

Metrics:

* Average Wait Time
* Tokens Served
* Queue Load
* Peak Hours
* Staff Efficiency

---

# AI Engine (Phase 2)

Module 1:
Wait Time Prediction

Inputs:

* Queue Length
* Active Counters
* Service Type

Output:
Estimated Wait Time

---

Module 2:
Crowd Forecasting

Outputs:

* Peak Hours
* High Demand Days

---

Module 3:
Branch Recommendation

Outputs:

* Nearby Faster Centers
* Suggested Alternatives

---

# Deployment Architecture

Frontend:
Vercel

Backend:
Render

Database:
Supabase

Storage:
Supabase Storage

Monitoring:
Future Integration (Sentry)

---

# Security Principles

* Row Level Security (RLS)
* JWT Authentication
* Role-Based Access Control
* Secure API Validation
* Protected Routes

---

# Scalability Goals

* Multi-Tenant
* Multi-Center
* Multi-Organization
* AI-Ready
* SaaS-Ready
* Cloud-Native
