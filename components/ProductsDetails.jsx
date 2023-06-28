import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ProductsDetails = ({route}) => {
  const data = route.params.data;
  const id = route.params.userid;
  console.log(data.title, 'mil gya be ...........', id);

  const [data1, setGetData1] = useState([]);
  const getData = async () => {
    const url = `https://dummyjson.com/products/${id}`;
    const result = await axios.get(url);
    setGetData1(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data1, 'DATA1');
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexShrink: 1}}>
            <Text style={styles.title}>{data1.title}</Text>
            <Text style={styles.rating}> ⭐{data1.rating}</Text>
            <Image
              source={{
                uri: data.thumbnail,
              }}
              style={{
                width: 'auto',
                height: 409,
                borderWidth: 1,

                justifyContent: 'center',
              }}></Image>

            <Text style={styles.price}> ${data1.price}</Text>
            <Text style={styles.dp}> -{data1.discountPercentage}%</Text>
            <Text style={{backgroundColor:"red",color:"white",width:"40%",margin:12,fontSize:18,paddingLeft:11}}> Deal of the Day</Text>
            <Text
              style={{
                marginBottom: 22,
                fontSize: 18,
                marginHorizontal: 10,
                marginTop: 10,
                paddingRight: 5,
              }}>
              {data1.description}
            </Text>
              <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly",marginBottom:32}}>

            <Button color="#f78002"  title="Buy Now"></Button>
            <Button color="#f78002" title="Add to Cart"></Button>
              </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 18,
  },
  shadow: {
    shadowColor:'#000',
    shadowOffset:{width:0,height:20},
    shadowOpacity:0.5,
    shadowRadius:5,
  },

  title: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 20,
    paddingRight: 5,
    height:55,
    width:"75%",
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10,
    paddingRight: 5,
  },

  dp: {
    fontSize: 18,
    marginHorizontal: 10,
    paddingRight: 5,
    color: 'red',
  },
  rating: {
    fontSize: 18,
    marginTop: 20,
    paddingRight: 5,
    position: 'absolute',
    right: 0,
  },
});

export default ProductsDetails;
