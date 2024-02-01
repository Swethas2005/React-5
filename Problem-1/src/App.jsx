import { useState } from 'react';
import DataDisplay from './components/DataDisplay';
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30');
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError('An error occurred while fetching data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="container">
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <DataDisplay data={data} />
    </div>
  );
};

DataDisplay.propTypes = {
  data: PropTypes.array.isRequired,
};

export default App;



