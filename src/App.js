import Cards from "./coding_cards/Cards.js"

function App() {
  return (
    <div className="App backdrop">
        <Cards />
        <div>
          <button>Draw</button>
          <button>Flip</button>
        </div>
    </div>
  );
}

export default App;
