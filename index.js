let timerInterval;
let startTime;
let totalTime = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - totalTime;
    timerInterval = setInterval(updateTimer, 1000); // Update every second
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  totalTime = 0;
  updateTimerDisplay(totalTime);
}

function updateTimer() {
  const now = Date.now();
  totalTime = now - startTime;
  updateTimerDisplay(totalTime);
}

function updateTimerDisplay(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const displayHours = hours % 24;
  const displayMinutes = minutes % 60;
  const displaySeconds = seconds % 60;

  timerDisplay.textContent = `${formatTime(displayHours)}:${formatTime(displayMinutes)}:${formatTime(displaySeconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
