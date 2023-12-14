import React from 'react';
import Dashboard from './Dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HostScreen from './HostScreen';
import AudienceScreen from './AudienceScreen';

const stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Dashboard} />
      <stack.Screen name="HostPage" component={HostScreen} />
      <stack.Screen name="AudiencePage" component={AudienceScreen} />
    </stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
