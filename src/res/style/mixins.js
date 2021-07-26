import memoize from "lodash.memoize";
import { Dimensions } from "react-native";

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');
export const wp = memoize((percent) => (WINDOW_WIDTH / 100) * percent);
export const hp = memoize((percent) => (WINDOW_HEIGHT / 100) * percent);

export function boxShadow(
    color,
    offset = {height: 2, width: 2},
    radius = 8,
    opacity = 0.2,
  ) {
    return {
      shadowColor: color,
      shadowOffset: offset,
      shadowOpacity: opacity,
      shadowRadius: radius,
      elevation: radius,
    };
  }