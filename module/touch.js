import React, {useRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function loader() {
  const windowWidth = Dimensions.get('window').width;
  const initPosition = {
    x: parseInt(windowWidth / 2) - 50,
    y: 0,
  };

  const position = useRef(new Animated.ValueXY(initPosition)).current;

  const animate = () => {
    Animated.spring(position, {
      toValue: {x: initPosition.x, y: 350},
      speed: 4,
      useNativeDriver: false,
    }).start(() => {
      position.setValue(initPosition);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={animate}>
        <Animated.View style={[position.getLayout(), styles.ball]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
});
