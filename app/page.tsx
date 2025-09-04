'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import AdGenerationPanel from './components/AdGenerationPanel';
import PerformancePanel from './components/PerformancePanel';
import Sidebar from './components/Sidebar';

export default function Home() {
  const [activeTab, setActiveTab] = useState('generate');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Main Content */}
        <div className="flex-1 p-6">
          <Header />
          
          <div className="mt-8 grid grid-cols-12 gap-6">
            {/* Left Side - Stats and Ad Generation */}
            <div className="col-span-8 space-y-6">
              <StatsGrid />
              
              {/* Main Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setActiveTab('generate')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === 'generate'
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Generate Ads
                  </button>
                  <button
                    onClick={() => setActiveTab('performance')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === 'performance'
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Performance
                  </button>
                  <button
                    onClick={() => setActiveTab('campaigns')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === 'campaigns'
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Campaigns
                  </button>
                </div>

                {activeTab === 'generate' && <AdGenerationPanel />}
                {activeTab === 'performance' && <PerformancePanel />}
                {activeTab === 'campaigns' && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold text-white mb-2">Campaigns</h3>
                    <p className="text-gray-400">Campaign management coming soon...</p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
