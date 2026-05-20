# Service Flow

## Main User Flow

```text
1. User signs up or logs in.
2. User creates a webhook endpoint.
3. The service issues a public URL:
   https://webhookdebugger.com/hooks/{uuid}
4. User registers that URL in an external service.
5. The external service sends an event to the debugger URL.
6. The debugger stores the request.
7. The browser receives a real-time notification.
8. User inspects method, headers, body, IP address, and received time.
9. User replays the saved request to a selected target URL.
10. User checks the replay response status and result.
```

## Request Capture Flow

```text
External service
  -> Public hook endpoint
  -> Request persistence
  -> Real-time WebSocket event
  -> Request detail screen
```

## Replay Flow

```text
Saved request
  -> User enters target URL
  -> Backend sends replay request
  -> Backend records replay result
  -> Browser displays status code and response summary
```

