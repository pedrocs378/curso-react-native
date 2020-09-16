import React from 'react'
import {AppRegistry} from 'react-native';

import { Provider } from 'react-redux'
import axios from 'axios'

import Navigator from './src/routes/Navigator'
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig'

axios.defaults.baseURL = 'https://clone-instagram-ca684.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
