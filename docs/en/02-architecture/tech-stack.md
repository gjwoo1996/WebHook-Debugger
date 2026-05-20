# Tech Stack

## Stack

| Area | Technology |
| --- | --- |
| Frontend | Next.js 14 with App Router |
| Backend | Spring Boot 3.x |
| Database | PostgreSQL |
| Real-time communication | WebSocket with STOMP |
| Authentication | JWT |
| API documentation | Swagger with SpringDoc OpenAPI |
| Monorepo | Turborepo |
| Infrastructure | OCI and Terraform |
| CI/CD | GitHub Actions |
| Containers | Docker and Docker Compose |

## Why These Choices Fit

- Next.js supports a modern frontend structure and works well with client-side
  real-time screens.
- Spring Boot provides reliable HTTP, security, persistence, and WebSocket
  support.
- PostgreSQL is a practical relational database for endpoint and request history.
- WebSocket is appropriate because request arrival should appear immediately in
  the browser.
- JWT keeps user-specific endpoint and history access stateless.
- Swagger/OpenAPI supports frontend-backend contract discussion.
- Docker and Docker Compose make local development reproducible.
- Terraform and OCI provide realistic infrastructure practice.

