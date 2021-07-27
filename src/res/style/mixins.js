import memoize from "lodash.memoize";
import { Dimensions } from "react-native";

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');
export const wp = memoize((percent) => (WINDOW_WIDTH / 100) * percent);
export const hp = memoize((percent) => (WINDOW_HEIGHT / 100) * percent);
