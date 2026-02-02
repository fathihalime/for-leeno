// =====================
// LOGIN FUNCTION
// =====================
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "leeno" && pass === "banote2005") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainSite").classList.remove("hidden");
    
    // Start animations
    startFloating();       // floating hearts/flowers
    createButterflies();   // butterflies
    animateButterflies();  // animate butterflies
    document.body.classList.add("heartbeat"); // 💖 Heartbeat mode
  } else {
    alert("Wrong details 💔 Try again, my love");
  }
}

// =====================
// REASONS INTERACTIVITY
// =====================
const reasons = [
  "Ya Special.",
  "Ya S3dene.",
  "Ya Amare.",
  "Ya Bome.",
  "Ya Banote.",
  "Ya Em Lsen.",
  "M3sh tdhke mr2bek ana."
];

function newReason() {
  const r = Math.floor(Math.random() * reasons.length);
  document.getElementById("reason").textContent = reasons[r];
}

// =====================
// FLOATING HEARTS/FLOWERS
// =====================
const icons = ["🌸", "🦋", "💖", "🌷"];

function startFloating() {
  setInterval(() => {
    const el = document.createElement("div");
    el.className = "floating";
    el.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = Math.random() * 5 + 6 + "s";
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 11000);
  }, 600);
}

// =====================
// BUTTERFLIES
// =====================
const butterflies = [];
const BUTTERFLY_COUNT = 6;

function createButterflies() {
  for (let i = 0; i < BUTTERFLY_COUNT; i++) {
    const b = document.createElement("div");
    b.className = "butterfly";
    b.style.left = Math.random() * window.innerWidth + "px";
    b.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(b);

    butterflies.push({
      el: b,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    });
  }
}

function animateButterflies() {
  butterflies.forEach(b => {
    b.x += b.vx;
    b.y += b.vy;

    // Keep inside screen
    if (b.x < 0 || b.x > window.innerWidth) b.vx *= -1;
    if (b.y < 0 || b.y > window.innerHeight) b.vy *= -1;

    b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
  });

  requestAnimationFrame(animateButterflies);
}

function repelButterflies(x, y) {
  butterflies.forEach(b => {
    const dx = b.x - x;
    const dy = b.y - y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 150) {
      b.vx += dx / dist * 0.15;
      b.vy += dy / dist * 0.15;
    }
  });
}

document.addEventListener("mousemove", e => {
  repelButterflies(e.clientX, e.clientY);
});

document.addEventListener("touchmove", e => {
  const t = e.touches[0];
  repelButterflies(t.clientX, t.clientY);
});

// =====================
// SPARKLE CURSOR
// =====================
function sparkle(x, y) {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = x + "px";
  s.style.top = y + "px";
  document.body.appendChild(s);

  setTimeout(() => s.remove(), 1000);
}

document.addEventListener("mousemove", e => sparkle(e.clientX, e.clientY));
document.addEventListener("touchmove", e => {
  const t = e.touches[0];
  sparkle(t.clientX, t.clientY);
});
