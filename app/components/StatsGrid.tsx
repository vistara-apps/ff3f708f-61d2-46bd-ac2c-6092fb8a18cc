'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, Lock, Zap } from 'lucide-react';

const chartData = [
  { name: 'Mon', value: 65 },
  { name: 'Tue', value: 85 },
  { name: 'Wed', value: 45 },
  { name: 'Thu', value: 95 },
  { name: 'Fri', value: 75 },
  { name: 'Sat', value: 55 },
  { name: 'Sun', value: 88 },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* In App Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6 card-hover"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">In App</span>
          </div>
          <TrendingUp className="w-4 h-4 text-green-400" />
        </div>
        <div className="text-2xl font-bold text-white mb-1">+73.2%</div>
        <p className="text-xs text-gray-400">vs last month</p>
      </motion.div>

      {/* Conversion Rate */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-2xl p-6 card-hover"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Conversion</span>
          </div>
          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">+12%</span>
        </div>
        <div className="text-2xl font-bold text-white mb-1">10.25%</div>
        <p className="text-xs text-gray-400">conversion rate</p>
      </motion.div>

      {/* Campaign Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-2xl p-6 card-hover"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-300">Campaign AOD</span>
          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">+4.7k</span>
        </div>
        <div className="text-2xl font-bold text-white mb-2">109,264</div>
        <div className="h-16">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <Bar dataKey="value" fill="url(#gradient)" radius={2} />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
