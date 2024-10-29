import axios from 'axios';

const API_HOST = 'https://tripadvisor16.p.rapidapi.com';
const API_KEY = 'b620cc50c4mshac4951ad58ff34ep1ba4f6jsn84c48e6f7b60';

export const searchAirports = async (query) => {
  const response = await axios.get(`${API_HOST}/api/v1/flights/searchAirport`, {
    params: { query },
    headers: {
      'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
      'x-rapidapi-key': API_KEY,
    },
  });  
  return response;
};

export const searchFlights = async (sourceAirportCode, destinationAirportCode, travelDate, numAdults, numSeniors, classOfService) => {
  try {
      const response = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${sourceAirportCode}&destinationAirportCode=${destinationAirportCode}&date=${travelDate}&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=${numAdults}&numSeniors=${numSeniors}&classOfService=${classOfService}&pageNumber=1&nonstop=yes&currencyCode=USD`, {
          headers: {
              'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
              'x-rapidapi-key': API_KEY,
          },
      });
      console.log("Inside the FlightAPI := ",response.data);
      return response.data; // Make sure to return response.data here
  } catch (error) {
      console.error("Error in searchFlights:", error);
      throw error; // Rethrow the error for handling in the calling function
  }
};