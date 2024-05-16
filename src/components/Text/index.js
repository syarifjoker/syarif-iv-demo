import Proptypes from 'prop-types';
import {BLACK} from '@constants/Color';
import React from 'react';
import {Text as NativeText} from 'react-native';

const fontLanguage = {
  name: 'Montserrat',
  fontWeight: {
    100: '-Thin',
    200: '-ExtraLight',
    300: '-Light',
    400: '-Regular',
    500: '-Medium',
    600: '-SemiBold',
    700: '-Bold',
    800: '-ExtraBold',
    900: '-Black',
    normal: '-Regular',
    'semi-bold': '-SemiBold',
    bold: '-Bold',
  },
  fontItalic: {
    100: '-ThinItalic',
    200: '-ExtraLightItalic',
    300: '-LightItalic',
    400: '-Italic',
    500: '-MediumItalic',
    600: '-SemiBoldItalic',
    700: '-BoldItalic',
    800: '-ExtraBoldItalic',
    900: '-BlackItalic',
    normal: '-Italic',
    'semi-bold': '-SemiBoldItalic',
    bold: '-BlackItalic',
  },
};

const getFontFamily = (fontStyle, fontWeight) => {
  return `${fontLanguage?.name}${
    fontWeight
      ? fontStyle === 'italic' && fontLanguage?.fontItalic
        ? fontLanguage?.fontItalic[fontWeight]
        : fontLanguage?.fontWeight[fontWeight]
      : '-Regular'
  }`;
};

const Text = ({
  fontSize,
  fontWeight,
  fontStyle,
  lineHeight,
  letterSpacing,
  textAlign,
  color,
  backgroundColor,
  children,
  text,
  style,
  onPressText,
  numberOfLines,
  selectable,
  defaultFontFamily,
  doubleLineHeight,
  data = {},
  customFontFamily,
  ...props
}) => {
  function getText(text, data = {}) {
    const tempText = text?.toString().replace(/\\n/g, '\n');

    return tempText;
  }

  return (
    <NativeText
      style={[
        {
          fontSize,
          letterSpacing,
          textAlign,
          color,
          backgroundColor,
        },
        style,
        {
          fontFamily: getFontFamily(
            customFontFamily,
            style?.fontStyle || fontStyle,
            style?.fontWeight || fontWeight,
            defaultFontFamily,
          ),
          lineHeight: style?.lineHeight || lineHeight,
        },
      ]}
      {...props}>
      {children || getText(text, data)}
    </NativeText>
  );
};

Text.propTypes = {
  fontSize: Proptypes.number,
  fontWeight: Proptypes.string,
  fontStyle: Proptypes.string,
  lineHeight: Proptypes.number,
  letterSpacing: Proptypes.number,
  textAlign: Proptypes.string,
  color: Proptypes.string,
  backgroundColor: Proptypes.string,
  children: Proptypes.any,
  text: Proptypes.string,
  onPressText: Proptypes.func,
  numberOfLines: Proptypes.number,
  defaultFontFamily: Proptypes.bool,
  doubleLineHeight: Proptypes.bool,
};

Text.defaultProps = {
  fontSize: 14,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 14,
  letterSpacing: 0,
  textAlign: 'center',
  color: BLACK,
  defaultFontFamily: false,
  doubleLineHeight: false,
};

// nothing to memo, each prop changed will require update anyway
export default React.memo(Text);
