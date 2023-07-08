import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ResultDetail = ({result}) => {




  return (
    <View style={styles.container}>
      <Image source={{uri: result.image_url}} style={styles.image} />
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.pStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 5
  },
  image: {
    width: 250,
    borderRadius: 4,
    height: 150,
    marginBottom: 5
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  pStyle: {
    fontWeight: 'normal',
    fontSize: 12,
    fontStyle: 'italic'
  }
});

export default ResultDetail