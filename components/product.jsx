import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';


import {ProductsDetails} from './ProductsDetails'
import {ProductsList} from './productList'

const NaviStack = createNativeStackNavigator();
import {
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

const ProductList = () => {
 
  return (
      <>
    <NavigationContainer>


        </NavigationContainer>
        </>
  );
};


export default ProductList;

import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image
} from 'react-native';

const ProductList = () => {
  const [data, setGetData] = useState([]);
  const getData = async () => {
    const url = 'https://dummyjson.com/products';
    const result = await axios.get(url);
    setGetData(result.data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView >
    

      <FlatList
        data={data}
        // keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            <View style={styles.container}>
              
              <Image source={{
                          uri: item.thumbnail,
                        }} style={{width:100,height:109}}></Image>
              <Text style={styles.title}>{item.title}</Text>
              <Text>${item.price}</Text>
         
            </View>
          </>
        )}
        />
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e7e7',
    padding: 20,
    margin:12,
    borderRadius:18,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 12 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    
  },
  title: {
    fontSize: 22,
    marginBottom:5
  },
});


export default ProductList;
