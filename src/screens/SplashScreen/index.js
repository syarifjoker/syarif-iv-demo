import React, {useEffect, useState} from 'react';
import {ImageBackground, View, useColorScheme} from 'react-native';

import assets from '@assets';

import {dark, lighter} from '@constants/Color';

import styles from './styles';

export default function SplashScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? dark : lighter,
  };

  useEffect(() => {
    // setTimeout(() => {
    //     setShowLoader(true);
    // }, 2000);
  });

  return (
    <ImageBackground
      style={[backgroundStyle, styles.screen]}
      resizeMode="cover"
      source={assets.splash}
    />
  );
}
