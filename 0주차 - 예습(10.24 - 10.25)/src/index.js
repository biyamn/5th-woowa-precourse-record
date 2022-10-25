import pickRandomNumber from './components/pickRandomNumber.js';

export default function BaseballGame() {
  const computerNumber = pickRandomNumber();

  // 이벤트리스너 넣어야 함
  let input = document.getElementById("input");
  console.log(input);
  let [a, b, c] = input.value.toString().split("")
  console.log(a, b, c);
}

BaseballGame()

