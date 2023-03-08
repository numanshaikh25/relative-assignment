import btc from "../img/btc.png";
import eth from "../img/eth.png";
import bnb from "../img/busd.png";
import sol from "../img/sol.png";
import shib from "../img/shib.png";
export const data = [
  {
    logo: btc,
    name: "Bitcoin (BTC)",
    price: "$31,812.80",
    fluctuation: "+10%",
    positive: true,
    tvl: "$60,000",
    popular_pairs: {
      one: sol,
      two: eth,
      three: bnb,
    },
  },
  {
    logo: sol,
    name: "Solana (SOL)",
    price: "$32.83",
    fluctuation: "-12.32%",
    positive: false,
    tvl: "$60,000",
    popular_pairs: {
      one: btc,
      two: eth,
      three: bnb,
    },
  },
  {
    logo: eth,
    name: "Ethereum (ETH)",
    price: "$1,466.45",
    fluctuation: "-11.93%",
    positive: false,
    tvl: "$60,000",
    popular_pairs: {
      one: sol,
      two: btc,
      three: bnb,
    },
  },
  {
    logo: bnb,
    name: "Binance USD (BUSD)",
    price: "$1.00",
    fluctuation: "+0.26%",
    positive: true,
    tvl: "$60,000",
    popular_pairs: {
      one: sol,
      two: eth,
      three: bnb,
    },
  },
  {
    logo: shib,
    name: "Shiba Inu (SHIB)",
    price: "$0.00000001948",
    fluctuation: "-8.1%",
    positive: false,
    tvl: "$60,000",
    popular_pairs: {
      one: sol,
      two: eth,
      three: bnb,
    },
  },
];
