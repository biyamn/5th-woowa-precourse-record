# 1. ⚾ 숫자 야구 게임 ⚾
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

## ✅ 기능 요구사항
- 기본적으로 1부터 9까지 <span style="color:red">서로 다른 수로 이루어진 3자리의 수</span>를 맞추는 게임이다.

- <span style="color:red">같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트</span>를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
    123을 제시한 경우 : 1스트라이크
    456을 제시한 경우 : 1볼 1스트라이크
    789를 제시한 경우 : 낫싱

- 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. <span style="color:red">컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력</span>하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.

- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료되고, <span style="color:red">재시작 버튼이 노출</span>된다.

- 게임이 종료된 후 재시작 버튼을 클릭해 게임을 다시 시작할 수 있다.

- 사용자가 <span style="color:red">잘못된 값을 입력한 경우 alert</span>으로 에러 메시지를 보여주고, <span style="color:red">다시 입력</span>할 수 있게 한다.

- **<실행 화면>**

  <img src='./1. 숫자 야구 게임/images/숫자야구게임 실행화면.gif'>

<br>

## 📜 기능 목록
### 1. UI
- 숫자 야구 게임이라는 제목 ⭕
- 게임에 대한 설명 + 예시 ⭕
- input type='text' 입력 창 ⭕
- input type='submit' '확인' 버튼 ⭕
- 결과라는 제목 ⭕
- 결과를 표시하는 공간 ⭕
  1. 맞추지 않았을 때: 낫싱, 1스트라이크, 1볼 1스트라이크 등 ⭕
  2. 맞췄을 때: 
      - 문구: '정답을 맞추셨습니다, 게임을 새로 시작하시겠습니까?'
      - 버튼: '게임 재시작' 

### 2. 기능
- 


<br>

## 📌 참고한 문서
- <a href='https://velog.io/@chloeee/getElementById-%EA%B7%B8%EB%A6%AC%EA%B3%A0-querySelector-%EC%B0%A8%EC%9D%B4%EC%A0%90'>getElementById 그리고 querySelector 차이점</a>