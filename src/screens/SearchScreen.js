import { Alert, View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Yelp from '../api/Yelp'
import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  
  const [term, setTerm] = React.useState('');
  const [searchApi, businesses, errorMessage] = useResults();

  const CostEffective = businesses.filter(business => business.price === '$');

  const filterResultsByPrice = (price) => {
    return businesses.filter(business => business.price === price);
  };


  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onSearchSubmit={() => searchApi(term)}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList title="Cost Effective" items={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" items={filterResultsByPrice('$$')} />
        <ResultsList title="Big Spender!" items={filterResultsByPrice('$$$')} />
      </ScrollView>
      <StatusBar  style="auto" />
    </>
  )
}

export default SearchScreen;