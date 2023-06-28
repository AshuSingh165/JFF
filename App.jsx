// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import ProductList from './components/productList';
import ProductsDetails from './components/ProductsDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const NaviStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <NaviStack.Navigator>
        <NaviStack.Screen name="ProductList" component={ProductList} />
        <NaviStack.Screen name="ProductDetails" component={ProductsDetails} />
      </NaviStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
