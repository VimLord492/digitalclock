function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const clockElement = document.getElementById('clock');
  clockElement.innerHTML = `<span id="hours">${hours}</span>:<span id="minutes">${minutes}</span>:<span id="seconds">${seconds}</span>`;

  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const dayNum = String(now.getDate()).padStart(2, '0');
  const month = now.toLocaleDateString('en-US', { month: 'long' });
  const year = now.getFullYear();

  const dateElement = document.getElementById('dayname');
  dateElement.textContent = dayName;
  const dayNumElement = document.getElementById('daynum');
  dayNumElement.textContent = dayNum;
  const monthElement = document.getElementById('month');
  monthElement.textContent = month;
  const yearElement = document.getElementById('year');
  yearElement.textContent = year;
}

updateClock();
setInterval(updateClock, 1000);

