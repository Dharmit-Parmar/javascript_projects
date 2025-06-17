const coursor = document.getElementById("coursor");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX, currentY = mouseY;

function create_partical(x, y) {
  const partical = document.createElement("div");
  partical.classList.add("partical");
 
  const size = 8 + Math.random() * 8;
  partical.style.width = `${size}px`;
  partical.style.height = `${size}px`;
  partical.style.opacity = 0.5 + Math.random() * 0.5;

  
  const colors = [
    "radial-gradient(circle at 30% 30%, #00a6ff, #ccff00 80%, transparent 100%)",
    "radial-gradient(circle at 70% 70%, #ccff00, #00a6ff 80%, transparent 100%)",
    "radial-gradient(circle at 50% 50%, #fff, #00a6ff 80%, transparent 100%)"
  ];
  partical.style.background = colors[Math.floor(Math.random() * colors.length)];

  partical.style.left = x +10+ "px";
  partical.style.top = y +10+ "px";

  const spreadX = (Math.random() - 0.5) * 60; // -40 to 40
  const spreadY = (Math.random() - 0.5) * 60;

  partical.style.setProperty("--x", `${spreadX}px`);
  partical.style.setProperty("--y", `${spreadY}px`);

  document.body.appendChild(partical);

  setTimeout(() => {
    partical.remove();
  }, 900);
}

function animateCursor() {

  coursor.style.left = mouseX - 15+"px";
  coursor.style.top =mouseY  -15+   "px";
  requestAnimationFrame(animateCursor);
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  for (let i = 0; i < 4; i++) {
    create_partical(mouseX, mouseY);
  }
});

animateCursor();