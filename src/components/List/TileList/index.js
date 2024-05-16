import _ from 'lodash';
import {groupBy} from 'lodash';
import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';

import styles from './styles';
import assets from '@assets';

import Text from '@components/Text';

const TileList = ({data}) => {
  const currentDate = new Date();

  // Filter valid and expired items
  const valid = data?.itemList.filter(
    item => new Date(item.expiry_date) >= currentDate,
  );
  const expired = data?.itemList.filter(
    item => new Date(item.expiry_date) < currentDate,
  );

  // Add isExpired parameter to each item
  valid.forEach(item => (item.isExpired = false));
  expired.forEach(item => (item.isExpired = true));

  const numOfCol = 2;

  const renderTileContent = ({item}) => {
    let imageHeader;

    switch (item.item_cat) {
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
      <View>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View
              style={[styles.imageContainer, item.isExpired && {opacity: 0.5}]}>
              <Image source={imageHeader} style={styles.image} />
            </View>
            <View style={styles.detailContainer}>
              <Text
                //   fontFamily: 'Montserrat',
                style={{fontWeight: '500'}}
                fontSize={16}
                lineHeight={18}>
                {item.item_name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <View style={{paddingBottom: 24}}>
          <Text
            style={{fontWeight: '700'}}
            fontSize={20}
            lineHeight={24}
            textAlign={'left'}>
            Items
          </Text>
          <FlatList
            data={valid}
            renderItem={renderTileContent}
            scrollEnabled={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            ListFooterComponentStyle={{paddingVertical: 24}}
          />
        </View>
        <View style={{paddingBottom: 24}}>
          <Text
            style={{fontWeight: '700'}}
            fontSize={20}
            lineHeight={24}
            textAlign={'left'}>
            Expired
          </Text>
          <FlatList
            data={expired}
            renderItem={renderTileContent}
            scrollEnabled={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            ListFooterComponentStyle={{paddingVertical: 24}}
          />
        </View>
      </View>

      <View style={{marginVertical: 24}}></View>
    </ScrollView>
  );
};

export default TileList;
