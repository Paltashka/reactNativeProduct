import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Providers from './src/components/providers';

AppRegistry.registerComponent(appName, () => App);
const Layout = () => (
  <Providers>
    <App />
  </Providers>
);

AppRegistry.registerComponent(appName, () => Layout);
