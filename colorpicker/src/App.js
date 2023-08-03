import './App.css';
import Colorpicker from './components/Colorrender';

function App() {
  const colors=[
    { hex: "#FF0000", name: "Red" },
    { hex: "#00FF00", name: "Green" },
    { hex: "#0000FF", name: "Blue" },
  ]
  return (
    <div className="App">
      <Colorpicker colors={colors} />
    </div>
  );
}

export default App;
