import React, {FC} from 'react';
import {Text as ReactNativeText} from 'react-native';
import merge from 'lodash/merge';
import {presets} from './Text.presets';
import {TextProps} from './Text.props';
import {translate} from '../../i18n';

const Text: FC<TextProps> = ({
  preset = 'default',
  tx,
  txOptions,
  text,
  children,
  style: styleOverride,
  ...rest
}) => {
  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;

  const style = merge({}, presets[preset] || presets.default);

  if (Array.isArray(styleOverride)) {
    merge(style, ...styleOverride);
  } else if (styleOverride) {
    merge(style, styleOverride);
  }

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
};

export default Text;
