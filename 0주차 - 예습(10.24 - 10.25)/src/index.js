import pickRandomNumber from './components/pickRandomNumber.js';

export default function BaseballGame() {
  const computerNumber = pickRandomNumber();


  let form = document.getElementById("form");
  form.addEventListener('submit', onSubmit);
  function onSubmit(e) {
    e.preventDefault();
    console.log();
  }
  

}

BaseballGame()