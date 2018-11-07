FDS JSON Server (쇼핑몰)
===============

서버를 사용하기 전에 아래의 설정을 해주세요.

1. 이 저장소를 복사하신 뒤, Git clone 해주세요. ([저장소 복사 방법](https://github.com/fds11/fds-mid-template#%EC%A0%80%EC%9E%A5%EC%86%8C-%EB%B3%B5%EC%82%AC%ED%95%98%EA%B8%B0))
1. `db.default.json` 파일을 복사해서 `db.json` 파일을 만들어주세요.
1. `.env.dist` 파일을 복사해서 `.env` 파일을 만드신 후, `JWT_SECRET` 환경변수를 설정해주세요. (이것은 토큰 암호화를 위해 사용되는 문자열입니다. 알파벳 및 숫자를 띄어쓰기 없이 아무렇게나 넣어주시면 됩니다.)
1. `npm install` 실행 후 `npm start` 해주시면 API 서버가 `localhost:3000` 주소에서 실행됩니다.
1. **비밀번호 초기화** 혹은 **사용자 생성**을 해주세요. (<a target="_blank" href="https://www.npmjs.com/package/fds-json-server">설명서</a>를 참고하세요.)

이 프로젝트는 일반적인 Git 저장소입니다. `db.default.json` 파일 등을 편집한 뒤 커밋 & 푸시해둘 수 있습니다. 다만 `db.json` 파일과 `.env` 파일은 `.gitignore` 목록에 포함되어 있어서 Git 저장소에 저장되지 않으니 주의하세요.

서버의 데이터가 변경되면, 변경사항을 `db.json` 파일에서 바로 확인할 수 있습니다. 그리고 `db.json` 파일을 편집하시면 바로 서버에 데이터가 반영되어 편하게 확인해볼 수 있습니다.

이 서버는 개발용으로만 사용하세요. 이 서버는 인터넷 상에서 실행되는 것이 아니므로, Netlify에 배포하실 때 API_URL 환경변수에 이 서버의 주소(`localhost:3000`)를 넣으시면 안됩니다.
