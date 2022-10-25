# <프리코스에 관한 설명>
## ✅ 프로그래밍 요구사항
- play(컴퓨터의 랜덤 값, 유저의 입력 값) 메서드를 만들어 게임을 진행한다.

- play메서드는 String으로 결과값을 return 한다.
  - 스트라이크와 볼이 같이 있는 경우 볼 -> 스트라이크 순서로 쓴다.

- <span style="color:red">index.js</span>에서 아래의 function 또는 class 형태를 활용한다

```javascript
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

// 예시
play(123, 456); // '낫싱'
play(123, 345); // '1볼'
play(123, 432); // '2볼'
play(123, 312); // '3볼'
play(123, 145); // '1스트라이크'
play(123, 134); // '1볼 1스트라이크'
play(123, 132); // '2볼 1스트라이크'
play(123, 124); // '2스트라이크'
```
- this를 설명하고 있는 글: <a href='https://ko.javascript.info/object-methods'> '메서드와 this'</a>

- this.는 말그대로 "이거"라고 생각하면 됩니다 이거 객체의 무엇무엇

- 인간이라는 객체가 있고 그 안에 물 마시기, 입 벌리기라는 메소드가 있다고 칩시다. "내가" 물을 마시려면 "나의" 입을 벌려야 해요. 물을 마시려고 누군가의 입을 벌려야 해요. 누구의 입을 벌려야 하냐: 물을 마시는 내 입을 벌려야겠죠? 여기서 "물을 마시는 나"=this 입니다.

- '뭐시기' 같은 표현이죠

- 내가 속한 윗 놈(???)을 부르고싶을때 사용하는 애

<br>

### 라이브러리
- 컴퓨터의 랜덤 값은 반드시 JavaScript의 Math.Random 대신 MissionUtils 라이브러리의 Random.pickNumberInRange를 사용해 구한다.
  - MissionUtils 라이브러리 스크립트는 index.html에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 import 하지 않아도 구현 코드 어디에서든 사용할 수 있다.
  - 
    ```javascript
    // ex)
    const randomNumber = Random.pickNumberInRange(1, 9);
    ```

<br>

### 공통 요구사항
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.

- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍 한다.
  - 내가 찾은 <a href='https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%94%A9-%EB%B0%8F-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-1%ED%8E%B8'>자바스크립트 코딩 컨벤션</a>에 대한 글
  - 내가 찾은 <a href='https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%ED%8E%B8'>자바스크립트 네이밍 컨벤션</a>에 대한 글

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.

- 함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게 만들어라.

- 변수 선언시 var 를 사용하지 않는다. const 와 let 을 사용한다.

- import 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import
  - https://www.daleseo.com/js-module-import/ (따로 찾은 페이지 - 설명 굿)

- 함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.

<br>

## ✅ 과제 진행 요구사항
- 미션은 <a href='https://github.com/woowacourse/javascript-baseball-precourse/'>javascript-baseball-precourse 저장소</a>를 Fork/Clone해 시작한다.

- 기능을 구현하기 전에 javascript-baseball-precourse/docs/README.md 파일에 구현할 기능 목록을 정리해 추가한다.

- Git의 커밋 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가한다.
  - <a href='https://gist.github.com/stephenparish/9941e89d80e2bc58a153'>AngularJS Commit Message Conventions</a> 참고해 commit log를 남긴다
  - <a href='https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716'>여기</a>에서는 더 간결하게 설명하고 있다(영문)
  - <a href='https://www.conventionalcommits.org/ko/v1.0.0/'>한글로 번역된 이 페이지</a> 는 특히 더 괜찮다!

- 과제 진행 및 제출 방법은 <a href='https://github.com/woowacourse/woowacourse-docs/tree/main/precourse'>프리코스 과제 제출 문서</a>를 참고한다.
  1. fork하기
  2. fork한 저장소를 clone하기
  3. 기능 구현을 위한 브랜치 생성하기
  4. IDE(vscode 등)로 가져오기
  5. 기능 구현
  6. 그 후 add, commit
  7. 내 원격 저장소에도 올리기 
  8. Pull Request 보내기

<br>

### 제출 가이드
Pull Request를 보냈다면 그 후에는 <a href='https://apply.techcourse.co.kr/'>우아한테크코스 지원 플랫폼</a>에 접속하여 프리코스 과제를 꼭 제출해야 한다.

1. 우아한테크코스 지원 플랫폼 > 내 지원 현황
2. 프리코스 과제 제출
  GitHub ID, Pull Request 주소, 과제 진행 소감 입력 후 제출
3. 제출한 과제 확인 
  제출한 Pull Request를 기반으로 코드가 정상적으로 동작하는지 확인 가능(예제 테스트 실행)
4. 예제 테스트 실행 결과 확인
    - 점수가 나오는데 이가 평가에 영향을 미치지는 않고 그냥 자신이 확인하는 용도로 사용하면 됨

<br>

### 과제 제출 전 체크리스트 - 0점 방지를 위한 주의사항
- 요구사항에 명시된 출력값 형식을 지키지 않을 경우 기능 구현을 모두 정상적으로 했더라도 0점으로 처리된다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는 지 확인한다. 테스트가 실패할 경우 0점으로 처리되므로, 반드시 확인 후 제출한다.
- 테스트 실행에 필요한 패키지를 설치하고 명령어를 입력해 테스트를 실행한다.

<br>

### 풀리퀘스트
#### (1) 풀리퀘스트 주소

- <a href='https://github.com/woowacourse/javascript-subway-map-precourse/pulls'>작년 지하철 노선도 문제</a>

- <a href='https://github.com/woowacourse/javascript-subway-path-precourse/pulls'>작년 지하철 노선도 경로 문제</a>

<br>

#### (2) 풀리퀘스트 읽는 법
- 초록색 배경: 추가되거나 변경된 내용 

- 빨간색 배경: 삭제된 내용
