var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': '3eae7afbe9msh11a507efddc1f18p119dc6jsn23c809dbe6fb'
//   }
// };

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const fetchAPI = axios.get(url)
                  .then(res => {
  const dataObj = res.data;
	console.log(dataObj);
  return dataObj;
}).catch(function (error) {
	console.error(error);
});

export default fetchAPI;