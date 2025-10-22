// Language object.
const Lang = {
  locale: 'en',
  langStrings: {},

  async addI18n(locale = 'en') {
    await this.setLocale(locale);
  },

  translate(key) {
    return this.langStrings[key] || key;
  },

  // Simple translation strings.
  _(key) {
    return this.translate(key);
  },

  // Translation strings with variables.
  sprintf(key, ...args) {
    let text = this.translate(key);
    args.forEach((arg) => {
      text = text.replace(/%\([a-zA-Z]+\)/, arg);
    });
    return text;
  },

  // Dynamically import language file.
  async setLocale(locale = 'en') {
    this.locale = locale;
    try {
      const module = await import(`../locales/${locale}.js`);
      this.langStrings = module.default || {};
    } catch {
      this.langStrings = {};
    }
  },
};

export default Lang;
