# Branch Strategy

## Branch Structure

```text
main
  -> dev
      -> feat/endpoint-create
      -> feat/webhook-receive
      -> feat/realtime-websocket
      -> feat/request-replay
```

## Branch Roles

- `main`: production or demo deployment branch. Direct push is forbidden.
- `dev`: integration branch for ongoing development.
- `feat/*`: feature branches merged into `dev` through pull requests.
- `fix/*`: bug-fix branches merged into `dev` through pull requests.
- `docs/*`: documentation-only branches.

## Pull Request Rules

- Link the related issue.
- Keep the pull request focused on one feature or fix.
- Include verification steps.
- Request at least one review before merging.

