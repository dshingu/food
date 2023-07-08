import React from 'react';
import Yelp from '../api/Yelp';

export default () => {

  const [businesses, setBusinesses] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState([]);

  const searchApi = async (searchTerm) => {
    
    try {
        const response = await Yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setBusinesses(response.data.businesses);
    } catch (e) {
        setErrorMessage(e.message);
    }
    
  };

  React.useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, businesses, errorMessage];

};