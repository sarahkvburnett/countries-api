import React from 'react';
import { CountriesProvider } from './CountriesContext'
import { Countries } from './components/Countries'

function App() {
  return (
    <CountriesProvider>
          <Countries/>
    </CountriesProvider>
  );
}

export default App;
