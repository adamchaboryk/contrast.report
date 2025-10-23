import Lang from '../utils/lang.js';
import { store } from '../utils/utils.js';

const languages = {
  en: 'English',
  enUS: 'English (US)',
  id: 'Bahasa Indonesia',
  da: 'Dansk',
  de: 'Deutsch',
  cs: 'Čeština',
  es: 'Español',
  et: 'Eesti',
  fi: 'Suomi',
  fr: 'Français',
  hu: 'Magyar',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  nb: 'Norsk Bokmål',
  nl: 'Nederlands',
  pl: 'Polski',
  ptBR: 'Português (Brasil)',
  ptPT: 'Português (Portugal)',
  ro: 'Română',
  sk: 'Slovenčina',
  sl: 'Slovenščina',
  sv: 'Svenska',
  tr: 'Türkçe',
  uk: 'Українська',
  zh: '中文',
};

// Initialize page language.
export function initLang() {
  let locale = store.getItem('lang');
  if (!locale) {
    const navLang = navigator.language || navigator.userLanguage;
    if (navLang) {
      const normalized = navLang.replace('-', '');
      const exceptions = ['enUS', 'ptPT', 'ptBR'];
      locale = exceptions.includes(normalized)
        ? normalized
        : navLang.slice(0, 2);
    } else {
      locale = 'en';
    }
  }

  // If not a supported language, return English.
  if (!Object.prototype.hasOwnProperty.call(languages, locale)) locale = 'en';
  return locale;
}

// Initialize <select> menu language switcher.
export function initLangSwitcher(locale) {
  const select = document.getElementById('lang-select');

  // Populate list of languages based on list above.
  Object.entries(languages).forEach(([code, label]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = label;
    option.setAttribute('lang', code.replace(/([a-z]{2})([A-Z]{2})/, '$1-$2'));
    if (code === Lang.locale) option.selected = true;
    select.appendChild(option);
  });

  // Listen for changes on language <select>
  select.addEventListener('change', (e) => {
    Lang.setLocale(e.target.value);
    store.setItem('lang', e.target.value);
    window.location.reload();
  });

  // Return locale based on local storage value, otherwise use detected browser language.
  const savedLocale = store.getItem('lang') || locale;
  Lang.setLocale(savedLocale);
  select.value = savedLocale;

  // Update <html> page language.
  const htmlLang = savedLocale.replace(/([a-z]{2})([A-Z]{2})/, '$1-$2');
  document.documentElement.lang = htmlLang;
}
