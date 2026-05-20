# Webhook Background

## What Is a Webhook?

A webhook is an HTTP callback sent by one system to another system when an event
happens. Instead of asking an external service repeatedly whether something
changed, the external service sends a request to a URL that the developer
registered in advance.

Typical examples:

- A payment provider sends a `payment.completed` event.
- GitHub sends a `push` or `pull_request` event.
- A messaging service sends a delivery status update.
- A CI/CD system sends a build completion notification.

## Webhook vs Polling

Polling means the client repeatedly asks the server for updates. Webhooks reverse
that flow: the event source sends a request only when an event occurs.

| Topic | Polling | Webhook |
| --- | --- | --- |
| Trigger | Client asks repeatedly | External service sends on event |
| Network cost | Can be wasteful | Usually event-driven |
| Latency | Depends on polling interval | Near real time |
| Development challenge | Scheduling and repeated API calls | Public callback URL and request validation |

## Basic Concepts

- Callback URL: the URL registered in an external service.
- HTTP method: commonly `POST`, but some services may use other methods.
- Headers: metadata such as content type, signature, user agent, and request ID.
- Body: the event payload, often JSON.
- Status code: the receiver's response; some services retry when they receive an
  error status.
- Signature verification: a security process that confirms the request came from
  the expected service.

