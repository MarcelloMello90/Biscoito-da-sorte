const button = document.querySelector('button');

function handleClick(event) {
  document.querySelector('.screen1').classList.toggle("hide");document.querySelector('.screen2').classList.toggle("hide")
}

button.addEventListener("click", handleClick);