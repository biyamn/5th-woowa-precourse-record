export default function BaseballGame() {
  // querySelector보다 getElementById를 더 많이 사용한다고 함
  const Nothing = document.getElementById('Nothing');
  const oneStrike = document.getElementById('oneStrike');
  const twoStrike = document.getElementById('twoStrike'); 
  const oneBall = document.getElementById('oneBall');
  const twoBall = document.getElementById('twoBall');
  const threeBall = document.getElementById('threeBall');
  const oneBallOneStrike = document.getElementById('oneBallOneStrike');
  const twoBallOneStrike = document.getElementById('twoBallOneStrike');
  
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  Nothing.style.display = 'none';
}

BaseballGame()