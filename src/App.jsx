import Button from "@material-ui/core/Button"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Button 
        size="large"
        onClick={()=>alert("Hello!")} 
        variant="contained" 
        color="primary">
          Hello world
        </Button>
      </header>
    </div>
  );
}

export default App;
