import App from './App';
import Home from './Home';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Login: App,
    Home: Home,
  })
);

export default Routes;