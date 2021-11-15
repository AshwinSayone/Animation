import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Select from '../module/selectScreen';
import Animat from '../module/animatescreen';
import Airship from '../module/airShip';
import Animate2 from '../module/animateprob';
import Animate3 from '../module/touch';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Animat1" component={Animat} />
        <Stack.Screen name="Airship" component={Airship} />
        <Stack.Screen name="Animate2" component={Animate2} />
        <Stack.Screen name="Animate3" component={Animate3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
