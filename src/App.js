import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const {loading, data, error} = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Some error occured</div>
  }
  console.log(data);
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}

export default App;
