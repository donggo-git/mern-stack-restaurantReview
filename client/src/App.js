import './App.css';
import { useEffect } from 'react'
import HomePage from './components/HomePage';

function App() {

  /*useEffect(() => {
    const testFetch = async () => {
      const rawData = await fetch('http://localhost:5000/api/v1/restaurants', {
        method: "GET"
      })
      const data = await rawData.json();
      console.log(data)
    }

    testFetch()
  }, [])*/

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
