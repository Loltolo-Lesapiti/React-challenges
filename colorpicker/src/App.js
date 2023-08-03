import './App.css';
import Colorpicker from './components/Colorrender';

function App() {
  const colors=[
    {
        "hex": "#FF0000",
        "name": "Red",
    },
    {
        "hex": "#00FF00",
        "name": "Green",
    },
    {
        "hex": "#0000FF",
        "name": "Blue",
    },
    {
        "hex": "#FFFF00",
        "name": "Yellow",
    },
    {
      "hex": "#FFFFFF",
      "name": "White",
   },
    {
        "hex": "#00FFFF",
        "name": "Cyan",
    },
    {
        "hex": "#FF00FF",
        "name": "Magenta",
    },
    {
        "hex": "#000000",
        "name": "Black",
    },
]
  return (
    <div className="mx-8 my-4">
      <Colorpicker colors={colors} />
    </div>
  );
}

export default App;
