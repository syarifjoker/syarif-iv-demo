import {SHADOW_OVERLAY, WHITE} from '@constants/Color';
import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    width: width / 2.5,
    borderRadius: 8,
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: Platform.OS === 'android' ? 'rgba(0,0,0,0.015)' : '',
    marginVertical: 12,
    elevation: 8,
    shadowColor: SHADOW_OVERLAY,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginEnd: 24,
    flex: 1,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  detailContainer: {
    marginVertical: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    marginBottom: 10,
    aspectRatio: 1.75,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  screenContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});

export default styles;
