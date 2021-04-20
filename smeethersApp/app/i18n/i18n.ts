import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const fr = require('./fr');
// const en = require('./en');

i18n.fallbacks = true;
i18n.translations = {fr};

const fallback = {languageTag: 'fr', isRTL: false};

const {languageTag} =
  RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) ||
  fallback;
i18n.locale = languageTag;
