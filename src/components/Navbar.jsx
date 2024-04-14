import { FaChevronDown, FaTelegramPlane } from "react-icons/fa";

function Navbar() {
  return (
    <div className="py-4 px-6 flex justify-between">
      <div className="text-teal-400 text-3xl font-semibold">HOLDINFO</div>
      <div className="flex space-x-4 ">
        <div className="bg-[#3c4355] flex py-2 px-3 items-center gap-1 text-white rounded-xl">
          <p>INR</p>
          <FaChevronDown />
        </div>
        <div className="bg-[#3c4355] flex items-center gap-1 py-2 px-3 text-white rounded-xl">
          <p>BTC</p>
          <FaChevronDown />
        </div>
        <div className="bg-[#3c4355] py-2 px-3 text-white rounded-xl">
          BUY BTC
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="rounded-full p-2 border border-teal-400 text-teal-400">
          57
        </div>
        <div className="bg-teal-400 flex items-center gap-2 text-white px-4 py-2 rounded-xl">
          <div className="text-xl">
            <FaTelegramPlane />
          </div>
          <div>Connect Telegram</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
