import "./App.css";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import WeatherApp from "./WeatherApp";

function App() {
  const handleClick = () => {
    console.log("button was clicked");
  };
  return (
    <>
      {/* <SearchBox /> */}
      <WeatherApp/>
      {/* <InfoBox /> */}
      {/* <h3>Material UI</h3>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button variant="contained" color="error" size="small">
        Click Me2!
      </Button> */}
    </>
  );
}

export default App;
