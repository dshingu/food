import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// import screens
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';



const navigator = createStackNavigator({
  Search: SearchScreen, 
  Detail: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search',
    options: {
      headerShown: false
    }
  }
});


export default createAppContainer(navigator);