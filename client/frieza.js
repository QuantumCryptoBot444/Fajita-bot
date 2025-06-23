function playFriezaWarning() {
  const audio = new Audio("https://www.myinstants.com/media/sounds/frieza-laugh.mp3");
  audio.volume = 0.5;
  audio.play();
}

function checkLiquidationRisk(trades) {
  const latest = trades[trades.length - 1];
  if (!latest) return;

  const profit = parseFloat(latest.profit);
  if (profit < -5) {
    console.warn("🚨 Frieza Alert: Losing Trade!");
    playFriezaWarning();
  }
}
