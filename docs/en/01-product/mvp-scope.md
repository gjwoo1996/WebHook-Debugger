# MVP Scope

The project duration is approximately one month with two people. The MVP should
focus on a small but complete webhook debugging flow.

## Must Have

- User sign-up and login with JWT.
- Create, list, rename, and delete webhook endpoints.
- Public receiving URL for each endpoint.
- Request capture for common HTTP methods.
- Store headers, body, method, path, IP address, and received time.
- Request list and request detail screen.
- Real-time browser notification when a request arrives.
- Replay a saved request to a target URL.
- Docker Compose setup for local development.
- Basic CI checks for frontend and backend.

## Should Have

- Endpoint expiration time.
- Method and date filters in request history.
- Replay result history.
- Swagger/OpenAPI documentation for backend APIs.
- Basic production deployment to OCI.

## Could Have

- Social login.
- Advanced request search.
- Team sharing.
- Custom response status and body from the debugger endpoint.
- Request export as JSON.

## Out of Scope for the First Month

- Billing or paid plans.
- Complex role-based permissions.
- Multi-tenant organization management.
- Large file upload payload support.
- Full observability stack.
- Browser extension or desktop app.

