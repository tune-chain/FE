const tabs = ["For You", "Trending", "Random", "Geographic"];

export default function TabMenu() {
  return (
    <div className="flex flex-wrap gap-3 px-6 mt-6">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className={`px-5 py-2 rounded-full text-sm whitespace-nowrap ${
            i === 0 ? "bg-black text-white" : "border border-gray-300 text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}


