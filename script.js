function updateClock() {
  const now = new Date();
  let hrs = String(now.getHours()).padStart(2, '0');
  let mins = String(now.getMinutes()).padStart(2, '0');
  let secs = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('hours').textContent = hrs;
  document.getElementById('minutes').textContent = mins;
  document.getElementById('seconds').textContent = secs;
}

setInterval(updateClock, 1000);
updateClock();

const button = document.getElementById('button');
const clock = document.querySelector('.clock');

button.addEventListener('click', () => {
  clock.classList.toggle('clock1');
  if (clock.classList.contains('clock1')) {
    button.textContent = 'unwear';
  } else {
    button.textContent = 'wear';
  }
});

// const btn = document.getElementById('button');

// function changeClockStyle() {
//       const clock = document.getElementById("Clock");
//       clock.classList.remove("clock");
//       clock.classList.add("clock1");
// }

// btn.addEventListener('click', changeClockStyle);
