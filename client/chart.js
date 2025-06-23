<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.createElement("canvas");
  ctx.id = "priceChart";
  ctx.width = 400;
  ctx.height = 200;
  document.body.appendChild(ctx);

  const labels = [];
  const prices = [];

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: 'ETH-USD Price',
        borderColor: 'lime',
        backgroundColor: '#0f05',
        data: prices
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: false },
        x: { ticks: { color: '#0f0' } }
      },
      plugins: {
        legend: { labels: { color: '#0f0' } }
      }
    }
  });

  async function fetchLivePrice() {
    try {
      const res = await fetch('/api/price/ETH-USD');
      const data = await res.json();
      const time = new Date().toLocaleTimeString();
      const price = parseFloat(data.price).toFixed(2);

      labels.push(time);
      prices.push(price);
      if (labels.length > 20) {
        labels.shift();
        prices.shift();
      }
      chart.update();
    } catch (err) {
      console.error("Chart price fetch error:", err.message);
    }
  }

  setInterval(fetchLivePrice, 5000); // update every 5s
</script>
