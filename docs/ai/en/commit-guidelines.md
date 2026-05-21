# Commit Guidelines

This document defines how AI agents should prepare commits in this repository.
Read it before creating commits or helping the user plan commits.

For commit work, use this English document as the source of truth. Do not read
the Korean translation as part of the normal commit workflow.

When adding or changing commit-related rules, update both this English source
document and the Korean translation at `docs/ai/ko/커밋 작업 규칙.md`.

## Core Principles

- Always inspect the changes before committing.
- Do not put every change into a single commit by default.
- Split commits by purpose and change type.
- Commit messages may be written in Korean.
- Write commit messages with enough detail to explain the change, while keeping
  them easy to scan.
- Do not include files the user did not ask to commit.

## Pre-Commit Review Flow

Before creating a commit, follow this sequence.

1. Run `git status --short` to see changed files.
2. Run `git diff` to inspect tracked file changes.
3. For new files, read the file contents because they may not appear in
   `git diff` until staged.
4. Group changes by purpose and change type.
5. Decide which files or hunks belong to each commit.
6. Summarize the purpose of each commit in one sentence before writing the
   commit message.

## When to Split Commits

Split commits when changes belong to different categories.

- Feature work.
- Bug fixes.
- Refactoring.
- Documentation.
- Tests.
- Configuration.
- Dependencies.
- Formatting-only changes.
- File moves or renames.

Examples:

```text
docs: 문서 구조를 영문/한글 디렉토리로 분리
docs: AI 커밋 작업 규칙 문서 추가
chore: 개발 컨테이너 설정 정리
```

## When One Commit Is Acceptable

Changes can stay in one commit when they are required for one clear purpose.

- Feature code and tests for that feature.
- Moving documentation files and updating README links for those paths.
- Changing a configuration file and adding a short document that explains it.
- Renaming files and updating references to the renamed files.

The reason for grouping the changes must be clear.

## Commit Message Format

Use Conventional Commits by default.

```text
<type>: <summary>

<body>
```

Common types:

- `feat`: feature work.
- `fix`: bug fixes.
- `docs`: documentation additions, edits, or moves.
- `refactor`: structural changes without behavior changes.
- `test`: test additions or updates.
- `chore`: build, tooling, configuration, or maintenance work.
- `style`: formatting-only changes.

## Good Commit Message Examples

```text
docs: AI 커밋 작업 규칙 문서 추가

커밋 전에 변경사항을 확인하고 성격별로 커밋을 분리하도록
AI 작업 규칙을 문서화했다.

또한 커밋 메시지를 한글로 작성할 수 있도록 예시와 작성 기준을
함께 정리했다.
```

```text
docs: 한글 문서 파일명을 한국어로 변경

docs/ko 아래 문서들이 한글 번역본임에도 영어 파일명을 사용하고 있어
문서명을 한국어로 변경했다.

README의 문서 링크도 변경된 파일명에 맞게 갱신했다.
```

## Poor Commit Message Examples

Avoid messages that are too short or unclear.

```text
update
fix
docs
수정
작업
문서 수정
```

## AI-Specific Cautions

- Do not revert changes that appear to belong to the user.
- Do not include unrelated changes in a commit.
- Before committing, explain which files will be included.
- If changes have multiple purposes, propose a commit split first.
- The commit body should explain both what changed and why.
- Use bullets in the commit body when there are several related details.

## Commit Split Report Format

Before creating commits, report the proposed split to the user or use it as the
internal commit plan.

```text
I recommend splitting the current changes into these commits.

1. docs: 문서 구조 정리
   - README 문서 인덱스 추가
   - docs/en, docs/ko 문서 구조 추가

2. docs: AI 커밋 작업 규칙 추가
   - docs/ai/en/commit-guidelines.md 추가
   - docs/ai/ko/커밋 작업 규칙.md 추가
   - AGENTS.md에 커밋 전 확인 규칙 연결
```

## Final Check

Right before committing, confirm the following.

- Does this commit have one clear purpose?
- Can someone understand the reason for the change from the commit message?
- Are user-owned changes excluded unless the user asked to include them?
- Are temporary files and unrelated test files excluded?
- If documentation links or file paths changed, do those paths exist?
