import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PortfolioScreen from './component/PortfolioScreen';
import ProjectDetailScreen from './component/ProjectDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
