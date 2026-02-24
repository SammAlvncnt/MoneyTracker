import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TransactionProvider } from './src/context/TransactionContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TransactionProvider>
  );
};

export default App;