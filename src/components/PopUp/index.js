import _ from 'lodash';
import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modalbox';

import assets from '@assets';

import Text from '@components/Text';
import styles from './style';

const PopUp = ({popUpState, onClose, description}) => {
  console.info('data bodoh :: ', description, popUpState);
  let imageHeader;

  switch (description?.item_cat) {
    case 'Vegetable':
      imageHeader = assets.wrapImage.vege;
      break;
    case 'Fruit':
      imageHeader = assets.wrapImage.fruit;
      break;
    case 'Seafood':
      imageHeader = assets.wrapImage.seafood;
      break;
    case 'Meat':
      imageHeader = assets.wrapImage.meat;
      break;
  }
  return (
    <Modal
      animationIn="fadeOut"
      animationOut="fadeOut"
      animationDuration={900}
      isOpen={popUpState}
      onClosed={onClose}
      useNativeDriver
      entry="bottom"
      position="center"
      swipeArea={500}
      swipeThreshold={10}
      swipeToClose={false}
      transparent
      backdropPressToClose={true}
      coverScreen={true}
      backdropOpacity={0.7}
      style={styles.topMenu}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.button}>
          <Image style={styles.closeImage} source={assets.icCloseBlack} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageModalHeader}>
        <Image source={imageHeader} style={styles.image} />
      </View>
      <View style={styles.body}>
        <View style={styles.descContainer}>
          <View>
            <Text
              style={{fontWeight: 'bold', paddingHorizontal: 24}}
              fontSize={20}
              lineHeight={28}
              textAlign={'left'}>
              {description?.item_name}
            </Text>
          </View>
          <View style={{paddingTop: 12}}>
            <Text
              style={{fontWeight: 'normal', paddingHorizontal: 24}}
              fontSize={16}
              lineHeight={20}
              textAlign={'left'}>
              {`Category: ${description?.item_cat}`}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;
