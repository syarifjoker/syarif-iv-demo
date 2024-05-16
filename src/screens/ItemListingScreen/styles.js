import {BACKGROUND_GREY, MAIN_BLUE} from '@constants/Color';
import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: MAIN_BLUE,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#2478b7',
    paddingHorizontal: 24,
  },
  headerDiv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerScreen: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 72 : 24,
    marginVertical: 8,
    flex: 1,
  },
  container: {
    paddingBottom: Platform.OS === 'android' ? 125 : 72,
    flex: 0,
    backgroundColor: BACKGROUND_GREY,
  },
});

export default styles;
