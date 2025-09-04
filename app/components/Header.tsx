'use client';

import { motion } from 'framer-motion';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Identity, Avatar, Name, Address } from '@coinbase/onchainkit/identity';
import { Search, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between"
    >
      {/* Logo and Navigation */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-2xl font-bold text-white">AdRemix AI</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <button className="text-white font-medium hover:text-purple-300 transition-colors">
            Home
          </button>
          <button className="text-gray-400 font-medium hover:text-white transition-colors">
            Performance
          </button>
          <button className="text-gray-400 font-medium hover:text-white transition-colors">
            Instagram
          </button>
          <button className="text-gray-400 font-medium hover:text-white transition-colors">
            Campaign
          </button>
        </nav>
      </div>

      {/* Search and Actions */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 w-64"
          />
        </div>

        {/* Notifications */}
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-gray-400" />
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Settings className="w-5 h-5 text-gray-400" />
        </button>

        {/* Wallet Connection */}
        <ConnectWallet>
          <Identity>
            <Avatar />
            <Name />
            <Address />
          </Identity>
        </ConnectWallet>
      </div>
    </motion.header>
  );
}
