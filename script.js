const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  let date = new Date();
  let hours = (date.getHours() / 12) * 360 - 90;
  let minute = (date.getMinutes() / 60) * 360 - 90;
  let seconds = (date.getSeconds() / 60) * 360 - 90;
  hour.style.transform = `rotate(${hours}deg)`;
  min.style.transform = `rotate(${minute}deg)`;
  sec.style.transform = `rotate(${seconds}deg)`;
}, 1000);
