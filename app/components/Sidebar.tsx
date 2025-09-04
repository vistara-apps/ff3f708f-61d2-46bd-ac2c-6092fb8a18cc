'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, BarChart3, Instagram } from 'lucide-react';

export default function Sidebar() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Ad Performance',
      message: 'TikTok variation #3 reached 100K views!',
      time: '2m ago'
    },
    {
      id: 2,
      type: 'info',
      title: 'Test Complete',
      message: 'Instagram campaign finished testing',
      time: '1h ago'
    }
  ];

  const performanceItems = [
    { icon: Instagram, label: 'TikTok Test', value: '175.6K', change: '+12%' },
    { icon: Users, label: 'Reach/Views', value: '53.876K', change: '+8%' },
    { icon: DollarSign, label: 'IG Test', value: '175.6K', change: '+15%' },
    { icon: BarChart3, label: 'Analytics', value: '48.927M', change: '+23%' }
  ];

  return (
    <div className="space-y-6">
      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Notifications</h3>
          <span className="text-xs text-gray-400">3 new</span>
        </div>
        
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  notification.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                }`}></div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{notification.message}</p>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Performance Summary */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Performance</h3>
        
        <div className="space-y-4">
          {performanceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{item.label}</div>
                  <div className="text-lg font-bold text-white">{item.value}</div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-xs text-green-400">{item.change}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        
        <div className="space-y-3">
          <button className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium">
            Generate New Ads
          </button>
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium">
            View Reports
          </button>
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium">
            Account Settings
          </button>
        </div>
      </motion.div>
    </div>
  );
}
