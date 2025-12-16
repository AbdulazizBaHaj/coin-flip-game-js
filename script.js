const counterHeads = document.getElementById("counter-heads");
const counterTails = document.getElementById("counter-tails");
const coin = document.getElementById("coin");
const flipResult = document.getElementById("flip-result");

let headsCounter = 0;
let tailsCounter = 0;
let isFlipping = false;

const flipBtn = document.getElementById("flip-btn");
const clearBtn = document.getElementById("clear-btn");

function updateCounters() {
  counterHeads.textContent = `Heads: ${headsCounter}`;
  counterTails.textContent = `Tails: ${tailsCounter}`;
}

function randomFlip() {
  if (isFlipping) return;

  isFlipping = true;
  flipBtn.disabled = true;
  coin.style.cursor = "not-allowed";

  // Remove any previous flip class
  coin.classList.remove("flipping-to-heads", "flipping-to-tails");

  // Show flipping state
  flipResult.textContent = "Flipping...";

  const result = Math.random() < 0.5 ? "Heads" : "Tails";

  // Add the appropriate flip class after a tiny delay (to trigger CSS transition)
  setTimeout(() => {
    if (result === "Heads") {
      coin.classList.add("flipping-to-heads");
    } else {
      coin.classList.add("flipping-to-tails");
    }
  }, 50);

  // After animation ends, update result and counters
  setTimeout(() => {
    flipResult.textContent = `Landed on ${result}!`;

    if (result === "Heads") {
      headsCounter++;
    } else {
      tailsCounter++;
    }

    updateCounters();

    isFlipping = false;
    flipBtn.disabled = false;
    coin.style.cursor = "pointer";
  }, 1400); // Slightly longer than CSS transition (1.2s)
}

function clearResults() {
  headsCounter = 0;
  tailsCounter = 0;
  updateCounters();

  // Reset coin to heads side
  coin.classList.remove("flipping-to-heads", "flipping-to-tails");
  flipResult.textContent = "Click the coin or button to start!";
}

updateCounters();

// Event listeners
flipBtn.addEventListener("click", randomFlip);
coin.addEventListener("click", randomFlip);
clearBtn.addEventListener("click", clearResults);
