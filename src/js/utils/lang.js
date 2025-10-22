/* Language object */
const Lang = {
  locale: 'en',
  langStrings: {},

  async addI18n(locale = 'en') {
    await this.setLocale(locale);
  },

  translate(key) {
    return this.langStrings[key] || key;
  },

  _(key) {
    return this.translate(key);
  },

  sprintf(key, ...args) {
    let text = this.translate(key);
    args.forEach((arg) => {
      text = text.replace(/%\([a-zA-Z]+\)/, arg);
    });
    return text;
  },

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
