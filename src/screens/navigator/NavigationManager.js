import React, {useCallback, useEffect, useMemo, useState} from 'react';

import SplashScreen from '@screens/SplashScreen';
import ItemListingScreen from '@screens/ItemListingScreen';

import itemList from '@mockData/ItemList.json';

const NavigatorManager = data => {
  const [isLoading, setIsLoading] = useState(true);
  const initApp = async () => {
    try {
      setTimeout(() => setIsLoading(false), 1000);
    } catch (ex) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initApp();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  } else {
    return <ItemListingScreen productList={itemList} />;
  }
};

export default NavigatorManager;
