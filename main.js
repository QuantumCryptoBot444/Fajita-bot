const status = document.querySelector("#status span");
const trade = document.querySelector("#trade");
const vegeta = document.getElementById("vegeta");

const signals = [
  { coin: "XRP", action: "BUY", price: "$0.48", profit: "+14%" },
  { coin: "ETH", action: "SELL", price: "$2,110", profit: "+9%" },
  { coin: "DOGE", action: "BUY", price: "$0.072", profit: "+6%" },
];

function updateStatus() {
  const signal = signals[Math.floor(Math.random() * signals.length)];
  status.textContent = "Trade Signal Detected";
  trade.innerHTML = `🚀 ${signal.action} ${signal.coin} at ${signal.price} <br> Est. Profit: ${signal.profit}`;
  vegeta.classList.add("active");

  setTimeout(() => {
    status.textContent = "Analyzing...";
    trade.innerHTML = "⏳ Waiting for signal...";
    vegeta.classList.remove("active");
  }, 5000);
}

setInterval(updateStatus, 9000);
