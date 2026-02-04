import React, { useState } from "react";
import { Trophy, Plus, BarChart2, Settings, ArrowLeft } from 'lucide-react';

export default function App() {
  // Track which tab is currently active ('home', 'leaderboard', 'stats')
  const [activeTab, setActiveTab] = useState('home');

  // Render different content based on active tab
  const renderContent = () => {
    if (activeTab === 'home') {
      return (
        <div className="home-page">
          <div className="heatmap-placeholder">
            <div className="heatmap-label">[ HEATMAP_MODULE_V1 ]</div>
          </div>
        </div>
      );
    }
    return (
      <div className="coming-soon-page">
        COMING SOON
      </div>
    );
  };

  // Render different header based on active tab
  const renderHeader = () => {
    if (activeTab === 'home') {
        return (
          <h1 className="app-title">
            PROJECT <span className="accent">TITAN</span>
          </h1>
        );
      }
      return (
          <button 
            className="app-title-button"
            onClick={() => setActiveTab('home')}
          >
            <ArrowLeft />
          </button>
          
        );
    };

  return (
    <div className="app-container">
      {/* TOP BAR: Title & Settings */}
      
      <header className="app-header">
        {renderHeader()}
        <button className="settings-button">
            <Settings />
        </button>
      </header>

      {/* MAIN CONTENT: Rendered based on activeTab */}
      <main className="app-main">
        {renderContent()}
      </main>

      {/* BOTTOM NAVIGATION: Glass-effect bar with 3 buttons */}
      <nav className="app-nav">
        <div className="nav-bar">
          {/* LEFT: Leaderboard Button */}
          <button 
            className={`nav-button ${activeTab === 'leaderboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            <Trophy />
          </button>

          {/* CENTER: Floating Action Button (FAB) */}
          <div className="nav-fab-container">
            <button 
              className="nav-fab"
              onClick={() => alert("START WORKOUT")}
            >
              <Plus />
            </button>
          </div>

          {/* RIGHT: Stats Button */}
          <button 
            className={`nav-button ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            <BarChart2 />
          </button>
        </div>
      </nav>
    </div>
  );
}