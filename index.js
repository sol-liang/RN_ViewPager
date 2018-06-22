import {AppRegistry, YellowBox} from 'react-native';
import App from './App';

AppRegistry.registerComponent('Practice_Demo', () => App);
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');
