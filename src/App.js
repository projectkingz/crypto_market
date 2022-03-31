import React, { useState, useEffect } from 'react';
import Coin from './Components/Coins'
import Loading from './Components/Loading'
import './App.css';
//import './Coin.css';
var axios = require("axios").default;


function App() {

  const [loading, setLoading] = useState(false)
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  

  useEffect(() => {
    
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setLoading(true);
        setTimeout(() => {
          setCoins(res.data);
          console.log(res.data);
          setLoading(false);
        },2000);        
        
      })
      .catch(error => console.log(error));
  },[]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {loading ? 'We are loading crypto prices ....' :       
          
           filteredCoins.map(coin => {
            return (          
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            
            );
          })
         
      
      }


    </div>
  );
}

export default App;

