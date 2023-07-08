import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({title, items, navigation}) => {

  if (!items.length) return;

  return (
    <View style={ {marginBottom: 15} }>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                <ResultDetail result={item} />
              </TouchableOpacity>
            )
        }}
     />
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList)