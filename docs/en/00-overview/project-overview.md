# Project Overview

## Summary

WebHook Debugger is a developer tool for receiving webhook requests through a
public URL, inspecting the request data in a browser, and replaying saved
requests to a local or remote server.

## Project Information

| Item | Description |
| --- | --- |
| Project name | WebHook Debugger |
| Duration | May 2026 to June 2026, approximately 1 month |
| Team size | 2 people |
| Repository style | Monorepo for frontend and backend |
| Deployment target | Oracle Cloud Infrastructure |
| Infrastructure management | Terraform |

## Target Users

- Developers integrating payment, login, messaging, CI/CD, or notification
  webhooks.
- Teams that need to inspect webhook payloads before building final handlers.
- Learners who want to practice full-stack development with real HTTP,
  real-time UI, persistence, authentication, and deployment.

## Problem Statement

Webhook integration is difficult during local development because external
services cannot call `localhost` on a developer machine. This causes a slow
cycle of deploy, test, inspect, fix, and redeploy.

WebHook Debugger reduces that cycle by providing a public receiving endpoint,
storing each request, showing the request in real time, and allowing the same
request to be replayed.

