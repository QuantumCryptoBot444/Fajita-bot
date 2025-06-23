const CoinbasePro = require('coinbase-pro');

const sandboxURI = 'https://api-public.sandbox.exchange.coinbase.com';

const authClient = new CoinbasePro.AuthenticatedClient(
  process.env.CB_API_KEY,
  process.env.CB_API_SECRET,
  process.env.CB_API_PASSPHRASE,
  sandboxURI
);

// Example: get latest price for a trading pair
async function getCurrentPrice(pair = "ETH-USD") {
  try {
    const publicClient = new CoinbasePro.PublicClient(sandboxURI);
    const ticker = await publicClient.getProductTicker(pair);
    return parseFloat(ticker.price);
  } catch (err) {
    console.error("Coinbase API error:", err.message);
    return null;
  }
}

module.exports = {
  getCurrentPrice,
  authClient
};
