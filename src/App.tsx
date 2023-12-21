import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';
import { NativeBaseProvider, Text, Box } from "native-base";
import 'react-native-reanimated'
import { initialConfig } from './services/config/config';

const App = () => {
  useEffect(() => {
    initialConfig();
  }, [])

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  )
};

export default App;
