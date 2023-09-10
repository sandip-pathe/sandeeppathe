import List from "./components/List.js";


function App() {
  let items = ["London", "Mumbai", "Japan", "Budapest", "New York"];
  return (
    <div>
      <List items={items} heading="Cities"/>
    </div>
  );
}

export default App;
