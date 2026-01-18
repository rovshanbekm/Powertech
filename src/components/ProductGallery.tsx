'use client';

// Product gallery component with thumbnails

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProductImage } from '@/lib/types';

interface ProductGalleryProps {
  images: ProductImage[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // If no images, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
        <div className="w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-cyan-500/20 rounded-2xl" />
      </div>
    );
  }
  
  return (
    <div className="max-w-md mx-auto lg:max-w-lg">
      {/* Main Image - Reduced size */}
      <div className="aspect-[4/3] bg-muted rounded-xl mb-7 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {images[activeIndex]?.image && (
            <motion.img
              key={activeIndex}
              src={images[activeIndex].image}
              alt={`${title} - ${activeIndex + 1}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Thumbnails - Compact size */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto p-2 justify-center">
          {images.map((img, idx) => (
            <motion.button
              key={img.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(idx)}
              className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 transition-all ${
                activeIndex === idx 
                  ? 'ring-2 ring-cyan-400' 
                  : 'hover:ring-2 hover:ring-border'
              }`}
            >
              <img
                src={img.image}
                alt={`${title} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
