let step = 0;
const content = document.getElementById('content');
const actionBtn = document.getElementById('actionBtn');
const heartsDiv = document.getElementById('hearts');
const cakeArea = document.getElementById('cakeArea');

function nextStep() {
  step++;

  heartsDiv.innerHTML = '';
  cakeArea.innerHTML = '';

  switch(step) {
    case 1:
      content.innerHTML = "Catch the hearts! Click 3 hearts 💖";
      createHearts(3);
      actionBtn.style.display = 'none';
      break;
    case 2:
      content.innerHTML = "Drag this heart into the box! 💌 (just click it for simplicity)";
      createHearts(1);
      actionBtn.style.display = 'none';
      break;
    case 3:
      content.innerHTML = `I may not have a wrapped gift,<br>
      but I wanted to give you something made with intention.<br>
      You matter to me 🤍`;
      actionBtn.innerText = "Next";
      actionBtn.style.display = 'inline-block';
      break;
    case 4:
      content.innerHTML = "Click the hidden heart for a secret 💖";
      createHearts(1, true); // hidden heart
      actionBtn.style.display = 'none';
      break;
    case 5:
      content.innerHTML = "Almost there… get ready for the final surprise 🎉";
      actionBtn.innerText = "Show Cake";
      actionBtn.style.display = 'inline-block';
      break;
    case 6:
      content.innerHTML = "Happy Birthday, HERNAME! 🎂<br>I made this just for you — you won't find it anywhere else 😏<br>And our movie night awaits 🍿";
      showCake();
      actionBtn.style.display = 'none';
      break;
    default:
      break;
  }
}

// Function to create hearts
function createHearts(count, hidden=false) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';
    heart.style.left = Math.random() * 90 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';

    heart.onclick = () => {
      if(hidden) {
        step++;
        nextStep();
      } else {
        heart.remove();
        if(heartsDiv.children.length === 0) {
          step++;
          nextStep();
        }
      }
    }

    heartsDiv.appendChild(heart);
  }
}

// Function to show cake
function showCake() {
  cakeArea.innerHTML = `<div class="cake">🎂</div>`;
}
