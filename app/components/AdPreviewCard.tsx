'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Share, Copy, ExternalLink } from 'lucide-react';
import CopyToClipboardButton from './CopyToClipboardButton';

interface AdPreviewCardProps {
  ad: {
    id: string;
    image: string;
    copy: string;
    platform: 'tiktok' | 'instagram';
    hooks: string[];
  };
}

export default function AdPreviewCard({ ad }: AdPreviewCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const platformColors = {
    tiktok: 'from-pink-500 to-red-500',
    instagram: 'from-purple-500 to-pink-500'
  };

  const platformIcons = {
    tiktok: '🎵',
    instagram: '📸'
  };

  return (
    <motion.div
      className="relative bg-gray-900/50 rounded-xl overflow-hidden card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Platform Badge */}
      <div className={`absolute top-3 right-3 px-2 py-1 bg-gradient-to-r ${platformColors[ad.platform]} text-white text-xs font-medium rounded-full z-10 flex items-center space-x-1`}>
        <span>{platformIcons[ad.platform]}</span>
        <span className="capitalize">{ad.platform}</span>
      </div>

      {/* Image */}
      <div className="relative aspect-square">
        <img
          src={ad.image}
          alt="Ad preview"
          className="w-full h-full object-cover"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-3"
          >
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Play className="w-5 h-5 text-white" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Share className="w-5 h-5 text-white" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <ExternalLink className="w-5 h-5 text-white" />
            </button>
          </motion.div>
        )}

        {/* Engagement Stats (mock) */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-white text-sm">
            <Heart className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 1000)}K</span>
          </div>
          <div className="flex items-center space-x-1 text-white text-sm">
            <Share className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 100)}K</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium text-white">Ad Variation #{ad.id}</h4>
          <CopyToClipboardButton text={ad.copy} />
        </div>

        {/* Ad Copy */}
        <p className="text-xs text-gray-300 leading-relaxed mb-3 line-clamp-3">
          {ad.copy}
        </p>

        {/* Hooks */}
        <div className="space-y-2">
          <span className="text-xs text-gray-400">Key Hooks:</span>
          <div className="flex flex-wrap gap-1">
            {ad.hooks.slice(0, 2).map((hook, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
              >
                {hook.length > 20 ? `${hook.substring(0, 20)}...` : hook}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2 mt-4">
          <button className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-colors">
            Test Ad
          </button>
          <button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
            <Copy className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
