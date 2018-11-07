FDS JSON Server (쇼핑몰)
===============

서버를 사용하기 전에 아래의 설정을 해주세요.

1. Remix 해주세요.
1. `db.default.json` 파일을 `.data/db.json` 경로로 복사해주세요.
1. `.env` 파일에서 `JWT_SECRET` 환경변수를 설정해주세요. (이것은 토큰 암호화를 위해 사용되는 문자열입니다. 알파벳 및 숫자를 띄어쓰기 없이 아무렇게나 넣어주시면 됩니다.)
1. **비밀번호 초기화** 혹은 **사용자 생성**을 해주세요. (<a target="_blank" href="https://www.npmjs.com/package/fds-json-server">설명서</a>를 참고하세요.)


Glitch가 `.data/db.json` 파일의 변경사항을 에디터에서 바로 보여주지 않습니다. 데이터의 변경 여부를 확인하고 싶다면 `/db` 혹은 다른 경로로 요청을 보내 데이터의 변경사항을 확인하세요.