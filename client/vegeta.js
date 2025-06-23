// Simple Vegeta DOM control
function createVegeta() {
  const vegeta = document.createElement("img");
  vegeta.src = "https://media.giphy.com/media/h5GmHJc4kJvgs/giphy.gif"; // Vegeta stance
  vegeta.id = "vegeta";
  vegeta.style.position = "fixed";
  vegeta.style.bottom = "10px";
  vegeta.style.left = "10px";
  vegeta.style.height = "180px";
  vegeta.style.zIndex = "9999";
  document.body.appendChild(vegeta);
}

// Vegeta reacts to a trade
function vegetaTradeTaunt(type) {
  const vegeta = document.getElementById("vegeta");
  if (!vegeta) return;

  vegeta.src =
    type === "buy"
      ? "https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif"  // Buy animation
      : "https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif"; // Sell taunt

  setTimeout(() => {
    vegeta.src = "https://media.giphy.com/media/h5GmHJc4kJvgs/giphy.gif"; // Reset
  }, 3000);
}

createVegeta();
