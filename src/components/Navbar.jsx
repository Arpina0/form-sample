import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#252736] border-b border-gray-700">
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/logo-whitetulip-health 2 copy.png" 
            alt="Whitetulip Health" 
            className="h-8 w-auto" 
          />
          <span className="text-white font-semibold">WHF</span>
        </div>

        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#1e1d2a] text-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="h-8 w-8 rounded-full bg-[#fb4359] text-white flex items-center justify-center">
            <span className="text-sm font-medium">B</span>
          </button>
        </div>
      </div>
    </nav>
  );
} 