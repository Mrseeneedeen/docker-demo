import "./App.css";
import useSWR from "swr";

function App() {
  const fetcher = (url) => fetch(url).then((res) => res.text());
  const { data, error, isLoading } = useSWR("http://localhost:3000", fetcher);

  return (
    <div className="App">
      {isLoading && <div>🐋Loading...</div>}
      {error && <div>🐋 Error: {error.message}</div>}
      {!isLoading && !error && (
        <div className="App-card">
          <h1>Main Page</h1>
          <p>🐋 Now you can see the data from the server: {data} 🐋</p>
        </div>
      )}
    </div>
  );
}

export default App;
