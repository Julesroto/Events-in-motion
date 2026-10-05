// ==================================================
// 2000s Y2K Interactive Script
// ==================================================

// --------------------------------------------------
// 1. MOUSE EVENT: Button Click
// Triggers 3 Changes:
//   Change 1: Switches color variables (Hot Pink vs Baby Pink)
//   Change 2: Updates status text ("Hot Pink" / "Baby Pink")
//   Change 3: Toggles button label text
// --------------------------------------------------
const themeBtn = document.getElementById('theme-btn');
const themeModeText = document.getElementById('theme-mode');
let isHotPink = true;

themeBtn.addEventListener('click', () => {
  isHotPink = !isHotPink;

  // Change 1: Update CSS color variables
  document.documentElement.style.setProperty('--bg-color', isHotPink ? '#ff66b2' : '#ffb6c1');
  document.documentElement.style.setProperty('--card-bg', isHotPink ? '#ffe6f0' : '#ffffff');
  document.documentElement.style.setProperty('--border-color', isHotPink ? '#ff007f' : '#ff69b4');
  document.documentElement.style.setProperty('--text-color', isHotPink ? '#800040' : '#c71585');

  // Change 2: Update theme status text
  themeModeText.textContent = isHotPink ? 'Hot Pink' : 'Baby Pink';

  // Change 3: Toggle button label
  themeBtn.textContent = isHotPink ? 'Switch Theme 💕' : 'Revert Theme 💖';
});


// --------------------------------------------------
// 2. KEYBOARD EVENT: Key Press
// Triggers 3 Changes:
//   Change 1: Displays pressed key name in card badge & status bar
//   Change 2: Randomly changes badge background color
//   Change 3: Dynamically scales global font size
// --------------------------------------------------
const keyBadge = document.getElementById('key-badge');
const lastKeySpan = document.getElementById('last-key');

window.addEventListener('keydown', (e) => {
  const keyName = e.key.toUpperCase();

  // Change 1: Update display badges with key name
  keyBadge.textContent = `Key: ${keyName} ✨`;
  lastKeySpan.textContent = keyName;

  // Change 2: Randomly change key badge background color
  const colors = ['#ffccd5', '#ffb3c6', '#ff8fa3', '#ff758f', '#ff4d6d'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  keyBadge.style.backgroundColor = randomColor;

  // Change 3: Dynamically adjust page font scale based on keycode
  const newScale = 0.95 + (e.keyCode % 4) * 0.05;
  document.documentElement.style.setProperty('--font-scale', `${newScale}rem`);
});


// --------------------------------------------------
// 3. TOUCH / TAP EVENT: Box Pointer Down
// Triggers 3 Changes:
//   Change 1: Updates tap counter text inside box
//   Change 2: Rotates/animates the target touch box
//   Change 3: Changes borders of all cards between solid/dashed/dotted
// --------------------------------------------------
const touchArea = document.getElementById('touch-area');
const cards = document.querySelectorAll('.card');
let tapCount = 0;

touchArea.addEventListener('pointerdown', () => {
  tapCount++;

  // Change 1: Update text with count
  touchArea.textContent = `Tapped ${tapCount} Time${tapCount > 1 ? 's' : ''}! 💖`;

  // Change 2: Animate transformation on touch box
  const rotation = tapCount % 2 === 0 ? 4 : -4;
  touchArea.style.transform = `scale(0.95) rotate(${rotation}deg)`;
  setTimeout(() => {
    touchArea.style.transform = 'scale(1) rotate(0deg)';
  }, 150);

  // Change 3: Cycle border styles for all cards
  const borderStyles = ['solid', 'dashed', 'dotted'];
  const nextStyle = borderStyles[tapCount % borderStyles.length];
  cards.forEach(card => {
    card.style.borderStyle = nextStyle;
  });
});


// --------------------------------------------------
// 4. WINDOW RESIZE EVENT: Window Resized
// Triggers 3 Changes:
//   Change 1: Displays current window width in pixels
//   Change 2: Changes title header text based on screen width
//   Change 3: Changes title color depending on screen size
// --------------------------------------------------
const windowSizeSpan = document.getElementById('window-size');
const mainTitle = document.getElementById('main-title');

function handleResize() {
  const width = window.innerWidth;

  // Change 1: Update window width counter
  windowSizeSpan.textContent = width;

  // Change 2 & 3: Change title text & title text color
  if (width < 600) {
    mainTitle.textContent = "📱 Mobile Y2K Hub 📱";
    mainTitle.style.color = "#ff007f";
  } else if (width < 900) {
    mainTitle.textContent = "💻 Tablet Y2K Hub 💻";
    mainTitle.style.color = "#ff1493";
  } else {
    mainTitle.textContent = "💖 Y2K Girlie Hub 💖";
    mainTitle.style.color = "var(--border-color)";
  }
}

window.addEventListener('resize', handleResize);
handleResize(); // Initial call


// --------------------------------------------------
// 5. TIME EVENT: Automatic Interval Timer
// Triggers 3 Changes:
//   Change 1: Increments timer display every second
//   Change 2: Flashes status bar border pink every 5 seconds
//   Change 3: Adds a subtle background glow effect every 5 seconds
// --------------------------------------------------
const timerDisplay = document.getElementById('timer-display');
const statusBar = document.getElementById('status-bar');
let seconds = 0;

setInterval(() => {
  seconds++;

  // Change 1: Update timer display
  timerDisplay.textContent = seconds;

  // Change 2 & 3: Flash status bar and body glow every 5 seconds
  if (seconds % 5 === 0) {
    statusBar.style.borderColor = '#ffffff';
    document.body.style.boxShadow = 'inset 0 0 40px rgba(255, 255, 255, 0.6)';
  } else {
    statusBar.style.borderColor = 'var(--border-color)';
    document.body.style.boxShadow = 'none';
  }
}, 1000);