'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Eye, Heart, Share, MessageCircle } from 'lucide-react';

const performanceData = [
  { name: 'Mon', tiktok: 1200, instagram: 800 },
  { name: 'Tue', tiktok: 1800, instagram: 1200 },
  { name: 'Wed', tiktok: 900, instagram: 1400 },
  { name: 'Thu', tiktok: 2200, instagram: 1100 },
  { name: 'Fri', tiktok: 1600, instagram: 1800 },
  { name: 'Sat', tiktok: 2800, instagram: 2200 },
  { name: 'Sun', tiktok: 2100, instagram: 1900 },
];

const platformData = [
  { name: 'TikTok', value: 65, color: '#ff0050' },
  { name: 'Instagram', value: 35, color: '#833ab4' },
];

const topAds = [
  { id: 1, platform: 'tiktok', views: '186.4K', engagement: '12.3%', trend: 'up' },
  { id: 2, platform: 'instagram', views: '143.9K', engagement: '8.7%', trend: 'up' },
  { id: 3, platform: 'tiktok', views: '98.2K', engagement: '15.1%', trend: 'down' },
  { id: 4, platform: 'instagram', views: '76.8K', engagement: '6.4%', trend: 'up' },
];

export default function PerformancePanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Performance Dashboard</h2>
        <p className="text-gray-400">
          Track your ad performance across platforms and identify top performers.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <Eye className="w-5 h-5 text-blue-400" />
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">$16,653</div>
          <div className="text-xs text-gray-400">Total Revenue</div>
          <div className="text-xs text-green-400 mt-1">+8.2% vs last week</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-5 h-5 text-pink-400" />
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">$144</div>
          <div className="text-xs text-gray-400">Avg. Revenue</div>
          <div className="text-xs text-green-400 mt-1">+12% vs last week</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <Share className="w-5 h-5 text-purple-400" />
            <TrendingDown className="w-4 h-4 text-red-400" />
          </div>
          <div className="text-2xl font-bold text-white">$96</div>
          <div className="text-xs text-gray-400">Cost per Lead</div>
          <div className="text-xs text-red-400 mt-1">-3% vs last week</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">8.4%</div>
          <div className="text-xs text-gray-400">Conversion Rate</div>
          <div className="text-xs text-green-400 mt-1">+1.2% vs last week</div>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="col-span-2 bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Weekly Performance</h3>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-sm text-gray-300">TikTok</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Instagram</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Bar dataKey="tiktok" fill="#ff0050" radius={[2, 2, 0, 0]} />
                <Bar dataKey="instagram" fill="#833ab4" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform Distribution */}
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Platform Split</h3>
          <div className="h-32 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {platformData.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
                  <span className="text-sm text-gray-300">{platform.name}</span>
                </div>
                <span className="text-sm font-medium text-white">{platform.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Ads */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Top Performing Ads</h3>
          <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
        </div>
        <div className="space-y-4">
          {topAds.map((ad, index) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-lg">
                    {ad.platform === 'tiktok' ? '🎵' : '📸'}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">Ad Variation #{ad.id}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      ad.platform === 'tiktok' 
                        ? 'bg-pink-500/20 text-pink-300' 
                        : 'bg-purple-500/20 text-purple-300'
                    }`}>
                      {ad.platform}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">Views: {ad.views}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-white font-medium">{ad.engagement}</div>
                  <div className="text-sm text-gray-400">engagement</div>
                </div>
                <div className={`p-1 rounded ${
                  ad.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {ad.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
