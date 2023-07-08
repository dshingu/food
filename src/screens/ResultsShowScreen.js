import { FlatList, Image, View, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import Yelp from '../api/Yelp';
import { Alert } from 'react-native';

const ResultsShowScreen = ({navigation}) => {

  const id = navigation.getParam('id');
  const [business, setBusiness] = React.useState({});

  const getBusiness = async (id) => {
    try {
        const response =  await Yelp.get(`/${id}`);
        setBusiness(response.data);
    } catch (e) {
        Alert.alert('Error', e.message);
    }
  }


  React.useEffect(() => {
    getBusiness(id);
  }, []);

  if (!business) return;

  return (
    <>
        <ScrollView>
            <FlatList 
                data={business.photos}
                horizontal
                keyExtractor={(photo) => photo}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return <Image source={{uri: item}} style={{width:400, height: 240}} />
                }}
            />
        </ScrollView>
      <Text>{business.name} {id} </Text>
    </>
  )
}

export default ResultsShowScreen