export default function pickRandomNumber() {
  let targetNumber = MissionUtils.Random.pickNumberInRange(100, 999,1);
  let [a, b, c] = targetNumber.toString().split("");
  while (a == b == c) {
    targetNumber = MissionUtils.Random.pickNumberInRange(100, 999,1);
    [a, b, c] = targetNumber.toString().split("");
  }  
  targetNumber = Number(a + b + c);
}