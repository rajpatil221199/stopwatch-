let startTime;
let running = false;
let lapTimes = [];
let timerInterval;

function start() {
  if (!running) {
    startTime = Date.now() - lapTimes.reduce((acc, cur) => acc + cur, 0);
    timerInterval = setInterval(updateTime, 10);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
}

function lap() {
  if (running) {
    const lapTime = Date.now() - startTime - lapTimes.reduce((acc, cur) => acc + cur, 0);
    lapTimes.push(lapTime);
    const formattedLapTime = formatTime(lapTime);
    const lapList = document.getElementById('laps');
    const newLapItem = document.createElement('div');
    newLapItem.textContent = `Lap ${lapTimes.length}: ${formattedLapTime}`;
    lapList.appendChild(newLapItem);
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  lapTimes = [];
  document.getElementById('stopwatch').textContent = '00:00:00';
  document.getElementById('laps').textContent = '';
}

function updateTime() {
  const elapsedTime = Date.now() - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('stopwatch').textContent = formattedTime;
}

function formatTime(milliseconds) {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  const millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millisecondsFormatted.toString().padStart(2, '0')}`;
}