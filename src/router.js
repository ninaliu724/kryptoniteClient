import { TabNavigator, StackNavigator } from "react-navigation";
import HomeSecond from "./components/HomeSecond";
import Messages from "./components/Messages";
import { Animated } from "react-native";
export const Router = StackNavigator(
  {
    Home: {
      screen: HomeSecond
    }
  },
  {
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,
      header: null
    }),
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing
      }
    })
  }
);
