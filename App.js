// App.js

import React from 'react'
import Navigation from './navigations/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {Store, Persistor} from './Store/configureStore';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={Persistor}>
                <Navigation />
            </PersistGate>
        </Provider>
    )
  }
}