# Core Features

## Authentication

- Email sign-up and login.
- JWT-based access control.
- Optional social login after the MVP is stable.

## Endpoint Management

- Generate webhook receiving URLs based on UUIDs.
- Set endpoint names for easier identification.
- Delete endpoints that are no longer needed.
- Configure expiration time for temporary test endpoints.

## Request Capture and Visualization

- Accept common HTTP methods such as `GET`, `POST`, `PUT`, `PATCH`, and
  `DELETE`.
- Store request method, path, query string, headers, body, IP address, and
  received time.
- Display JSON bodies with readable formatting.
- Show non-JSON bodies as raw text.
- Notify the browser in real time through WebSocket.

## Replay

- Replay a saved request to a user-provided target URL.
- Preserve the original body and selected headers.
- Show replay status code and response summary.
- Record replay attempts for debugging.

## History

- List received requests by endpoint.
- View request details.
- Filter by HTTP method and received date.
- Search by basic metadata after the core history flow is stable.

