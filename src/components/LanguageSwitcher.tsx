// Language switcher component - shows UZ/RU toggle

import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { Language } from '@/lib/types';

export function LanguageSwitcher() {
  const { lang, switchLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
      <button
        onClick={() => switchLanguage('uz')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          lang === 'uz'
            ? 'bg-cyan-400 text-primary'
            : 'text-white/70 hover:text-white'
        }`}
      >
        UZ
      </button>
      <button
        onClick={() => switchLanguage('ru')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          lang === 'ru'
            ? 'bg-cyan-400 text-primary'
            : 'text-white/70 hover:text-white'
        }`}
      >
        RU
      </button>
    </div>
  );
}
