import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onSearchSubmit}) => {

  const onPressHandler = () => {
    textInput.f
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={28} style={styles.icon} />
      </TouchableOpacity>
      <TextInput 
        placeholder="Search..." 
        value={term} 
        id="search" 
        style={styles.textInput} 
        onChangeText={newTerm => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSearchSubmit}
     />
    </View>
  )
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9', 
        height: 45,
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 5,
        flexDirection: 'row',
    },
    icon: {
        paddingTop: 8,
        paddingLeft: 8
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 10
    }
});

export default SearchBar