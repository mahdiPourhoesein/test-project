import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/css/variables.css';
import RouteComponent from './routes/route';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <RouteComponent />
        </BrowserRouter>
    </div>
  );
}

export default App;
