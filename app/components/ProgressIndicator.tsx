'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface ProgressIndicatorProps {
  progress: number;
}

export default function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="animate-spin">
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
        <span className="text-white font-medium">AI is generating your ad variations...</span>
      </div>
      
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-400">
        <span>Analyzing image...</span>
        <span>{progress}%</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-gray-300">Image processed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-gray-300">Generating copy</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span className="text-gray-400">Platform optimization</span>
        </div>
      </div>
    </div>
  );
}
