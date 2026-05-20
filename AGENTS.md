# Agent Instructions

## Skill Usage Disclosure

When responding in this repository, always disclose whether a skill was used.

At the beginning of each meaningful response, include one of the following:

- `사용 스킬: <skill-name>`
- `사용 스킬: 없음`

If a skill was used, briefly state why it was used.

Example:

```text
사용 스킬: superpowers:systematic-debugging
목적: 테스트 실패 원인을 체계적으로 추적하기 위해 사용
```

If no skill applies:

```text
사용 스킬: 없음
이유: 단순 설명 요청이라 별도 스킬 적용 대상이 아님
```

## Documentation Language Rule

Project documentation should keep English as the source version under
`docs/en` and Korean translations under `docs/ko`.

When adding or changing a project document, update both language versions unless
the user explicitly asks for only one language.

Korean documentation under `docs/ko` must use Korean document file names. Keep
English document file names under `docs/en`.
