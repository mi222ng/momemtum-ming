const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //시분초 단위를 2자리 숫자로 보이게 만들어줌
  //padStart는 앞에 넣어주는것으로 (글자수, "넣어줄것")으로 함
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  ///clock.innerText = new Date().toLocaleTimeString();
}

getClock();
setInterval(getClock, 1000);
