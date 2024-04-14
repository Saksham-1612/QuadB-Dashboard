import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import TickerList from "./components/TickerList";

function App() {
  return (
    <main className="bg-[#191d28] min-h-screen overflow-hidden">
      <Navbar />
      <Dashboard />
      <TickerList />
      <div className="flex justify-center">
        <div className="border border-teal-400  my-4 p-4 text-teal-400">
          Add Holdinfo to Home Screen
        </div>
      </div>
    </main>
  );
}

export default App;
