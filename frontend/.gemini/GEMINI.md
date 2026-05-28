1. 모든 질문에 대한 답변은 한글로 처리해줘.
2. "오늘의 작업을 진행해줘." 라는 명령어가 입력됐을 때, 다음과 같은 내용을 실행해줘.

```
@mock/[오늘 날짜]/requirement.md 파일을 기반으로 작업을 진행할거야.
"오늘 날짜" 의 기준은 3번 환경설정에 따른 한국 시간이 기반이야.
내역 역시 md 파일과 유사한 양식으로 작성됐으면 좋겠어.
복사가 아니라 해당 파일을 참고해서 내용을 수정 및 보완하여 작성해주면 돼.
또한 폴더 전체를 스캔하지말고 1차적으로 md 파일의 폴더 트리로 분석을 마치고,
이후 보완 또는 필요하다싶은 디렉토리를 찾아야할때만 해당 부분에 대해 스캔을 진행해줘.
진행을 마쳤다면 대략적인 내용을 적은 `main.md` 파일과
실질적인 내용이 담긴 스니핏 위주의 `detail.md` 파일을 md 파일이 있는 위치에 생성해주면 돼.
```

3. 하기의 환경설정을 기반으로 진행해줘.

# Global Instructions

## Timezone

- Always use Korea Standard Time (KST, Asia/Seoul) for:
  - current date
  - current time
  - timestamps
  - relative date calculations
  - scheduling
  - logs

- Treat all unspecified dates/times as Asia/Seoul timezone.

- When generating code:
  - Prefer `Asia/Seoul`
  - Prefer KST-based examples
  - Avoid UTC unless explicitly requested

## Date Formatting

- Default format:
  - YYYY-MM-DD
  - YYYY-MM-DD HH:mm:ss KST

## Environment

- Assume the development environment timezone is `Asia/Seoul`.
- Prefer examples using:
  - `TZ=Asia/Seoul`
  - `Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul' })`
  - `date-fns-tz`
  - `dayjs.tz('Asia/Seoul')`

## Response Language

- Respond in Korean unless explicitly requested otherwise.
