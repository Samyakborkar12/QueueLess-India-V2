<<<<<<< HEAD
# Database Schema

## QueueLess India V2

Database: PostgreSQL (Supabase)

Version: 2.0

---

# Overview

QueueLess India V2 uses a multi-tenant architecture where multiple organizations can manage their own centers, queues, staff members, and citizens independently.

---

# Entity Relationship Diagram

```text
Organizations
      │
      ├── Centers
      │       │
      │       ├── Queues
      │       │      │
      │       │      └── Tokens
      │       │              │
      │       │              └── Users
      │       │
      │       └── Analytics
      │
      └── Staff
```

---

# Table: users

Stores all platform users.

## Columns

| Column     | Type      |
| ---------- | --------- |
| id         | UUID      |
| full_name  | VARCHAR   |
| email      | VARCHAR   |
| phone      | VARCHAR   |
| role       | VARCHAR   |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

## Roles

* citizen
* staff
* admin
* super_admin

---

# Table: organizations

Represents a business or institution.

Examples:

* Apollo Hospital
* SBI Bank
* Passport Seva

## Columns

| Column            | Type      |
| ----------------- | --------- |
| id                | UUID      |
| name              | VARCHAR   |
| organization_type | VARCHAR   |
| subscription_plan | VARCHAR   |
| created_at        | TIMESTAMP |

---

# Table: centers

Physical branches.

Examples:

* Apollo Hospital Mumbai
* SBI Ambernath Branch

## Columns

| Column          | Type      |
| --------------- | --------- |
| id              | UUID      |
| organization_id | UUID      |
| name            | VARCHAR   |
| address         | TEXT      |
| city            | VARCHAR   |
| active          | BOOLEAN   |
| created_at      | TIMESTAMP |

---

# Table: queues

Individual service queues.

Examples:

* General OPD
* Passport Renewal
* Account Opening

## Columns

| Column               | Type      |
| -------------------- | --------- |
| id                   | UUID      |
| center_id            | UUID      |
| service_name         | VARCHAR   |
| current_token_number | INTEGER   |
| average_service_time | INTEGER   |
| status               | VARCHAR   |
| created_at           | TIMESTAMP |

---

# Table: tokens

Digital queue tickets.

## Columns

| Column                 | Type      |
| ---------------------- | --------- |
| id                     | UUID      |
| queue_id               | UUID      |
| user_id                | UUID      |
| token_number           | INTEGER   |
| status                 | VARCHAR   |
| estimated_wait_minutes | INTEGER   |
| verification_method    | VARCHAR   |
| qr_data                | TEXT      |
| created_at             | TIMESTAMP |

## Status

* waiting
* called
* in_service
* completed
* skipped
* cancelled

## Verification Methods

* qr
* phone
* token_number
* walk_in

---

# Table: staff_assignments

Maps staff to centers.

## Columns

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| staff_id    | UUID      |
| center_id   | UUID      |
| assigned_at | TIMESTAMP |

---

# Table: notifications

Stores notifications.

## Columns

| Column     | Type      |
| ---------- | --------- |
| id         | UUID      |
| user_id    | UUID      |
| title      | VARCHAR   |
| message    | TEXT      |
| is_read    | BOOLEAN   |
| created_at | TIMESTAMP |

---

# Table: analytics

Aggregated queue metrics.

## Columns

| Column              | Type      |
| ------------------- | --------- |
| id                  | UUID      |
| center_id           | UUID      |
| total_tokens_served | INTEGER   |
| average_wait_time   | INTEGER   |
| skipped_tokens      | INTEGER   |
| generated_at        | TIMESTAMP |

---

# Future Tables

## crowd_predictions

AI-generated forecasts.

## branch_recommendations

Smart center suggestions.

## subscriptions

Billing and SaaS plans.

## audit_logs

Security and compliance tracking.

---

# Recommended Indexes

users(email)

users(phone)

tokens(queue_id)

tokens(user_id)

tokens(status)

queues(center_id)

centers(organization_id)

notifications(user_id)

analytics(center_id)

---

# Design Goals

* Multi-tenant
* Scalable
* SaaS-ready
* AI-ready
* Analytics-ready
* Healthcare-ready
* Government-ready
=======
# Database Schema

## QueueLess India V2

Database: PostgreSQL (Supabase)

Version: 2.0

---

# Overview

QueueLess India V2 uses a multi-tenant architecture where multiple organizations can manage their own centers, queues, staff members, and citizens independently.

---

# Entity Relationship Diagram

```text
Organizations
      │
      ├── Centers
      │       │
      │       ├── Queues
      │       │      │
      │       │      └── Tokens
      │       │              │
      │       │              └── Users
      │       │
      │       └── Analytics
      │
      └── Staff
```

---

# Table: users

Stores all platform users.

## Columns

| Column     | Type      |
| ---------- | --------- |
| id         | UUID      |
| full_name  | VARCHAR   |
| email      | VARCHAR   |
| phone      | VARCHAR   |
| role       | VARCHAR   |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

## Roles

* citizen
* staff
* admin
* super_admin

---

# Table: organizations

Represents a business or institution.

Examples:

* Apollo Hospital
* SBI Bank
* Passport Seva

## Columns

| Column            | Type      |
| ----------------- | --------- |
| id                | UUID      |
| name              | VARCHAR   |
| organization_type | VARCHAR   |
| subscription_plan | VARCHAR   |
| created_at        | TIMESTAMP |

---

# Table: centers

Physical branches.

Examples:

* Apollo Hospital Mumbai
* SBI Ambernath Branch

## Columns

| Column          | Type      |
| --------------- | --------- |
| id              | UUID      |
| organization_id | UUID      |
| name            | VARCHAR   |
| address         | TEXT      |
| city            | VARCHAR   |
| active          | BOOLEAN   |
| created_at      | TIMESTAMP |

---

# Table: queues

Individual service queues.

Examples:

* General OPD
* Passport Renewal
* Account Opening

## Columns

| Column               | Type      |
| -------------------- | --------- |
| id                   | UUID      |
| center_id            | UUID      |
| service_name         | VARCHAR   |
| current_token_number | INTEGER   |
| average_service_time | INTEGER   |
| status               | VARCHAR   |
| created_at           | TIMESTAMP |

---

# Table: tokens

Digital queue tickets.

## Columns

| Column                 | Type      |
| ---------------------- | --------- |
| id                     | UUID      |
| queue_id               | UUID      |
| user_id                | UUID      |
| token_number           | INTEGER   |
| status                 | VARCHAR   |
| estimated_wait_minutes | INTEGER   |
| verification_method    | VARCHAR   |
| qr_data                | TEXT      |
| created_at             | TIMESTAMP |

## Status

* waiting
* called
* in_service
* completed
* skipped
* cancelled

## Verification Methods

* qr
* phone
* token_number
* walk_in

---

# Table: staff_assignments

Maps staff to centers.

## Columns

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| staff_id    | UUID      |
| center_id   | UUID      |
| assigned_at | TIMESTAMP |

---

# Table: notifications

Stores notifications.

## Columns

| Column     | Type      |
| ---------- | --------- |
| id         | UUID      |
| user_id    | UUID      |
| title      | VARCHAR   |
| message    | TEXT      |
| is_read    | BOOLEAN   |
| created_at | TIMESTAMP |

---

# Table: analytics

Aggregated queue metrics.

## Columns

| Column              | Type      |
| ------------------- | --------- |
| id                  | UUID      |
| center_id           | UUID      |
| total_tokens_served | INTEGER   |
| average_wait_time   | INTEGER   |
| skipped_tokens      | INTEGER   |
| generated_at        | TIMESTAMP |

---

# Future Tables

## crowd_predictions

AI-generated forecasts.

## branch_recommendations

Smart center suggestions.

## subscriptions

Billing and SaaS plans.

## audit_logs

Security and compliance tracking.

---

# Recommended Indexes

users(email)

users(phone)

tokens(queue_id)

tokens(user_id)

tokens(status)

queues(center_id)

centers(organization_id)

notifications(user_id)

analytics(center_id)

---

# Design Goals

* Multi-tenant
* Scalable
* SaaS-ready
* AI-ready
* Analytics-ready
* Healthcare-ready
* Government-ready
>>>>>>> 3ff99fa29fc3d386b283de11a1292799277dfb86
