// Specifications accordion component

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SpecificationSection } from '@/lib/types';

interface SpecsAccordionProps {
  specifications: SpecificationSection[];
}

export function SpecsAccordion({ specifications }: SpecsAccordionProps) {
  const [openSections, setOpenSections] = useState<string[]>(
    specifications.length > 0 ? [specifications[0].title] : []
  );
  
  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };
  
  if (!specifications || specifications.length === 0) {
    return null;
  }
  
  return (
    <div className="space-y-3">
      {specifications.map((section) => {
        const isOpen = openSections.includes(section.title);
        
        return (
          <div
            key={section.title}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <motion.button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
              whileTap={{ scale: 0.995 }}
            >
              <span className="font-semibold text-foreground">{section.title}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4">
                    <table className="w-full">
                      <tbody>
                        {section.items.map((item, idx) => (
                          <tr
                            key={idx}
                            className={idx % 2 === 0 ? 'bg-muted/30' : ''}
                          >
                            <td className="px-4 py-3 text-muted-foreground text-sm font-medium w-1/3">
                              {item.name}
                            </td>
                            <td className="px-4 py-3 text-foreground text-sm">
                              {item.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
