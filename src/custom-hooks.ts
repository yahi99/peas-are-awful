import {useEffect, useState} from 'react';
import {Animated} from 'react-native';

export const useSlideUpAnimation = (
  panelOpen: boolean,
  duration: number,
  outputRange: [number, number],
) => {
  const [animation] = useState(new Animated.Value(0));
  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: outputRange,
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  useEffect(() => {
    Animated.timing(animation, {
      toValue: panelOpen ? 1 : 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [animation, duration, panelOpen]); // This effect will only trigger if animation, duration, panelOpen changes

  return slideUp;
};