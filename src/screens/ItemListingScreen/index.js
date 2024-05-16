import React, {useRef} from 'react';
import {Animated, Image, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import TileList from '../../components/List/TileList';
import {WHITE} from 'src/constants/Color';

import Text from '@components/Text';

export default function ItemListingScreen({productList}) {
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <View style={styles.headerScreen}>
            <View style={styles.headerDiv}>
              <Text
                color={WHITE}
                fontFamily={'Montserrat'}
                style={{fontWeight: '700'}}
                fontSize={20}
                lineHeight={24}
                textAlign={'left'}>
                Grocerieeez
              </Text>
            </View>
            <View style={styles.headerDiv}>
              <Text
                color={WHITE}
                style={{fontWeight: '700'}}
                fontSize={14}
                lineHeight={20}
                textAlign={'left'}>
                Login
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <TileList data={productList} />
        </View>
      </SafeAreaView>
    </View>
  );
}
