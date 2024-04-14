function Dashboard() {
  return (
    <div className="py-4 px-6 flex flex-col ">
      <div className="my-2">
        <h2 className="text-[#787a81] text-3xl text-center">
          Best Price to Trade
        </h2>
      </div>
      <div className="flex justify-around">
        <div className="text-center">
          <p className="text-4xl text-teal-400">0.1%</p>
          <p className="text-[#787a81]">5 Mins</p>
        </div>
        <div className="text-center">
          <p className="text-4xl text-teal-400">0.96%</p>
          <p className="text-[#787a81]">1 Hour</p>
        </div>
        <div>
          <p className="text-6xl text-white">
            <span>&#x20B9;</span> 26,56,110
          </p>
          <p className="text-[#787a81]">
            Average BTC/INR net price including commission
          </p>
        </div>
        <div className="text-center">
          <p className="text-4xl text-teal-400">2.73%</p>
          <p className="text-[#787a81]">1 Day</p>
        </div>
        <div className="text-center">
          <p className="text-4xl text-teal-400">7.51%</p>
          <p className="text-[#787a81]">7 Days</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
