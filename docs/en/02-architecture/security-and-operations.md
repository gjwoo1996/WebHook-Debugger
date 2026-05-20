# Security and Operations

Webhook debuggers receive arbitrary external HTTP requests. Security and
operational boundaries should be considered from the beginning, even for an MVP.

## Data Protection

- Mask sensitive headers such as `Authorization`, `Cookie`, and `Set-Cookie` in
  the UI.
- Store raw payloads only as long as needed for debugging.
- Add endpoint expiration so temporary URLs do not stay active forever.
- Use HTTPS in deployed environments.

## Access Control

- Only the endpoint owner should view captured requests.
- Endpoint UUIDs should be long and unguessable.
- Deleted endpoints should stop accepting requests.

## Request Safety

- Limit request body size to protect storage and memory.
- Limit the number of requests stored per endpoint.
- Add rate limiting for public hook URLs.
- Return predictable status codes for accepted and rejected requests.

## Replay Safety

Replay can become dangerous if users can make the backend call arbitrary internal
addresses. This is known as SSRF risk.

For MVP safety:

- Block replay targets such as `localhost`, `127.0.0.1`, private IP ranges, and
  link-local addresses in production.
- Require `http` or `https` target URLs.
- Set connection and response timeouts.
- Do not automatically forward sensitive debugger-owned headers.

## Operations

- Log request metadata, not full sensitive payloads, in application logs.
- Keep basic health check endpoints.
- Monitor disk usage if request bodies are stored in the database.
- Define a cleanup job for expired endpoints and old requests.

