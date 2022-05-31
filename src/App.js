import './App.css';
import useFetch from './hooks/custom/useFetch';
import ComponentUsingUseSyncExtenalStore from './hooks/in-built/useSyncExternalStore';

function App() {
  const { loading, data, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Some error occured</div>
  }
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      <div style={{marginTop: 20}}>
        <ComponentUsingUseSyncExtenalStore />
      </div>
    </div>
  );
}

export default App;
