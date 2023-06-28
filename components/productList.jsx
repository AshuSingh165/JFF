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
  Image,
  TouchableOpacity,
} from 'react-native';
export default ProductList = props => {
  const [data, setGetData] = useState([]);
  const getData = async () => {
    const url = 'https://dummyjson.com/products';
    const result = await axios.get(url);
    setGetData(result.data.products);
  };
  // const handleToch=()=>{

  // }
  const bar = (data,id) => {
    console.log(data, 'hellooooo');
    props.navigation.navigate('ProductDetails', {
      data:data,
      userid:id
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        // keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => bar(item,item.id)}>
            <View style={styles.container}>
              <Image
                source={{
                  uri: item.thumbnail,
                }}
                style={{width: 100, height: 109}}></Image>

              <View style={{flexShrink: 1}}>
                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.price}> ${item.price}</Text>
                <Text style={styles.rating}> ⭐{item.rating}/5</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation:40,
    shadowColor: '#52006A',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    color: 'white',
    padding: 20,
    margin: 12,
    borderRadius: 18,
    shadowColor:"#010000"

  },

  title: {
    flexShrink: 1,
    fontSize: 18,
    marginBottom: 5,
    marginHorizontal: 15,
    margin: 10,
    paddingRight: 5,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 18,
    marginHorizontal: 10,
    paddingRight: 5,
  },
  rating: {
    fontSize: 18,
    margin: 10,
    paddingRight: 5,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
