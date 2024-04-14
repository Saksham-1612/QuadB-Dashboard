import { useEffect, useState } from "react";

function TickerList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://quadb-backend-lxc1.onrender.com/tickers"
        );
        const result_json = await result.json();
        setData(result_json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-2 w-full overflow-hidden">
      <div className="text-[#787a81] text-xl font-semibold w-full">
        <div className="flex justify-between text-center">
          <div className="w-1/12 px-4">#</div>
          <div className="w-3/12 px-4">Platform</div>
          <div className="w-2/12 px-4">Last Traded Price</div>
          <div className="w-2/12 px-4">Buy/Sell Price</div>
          <div className="w-2/12 px-4">Difference</div>
          <div className="w-2/12 px-4">Savings</div>
        </div>
        {data.map((ticker, index) => (
          <div
            key={index + 200}
            className="flex text-white my-1 py-4 mx-2 rounded-xl bg-[#2e3241] text-center"
          >
            <div className="w-1/12 px-4">{index + 1}</div>
            <div className="w-3/12 px-4">{ticker.ticker_name}</div>
            <div className="w-2/12 px-4">{ticker.data.last}</div>
            <div className="w-2/12 px-4">
              {ticker.data.buy}/{ticker.data.sell}
            </div>
            <div
              className={`w-2/12 px-4 ${
                isNaN((ticker.data.sell - ticker.data.buy) / ticker.data.buy)
                  ? "text-blue-500"
                  : (ticker.data.sell - ticker.data.buy) / ticker.data.buy >= 0
                  ? "text-blue-500"
                  : "text-red-500"
              }`}
            >
              {(
                ((ticker.data.sell - ticker.data.buy) / ticker.data.buy || 0) *
                100
              ).toFixed(2)}
              %
            </div>
            <div
              className={`w-2/12 px-4 ${
                isNaN((ticker.data.sell - ticker.data.buy) * ticker.data.volume)
                  ? "text-blue-500"
                  : (ticker.data.sell - ticker.data.buy) * ticker.data.volume >=
                    0
                  ? "text-blue-500"
                  : "text-red-500"
              }`}
            >
              {(
                (ticker.data.sell - ticker.data.buy) * ticker.data.volume || 0
              ).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TickerList;
