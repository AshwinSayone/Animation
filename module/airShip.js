import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Easing,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class index extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Animatable.View
            style={styles.card}
            animation="slideInDown"
            iterationCount={5}
            direction="alternate">
            <Text style={styles.whiteText}>slideInDown Animation</Text>
          </Animatable.View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#61dafb',
    width: 200,
    height: 200,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    fontSize: 10,
  },
});
