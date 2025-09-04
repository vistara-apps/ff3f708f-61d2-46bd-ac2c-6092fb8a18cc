'use client';

import { motion } from 'framer-motion';

interface PlatformSelectorProps {
  selectedPlatforms: string[];
  onPlatformChange: (platforms: string[]) => void;
}

export default function PlatformSelector({ selectedPlatforms, onPlatformChange }: PlatformSelectorProps) {
  const platforms = [
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'from-pink-500 to-red-500' },
    { id: 'instagram', name: 'Instagram', icon: '📸', color: 'from-purple-500 to-pink-500' },
    { id: 'facebook', name: 'Facebook', icon: '👍', color: 'from-blue-500 to-blue-600', disabled: true },
    { id: 'youtube', name: 'YouTube', icon: '🎥', color: 'from-red-500 to-red-600', disabled: true },
  ];

  const togglePlatform = (platformId: string) => {
    if (platforms.find(p => p.id === platformId)?.disabled) return;
    
    if (selectedPlatforms.includes(platformId)) {
      onPlatformChange(selectedPlatforms.filter(id => id !== platformId));
    } else {
      onPlatformChange([...selectedPlatforms, platformId]);
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-white">Target Platforms</h4>
      <div className="flex flex-wrap gap-3">
        {platforms.map((platform) => (
          <motion.button
            key={platform.id}
            onClick={() => togglePlatform(platform.id)}
            className={`relative px-4 py-3 rounded-xl border transition-all ${
              platform.disabled
                ? 'border-gray-600 bg-gray-800/30 text-gray-500 cursor-not-allowed'
                : selectedPlatforms.includes(platform.id)
                ? 'border-purple-400 bg-purple-500/20 text-white'
                : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:bg-gray-800/70'
            }`}
            whileHover={!platform.disabled ? { scale: 1.05 } : {}}
            whileTap={!platform.disabled ? { scale: 0.95 } : {}}
            disabled={platform.disabled}
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">{platform.icon}</span>
              <span className="font-medium">{platform.name}</span>
            </div>
            
            {selectedPlatforms.includes(platform.id) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-xs">✓</span>
              </motion.div>
            )}
            
            {platform.disabled && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">
                  Soon
                </span>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
