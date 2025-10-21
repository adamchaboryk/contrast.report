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

export default function initLang() {
  const select = document.getElementById('lang-select');

  Object.entries(languages).forEach(([code, label]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = label;
    option.setAttribute('lang', code.replace(/([a-z]{2})([A-Z]{2})/, '$1-$2'));
    if (code === Lang.locale) option.selected = true;
    select.appendChild(option);
  });

  select.addEventListener('change', (e) => {
    Lang.setLocale(e.target.value);
    store.setItem('lang', e.target.value);
    window.location.reload();
  });

  const savedLocale = store.getItem('lang');
  if (savedLocale) {
    Lang.setLocale(savedLocale);
    select.value = savedLocale;
  }

  // <html> page language.
  const htmlLang = savedLocale.replace(/([a-z]{2})([A-Z]{2})/, '$1-$2');
  document.documentElement.lang = htmlLang;
}
