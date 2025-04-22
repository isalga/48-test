import en from '@/i18n/en.json';
import ar from '@/i18n/ar.json';

const translations = { en, ar };

export function getTranslations(lang: string) {
  return translations[lang] || translations.en;  
}
