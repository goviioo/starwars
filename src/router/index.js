// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../container/home';
import CharacterDetails from '../container/details'
import { colors } from '../res/style/colors';

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={headerOptions} name="Home" component={HomeScreen} />
        <Stack.Screen options={headerOptions} name="Details" component={CharacterDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;