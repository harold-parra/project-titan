import React, { useState } from "react";
import { Trophy, Plus, BarChart2, Settings } from 'lucide-react';

export default function App() {
  // 1. State to track which screen is active
  const [activeTab, setActiveTab] = useState('home');

  // 2. Function to render the active screen based on state
  const renderContent = () => {
    if (activeTab === 'home') {
      return (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          {/* Home Screen Content */}
          <div className="w-64 h-96 border-2 border-titan-acid/20 bg-titan-card rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(57,255,20,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]"></div>
            <div className="flex items-center justify-center h-full text-titan-dim text-xs font-mono">
              [ HEATMAP_MODULE_V1 ]
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="flex items-center justify-center h-full text-titan-acid font-mono animate-pulse">
        {/* COMING SOON */}
      </div>
    )
  };

  return (
    // Main App Container
    <div className="flex flex-col h-screen bg-titan-bg text-white font-mono overflow-hidden relative">
      
      {/* --- TOP BAR --- */}
      <header className="flex items-center justify-between p-6 z-10">
        <h1 className="text-xl font-black italic tracking-tighter">
          PROJECT <span className="text-titan-acid">TITAN</span>
        </h1>
        <button className="p-2 hover:bg-titan-card rounded-full transition-colors">
          <Settings className="w-6 h-6 text-gray-400" />
        </button>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      {/* flex-1 makes it fill all available space between header and footer */}
      <main className="flex-1 overflow-y-auto pb-24">
        {renderContent()}
      </main>

      {/* --- BOTTOM NAVIGATION --- */}
      <nav className="fixed bottom-0 w-full px-6 pb-6 pt-2 z-50">
        {/* The "Glass" Background Box */}
        <div className="relative flex items-center justify-between bg-titan-card/90 backdrop-blur-md border border-titan-dim h-16 rounded-2xl px-8 shadow-2xl">
          
          {/* LEFT BUTTON: LEADERBOARD */}
          <button 
            onClick={() => setActiveTab('leaderboard')}
            className={`p-2 transition-colors ${activeTab === 'leaderboard' ? 'text-titan-acid' : 'text-gray-500'}`}
          >
            <Trophy className="w-6 h-6" />
          </button>

          {/* CENTER BUTTON: BIG PLUS (The Floating Action Button) */}
          <div className="relative -top-6">
            <button 
              className="h-16 w-16 bg-titan-acid rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-105 transition-all border-4 border-titan-bg"
              onClick={() => alert("START WORKOUT")}
            >
              <Plus className="w-8 h-8 text-black" strokeWidth={3} />
            </button>
          </div>

          {/* RIGHT BUTTON: STATS */}
          <button 
            onClick={() => setActiveTab('stats')}
            className={`p-2 transition-colors ${activeTab === 'stats' ? 'text-titan-acid' : 'text-gray-500'}`}
          >
            <BarChart2 className="w-6 h-6" />
          </button>

        </div>
      </nav>

    </div>
  )
}