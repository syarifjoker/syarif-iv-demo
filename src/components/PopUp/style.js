import {BLACK, WHITE} from '@constants/Color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    alignContent: 'flex-start',
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageModalHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    aspectRatio: 1.75,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: -1,
  },
  button: {
    alignItems: 'center',
    height: 20,
    justifyContent: 'center',
    width: 20,
    paddingVertical: 20,
    paddingRight: 26,
    position: 'absolute',
  },
  closeImage: {
    height: 20,
    width: 20,
  },
  body: {
    backgroundColor: WHITE,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingBottom: 40,
    width: '100%',
  },
  topMenu: {
    backgroundColor: BLACK,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: '80%',
  },
  descContainer: {
    paddingTop: 24,
  },
});

export default styles;
