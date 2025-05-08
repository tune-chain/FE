export default function Header() {
    return (
      <div className="w-full h-16 bg-black/50 flex justify-between items-center px-8">
        <div className="flex gap-4">
          <button className="w-8 h-8 bg-black/70 opacity-60 rounded-2xl flex justify-center items-center">
            {/* Left Arrow */}
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.03 0.97L4.56 8.5L11.03 15.97" stroke="white" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-black/70 opacity-60 rounded-2xl flex justify-center items-center">
            {/* Right Arrow */}
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.97 0.97L11.44 8.5L4.97 15.97" stroke="white" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-400 font-bold">Sign up</span>
          <button className="px-8 py-2 rounded-full bg-white text-black font-bold">Log in</button>
        </div>
      </div>
    );
  }