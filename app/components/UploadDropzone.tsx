'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface UploadDropzoneProps {
  onImageUpload: (imageUrl: string) => void;
}

export default function UploadDropzone({ onImageUpload }: UploadDropzoneProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreview(result);
        // Simulate upload delay
        setTimeout(() => {
          setIsUploading(false);
          onImageUpload(result);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: false
  });

  const clearPreview = () => {
    setPreview(null);
  };

  return (
    <div className="space-y-4">
      <motion.div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
          ${isDragActive 
            ? 'border-purple-400 bg-purple-500/10' 
            : 'border-gray-600 hover:border-gray-500 bg-gray-800/30'
          }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <input {...getInputProps()} />
        
        {isUploading ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-purple-400 animate-bounce" />
            </div>
            <div>
              <p className="text-white font-medium">Uploading...</p>
              <div className="mt-2 w-48 h-2 mx-auto bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>
          </div>
        ) : preview ? (
          <div className="space-y-4">
            <div className="relative inline-block">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg mx-auto"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  clearPreview();
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <p className="text-gray-300">Image ready! Click "Generate Variations" to continue.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
              <Image className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <p className="text-white font-medium mb-2">
                {isDragActive ? 'Drop your image here' : 'Upload Product Image'}
              </p>
              <p className="text-sm text-gray-400">
                Drag & drop an image, or click to browse
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Supports JPG, PNG, GIF, WebP (max 10MB)
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Upload Instructions */}
      <div className="flex items-center space-x-4 text-xs text-gray-400">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>High quality images work best</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span>Clear product focus recommended</span>
        </div>
      </div>
    </div>
  );
}
