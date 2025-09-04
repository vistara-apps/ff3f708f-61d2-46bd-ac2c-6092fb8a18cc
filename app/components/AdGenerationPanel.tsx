'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import UploadDropzone from './UploadDropzone';
import AdPreviewCard from './AdPreviewCard';
import PlatformSelector from './PlatformSelector';
import ProgressIndicator from './ProgressIndicator';
import { Sparkles, Play, Share } from 'lucide-react';

interface GeneratedAd {
  id: string;
  image: string;
  copy: string;
  platform: 'tiktok' | 'instagram';
  hooks: string[];
}

export default function AdGenerationPanel() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAds, setGeneratedAds] = useState<GeneratedAd[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['tiktok', 'instagram']);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
  };

  const generateAdVariations = async () => {
    if (!uploadedImage) return;

    setIsGenerating(true);
    
    // Simulate AI generation process
    setTimeout(() => {
      const mockAds: GeneratedAd[] = [
        {
          id: '1',
          image: uploadedImage,
          copy: '🔥 Transform your look instantly! This revolutionary product is taking social media by storm. Join thousands who\'ve already made the switch! #ProductLaunch #Viral',
          platform: 'tiktok',
          hooks: ['Transform your look instantly!', 'Revolutionary product', 'Taking social media by storm']
        },
        {
          id: '2',
          image: uploadedImage,
          copy: 'Discover the secret that influencers don\'t want you to know! 💫 This game-changing product delivers results in just minutes. Limited time offer - get yours now!',
          platform: 'instagram',
          hooks: ['Secret that influencers don\'t want you to know', 'Game-changing product', 'Results in minutes']
        },
        {
          id: '3',
          image: uploadedImage,
          copy: 'WAIT! Before you scroll past this... ⏰ See why 50K+ people are obsessed with this must-have item. Your feed will never be the same!',
          platform: 'tiktok',
          hooks: ['Before you scroll past this', '50K+ people obsessed', 'Your feed will never be the same']
        }
      ];
      
      setGeneratedAds(mockAds);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {!uploadedImage ? (
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-semibold text-white">AI generated ad concepts</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Upload a product image and watch AI create multiple high-converting ad variations optimized for social platforms.
          </p>
          <UploadDropzone onImageUpload={handleImageUpload} />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">AI generated ad concepts</h2>
              <p className="text-gray-400">
                Ready to generate multiple ad variations targeting trending formats and psychology-driven copy.
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setUploadedImage(null)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                New Upload
              </button>
              {!isGenerating && generatedAds.length === 0 && (
                <button
                  onClick={generateAdVariations}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Variations</span>
                </button>
              )}
            </div>
          </div>

          {/* Platform Selection */}
          <div className="mb-6">
            <PlatformSelector
              selectedPlatforms={selectedPlatforms}
              onPlatformChange={setSelectedPlatforms}
            />
          </div>

          {/* Generation Progress */}
          {isGenerating && (
            <div className="mb-6">
              <ProgressIndicator progress={75} />
            </div>
          )}

          {/* Generated Ads */}
          {generatedAds.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Generated Variations</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Test All</span>
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center space-x-2">
                    <Share className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {generatedAds.map((ad, index) => (
                  <motion.div
                    key={ad.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <AdPreviewCard ad={ad} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Original Image Preview */}
          {uploadedImage && (
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Original Upload</h4>
              <img
                src={uploadedImage}
                alt="Uploaded product"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
