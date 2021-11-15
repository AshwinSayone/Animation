import React, {useRef} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Select = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text>Animations</Text>
      </View>
      <View style={styles.card}>
        <Text>Center Dot animation</Text>
        <Button
          title="Animate1"
          onPress={() => navigation.navigate('Animat1')}
        />
      </View>
      <View style={styles.card}>
        <Text>slideInDown Animation</Text>
        <Button
          title="Animate2"
          onPress={() => navigation.navigate('Airship')}
        />
      </View>
      <View style={styles.card}>
        <Text>Box speed</Text>
        <Button
          title="Animate3"
          onPress={() => navigation.navigate('Animate2')}
        />
      </View>
      <View style={styles.card}>
        <Text>ball bounce</Text>
        <Button
          title="Animate4"
          onPress={() => navigation.navigate('Animate3')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 100,
  },
  bottomContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 100,
  },
  card: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginBottom: 40,
    padding: 20,
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});

export default Select;
