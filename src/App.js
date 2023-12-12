import './App.css';
import Auto from './Auta.js';
import auta from './cars.json'


function App() {
  return (
    <>
      {
        auta.map((auto, index) =>
          <Auto key={index}
            id={index}
            title={auto.title}
            image={auto.image}
            start_production={1980}
            class={auto.class} />
        )
      }
    </>
  );
}

export default App;
