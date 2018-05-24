import { TabNavigator, StackNavigator } from 'react-navigation';
import Feed from '../Components/Feed';
import Me from '../Components/Me';

export const Tabs = TabNavigator({
  Feed: {
    screen:Feed,
  },
  Me: {
    screen: Me,
  }
})
