# Development Conventions

## Branch Naming

```text
feat/endpoint-create
fix/jwt-expiration
chore/eslint-config
docs/api-contract
```

## Commit Messages

Use Conventional Commits.

```text
feat: add webhook receiving endpoint
fix: handle expired jwt token
chore: configure eslint
docs: document api contract
```

## Common API Response Format

```json
{
  "status": 200,
  "message": "success",
  "data": {}
}
```

## Code Style

- Frontend: ESLint, Prettier, and Husky.
- Backend: Google Java Format and CheckStyle.
- Keep formatting automated so reviews focus on behavior.

